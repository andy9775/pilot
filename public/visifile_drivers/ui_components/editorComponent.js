function component( args ) {
/*
base_component_id("editor_component")
control_type("SYSTEM")
load_once_from_file(true)
*/

    var editorDomId     = uuidv4()
    var editor          = null


    Vue.component("editor_component", {
      data: function () {
        return {
            text:           args.text,
            read_only:      false,
            editorDomId:    editorDomId,
            errors:         null
        }
      },
      template: `<div style='background-color:white; ' >
                      <div style='box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);background-color: lightgray; padding: 5px;padding-left: 15px;border: 4px solid lightgray;' >
                          <slot style='box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);display: inline-block;' v-if='text' :text2="text">
                          </slot>
                      </div>

                      <div style='border-radius: 5px;margin-left:15px;margin-top:15px;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);border: 4px solid lightgray; '>
                          <div    style='font-size:14px;font-weight:bold;border-radius: 0px;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);background-image: linear-gradient(to right,  #000099, lightblue); color: white; border: 0px solid lightgray; padding:4px; margin:0;padding-left:14px;'>

                               Editor
                          </div>

                        <div    v-bind:id='editorDomId' >
                        </div>

                        <pre    v-on:click="gotoLine(errors.lineNumber)"
                                style="background:pink;color:blue;"
                                v-if="errors != null">Line {{errors.lineNumber}}: {{errors.description}}</pre>

                    </div>
                    <hr></hr>
                 </div>`
     ,

     mounted: function() {
         var thisVueInstance = this
         args.text = null
         ace.config.set('basePath', '/');
         editor = ace.edit(           editorDomId, {
                                                 selectionStyle: "text",
                                                 mode:           "ace/mode/javascript"
                                             })

         //Bug fix: Need a delay when setting theme or view is corrupted
         setTimeout(function(){
            editor.setTheme("ace/theme/sqlserver");

            var langTools = ace.require("ace/ext/language_tools");
            editor.setOptions({
               enableBasicAutocompletion: true,
               enableSnippets: true,
               enableLiveAutocompletion: false
            });

         },100)



         document.getElementById(editorDomId).style["font-size"] = "16px"
         document.getElementById(editorDomId).style.width="100%"
         document.getElementById(editorDomId).style["border"] = "0px"

         document.getElementById(editorDomId).style.height="65vh"
         if (thisVueInstance.text) {
             editor.getSession().setValue(thisVueInstance.text);
             this.read_only = saveHelper.getValueOfCodeString(thisVueInstance.text, "read_only")
         }

         editor.getSession().setUseWorker(false);
         if (this.read_only) {
            editor.setReadOnly(true)
         }


         editor.getSession().on('change', function() {
            thisVueInstance.text = editor.getSession().getValue();
            thisVueInstance.errors = null
            if (!isValidObject(thisVueInstance.text)) {
                return
            }
            if (thisVueInstance.text.length == 0) {
                return
            }
            try {
               var newNode = esprima.parse("(" + thisVueInstance.text + ")", { tolerant: true })
               //alert(JSON.stringify(newNode.errors, null, 2))
               thisVueInstance.errors = newNode.errors
               if (thisVueInstance.errors) {
                    if (thisVueInstance.errors.length == 0) {
                        thisVueInstance.errors = null
                    } else {
                        thisVueInstance.errors = thisVueInstance.errors[0]
                    }
               }

            } catch(e) {
               //alert(JSON.stringify(e, null, 2))
               thisVueInstance.errors = e
            }
         });

        editor.resize(true);
        editor.focus();
     },
     methods: {
        gotoLine: function(line) {
            editor.gotoLine(line , 10, true);
        }
        ,
        getText: async function() {
            return this.text
        },
        setText: function(textValue) {
            var thisVueInstance = this
            this.text =  textValue
            this.read_only = saveHelper.getValueOfCodeString(thisVueInstance.text, "read_only")
            if (this.read_only) {
               editor.setReadOnly(true)
            }
            editor.getSession().setValue(textValue);
        }

     }


    })

}
