async function(args) {
/*
created_timestamp(1551965300424)
base_component_id("vb_blank")
editors([
  "vb_editor_component"
])
properties([
  {
    "id": "test",
    "name": "test",
    "type": "String"
  }
])//properties
formEditor({
  "next_id": 7,
  "max_form": 5,
  "active_form": "Form_1",
  "default_form": "Form_1",
  "app_selected": false,
  "id": "vb_blank",
  "next_component_id": 112,
  "app_properties": [
    {
      "id": "test",
      "name": "test",
      "type": "String"
    }
  ],
  "forms": {
    "Form_1": {
      "name": "Form_1",
      "width": 372,
      "height": 355,
      "add_block": "alert('Add block called')",
      "components": [
        {
          "leftX": 24,
          "topY": 25,
          "name": "aaa",
          "base_component_id": "label_control",
          "width": 320,
          "height": 156,
          "text": "Drag controls from the left onto this grid and then press the 'Save changes' button above",
          "background_color": "",
          "parent": null
        }
      ]
    },
    "Form_2": {
      "name": "Form_2",
      "components": [],
      "width": 300,
      "height": 300
    }
  },
  "active_component_index": null,
  "active_component_detail_name": null,
  "active_component_detail_index": null
})//formEditor
control_type("SYSTEM")
sub_components([
  "app_editor_3",
  "appEmbed",
  "vb_editor_component",
  "input_control",
  "button_control",
  "label_control",
  "table_control",
  "group_control"
])
visibility("PRIVATE")
display_name("GUI App")
uses_javascript_librararies(["advanced_bundle"])









is_app(true)
description('VB Blank App')
logo_url("/driver_icons/blocks.png")
*/

    //** gen_start **//
                var mm = null
                var texti = null
                var designMode = false
                var runtimeMode = true
                Vue.component('vb_blank', {
      props: [ "args"],
      template:
`<div   v-bind:id='uid2'
        v-if='uid2 != null'
        v-bind:style='"width: 100%; height: 100%; " + (design_mode?"background: white;":"")'>


    <div style='box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);background-color: lightgray; padding: 5px; padding-left: 15px;padding-bottom: 10px;' v-if='design_mode' >

        <slot style='display: inline-block;float: left;' v-if='text'>
        </slot>


     </div>


    <div    v-bind:id='vb_editor_element_id' v-if='vb_editor_element_id != null'
            style='position:relative;display: flex;'
            v-on:drop="$event.stopPropagation(); dropEditor($event)"
            v-on:ondragover="$event.stopPropagation();maintainCursor(); allowDropEditor($event)">






        <!--
                -----------------------------------------

                    The left section of the UI editor

                -----------------------------------------
        -->
        <div    v-if='design_mode'
            v-on:click='selected_pane = "blocks";'
            v-bind:style='(design_mode?"border: 4px solid lightgray;":"") + " max-width: " + leftHandWidth + "px;height: 75vmin; display: inline-block;overflow-x: hidden;overflow-y: hidden;vertical-align: top; background-color: lightgray;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);float:left;;flex-grow: 0;flex-shrink: 0;"'>

            <div    v-bind:style='"font-family:verdana,helvetica;font-size: 13px;border-radius: 3px;padding: 4px; margin-bottom: 10px;box-shadow: 2px 2px 10px lightgray;"'
                    v-bind:class='(selected_pane == "blocks"?"selected_pane_title":"unselected_pane_title") '>
                Blocks
            </div>

            <div class='' >
                <div class='' style='display:flex;overflow-y:scroll;flex-flow: row wrap;height:65vh;'>
                    <div    class='flex'
                            v-on:click='highlighted_control = null;'
                            v-bind:style='"display:flex;cursor: grab;border-radius: 3px;width:50px;height:50px; margin: 0px;border: 0px;padding:4px;overflow-x:hidden;overflow-y:hidden;background-color: " + ((!highlighted_control)?"#E8E8E8;border-left: 2px solid gray;border-top: 2px solid gray;":"lightgray;")'>
                        <img    src='/driver_icons/cursor.png'
                                style='width: 100%;'
                                class='img-fluid'>
                        </img>
                    </div>

                    <div    v-for='av in available_components'
                            draggable="true"
                            class=''
                            v-on:dragend='$event.stopPropagation();deleteCursor();'
                            v-on:dragstart='$event.stopPropagation();switchCursor($event,"grab","grabbing");highlighted_control = av.base_component_id;drag($event,{
                                                   type:   "add_component",
                                                   text:    av.base_component_id
                                                })'
                            v-on:click='highlighted_control = av.base_component_id;'
                            v-bind:style='"display:flex;cursor: grab;margin: 2px;border-radius: 3px;width:50px;;height: 50px; margin: 0px;border: 0px;padding:10px;overflow-x:auto;overflow-y:hidden;background-color: " + ((highlighted_control == av.base_component_id)?"#E8E8E8;border-left: 2px solid gray;border-top: 2px solid gray;":"lightgray;")'>

                        <img    v-if='isValidObject(av)'
                                v-bind:src='av.logo_url'
                                style='width: 100%;'
                                class='img-fluid'>
                        </img>


                    </div>
                </div>
            </div>
        </div>





        <!--

                The main center section of the UI editor

        -->
        <div v-bind:style='"display: flex;width:100%;" + (design_mode?"background-color: darkgray;":"background-color: white;")'>



            <!--

                    The code editor for events

            -->


            <div    v-if='(design_mode && (design_mode_pane.type=="event_editor"))'
                    v-bind:refresh='refresh'
                    v-bind:style='"margin: 2px; display: inline-block; vertical-align: top; width: 100%;height: 65vh ;" + (design_mode?"border: 0px solid lightgray; padding:0px;margin: 15px;":"margin: 0px;" ) '>

                <div    style='font-family:verdana,helvetica;font-size: 13px;font-weight:bold;border-radius: 0px;background-color:lightgray; color: white; border: 4px solid lightgray; padding:4px; margin:0;border-bottom: 0px;'>

                    <div    style='height: 50px;' >
                        <div id='select_code_object_parent' style='display: inline-block;margin: 5px;width: 200px;'></div>
                        <div id='select_code_action_parent' style='display: inline-block;margin: 5px;width: 200px;'></div>


                        <button  type=button class=' btn btn-danger btn-sm'
                                 style="float: right;box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 8px 0px, rgba(0, 0, 0, 0.19) 0px 6px 20px 0px;margin-bottom: 4px;"
                                 v-on:click='gotoDragDropEditor()' >x</button>
                    </div>

                    <div    id='ui_code_editor'>
                    </div>

                </div>
            </div>


            <div    v-if='(design_mode && (design_mode_pane.type=="help"))'
                    v-bind:refresh='refresh'
                    v-bind:style='"margin: 2px; display: inline-block; vertical-align: top; width: 100%;height: 65vh ;" + (design_mode?"border: 0px solid lightgray; padding:0px;margin: 15px;":"margin: 0px;" ) '>

                <div    style='font-family:verdana,helvetica;font-size: 13px;font-weight:bold;border-radius: 0px;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);background-image: linear-gradient(to right,  #000099, lightblue); color: white; border: 4px solid lightgray; padding:4px; margin:0;border-bottom: 0px;'>

                    <div    style='height: 30px;' >
                        Help
                        <button  type=button class=' btn btn-danger btn-sm'
                                 style="float: right;box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 8px 0px, rgba(0, 0, 0, 0.19) 0px 6px 20px 0px;margin-bottom: 4px;"
                                 v-on:click='gotoDragDropEditor()' >x</button>
                    </div>


                    <div    id='show_help' style="background-color:white;color:black;">
                        <div    style="font-weight:normal;"
                                v-html="design_mode_pane.help"></div>
                    </div>
                </div>
            </div>




            <!--

                    The control details editor

            -->


            <div    v-if='(design_mode && (design_mode_pane.type=="control_details_editor"))'
                    v-bind:style='"box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);margin: 2px; display: inline-block; vertical-align: top; width: 100%;height: 65vh ;" + (design_mode?"border: 0px solid lightgray; padding:0px;margin: 15px;":"margin: 0px;" ) '>

                <div    v-if='design_mode'
                        style='font-family:verdana,helvetica;font-size: 13px;font-weight:bold;border-radius: 0px;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);background-image: linear-gradient(to right,  #000099, lightblue); color: white; border: 4px solid lightgray; padding:4px; margin:0;border-bottom: 0px;'>

                    <div    style='height: 30px;' >
                        Control details
                        <button  type=button class=' btn btn-danger btn-sm'
                                 style="float: right;box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 8px 0px, rgba(0, 0, 0, 0.19) 0px 6px 20px 0px;margin-bottom: 4px;"
                                 v-on:click='gotoDragDropEditor()' >x</button>
                    </div>


                </div>

                <div  v-bind:style='"border: 5px solid lightgray;background: white;;overflow:none;height:100%; overflow: auto;"'>

                    <component  v-bind:id='model.active_form + "_" + model.forms[model.active_form].components[model.active_component_detail_index].name + (design_mode?"_design":"")'
                                v-bind:refresh='refresh'
                                design_mode='detail_editor'

                                v-bind:meta='{form: model.active_form,name: model.forms[model.active_form].components[model.active_component_detail_index].name + (design_mode?"_design":"")}'

                                v-bind:form="model.active_form"
                                v-bind:delete_design_time_component='childDeleteComponent'
                                v-bind:select_design_time_component='childSelectComponent'
                                v-bind:children='getChildren( model.forms[model.active_form].components[model.active_component_detail_index].name)'
                                v-on:send="processControlEvent"
                                v-bind:is='model.forms[model.active_form].components[model.active_component_detail_index].base_component_id'
                                v-bind:name='model.forms[model.active_form].components[model.active_component_detail_index].name + (design_mode?"_design":"")'
                                v-bind:args='model.forms[model.active_form].components[model.active_component_detail_index]'>

                                <template       slot-scope="child_components"
                                                v-bind:refresh='refresh'
                                                style='position:relative;'>

                                    <component  v-for='child_item  in  getChildren(model.forms[model.active_form].components[model.active_component_detail_index].name)'
                                                v-bind:design_mode='design_mode'
                                                v-bind:meta='{form: model.active_form,name: child_item.name + (design_mode?"_design":"")}'
                                                v-bind:form="model.active_form"
                                                v-bind:refresh='refresh'
                                                v-bind:style='"z-index:100000;position: absolute; top: " + child_item.topY + "px; left: " + child_item.leftX + "px;height:" + child_item.height + "px;width:" + child_item.width + "px;overflow:auto;"'
                                                v-bind:id='model.active_form + "_" + model.forms[model.active_form].components[child_item.index_in_parent_array].name + (design_mode?"_design":"")'
                                                v-on:send="processControlEvent"
                                                v-bind:is='child_item.base_component_id'
                                                v-bind:name='child_item.name + (design_mode?"_design":"")'
                                                v-bind:args='model.forms[model.active_form].components[child_item.index_in_parent_array]'>
                                    </component>

                                </template>
                     </component>
                 </div>
             </div>








            <!--

                    The drag drop UI editor.

                    but...

                    Also the main view of the App

            -->

            <div    v-if='(!design_mode) || (design_mode && (design_mode_pane.type=="drag_drop"))'
                    v-bind:style='(design_mode?"box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 8px 0px, rgba(0, 0, 0, 0.19) 0px 6px 20px 0px;":"") + "margin: 2px; display: inline-block; vertical-align: top;  width: 95%;height: 65vh ;" + (design_mode?"border: 0px solid lightgray; padding:0px;margin: 0px;margin-left:15px;margin-top:15px;":"margin: 0px;" ) '>

                <div    v-if='design_mode'
                        style='display:inline-block;font-family:verdana,helvetica;font-size: 13px;font-weight:bold;border-radius: 0px;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);background-image: linear-gradient(to right,  #000099, lightblue); color: white; border: 4px solid lightgray; padding:4px; margin:0;border-bottom: 0px;width:100%;'>

                    <img
                        src='/driver_icons/form.png'
                        style='width: 20px; margin-right: 10px;'
                        class='img-fluid'>
                     </img>
                     {{model.active_form}} (Form)
                </div>
                <div style=''></div>



                <div  id="grid_container"
                      drop-target=false
                      style='width:100%;background-color:white;height: 100%;position:relative;'>

                    <!-- INACTIVE FORM RESIZERS -->
                    <div    v-if='design_mode && (!isValidObject(model.active_component_index))'
                            v-bind:style='"display:inline-block;background-color: white; border: 3px solid gray; margin:0;width:12px;height:12px;position:absolute;left:2px;top:2px;"'>
                    </div>
                    <div    v-if='design_mode && (!isValidObject(model.active_component_index))'
                            v-bind:style='"display:inline-block;background-color: white; border: 3px solid gray; margin:0;width:12px;height:12px;position:absolute;left:" + (7 + (model.forms[model.active_form].width/2)) +  "px;top:2px;"'>
                    </div>
                    <div    v-if='design_mode && (!isValidObject(model.active_component_index))'
                            v-bind:style='"display:inline-block;background-color: white; border: 3px solid gray; margin:0;width:12px;height:12px;position:absolute;left:" + (15 +model.forms[model.active_form].width) +  "px;top:2px;"'>
                    </div>
                    <div    v-if='design_mode && (!isValidObject(model.active_component_index))'
                            v-bind:style='"display:inline-block;background-color: white; border: 3px solid gray; margin:0;width:12px;height:12px;position:absolute;left:2px;top:" + (7 + (model.forms[model.active_form].height/2)) +  "px;"'>
                    </div>
                    <div    v-if='design_mode && (!isValidObject(model.active_component_index))'
                            v-bind:style='"display:inline-block;background-color: white; border: 3px solid gray; margin:0;width:12px;height:12px;position:absolute;left:2px;top:" + (15 + model.forms[model.active_form].height) +  "px;"'>
                    </div>

                    <!-- ACTIVE FORM RESIZERS -->
                    <!-- bottom right -->
                    <div    v-if='design_mode && (!isValidObject(model.active_component_index))'
                            v-on:dragend='$event.stopPropagation();deleteCursor();'
                            v-bind:style='"cursor: nwse-resize;display:inline-block;background-color: gray; border: 3px solid gray; margin:0;width:12px;height:12px;position:absolute;left:" + (15 +model.forms[model.active_form].width) +  "px;top:" + (15 + (model.forms[model.active_form].height)) +  "px;"'
                            v-bind:draggable='true'
                            v-on:dragstart='$event.stopPropagation();switchCursor($event,"nwse-resize","crosshair");drag($event,{
                               type:        "resize_form_bottom_right",
                               form_name:    model.active_form
                            })'
                            >
                    </div>
                    <!-- right -->
                    <div    v-if='design_mode && (!isValidObject(model.active_component_index))'
                            v-bind:style='"cursor: ew-resize;display:inline-block;background-color: gray; border: 3px solid gray; margin:0;width:12px;height:12px;position:absolute;left:" + (15 +model.forms[model.active_form].width) +  "px;top:" + (7 + (model.forms[model.active_form].height/2)) +  "px;"'
                            v-bind:draggable='true'
                            v-on:dragend='$event.stopPropagation();deleteCursor();'
                            v-on:dragstart='$event.stopPropagation();switchCursor($event,"ew-resize","col-resize");drag($event,{
                               type:        "resize_form_right",
                               form_name:    model.active_form
                            })'
                            >
                    </div>
                    <!-- bottom -->
                    <div    v-if='design_mode && (!isValidObject(model.active_component_index))'
                            v-bind:style='"cursor: ns-resize;display:inline-block;background-color: gray; border: 3px solid gray; margin:0;width:12px;height:12px;position:absolute;left:" + (7 +model.forms[model.active_form].width/2) +  "px;top:" + (15 + (model.forms[model.active_form].height)) +  "px;"'
                            v-bind:draggable='true'
                            v-on:dragend='$event.stopPropagation();deleteCursor()'
                            v-on:dragstart='$event.stopPropagation();switchCursor($event,"ns-resize","row-resize");drag($event,{
                               type:        "resize_form_bottom",
                               form_name:    model.active_form
                            })'
                            >
                    </div>




                    <div            v-bind:id='vb_grid_element_id'  v-if='vb_grid_element_id != null'
                                    v-on:drop="drop($event)"
                                    v-bind:refresh='refresh'
                                    v-on:ondragover="$event.stopPropagation();maintainCursor();allowDrop($event)"
                                    v-bind:class='(design_mode?"dotted":"" )'
                                    v-on:click='clickOnMainGrid($event)'
                                    v-bind:style='"position:absolute;display: inline-block; vertical-align: top; width: " + model.forms[model.active_form].width +  ";height: " + model.forms[model.active_form].height +  " ;" + (design_mode?"left:15px;top:15px;border: 4px solid lightgray;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);":"border: 0px;" ) '>


                        <div    v-bind:refresh='refresh'
                                style='position:absolute;left:0px;top:0px;z-index:1000000;opacity:1;'>

                            <!-- ACTIVE CONTROL RESIZERS -->
                            <!-- top left -->
                            <div    v-if='design_mode && isValidObject(model.active_component_index) && isVisible(model.active_form,model.active_component_index)'
                                    v-bind:style='"cursor: nwse-resize;z-index:10000000;display:inline-block;background-color: gray; border: 3px solid gray; margin:0;width:12px;height:12px;position:absolute;left:" +
                                        (getLeft(model.active_form,model.active_component_index) - 15) +  "px;top:" +
                                        ((getTop(model.active_form,model.active_component_index)) - 15) +  "px;"'
                                    v-on:dragend='$event.stopPropagation();deleteCursor();'
                                    v-bind:draggable='true'

                                    v-on:dragstart='$event.stopPropagation();switchCursor($event,"nwse-resize","crosshair");drag($event,{
                                       type:   "resize_top_left",
                                       text:    model.forms[model.active_form].components[model.active_component_index].base_component_id,
                                       index:   model.active_component_index
                                    })'>
                            </div>

                            <!-- top middle -->
                            <div    v-if='design_mode && isValidObject(model.active_component_index) && isVisible(model.active_form,model.active_component_index)'
                                    v-bind:style='"cursor: ns-resize;z-index:1000;display:inline-block;background-color: gray; border: 3px solid gray; margin:0;width:12px;height:12px;position:absolute;left:" +
                                        ((getLeft(model.active_form,model.active_component_index)) + (model.forms[model.active_form].components[model.active_component_index].width/2) - 7) +  "px;top:" +
                                        ((getTop(model.active_form,model.active_component_index)) - 15) +  "px;"'
                                    v-on:dragend='$event.stopPropagation();deleteCursor();'
                                    v-bind:draggable='true'
                                    v-on:dragstart='$event.stopPropagation();switchCursor($event,"ns-resize","row-resize");drag($event,{
                                                                type:   "resize_top",
                                                                text:    model.forms[model.active_form].components[model.active_component_index].base_component_id,
                                                                index:   model.active_component_index
                                                             })'>
                            </div>
                            <!-- top right -->
                            <div    v-if='design_mode && isValidObject(model.active_component_index) && isVisible(model.active_form,model.active_component_index)'
                                    v-bind:style='"cursor: nesw-resize;z-index:1000;display:inline-block;background-color: gray; border: 3px solid gray; margin:0;width:12px;height:12px;position:absolute;left:" +
                                        ((getLeft(model.active_form,model.active_component_index)) + (model.forms[model.active_form].components[model.active_component_index].width) ) +  "px;top:" +
                                        ((getTop(model.active_form,model.active_component_index)) - 15) +  "px;"'
                                    v-on:dragend='$event.stopPropagation();deleteCursor();'
                                        v-bind:draggable='true'
                                        v-on:dragstart='$event.stopPropagation();switchCursor($event,"nesw-resize","crosshair");drag($event,{
                                           type:   "resize_top_right",
                                           text:    model.forms[model.active_form].components[model.active_component_index].base_component_id,
                                           index:   model.active_component_index
                                           })'>
                            </div>

                            <!-- middle left -->
                            <div    v-if='design_mode && isValidObject(model.active_component_index) && isVisible(model.active_form,model.active_component_index)'
                                    v-bind:style='"cursor: ew-resize;z-index:1000;display:inline-block;background-color: gray; border: 3px solid gray; margin:0;width:12px;height:12px;position:absolute;left:" +
                                        ((getLeft(model.active_form,model.active_component_index)) - 15) +  "px;top:" +
                                        ((getTop(model.active_form,model.active_component_index)) + ((model.forms[model.active_form].components[model.active_component_index].height / 2)) - 7) +  "px;"'
                                    v-on:dragend='$event.stopPropagation();deleteCursor();'
                                    v-bind:draggable='true'
                                    v-on:dragstart='$event.stopPropagation();switchCursor($event,"ew-resize","col-resize");drag($event,{
                                                                type:   "resize_left",
                                                                text:    model.forms[model.active_form].components[model.active_component_index].base_component_id,
                                                                index:   model.active_component_index
                                                             })'>
                            </div>
                            <!-- middle right -->
                            <div    v-if='design_mode && isValidObject(model.active_component_index) && isVisible(model.active_form,model.active_component_index)'
                                    v-bind:style='"cursor: ew-resize;z-index:1000;display:inline-block;background-color: gray; border: 3px solid gray; margin:0;width:12px;height:12px;position:absolute;left:" +
                                        ((getLeft(model.active_form,model.active_component_index)) + (model.forms[model.active_form].components[model.active_component_index].width)) +  "px;top:" +
                                        ((getTop(model.active_form,model.active_component_index)) + ((model.forms[model.active_form].components[model.active_component_index].height / 2)) - 7) +  "px;"'
                                v-on:dragend='$event.stopPropagation();deleteCursor();'
                                    v-bind:draggable='true'
                                    v-on:dragstart='$event.stopPropagation();switchCursor($event,"ew-resize","col-resize");drag($event,{
                                                                type:   "resize_right",
                                                                text:    model.forms[model.active_form].components[model.active_component_index].base_component_id,
                                                                index:   model.active_component_index
                                                             })'>
                            </div>
                            <!-- bottom left -->
                            <div    v-if='design_mode && isValidObject(model.active_component_index) && isVisible(model.active_form,model.active_component_index)'
                                    v-bind:style='"cursor: nesw-resize;z-index:1000;display:inline-block;background-color: gray; border: 3px solid gray; margin:0;width:12px;height:12px;position:absolute;left:" +
                                        ((getLeft(model.active_form,model.active_component_index)) - 15) +  "px;top:" +
                                        ((getTop(model.active_form,model.active_component_index)) + ((model.forms[model.active_form].components[model.active_component_index].height)) + 2) +  "px;"'
                                    v-on:dragend='$event.stopPropagation();deleteCursor();'
                                        v-bind:draggable='true'
                                        v-on:dragstart='$event.stopPropagation();switchCursor($event,"nesw-resize","crosshair");drag($event,{
                                                                    type:   "resize_bottom_left",
                                                                    text:    model.forms[model.active_form].components[model.active_component_index].base_component_id,
                                                                    index:   model.active_component_index
                                                                 })'>
                            </div>
                            <!-- bottom middle -->
                            <div    v-if='design_mode && isValidObject(model.active_component_index) && isVisible(model.active_form,model.active_component_index)'
                                    v-bind:style='"cursor: ns-resize;z-index:1000;display:inline-block;background-color: gray; border: 3px solid gray; margin:0;width:12px;height:12px;position:absolute;left:" +
                                        ((getLeft(model.active_form,model.active_component_index)) + (model.forms[model.active_form].components[model.active_component_index].width/2) - 7) +  "px;top:" +
                                        ((getTop(model.active_form,model.active_component_index)) + ((model.forms[model.active_form].components[model.active_component_index].height)) + 2) +  "px;"'
                                    v-on:dragend='$event.stopPropagation();deleteCursor();'
                                    v-bind:draggable='true'
                                    v-on:dragstart='$event.stopPropagation();switchCursor($event,"ns-resize","row-resize");drag($event,{
                                                                type:   "resize_bottom",
                                                                text:    model.forms[model.active_form].components[model.active_component_index].base_component_id,
                                                                index:   model.active_component_index
                                                             })'>
                            </div>

                            <!-- bottom right -->
                            <div    v-if='design_mode && isValidObject(model.active_component_index) && isVisible(model.active_form,model.active_component_index)'
                                    v-bind:style='"cursor: nwse-resize;z-index:1000;display:inline-block;background-color: gray; border: 3px solid gray; margin:0;width:12px;height:12px;position:absolute;left:" +
                                        ((getLeft(model.active_form,model.active_component_index)) + (model.forms[model.active_form].components[model.active_component_index].width) ) +  "px;top:" +
                                        ((getTop(model.active_form,model.active_component_index)) + ((model.forms[model.active_form].components[model.active_component_index].height)) + 2) +  "px;"'
                                    v-on:dragend='$event.stopPropagation();deleteCursor();'
                                    v-bind:draggable='true'
                                    v-on:dragstart='$event.stopPropagation();switchCursor($event,"nwse-resize","crosshair");drag($event,{
                                                                   type:   "resize_bottom_right",
                                                                   text:    model.forms[model.active_form].components[model.active_component_index].base_component_id,
                                                                   index:   model.active_component_index
                                                                        })'>
                            </div>





                            <!-- DELETE -->
                            <div     v-if='design_mode && isValidObject(model.active_component_index) && isVisible(model.active_form,model.active_component_index)'
                                     v-bind:refresh='refresh'
                                     class='btn btn-danger'
                                     v-bind:style='"box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 8px 0px, rgba(0, 0, 0, 0.19) 0px 6px 20px 0px;padding:0px; z-index: 21474836;opacity:1;position: absolute; "  +
                                        "left: " + ((getLeft(model.active_form,model.active_component_index)) + (model.forms[model.active_form].components[model.active_component_index].width) + 15) + "px;" +
                                        "top:  " + ((getTop(model.active_form,model.active_component_index)) - 45) +  "px;" +
                                        "width: 30px; height: 30px; line-height:30px;text-align: center;vertical-align: middle;"'
                                     v-on:click='$event.stopPropagation();deleteComponent(model.active_component_index)'>

                                    X

                            </div>


                            <!-- More details ... button -->
                            <div     v-if='design_mode && isValidObject(model.active_component_index) && isVisible(model.active_form,model.active_component_index) && hasMoreDetailsUi(model.active_form,model.active_component_index)'
                                     v-bind:refresh='refresh'
                                     class='btn btn-info'
                                     v-bind:style='"box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 8px 0px, rgba(0, 0, 0, 0.19) 0px 6px 20px 0px;padding:0px; z-index: 21474836;opacity:1;position: absolute; "  +
                                        "left: " + ((getLeft(model.active_form,model.active_component_index)) + (model.forms[model.active_form].components[model.active_component_index].width) + 15) + "px;" +
                                        "top:  " + ((getTop(model.active_form,model.active_component_index)) + (model.forms[model.active_form].components[model.active_component_index].height) + 15) +  "px;" +
                                        "width: 30px; height: 30px; line-height:30px;text-align: center;vertical-align: middle;"'
                                     v-on:click='$event.stopPropagation();showComponentDetailedDesignUi(model.active_component_index)'>

                                    ...

                            </div>





                            <div    v-bind:refresh='refresh'
                                    v-for='(item,index) in getActiveFormComponents()'
                                    ondrop="return false;"
                                    v-on:click='if ( isVisible(model.active_form,index)){ $event.stopPropagation();selectComponent(index,true); }'
                                    v-bind:style='((design_mode && isVisible(model.active_form,index))?"border: 1px solid black;background: white;":"") +
                                                    "position: absolute;top: " + getTop(model.active_form,index) + ";left:" + getLeft(model.active_form,index) + ";height:" + item.height + "px;width:" + item.width + "px;;overflow:none;"'>

                                <div ondrop="return false;"
                                     v-bind:style='"position: absolute; top: 0px; left: 0px;height:" + item.height + "px;width:" + item.width + "px;overflow:auto;"'>
                                    <component  v-bind:id='model.active_form + "_" + model.forms[model.active_form].components[index].name + (design_mode?"_design":"")'
                                                v-bind:refresh='refresh'
                                                v-bind:meta='{form: model.active_form,name: item.name + (design_mode?"_design":"")}'
                                                v-bind:form="model.active_form"
                                                v-bind:design_mode='design_mode'
                                                v-bind:children='getChildren(item.name)'
                                                v-on:send="processControlEvent"
                                                v-bind:is='item.base_component_id'
                                                v-if='!item.parent'
                                                v-bind:name='item.name + (design_mode?"_design":"")'
                                                v-bind:args='model.forms[model.active_form].components[index]'>

                                        <template       slot-scope="child_components"
                                                        v-bind:refresh='refresh'
                                                        style='position:relative;'>

                                            <component  v-for='child_item  in  getChildren(item.name)'
                                                        v-bind:design_mode='design_mode'
                                                        v-bind:refresh='refresh'
                                                        v-bind:meta='{form: model.active_form,name: child_item.name + (design_mode?"_design":"")}'
                                                        v-bind:form="model.active_form"
                                                        v-bind:style='"z-index:100000;position: absolute; top: " + child_item.topY + "px; left: " + child_item.leftX + "px;height:" + child_item.height + "px;width:" + child_item.width + "px;overflow:auto;"'
                                                        v-bind:id='model.active_form + "_" + model.forms[model.active_form].components[child_item.index_in_parent_array].name + (design_mode?"_design":"")'
                                                        v-on:send="processControlEvent"
                                                        v-bind:is='child_item.base_component_id'
                                                        v-bind:name='child_item.name + (design_mode?"_design":"")'
                                                        v-bind:args='model.forms[model.active_form].components[child_item.index_in_parent_array]'>
                                            </component>

                                        </template>

                                    </component>
                                </div>

                                <div    v-bind:style='"cursor: move;position: absolute; top: 0px; left: 0px;z-index: " + (item.is_container?"1":"10000000") + ";width: 100%;height: 100%;border: 1px solid black;"'
                                        v-bind:draggable='design_mode'
                                        v-if='design_mode && isVisible(model.active_form,index)'
                                        ondrop="return false;"
                                        v-on:dragstart='$event.stopPropagation();drag($event,{
                                                                                       type:   "move_component",
                                                                                       text:    item.base_component_id,
                                                                                       index:   index
                                                                                    })'>

                                    <div    v-if='design_mode && isVisible(model.active_form,index)'
                                            ondrop="return false;"
                                            v-bind:refresh='refresh'
                                            v-bind:style='"position: absolute; top: 0px; left: 0px;z-index: 10000000;width: 100%;height: 100%; background-color: lightgray;" +
                                                            ((index == model.active_component_index)?"opacity: 0;":"opacity: .6;") '>

                                    </div>
                                </div>





                            </div>
                        </div>

                    </div>
                </div>
            </div>




        </div>








        <!--
            ****************************************************************
            *                                                              *
            *             The right section of the UI editor               *
            *                                                              *
            ****************************************************************
        -->

        <div    v-if='design_mode'
                v-bind:style='(design_mode?"border: 4px solid lightgray;box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 8px 0px, rgba(0, 0, 0, 0.19) 0px 6px 20px 0px;":"") + " float:right;top:0px;right:0px;width: 400px;height: 75vmin; display: inline-block;overflow-x: none;overflow: hidden;vertical-align: top;padding:0px;height:75vmin;background-color: lightgray; "'
                v-bind:refresh='refresh'>






            <div    id='right_project_pane'
                    v-bind:class='(right_mode == "project"?"right_project_pane_expanded":"right_project_pane_collapsed")''
                    v-bind:refresh='refresh'
                    v-bind:style='"padding:0px; border: 4px solid lightgray;white-space:nowrap"'>

                <div v-bind:style='"border-radius: 3px;  padding: 4px;overflow-x:none;height: 40px;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);font-family:verdana,helvetica;font-size: 13px;" '
                     v-bind:class='(selected_pane == "project"?"selected_pane_title":"unselected_pane_title") '
                     v-on:click='$event.stopPropagation();var s = (right_mode == "properties"?"project":"project");selected_pane = "project";chooseRight(s);'
                     >

                     Project explorer

                    <button type=button class='btn btn-sm btn-warning'
                            v-bind:style='"float: right;" + (right_mode == "project"?"":"display:;font-family:verdana,helvetica;font-size: 13px;")'
                            v-on:click='$event.stopPropagation();selected_pane = "project"; chooseRight("project");addForm()'  >

                         Add form

                    </button>
                </div>


                <div  v-bind:style='"font-family:verdana,helvetica;font-size: 13px;border-radius: 3px; padding:4px; border-right:2px solid gray;border-bottom:2px solid gray; margin-top:2px;;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);height:80%;background-color:lightgray;"  + (right_mode == "project"?"":"display:none;")'>
                    <div    style="align-items: stretch;border-radius: 3px;overflow-y:scroll; padding:0px; border: 0px solid lightgray;border-left: 2px solid gray;border-top: 2px solid gray; background-color:white;height:100%;">

                        <div    v-bind:style='"border-radius: 0px;padding:4px;margin:0px;margin-top: 5px;" + (model.app_selected?"background-color:gray;color:white;":"background-color:white;color:black;")'
                                v-on:click='$event.stopPropagation();selected_pane = "project";select_app()'>

                                    <b>{{edited_app_component_id}}</b>
                        </div>

                        <div v-for='form in getForms()' v-bind:refresh='refresh'>
                            <div>
                                <div  v-bind:style='(((form.name == model.active_form) && (model.active_component_index == null) && (!model.app_selected)) ?"border: 0px solid red;background-color:gray;color:white;":"color:black;") + "padding:4px;margin:0px;margin-left:30px;border-radius: 3px;"'
                                      v-on:click='$event.stopPropagation();selected_pane = "project";selectForm(form.name)'>

                                     <img
                                            src='/driver_icons/form.png'
                                            style='width: 20px; margin-right: 10px;'
                                            class='img-fluid'>
                                     </img>

                                              {{form.name}} ({{form.components.length}})
                                </div>

                                <div    v-if='form.name == model.active_form'
                                        v-for='(av,index) in getActiveFormComponents()'
                                        v-on:click='$event.stopPropagation();selected_pane = "project";selectComponent(index)'
                                        v-bind:style='(((index == model.active_component_index) && design_mode)?"border: 0px solid red;background-color: gray;color: white;":"") + "margin-left:80px; padding:2px;border-radius: 3px;"'>

                                    <div style='width:100%;display:inline-block;overflow: hidden;'>{{av.name}}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>










            <div    id='right_properties_pane'
                    v-bind:class='(right_mode == "properties"?"right_properties_pane_collapsed":"right_properties_pane_collapsed")'
                    v-bind:style='"padding:0px; border: 4px solid lightgray;padding:0px;background-color: lightgray;"'>

                <div    v-bind:style='"border-radius: 3px;padding: 4px;height: 40px;overflow-x:none;white-space:nowrap;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);overflow:hidden ;text-overflow: ellipsis;font-family:verdana,helvetica;font-size: 13px;"'
                        v-bind:class='(selected_pane == "properties"?"selected_pane_title_slower":"unselected_pane_title_slower") '
                        v-on:click='selected_pane = "properties";chooseRight("properties");'>
                    Properties - {{isValidObject(model.active_component_index)?model.forms[model.active_form].components[model.active_component_index].name + " (Component)" : model.active_form + " (Form)"}}
                </div>


                <div id='property_selector_parent' style='margin: 5px;'>

                </div>

                <div  style="border-radius: 3px; padding:4px; border-right:2px solid gray;border-bottom:2px solid gray; margin-top:2px;;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);height:65%;">
                    <div    style="border-radius: 3px;overflow-y:scroll; padding:0px; border: 0px solid lightgray;border-left: 2px solid gray;border-top: 2px solid gray; background-color:white;height:100%;">


                        <div    v-for='property in properties'
                                style='font-family:verdana,helvetica;font-size: 13px;border-bottom: 1px solid lightgray;padding:0px;margin:0px;'
                                >

                            <div style='width:100%;padding:0px;margin:0px;display:flex;'
                                 v-if='!property.hidden'>
                                <div
                                        v-bind:style='"text-overflow: ellipsis;white-space: pre-line;vertical-align: top;display:flex;width:40%;margin: 0px;font-family:verdana,helvetica;font-size: 13px;padding-left: 1px;padding-top:0px;padding-bottom:0px;" + (active_property_index == property.name?"background-color:#000099;color:white;":"")'
                                        v-on:click='selected_pane = "properties";active_property_index = property.name;'>{{property.name}}
                                        <div v-if="isValidObject(property.help)"
                                             style="width:100%;display:inline-block;">
                                            <div        style='margin-top:2px;margin-bottom:2px;border-right: 2px solid gray;border-bottom: 2px solid gray;background-color: pink; padding:0px; padding-right:5px;padding-left:5px;height: 20px;border-radius: 3px;font-family:verdana,helvetica;font-size: 13px;font-style:bold;color:black;width:20px;'
                                                        v-on:click='$event.stopPropagation();showHelp({
                                                            help:                   property.help
                                                        })'  >?</div>
                                        </div>
                                </div>

                                <div style='display:flex;width:57%;padding:0px;padding-left:3px; border-left: 1px solid lightgray;'
                                     v-on:click='selected_pane = "properties";'>
                                    <div v-if='!property.readonly' style="width:100%">


                                    <div v-if="(property.editor  == 'detail_editor')  " style="width:100%">
                                        <div        style='margin-top:2px;margin-bottom:2px;border-right: 2px solid gray;border-bottom: 2px solid gray;background-color: darkgray;float: right; padding:0px; padding-right:5px;padding-left:20px;height: 20px;color: white;border-radius: 3px;font-family:verdana,helvetica;font-size: 13px;font-style:bold;'
                                                    v-on:click='$event.stopPropagation();showComponentDetailedDesignUi(model.active_component_index)'
                                                    >
                                            ...
                                        </div>
                                    </div>


                                        <div    v-if="(property.type  == 'String')  || (property.type  == 'Number')">
                                            <input
                                                    @change='setVBEditorProperty($event, property)'
                                                    v-bind:value='getVBEditorProperty(property)'
                                                    style='width: 100%;border: 0px;font-family:verdana,helvetica;font-size: 13px;padding:0px;'>
                                            </input>
                                        </div>
                                        <div    v-if="(property.type  == 'Select')  ">
                                            <select  @change='setVBEditorProperty($event, property)'>
                                                  <option   v-for="propVal in property.values"
                                                            v-bind:value="propVal.value"
                                                            v-bind:selected="propVal.value == model.forms[model.active_form].components[model.active_component_index][property.id]">

                                                        {{propVal.display}}

                                                  </option>
                                            </select>
                                        </div>
                                        <div    v-if="(property.type  == 'Image') ">
                                            <input type="file"
                                                   id="image_file"
                                                   @change="previewUpload(property)">
                                            </input>
                                        </div>

                                        <div v-if="(property.type  == 'Event')  " style="width:100%">
                                            <div        style='margin-top:2px;margin-bottom:2px;border-right: 2px solid gray;border-bottom: 2px solid gray;background-color: darkgray;float: right; padding:0px; padding-right:5px;padding-left:20px;height: 20px;color: white;border-radius: 3px;font-family:verdana,helvetica;font-size: 13px;font-style:bold;'
                                                        v-on:click='$event.stopPropagation();editAsCode({
                                                            app_selected:           model.app_selected,
                                                            active_form:            model.active_form,
                                                            active_component_index: model.active_component_index,
                                                            property_id:            property.id
                                                        })'  >
                                                ...
                                            </div>
                                        </div>

                                    </div>

                                    <div v-if='property.readonly'>
                                        <div    v-if='model.active_component_index != null'
                                                style='padding:0px;font-family:verdana,helvetica;font-size: 13px;'
                                                class='col-md-12 small'>

                                            {{model.forms[model.active_form].components[model.active_component_index][property.id]}}

                                        </div>

                                        <div v-if='(model.active_component_index == null) && (model.active_form != null) && (model.app_selected == false)' class='col-md-12 small'   v-model='model.forms[model.active_form][property.id]'>
                                        </div>

                                        <div    v-if='model.app_selected'
                                                style='padding:0px;font-family:verdana,helvetica;font-size: 13px;'
                                                class='col-md-12 small'  >

                                            {{property.get_fn?property.get_fn():model[property.id]}}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div  v-if='model.app_selected && (!add_property)' class='row'>
                            <div  class='col-md-12 small'>
                                <button     type=button class='btn btn-sm btn-info'
                                            style='font-family:verdana,helvetica;font-size: 13px;'
                                            v-on:click='$event.stopPropagation();addProperty()'  >
                                    Add property
                                </button>
                            </div>
                        </div>

                        <div v-if='(model.app_selected) && (add_property)' class='row'>
                            <div    style='font-family:verdana,helvetica;font-size: 13px;'
                                    class='col-md-12 small'>
                                Add a property
                            </div>
                        </div>

                        <div v-if='(model.app_selected) && (add_property)' class='row'>
                            <div    style='font-family:verdana,helvetica;font-size: 13px;'
                                    class='col-md-4'>
                               ID
                            </div>

                            <input  style='font-family:verdana,helvetica;font-size: 13px;'
                                    class='col-md-7 small'
                                    placeholder='background_color'
                                    v-model='new_property_id'>
                            </input>
                        </div>

                        <div v-if='(model.app_selected) && (add_property)' class='row'>
                            <div    style='font-family:verdana,helvetica;font-size: 13px;'
                                    class='col-md-4'>
                                Name
                            </div>

                            <input  class='col-md-7 small'
                                    placeholder='Background Color'
                                    style='border:0px;font-family:verdana,helvetica;font-size: 13px;'
                                    v-model='new_property_name'>
                            </input>
                        </div>

                        <div v-if='(model.app_selected) && (add_property)' class='row'>
                            <div class='col-md-12'>
                                <button style='font-family:verdana,helvetica;font-size: 13px;'
                                        type=button class='btn btn-sm btn-info'
                                        v-on:click='$event.stopPropagation();addPropertyCancel()'  >
                                    Cancel
                                </button>

                                <button style='font-family:verdana,helvetica;font-size: 13px;'
                                        type=button class='btn btn-sm btn-info'
                                        v-on:click='$event.stopPropagation();addPropertySave()'  >
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>











    </div>
</div>`
        ,




        /* --------------------------------------------------------------
              mounted

              This is called whenever an app is loaded, either at design
              time or at runtime
           -------------------------------------------------------------- */

        mounted: async function() {
            var mm                  = this
            mm.uid2                 = uuidv4()
            mm.vb_grid_element_id   = "vb_grid_"+ uuidv4()
            mm.vb_editor_element_id = "vb_editor_"+ uuidv4()
            mm.local_app            = localAppshareApp



            // ---------------------------------------------------------
            // get the base component ID of the code to edit/run
            //
            // Save it in "this.edited_app_component_id"
            // ---------------------------------------------------------

            if (texti) {
                var json2                   = this.getJsonModelFromCode(  texti  )
                mm.model                    = json2
                mm.edited_app_component_id  = saveHelper.getValueOfCodeString(texti, "base_component_id")

                this.read_only = saveHelper.getValueOfCodeString(texti, "read_only")
            }
            mm.model.active_form = mm.model.default_form



            // ---------------------------------------------------------
            // find out which sub components are used by this app
            //
            // save the result in "this.component_usage"
            // ---------------------------------------------------------
            if (mm.edited_app_component_id) {
                var sql = "select  child_component_id  from  component_usage  where " +
                          "        base_component_id = '" + mm.edited_app_component_id + "'"

                var results = await callApp({ driver_name:    "systemFunctions2",method_name:    "sql"},
                                            {   sql: sql  })

                for (var i = 0; i < results.length; i++) {
                    mm.component_usage[results[i].child_component_id] = true
                }
            }



            // ---------------------------------------------------------
            // load the forms and their controls
            // ---------------------------------------------------------


            // ---------------------------------------------------------
            // For each form ...
            // ---------------------------------------------------------
            var forms = this.getForms()
            for (var formIndex = 0; formIndex < forms.length; formIndex ++) {
                var formName = forms[formIndex].name

                // ---------------------------------------------------------
                // ... load the component definitions for all components in
                //     the form
                // ---------------------------------------------------------

                var compsToLoad = []
                for (var compenentInFormIndex = 0; compenentInFormIndex < mm.model.forms[formName].components.length ; compenentInFormIndex++ )
                {
                    var newItem = mm.model.forms[formName].components[compenentInFormIndex]
                    if (!component_loaded[newItem.base_component_id]) {
                        compsToLoad.push(newItem.base_component_id)
                    }
                }
                await loadV2(compsToLoad)



                // ---------------------------------------------------------
                // For each component in the form ...
                // ---------------------------------------------------------

                for (var compenentInFormIndex = 0; compenentInFormIndex < mm.model.forms[formName].components.length ; compenentInFormIndex++ )
                {

                    // ---------------------------------------------------------
                    // ... Make sure that the component is added as a
                    //     dependency of this app (Useful for
                    //     when we compile the app as standalone HTML)
                    // ---------------------------------------------------------

                    var componentConfig = mm.model.forms[formName].components[compenentInFormIndex]
                    if (mm.edited_app_component_id) {
                        mm.component_usage[  componentConfig.base_component_id  ] = true
                    }


                    // ---------------------------------------------------------
                    // ...
                    //
                    //
                    // ---------------------------------------------------------

                    var componentId = this.model.forms[formName].components[compenentInFormIndex].base_component_id
                    var cachedComponentDefinition = component_cache[componentId]

                    if (isValidObject(cachedComponentDefinition)) {
                        var cachedComponentPropertiesDefinition = cachedComponentDefinition.properties
                        if (isValidObject(cachedComponentPropertiesDefinition)) {
                            for (var cpp = 0 ; cpp< cachedComponentPropertiesDefinition.length; cpp ++) {
                                var prop = cachedComponentPropertiesDefinition[cpp].id
                                var compId = this.model.forms[formName].components[compenentInFormIndex].base_component_id

                                if (cachedComponentPropertiesDefinition[cpp].type == "Action") {
                                    this.model.forms[formName].components[compenentInFormIndex][prop] =
                                        mm.getControlMethod(mm.model.forms[formName].components[compenentInFormIndex].base_component_id,
                                                            mm.model.forms[formName].components[compenentInFormIndex],
                                                            cachedComponentDefinition,
                                                            cachedComponentPropertiesDefinition[cpp].id )

                                } else if (!isValidObject(this.model.forms[formName].components[compenentInFormIndex][prop])){
                                    this.model.forms[formName].components[compenentInFormIndex][prop] = ""
                                }
                            }
                        }
                    }


                }


                //call the load event on each component
                for (var compenentInFormIndex = 0; compenentInFormIndex < mm.model.forms[formName].components.length ; compenentInFormIndex++ )
                {
                    var componentConfig = mm.model.forms[formName].components[compenentInFormIndex]
                    if (isValidObject(componentConfig.load)) {
                        //alert("Load event :" + formName + " : " + componentConfig.name)
                    }
                }


           }

           //console.log("Time " + (ttq++) + ": " + (new Date().getTime()- startTime))



           //
           // get the availabe components
           //
           if (online) {
               var sql =    "select  base_component_id,logo_url  from  system_code  where " +
                            "        code_tag = 'LATEST' and logo_url is not null and control_type = 'VB'"

               var results = await callApp({ driver_name:    "systemFunctions2",method_name:    "sql"},
                   {   sql: sql  })
               mm.available_components = results
               //console.log("Time " + (ttq++) + ": " + (new Date().getTime()- startTime))
           }







           mm.updateAllFormCaches()
           //console.log("Time " + (ttq++) + ": " + (new Date().getTime()- startTime))



           //console.log("Time " + (ttq++) + ": " + (new Date().getTime()- startTime))


           mm.$forceUpdate();
           //console.log("Time " + (ttq++) + ": " + (new Date().getTime()- startTime))

           mm.updatePropertySelector()

           texti = null

           setTimeout(function(){
                mm.selectForm(mm.model.default_form)
           },500)


           mm.$root.$on('message', async function(text) {
               if (text.type == "delete_design_time_component") {
                   //alert("Found: " + text.component_index)
                   //alert(JSON.stringify(mm.model.forms[mm.model.active_form].components[text.component_index],null,2))
                   mm.model.forms[mm.model.active_form].components.splice(text.component_index, 1);

                   //mm.design_mode_pane.type = "drag_drop";



               } else if (text.type == "select_design_time_component") {
                  mm.selectComponent(text.component_index, true);
              }

           })

           hideProgressBar()

     },






     methods: {
         getControlMethod: function(base_id,componentDetails,ompEvaled1, methodId) {
            return function(arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10) {
                //alert(JSON.stringify(componentDetails.name,null,2))
                var controlDetails = globalControl[componentDetails.name]
                var fnDetails = controlDetails[methodId]
                fnDetails(arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10)

            }

         }

         ,
     deleteCursor: function() {
         document.getElementById(this.vb_grid_element_id).style.cursor = "crosshair"
         document.getElementById("grid_container").style.cursor = "default"
         if (this.oldCursor) {
                this.cursorSource.style.cursor = this.oldCursor
                this.oldCursor = null
                this.cursorSource = null
                this.newCursor = null
         }
     }
     ,
     switchCursor: function(event, oldCursor, newCursor) {
        var mm = this

        mm.cursorSource              = event.target
        mm.cursorSource.style.cursor = newCursor
        mm.newCursor                 = newCursor
        mm.oldCursor                 = oldCursor

        document.getElementById(mm.vb_grid_element_id).style.cursor = newCursor
        document.getElementById("grid_container").style.cursor = newCursor


     }
     ,
     maintainCursor: function() {
        var mm = this



     }
     ,
     clickOnMainGrid: function(event) {
         if (this.design_mode)
             {
                 event.stopPropagation();
                 if (this.highlighted_control)
                 {
                     var doc = document.documentElement;
                     var left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
                     var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
                     var rrr = event.target.getBoundingClientRect()
                     var offsetX = (event.clientX - rrr.left )
                     var offsetY = (event.clientY - rrr.top )
                     var parentId = null
                     var parentName = null
                     var parentOffsetX = 0
                     var parentOffsetY = 0
                     var newItem2 = new Object()
                     var data = {
                        type:       "add_component",
                        text:        this.highlighted_control,
                        offsetX:     offsetX,
                        offsetY:     offsetY
                     }

                     var parentContainer = this.getContainerForPoint(  offsetX,  offsetY  )
                     if (parentContainer) {
                         parentOffsetX = parentContainer.x
                         parentOffsetY = parentContainer.y
                         parentId      = parentContainer.base_component_id
                         parentName    = parentContainer.name
                     }


                     this.addComponent(  offsetX,
                                         offsetY,
                                         data,
                                         parentId,
                                         parentName,
                                         parentOffsetX,
                                         parentOffsetY,
                                         [])

                      this.highlighted_control = null

                 } else {
                     this.selectForm(this.model.active_form, true);
                 }
             }

     },

     getContainerForPoint: function(leftX,topY) {

         var ccc = this.model.forms[this.model.active_form].components
         for (var ytr = 0;ytr < ccc.length;ytr++){
            var baseId =    ccc[ytr].base_component_id
            var controlNmae =    ccc[ytr].name
            var x1 =        ccc[ytr].leftX
            var x2 =        ccc[ytr].leftX + ccc[ytr].width
            var y1 =        ccc[ytr].topY
            var y2 =        ccc[ytr].topY + ccc[ytr].height
            var isContainer = ccc[ytr].is_container
            if (isContainer && (x1 <= leftX) && (leftX <= x2) && (y1 <= topY) && (topY <= y2)) {
                return {
                    x:                  x1,
                    y:                  y1,
                    base_component_id:  ccc[ytr].base_component_id,
                    name:               ccc[ytr].name
                }
            }
         }
         return null
     }
     ,
        addComponent: async function(leftX,topY,data, parentId, parentName, parentOffsetX, parentOffsetY,defProps) {
            var mm = this
            //alert(JSON.stringify(data,null,2))

            var newItem = new Object()
            var rrr = document.getElementById(this.vb_grid_element_id).getBoundingClientRect()

            //alert(parentId +": = (" + parentOffsetX + "," + parentOffsetY + ")")
            newItem.leftX = Math.floor(leftX)
            newItem.topY = Math.floor(topY)
            if (newItem.leftX < 0) {
               newItem.leftX = 0
            }
            if (newItem.topY < 0) {
               newItem.topY = 0
            }
            //alert(`(${newItem.leftX},${newItem.topY})`)

            if (parentId) {
               //alert(`${baseId}:(${x1},${y1}) - (${x2},${y2})`)
               newItem.parent = parentName
            }


            newItem.name = data.text + "_" + this.model.next_component_id++
            newItem.base_component_id = data.text



            this.refresh++
            if (!component_loaded[newItem.base_component_id]) {
               await loadV2([newItem.base_component_id])
               this.component_usage[newItem.base_component_id] = true
            }

            var compEvaled1 = component_cache[newItem.base_component_id]
            if (isValidObject(compEvaled1)) {
                   var compEvaled = compEvaled1.properties
                   if (isValidObject(compEvaled)) {
                       for (var cpp = 0 ; cpp < compEvaled.length; cpp ++){
                           var prop = compEvaled[cpp].id

                           if (!isValidObject(newItem[prop])){
                               if (compEvaled[cpp].default) {
                                   newItem[prop] = JSON.parse(JSON.stringify(compEvaled[cpp].default))
                               } else {
                                   newItem[prop] = ""
                               }
                           }
                       }
                   }
            }



            if (!isValidObject(newItem.width)) {
                newItem.width = 100
            }
            if (!isValidObject(newItem.height)) {
                newItem.height = 100
            }

            if ((newItem.leftX + newItem.width)
                    > this.model.forms[this.model.active_form].width) {
                newItem.leftX = Math.floor(this.model.forms[this.model.active_form].width - newItem.width)
            }
            if ((newItem.topY + newItem.height)
                    > this.model.forms[this.model.active_form].height) {
                newItem.topY = Math.floor(this.model.forms[this.model.active_form].height - newItem.height)
            }


            if (isValidObject(   defProps   )) {
                var oo = Object.keys(defProps)
                for (  var ee = 0  ;  ee < oo.length ;  ee++  ) {
                    var propName = oo[ee]
                    var propValue = defProps[propName]
                    newItem[propName] = propValue
                }
            }

            this.model.forms[this.model.active_form].components.push(newItem)
            this.model.active_component_index = this.model.forms[this.model.active_form].components.length - 1

            setTimeout(function() {
                mm.selectComponent(mm.model.active_component_index, true)
                mm.refresh ++
            },100)

            var compCode = component_cache[newItem.base_component_id].code
            var childrenCode  = saveHelper.getValueOfCodeString(compCode, "children",")//children")
            if (isValidObject(childrenCode)) {
                for (  var ee = 0  ;  ee < childrenCode.length ;  ee++  ) {
                    //alert(JSON.stringify(childrenCode[ee],null,2))

                    var childBaseId = childrenCode[ee].base_component_id
                    var childDefProps = childrenCode[ee].properties
                    await this.addComponent(    0 ,
                                                0 ,
                                                {text: childBaseId} ,
                                                newItem.base_component_id ,
                                                newItem.name ,
                                                0 ,
                                                0 ,
                                                childDefProps )
                }
            }

        }
        ,


         refreshControlIndexes: function() {
            if (this.model.active_component_detail_name) {

                var ccc = mm.model.forms[this.model.active_form].components
                for (var ytr = 0;ytr < ccc.length;ytr++) {
                   if (this.model.active_component_detail_name == ccc[ytr].name) {
                       this.model.active_component_detail_name = ytr
                       break
                   }
                }

            } else {
                this.model.active_component_detail_name = null

            }

         }
         ,

         hasMoreDetailsUi: function(formName, componentIndex) {
             var mm = this
             var component = mm.model.forms[formName].components[componentIndex]
             if (isValidObject(component.parent)) {
                 var ccc = mm.model.forms[formName].components
                 for (var ytr = 0;ytr < ccc.length;ytr++) {
                    if (component.parent == ccc[ytr].name) {
                        if (ccc[ytr].hide_children) {
                            return false
                        }
                        break
                    }
                 }
             }

             if (component.has_details_ui) {
                 return true
             }


             return false
         }
         ,
        isVisible: function(formName, componentIndex) {
            var mm = this
            var component = mm.model.forms[formName].components[componentIndex]
            if (!component) {
                return false
            }
            if (component.hidden) {
                return false
            }

            if (isValidObject(component.parent)) {
                var ccc = mm.model.forms[formName].components
                for (var ytr = 0;ytr < ccc.length;ytr++) {
                    if (ccc[ytr]) {
                        if (component.parent == ccc[ytr].name) {
                            if (ccc[ytr].hide_children) {
                                return false
                            }
                            break
                        }
                    }
                }
            }

            return true
        }
        ,
        getLeft: function(formName, componentIndex) {
            var mm = this
            var component = mm.model.forms[formName].components[componentIndex]
            if (!component) {
                return 0
            }
            var left = component.leftX

            if (isValidObject(component.parent)) {
                var ccc = mm.model.forms[formName].components
                for (var ytr = 0;ytr < ccc.length;ytr++){
                   if (component.parent == ccc[ytr].name) {
                       left = left + ccc[ytr].leftX
                       break
                   }
                }
            }


            return left
        }
        ,
        getTop: function(formName, componentIndex) {
            var mm = this
            var component = mm.model.forms[formName].components[componentIndex]
            if (!component) {
                return 0
            }
            var top = component.topY
            if (isValidObject(component.parent)) {
                var ccc = mm.model.forms[formName].components
                for (var ytr = 0;ytr < ccc.length;ytr++){
                   if (component.parent == ccc[ytr].name) {
                       top = top + ccc[ytr].topY
                       break
                   }
                }
            }
            return top
        }
        ,

        getChildren: function( itemName ) {

            var mm = this
            var ccc = mm.model.forms[mm.model.active_form].components
            var chh = []
            for (var ytr = 0;ytr < ccc.length;ytr++){
                if (ccc[ytr].parent == itemName) {
                    ccc[ytr].index_in_parent_array = ytr
                    chh.push(ccc[ytr])
                }
            }
            return chh
        }
        ,
        previewUpload: function(property) {
            var mm = this;
            var file    = document.getElementById('image_file').files[0];
            var reader  = new FileReader();

            reader.addEventListener("load", function () {
                mm.model.forms[mm.model.active_form].components[mm.model.active_component_index][property.id] = reader.result
                mm.refresh ++
            }, false);

            if (file) {
                reader.readAsDataURL(file);
            }
        }
        ,
         showHelp: async function(aa) {
            var mm = this


            if (this.ui_code_editor) {
                if (mm.ui_code_editor.completer) {
                    mm.ui_code_editor.completer.detach()
                }
                mm.ui_code_editor.destroy()
                mm.ui_code_editor = null

                // ------------------ HACK CITY! -------------------------
                // we need this line as otherwise the ace editor isnt always destroyed
                // properly (related to deletion of the Ace editor parent nodes in Vue)
                mm.design_mode_pane.type = null
                // -------------------------------------------------------
            }

            setTimeout(function(){
                mm.model.active_component_detail_name = null
                mm.model.active_component_detail_index = null
                mm.design_mode_pane.type = "help"
                mm.design_mode_pane.help = aa.help
                mm.refresh++
            },200)
        }
        ,


        // -----------------------------------------------------
        //                      editAsCode
        //
        // This is called when the "..." button is pressed for
        // a property in the property inspector
        //
        // This can show code for the app, a form, and for
        // controls
        //
        // -----------------------------------------------------
        editAsCode: async function(aa) {

            //
            // if the code editor is already open then close it
            //

            var mm = this
            if (mm.ui_code_editor) {
                if (mm.ui_code_editor.completer) {
                    mm.ui_code_editor.completer.detach()
                }
                mm.ui_code_editor.destroy()
                mm.ui_code_editor = null
            }




            //
            // Set up the new code editor
            //

            setTimeout(function(){
                mm.design_mode_pane.type                   = "event_editor"
                mm.design_mode_pane.app_selected           = aa.app_selected
                mm.design_mode_pane.active_form            = aa.active_form
                mm.design_mode_pane.active_component_index = aa.active_component_index
                mm.design_mode_pane.property_id            = aa.property_id

                setTimeout(function(){
                    if (document.getElementById('ui_code_editor') && (mm.ui_code_editor == null)) {

                        //
                        //set up the ace editor for the timeline view
                        //

                        ace.config.set('basePath', '/');
                        mm.ui_code_editor = ace.edit( "ui_code_editor",
                                                        {
                                                               selectionStyle:  "text",
                                                               mode:            "ace/mode/javascript"
                                                        })

                        //
                        //Hack city! Need a delay when setting theme or view is corrupted
                        //

                        setTimeout(function(){
                               mm.ui_code_editor.setTheme("ace/theme/sqlserver");
                            },100)



                        //
                        // Stylize the code editor
                        //

                        document.getElementById("ui_code_editor").style["font-size"]    = "16px"
                        document.getElementById("ui_code_editor").style.width           = "100%"
                        document.getElementById("ui_code_editor").style.border          = "0px solid #2C2828"
                        document.getElementById("ui_code_editor").style.height          = "55vh"



                        //
                        // Get the code and store it in "ccode"
                        //
                        // The code is obtained from the VueJS model, depending on whether
                        // it is a control, a form, or application code
                        //

                        var ccode = ""

                        // application code (THIS MUST BE FIST IN THE IF STATEMENT)
                        if (mm.model.app_selected) {
                            ccode = mm.model[aa.property_id]


                        // form code
                        } else if ((mm.model.active_component_index == null) && (mm.model.active_form != null)) {
                            ccode = mm.model.forms[mm.model.active_form][aa.property_id]

                        // component code
                        } else if ((mm.model.active_component_index != null) && (mm.model.active_form != null)) {
                            ccode = mm.model.forms[mm.model.active_form].components[mm.model.active_component_index][aa.property_id]
                        }



                        if (!isValidObject(ccode)) {
                            ccode = ""
                        }


                        mm.ui_code_editor.getSession().setValue(ccode);
                        mm.ui_code_editor.getSession().setUseWorker(false);

                        mm.ui_code_editor.on("change", function(e) {
                            var newC = mm.ui_code_editor.getValue()

                            if (aa.app_selected) {
                                mm.model[aa.property_id] = newC
                            } else if ((mm.model.active_component_index == null) && (mm.model.active_form != null)) {
                                mm.model.forms[mm.model.active_form][aa.property_id] = newC

                            } else if ((mm.model.active_component_index != null) && (mm.model.active_form != null)) {
                                mm.model.forms[mm.model.active_form].components[mm.model.active_component_index][aa.property_id] = newC
                            }
                        })

                        mm.setupCodeAutocompletions()

                        mm.ui_code_editor.focus();
                    }
                },100)
            },100)


            mm.setupCodeEditorSelectors(aa.property_id)

         }
        ,





        // -----------------------------------------------------
        //                  setupCodeAutocompletions
        //
        // This is called when editing event code to autocomplete
        // form names, control names, and methods
        //
        //
        //
        // -----------------------------------------------------
        setupCodeAutocompletions: function() {

            var mm          = this
            var langTools   = ace.require("ace/ext/language_tools");

            //
            // Clear any default autocompleters that have been set
            //

            langTools.setCompleters([]);



            //
            // Create the autocompleter
            //

            var autocompleterFunction = {
                    identifierRegexps: [/[a-zA-Z_0-9.]/]
                    ,
                    getCompletions: function(editor, session, pos, prefix, callback) {
                        console.log("Called autocompleterFunction: " + pos + " : " + prefix)

                        //
                        // If no text entered then do nothing
                        //

                        if (prefix.length === 0) {
                            callback(null, []);
                            return
                        }




                        //
                        // Get the first part of the text to autocomplete
                        //

                        var firstObjectToAutocomplete = null
                        if (prefix.indexOf(".") != -1) {
                            firstObjectToAutocomplete = prefix.substring(0,prefix.indexOf("."))
                            console.log("firstObjectToAutocomplete: " + firstObjectToAutocomplete)
                        }


                        var wordList = []

                        //
                        // Create the list of initial objects to complete:
                        // app, forms, controls
                        //

                        if (firstObjectToAutocomplete == null) {

                            wordList.push(  {"word":    "app",
                                             "freq":     24,
                                             "score":    300,
                                             "flags":    "bc",
                                             "syllables":"1",
                                              meta:      "Main application"
                                         })

                            wordList.push(  {"word":    "forms",
                                              "freq":     24,
                                              "score":    300,
                                              "flags":    "bc",
                                              "syllables":"1",
                                               meta:      "List of forms"
                                             })

                         if (mm.design_mode_pane.app_selected) {
                             wordList.push(  {"word":    "me",
                                             "freq":     24,
                                             "score":    300,
                                             "flags":    "bc",
                                             "syllables":"1",
                                              meta:      "The current app"
                                             })

                         } else if (mm.design_mode_pane.active_component_index == null) {
                             wordList.push(  {"word":    "me",
                                             "freq":     24,
                                             "score":    300,
                                             "flags":    "bc",
                                             "syllables":"1",
                                              meta:      "The current form"
                                             })

                         } else {
                             wordList.push(  {"word":    "me",
                                             "freq":     24,
                                             "score":    300,
                                             "flags":    "bc",
                                             "syllables":"1",
                                              meta:      "The current control"
                                             })
                         }

                         wordList.push(  {"word":    "parent",
                                         "freq":     24,
                                         "score":    300,
                                         "flags":    "bc",
                                         "syllables":"1",
                                          meta:      "The parent/container control of this"
                                         })

                         var ccc = mm.model.forms[mm.model.active_form].components
                         for (   var ytr = ccc.length - 1;    ytr >= 0;    ytr--   ) {
                             var component = ccc[ytr]
                             wordList.push(  {"word":    component.name,
                                             "freq":     24,
                                             "score":    300,
                                             "flags":    "bc",
                                             "syllables":"1",
                                              meta:      "Control"
                                             })
                         }

                         ccc = Object.keys(mm.model.forms)
                         for (   var ytr = ccc.length - 1;    ytr >= 0;    ytr--   ) {
                             wordList.push(  {"word":    ccc[ytr],
                                             "freq":     24,
                                             "score":    300,
                                             "flags":    "bc",
                                             "syllables":"1",
                                              meta:      "Form"
                                             })
                         }



                     //
                     // If we have ented an object and pressed "." (period)
                     // then we need to add the method that comes after the
                     // period, eg:
                     //
                     // my_label.set|
                     //         .setText()
                     //         .setWidth()    <- choose one
                     //         .setHeight()
                     //

                    } else {

                        //
                        // Find out what the left hand side of the "." represents. Is
                        // it a component, a form, or the app?
                        //

                        var componentId = null
                        var formName    = null
                        var isApp       = false



                        if (firstObjectToAutocomplete == "me") {

                            if (mm.design_mode_pane.app_selected) {

                            } else if (isValidObject(mm.design_mode_pane.active_component_index)) {
                                componentId = mm.model.forms[mm.model.active_form].components[ mm.design_mode_pane.active_component_index ].base_component_id

                            } else if (isValidObject(mm.design_mode_pane.active_form)) {
                                formName = mm.model.active_form
                            }

                        } else {

                            //
                            // see if the word is a component
                            //

                            var comps       = mm.model.forms[mm.model.active_form].components

                            for (var rt=0; rt < comps.length; rt++) {
                                if (comps[rt].name == firstObjectToAutocomplete) {
                                    componentId = comps[rt].base_component_id
                                }
                            }


                            //
                            // see if the word is a form
                            //

                            var formNames       = Object.keys(mm.model.forms)

                            for (var rt=0; rt < formNames.length; rt++) {
                                var formName1 = formNames[rt]
                                if (formName1 == firstObjectToAutocomplete) {
                                    formName = formName1
                                }
                            }


                            if (firstObjectToAutocomplete == "app") {
                                isApp = true

                            }
                        }



                         //
                         // if a component was entered
                         //

                         if (componentId) {

                            var cachedComponentDefinition = component_cache[componentId]
                            for (var fg=0;fg < cachedComponentDefinition.properties.length;fg++){
                                 var comm = cachedComponentDefinition.properties[fg]
                                 var propName = firstObjectToAutocomplete + "." + comm.id
                                 var meta = "Property"
                                 if (isValidObject(comm.snippet)) {
                                     propName = firstObjectToAutocomplete + "." + comm.snippet
                                 }
                                 if (comm.type == "Action") {
                                     meta = "Method"
                                 }

                                 wordList.push({ "word":         propName ,
                                                 "freq":         24,
                                                 "score":        300,
                                                 "flags":        "bc",
                                                 "syllables":    "1",
                                                 "meta":         meta
                                                 })
                             }




                         //
                         // if a form was entered
                         //

                         } else if (formName) {
debugger
                            var formProps = mm.properties
                            for (var formPropIndex = 0 ; formPropIndex < formProps.length ; formPropIndex++ ) {

                                var propDetails = formProps[formPropIndex]
                                var propName    = firstObjectToAutocomplete + "." + propDetails.id
                                var meta        = "Property"

                                if (isValidObject(propDetails.snippet)) {
                                     propName = firstObjectToAutocomplete + "." + propDetails.snippet
                                 }
                                 if (propDetails.type == "Action") {
                                     meta = "Method"
                                 }
                                 if (propDetails.type == "Event") {
                                     meta = "Event"
                                 }

                                 wordList.push({ "word":         propName ,
                                                 "freq":         24,
                                                 "score":        300,
                                                 "flags":        "bc",
                                                 "syllables":    "1",
                                                 "meta":         meta
                                                 })
                              }


                         //
                         // if the main object is the VB app
                         //

                         } else if (isApp) {
debugger
                            var appProps = mm.get_default_app_propeties()
                            for (var formPropIndex = 0 ; formPropIndex < appProps.length ; formPropIndex++ ) {

                                var propDetails = appProps[formPropIndex]
                                var propName    = firstObjectToAutocomplete + "." + propDetails.id
                                var meta        = "Property"

                                if (isValidObject(propDetails.snippet)) {
                                     propName = firstObjectToAutocomplete + "." + propDetails.snippet
                                 }
                                 if (propDetails.type == "Action") {
                                     meta = "Method"
                                 }
                                 if (propDetails.type == "Event") {
                                     meta = "Event"
                                 }

                                 wordList.push({ "word":         propName ,
                                                 "freq":         24,
                                                 "score":        300,
                                                 "flags":        "bc",
                                                 "syllables":    "1",
                                                 "meta":         meta
                                                 })
                             }

                         }
                     }

                     callback(null, wordList.map(function(ea) {
                        return {name: ea.word, value: ea.word, score: ea.score, meta: ea.meta}
                     }));


                 }
             }
             langTools.addCompleter(autocompleterFunction);



             mm.ui_code_editor.commands.addCommand({
                 name: "showOtherCompletions",
                 bindKey: ".",
                 exec: function(editor) {
                      mm.ui_code_editor.session.insert(mm.ui_code_editor.getCursorPosition(), ".")
                      mm.ui_code_editor.completer.updateCompletions()
                 }
             })

             mm.ui_code_editor.setOptions({
                enableBasicAutocompletion: false,
                enableSnippets: false,
                enableLiveAutocompletion: true
             });
         }

         ,



        setupCodeEditorSelectors: function(   property_id   ) {
            var mm = this

            setTimeout( function() {

                //
                // Add the selectors using the SelectR library
                //

                if (!document.getElementById("select_code_object_parent")) {
                    return; }
                document.getElementById("select_code_object_parent").innerHTML=' <select id=select_code_object ></select>'
                if (!document.getElementById("select_code_action_parent")) {
                    return; }
                document.getElementById("select_code_action_parent").innerHTML=' <select id=select_code_action ></select>'



                 //
                 //   initialise vars
                 //

                 var objectListForSelector  = []
                 var methodListForSelector  = []
                 var indexObjectSelector    = 0
                 var indexActionSelector    = 0
                 var selectedCodeObject     = null
                 var selectedCodeAction     = null



                 //
                 // if we selected the app or a form
                 //

                 if (mm.model.app_selected || (!isValidObject(mm.model.active_component_index))) {

                     if (mm.edited_app_component_id) {
                         objectListForSelector.push(
                             {
                                 value:      "" + indexObjectSelector,
                                 app:        mm.edited_app_component_id,
                                 form:       null,
                                 component:  null
                             })
                     }

                     if (mm.model.app_selected) {
                         selectedCodeObject = indexObjectSelector
                     }
                     indexObjectSelector++

                     var forms = mm.getForms()
                     for (  var ere = 0; ere < forms.length; ere++  ) {
                         var form = forms[ ere ]
                         objectListForSelector.push(
                             {
                                 value:      "" + indexObjectSelector,
                                 app:        null,
                                 form:       form.name,
                                 component:  null
                             }
                         )
                         if ((!mm.model.app_selected) && (form.name == mm.model.active_form)) {
                             selectedCodeObject = indexObjectSelector
                         }
                         indexObjectSelector++


                         //
                         // show the sub controls of this form if it is the current form
                         //

                         if ((!mm.model.app_selected) && (form.name == mm.model.active_form)) {
                             var components = mm.getActiveFormComponents()
                             for (  var ere1 = 0; ere1 < components.length; ere1++  ) {
                                 var component = components[ ere1 ]
                                 objectListForSelector.push(
                                     {
                                         value:              "" + indexObjectSelector,
                                         app:                null,
                                         form:               mm.model.active_form,
                                         component:          "  -  " + component.name,
                                         component_type:     component.base_component_id,
                                         component_index:    ere1
                                     }
                                 )
                                 if (mm.model.active_component_index == ere1) {
                                     selectedCodeObject = indexObjectSelector
                                 }
                                 indexObjectSelector++
                             }
                         }
                     }

                 //
                 // if we selected a component
                 //
                 } else if (isValidObject(mm.model.active_component_index)) {

                     objectListForSelector.push(
                         {
                             value:      "" + indexObjectSelector,
                             app:        null,
                             form:       mm.model.active_form,
                             component:  null
                         }
                     )
                     indexObjectSelector++

                     var components = mm.getActiveFormComponents()
                     for (  var ere = 0; ere < components.length; ere++  ) {
                         var component = components[ ere ]
                         objectListForSelector.push(
                             {
                                 value:              "" + indexObjectSelector,
                                 app:                null,
                                 form:               mm.model.active_form,
                                 component:          "  -  " + component.name,
                                 component_type:     component.base_component_id,
                                 component_index:    ere
                             }
                         )
                         if (mm.model.active_component_index == ere) {
                             selectedCodeObject = indexObjectSelector
                         }
                         indexObjectSelector++
                     }
                 }



                 //
                 //   get the list of properties
                 //


                  //
                  // get the app methods
                  //
                  if (mm.model.app_selected) {
                      methodListForSelector.push(
                          {
                              value:              "" + indexActionSelector,
                              app:                mm.edited_app_component_id,
                              form:               mm.model.active_form,
                              component:          null,
                              action_id:          "app_started_event",
                              action_name:        "Called when the app is started",
                              action_type:        "Event"
                          }
                      )
                      selectedCodeAction = indexActionSelector
                      indexActionSelector++


                  } else if (  isValidObject(mm.model.active_component_index)  ) {
                     var ccc        = mm.model.forms[mm.model.active_form].components[mm.model.active_component_index]
                     var properties = mm.getComponentProperties(  ccc.base_component_id  )

                     for (  var ere = 0;  ere < properties.length;  ere++  ) {
                         var property = properties[ ere ]
                         if (property.type == "Event") {
                             methodListForSelector.push(
                                 {
                                     value:              "" + indexActionSelector,
                                     app:                null,
                                     form:               mm.model.active_form,
                                     component:          ccc.name,
                                     action_id:          property.id,
                                     action_name:        property.name,
                                     action_type:        property.type,
                                     action_index:       ere
                                 }
                             )
                             if (property.id == property_id) {
                                 selectedCodeAction = indexActionSelector
                             }
                             indexActionSelector++
                         }
                     }

                      methodListForSelector.push(
                          {
                              value:              "" + indexActionSelector,
                              app:                null,
                              form:               mm.model.active_form,
                              component:          ccc.name,
                              action_id:          "load",
                              action_name:        "Load event",
                              action_type:        "Event",
                              action_index:       ere
                          })
                      if ( property_id == "load" ) {
                          selectedCodeAction = indexActionSelector
                      }
                      indexActionSelector++



                  // get the actions for the forms
                  } else if (  isValidObject(mm.model.active_form)  ) {
                      var ccc        = mm.model.forms[mm.model.active_form]

                      var properties = mm.getComponentProperties(  ccc.base_component_id  )


                       methodListForSelector.push(
                           {
                               value:              "" + indexActionSelector,
                               app:                null,
                               form:               mm.model.active_form,
                               component:          ccc.name,
                               action_id:          "form_activate",
                               action_name:        "Activate Event",
                               action_type:        "Event",
                               action_index:       ere
                           })
                       if ( property_id == "form_activate" ) {
                           selectedCodeAction = indexActionSelector
                       }
                       indexActionSelector++
                   }





                 selectCodeObject = new Selectr(
                     document.getElementById('select_code_object'),
                     {
                         renderOption:       mm.myDataRenderFunction,
                         renderSelection:    mm.myDataRenderFunction,
                         selectedValue:      selectedCodeObject,
                         data:               objectListForSelector,
                         customClass:       'my-custom-selectr',
                         searchable:         false
                     });

                 selectCodeAction = new Selectr(
                     document.getElementById('select_code_action'),
                     {
                         renderOption:       mm.actionRenderFunction,
                         renderSelection:    mm.actionRenderFunction,
                         selectedValue:      selectedCodeAction,
                         data:               methodListForSelector,
                         customClass:       'my-custom-selectr',
                         searchable:         false
                     });

                 document.getElementsByClassName("selectr-selected")[0].style.padding = "1px"
                 document.getElementsByClassName("selectr-selected")[0].style["border-top"] = "2px solid gray"
                 document.getElementsByClassName("selectr-selected")[0].style["border-left"] = "2px solid gray"

                 document.getElementsByClassName("selectr-selected")[1].style.padding = "1px"
                 document.getElementsByClassName("selectr-selected")[1].style["border-top"] = "2px solid gray"
                 document.getElementsByClassName("selectr-selected")[1].style["border-left"] = "2px solid gray"

                 document.getElementsByClassName("selectr-selected")[2].style.padding = "1px"
                 document.getElementsByClassName("selectr-selected")[2].style["border-top"] = "2px solid gray"
                 document.getElementsByClassName("selectr-selected")[2].style["border-left"] = "2px solid gray"

                 selectCodeObject.on('selectr.select', function(option) {
                     var dd = objectListForSelector[option.idx]
                     if (dd.component) {
                         mm.selectComponent(dd.component_index)
                         mm.editAsCode({
                             app_selected:           false,
                             active_form:            mm.model.active_form,
                             active_component_index: mm.model.active_component_index,
                             property_id:            "load"
                         })
                     } else if (dd.form) {
                         mm.selectForm(dd.form)
                         mm.editAsCode({
                             app_selected:           false,
                             active_form:            dd.form,
                             active_component_index: null,
                             property_id:            "form_activate"
                         })
                     } else if (dd.app) {
                         mm.select_app()
                         mm.editAsCode({
                             app_selected:           true,
                             active_form:            mm.model.active_form,
                             active_component_index: null,
                             property_id:            "app_started_event"

                         })
                     }
                 });

                 selectCodeAction.on('selectr.select', function(option) {
                     var dd = methodListForSelector[option.idx]
                     mm.editAsCode({
                         app_selected:           mm.app_selected,
                         active_form:            mm.model.active_form,
                         active_component_index: mm.model.active_component_index,
                         property_id:            dd.action_id
                     })
                 });


             },100)
             }
             ,

         getActiveFormComponents: function() {
             return this.model.forms[this.model.active_form].components
         },
        updateAllFormCaches: function() {
            var llf = Object.keys(this.model.forms)
            for (var ii = 0; ii < llf.length ; ii ++) {
                var formqq = this.model.forms[llf[ii]]
                if (formqq != null) {
                    this.updateFormCache(formqq.name)
                }
            }
        },

        gotoDragDropEditor: function() {
            this.design_mode_pane.type = "drag_drop";
            if (this.ui_code_editor) {
                if (this.ui_code_editor.completer) {
                    this.ui_code_editor.completer.detach()
                }
                this.ui_code_editor.destroy()
                this.ui_code_editor = null
            }
            this.model.active_component_detail_name = null
            this.model.active_component_detail_index = null

        }
        ,

        updateFormCache: function(formName) {
            var form = this.model.forms[formName]
            var components = form.components
            if (!isValidObject(this.form_runtime_info[formName])) {
                this.form_runtime_info[formName] = new Object()
            }
            this.form_runtime_info[formName].component_lookup_by_name = {}

            for (var gjh = 0; gjh < components.length; gjh ++) {
                var cc = components[gjh]
                if (isValidObject(cc)) {
                    this.form_runtime_info[formName].component_lookup_by_name[cc.name] = cc
                }
            }
        },


        chooseRight: function(ff) {
            this.right_mode = ff
        },


         //-------------------------------------------------------------------
         getForms: function() {
         //-------------------------------------------------------------------
             var forms = []
             var llf = Object.keys(this.model.forms)
             for (var ii = 0; ii < llf.length ; ii ++) {
                var form = this.model.forms[llf[ii]]
                if (form != null) {
                    forms.push(form)
                }
             }
             return forms
         },




         //-------------------------------------------------------------------
         setVBEditorProperty: function(event, property) {
         //-------------------------------------------------------------------
            var mm = this
         var val = event.target.value
         var type = null
         if (this.model.active_component_index != null) {
            type = "component"
         } else if ((this.model.active_component_index == null) && (this.model.active_form != null) && (!this.model.app_selected)) {
            type = "form"
         } else if (this.model.app_selected) {
            type = "app"
         }


            if (type == 'component') {
                this.model.forms[this.model.active_form].components[this.model.active_component_index][property.id] = val
                //this.generateCodeFromModel(   )
                this.refresh ++


            } else if (type == 'form') {
                if (property.id == "name" ) {
                    this.properties = []

                    var oldval = this.model.active_form
                    //alert("Rename form "  + oldval + " to " + val)

                    this.model.forms[val] = this.model.forms[oldval]
                    this.model.forms[val]["name"] = val

                    this.form_runtime_info[val] = this.form_runtime_info[oldval]


                    if (this.model.default_form == oldval) {
                        this.model.default_form = val
                    }
                    //this.model.active_form = val


                    mm.form_runtime_info[oldval] = null
                    mm.model.forms[oldval] = null
                    //alert(this.model.active_form)

                    //alj(this.form_runtime_info[val])
                    //mm.refresh ++
                    //mm.updateAllFormCaches()
                    mm.selectForm(val)

                } else {
                    this.model.forms[this.model.active_form][property.id] = val
                }

            } else if (type == 'app') {
                this.model[property.id] = val
            }

         },

         //-------------------------------------------------------------------
         getVBEditorProperty: function(property) {
         //-------------------------------------------------------------------
             var val = ""
             var type
             if (this.model.active_component_index != null) {
                type = "component"
             } else if ((this.model.active_component_index == null) && (this.model.active_form != null) && (!this.model.app_selected)) {
                type = "form"
             } else if (this.model.app_selected) {
                type = "app"
             }

            if (type == 'component') {
                val = this.model.forms[this.model.active_form].components[this.model.active_component_index][property.id]


            } else if (type == 'form') {
                val = this.model.forms[this.model.active_form][property.id]



            } else if (type == 'app') {
                val = this.model[property.id]
            }

            return val
         },

         //-------------------------------------------------------------------
         addProperty: function() {
         //-------------------------------------------------------------------
            var mm = this
            mm.add_property = true
            mm.new_property_id = ""
            mm.new_property_name = ""
         }
         ,

         //-------------------------------------------------------------------
         addPropertySave: function() {
         //-------------------------------------------------------------------
            var mm = this
            if ((mm.new_property_name.length == 0) || (mm.new_property_id.length == 0)) {
                alert("You must enter a property name and ID")
                return;
            }
            mm.add_property = false

            mm.model.app_properties.push({
                                            id:     mm.new_property_id,
                                            name:   mm.new_property_name,
                                            type:   "String"
                                            })

            mm.generateCodeFromModel( )
            setTimeout(function() {
                mm.refresh ++
                mm.select_app()
            }
            ,100)

         }
         ,


          //-------------------------------------------------------------------
          addPropertyCancel: function() {
          //-------------------------------------------------------------------
             var mm = this
             mm.add_property = false
          }
          ,



          //-------------------------------------------------------------------
          getComponentProperties: function(componentName) {
          //-------------------------------------------------------------------
                var compEvaled1 = component_cache[componentName]
                if (isValidObject(compEvaled1)) {
                     var compEvaled = compEvaled1.properties
                     if (isValidObject(compEvaled)) {
                         return compEvaled
                     }
                }

                return []
           }
          ,




         //-------------------------------------------------------------------
         selectForm: function(formId, showProps) {
         //-------------------------------------------------------------------

             var mm = this


             mm.model.active_component_index = null
             mm.model.app_selected = false
             mm.properties = []
             mm.properties.push({   id:     "name",   name:   "Name",   type:   "String"    })
             mm.properties.push({   id:     "width",   name:   "Width",   type:   "Number"    })
             mm.properties.push({   id:     "height",   name:   "Height",   type:   "Number"    })
             mm.properties.push({   id:     "form_activate",   name:   "Activate Event",   type:   "Event"    })
             mm.model.active_form = formId
             mm.refresh ++

             if (  mm.model.forms[  formId  ].form_activate && (!mm.design_mode)) {

                 if (!isValidObject(this.args)) {
                      mm.args = mm.model
                 }

                 var args = mm.args
                 var app = mm.model
                 var crt = mm.model.forms[formId].form_activate

                 var formEvent = {
                     type:               "form_event",
                     form_name:           formId,
                     code:                crt
                 }
                 mm.processControlEvent(formEvent)
             }
             mm.updatePropertySelector()
             if (isValidObject(showProps) && showProps) {
                 this.selected_pane = "properties";
                 this.chooseRight("properties");
             }

             mm.refresh ++
         },




        //-------------------------------------------------------------------
        //                        processControlEvent
        //
        // This is used to run user written event code
        //-------------------------------------------------------------------

        processControlEvent: async function(  eventMessage  ) {
            var mm = this
            if ((!mm.design_mode) && (mm.model)) {
                this.updateAllFormCaches()

                //
                // set up property access for all forms
                //

                var formHandler = {
                     get: function(target,name){
                         var formName = target.name
                         if (mm.model.forms[formName][name]) {
                             return mm.model.forms[formName][name]
                         }

                         if (mm.form_runtime_info[formName].component_lookup_by_name[name]) {
                             return mm.form_runtime_info[formName].component_lookup_by_name[name]
                         }

                         return "Not found"
                     }
                }
                var formEval = ""
                var allForms = this.getForms();
                for (var fi =0; fi < allForms.length ; fi ++) {
                     var aForm = allForms[fi]
                     formEval += ("var " + aForm.name +
                         " = new Proxy({name: '" + aForm.name + "'}, formHandler);")

                }
                eval(formEval)




                //
                // set up property access for all controls on this form
                //
                var allC = this.model.forms[this.model.active_form].components
                var cacc =""
                for (var xi =0; xi< allC.length ; xi ++) {
                     var comp = allC[xi]
                     cacc += ( "var " + comp.name + " = mm.form_runtime_info['" + this.model.active_form + "'].component_lookup_by_name['" + comp.name + "'];")
                }
                eval(cacc)




                if (eventMessage.type == "subcomponent_event") {
                    var fcc =
`(async function(){
${eventMessage.code}
})`


                    var thisControl = this.form_runtime_info[   this.model.active_form   ].component_lookup_by_name[   eventMessage.control_name   ]
                    if (isValidObject(thisControl)) {

                        if (isValidObject(thisControl.parent)) {
                            var cacc =""
                            cacc += ( "var parent = mm.form_runtime_info['" + this.model.active_form + "'].component_lookup_by_name['" + thisControl.parent + "'];")
                            eval(cacc)
                        }

                        var meCode =""
                        meCode += ( "var me = mm.form_runtime_info['" + this.model.active_form + "'].component_lookup_by_name['" + thisControl.name + "'];")
                        eval(meCode)

                        var appCode =""
                        appCode += ( "var app = mm.model;")
                        eval(appCode)


                        var debugFcc = getDebugCode(mm.model.active_form +"_"+eventMessage.control_name+"_"+eventMessage.sub_type,fcc,{skipFirstAndLastLine: true})
                        var efcc = eval(debugFcc)
                        efcc()

                    }

                    //
                    // form events
                    //
                    } else if (eventMessage.type == "form_event") {
                        var fcc =
`(async function(){
${eventMessage.code}
})`
                        var meCode =""
                        meCode += ( "var me = mm.model.forms['" + this.model.active_form + "'];")
                        eval(meCode)

                        var appCode =""
                        appCode += ( "var app = mm.model;")
                        eval(appCode)

                        var debugFcc = getDebugCode(this.model.active_form ,fcc,{skipFirstAndLastLine: true})
                        var efcc = eval(debugFcc)
                        efcc()
                    }





                     mm.refresh ++
                     mm.$forceUpdate();
                }

              },




         //-------------------------------------------------------------------
         allowDropEditor: function(ev) {
         //-------------------------------------------------------------------
             ev.preventDefault();
         },


          //-------------------------------------------------------------------
          dropEditor: async function (ev) {
          //-------------------------------------------------------------------
              ev.preventDefault();
              var mm = this

              var data2 = ev.dataTransfer.getData("message");
              var data = eval("(" + data2 + ")")

              var doc = document.documentElement;
              var left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0) ;
              var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);

              if (data.type == "resize_form_bottom_right") {
                var rrr = document.getElementById(this.vb_grid_element_id).getBoundingClientRect()

                var newWidth = (ev.clientX - 8)  - rrr.left ;
                var newHeight = (ev.clientY - 8) - rrr.top ;

                this.model.forms[this.model.active_form].width = Math.floor(newWidth)
                this.model.forms[this.model.active_form].height = Math.floor(newHeight)

                this.model.active_component_index = null
                mm.refresh ++

              } else if (data.type == "resize_form_right") {
                var rrr = document.getElementById(this.vb_grid_element_id).getBoundingClientRect()

                var newWidth = (ev.clientX - 8)  - rrr.left ;

                this.model.forms[this.model.active_form].width = Math.floor(newWidth)

                this.model.active_component_index = null
                mm.refresh ++

            } else if (data.type == "resize_form_bottom") {
                  var rrr = document.getElementById(this.vb_grid_element_id).getBoundingClientRect()

                  var newHeight = (ev.clientY - 8) - rrr.top ;

                  this.model.forms[this.model.active_form].height = Math.floor(newHeight)

                  this.model.active_component_index = null
                  mm.refresh ++
                }
          },

          setInfo: function(text) {
              this.$root.$emit('message', {
                  type:   "set_info_text",
                  text:    text
              })
          },


         //-------------------------------------------------------------------
         allowDrop: function(ev) {
         //-------------------------------------------------------------------
             //ev.preventDefault();
         },

         //-------------------------------------------------------------------
         drag: function(ev,message) {
         //-------------------------------------------------------------------
             var mm = this
             var doc = document.documentElement;
             var left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
             var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
             var rrr = ev.target.getBoundingClientRect()
             message.offsetX = (ev.clientX - rrr.left )
             message.offsetY = (ev.clientY - rrr.top )

             if (!isValidObject(ev.dataTransfer)) {
                return
             }
             ev.dataTransfer.setData("message",
                                     JSON.stringify(message,null,2));

         },



        showComponentDetailedDesignUi: async function(index) {
           var mm = this
           mm.design_mode_pane.type = "control_details_editor"

           this.model.active_component_detail_index = index;
           this.model.active_component_detail_name = this.model.forms[this.model.active_form].components[index].name;

           setTimeout(function() {
               mm.refresh ++
               mm.$forceUpdate();
           },400)
        },

         deleteComponent: async function(index) {
            var mm = this
            var thisComponentName = this.model.forms[this.model.active_form].components[index].name
            this.model.forms[this.model.active_form].components.splice(index, 1);
            var ccc = mm.model.forms[mm.model.active_form].components
            for (   var ytr = ccc.length - 1;    ytr >= 0;    ytr--   ) {
                var component = ccc[ytr]
                if (component.parent == thisComponentName) {
                    this.model.forms[this.model.active_form].components.splice(ytr, 1);
                }
            }

            this.refreshControlIndexes()
            this.selectForm(this.model.active_form)
            setTimeout(function() {
                mm.refresh ++
                mm.$forceUpdate();
            },400)
         },


         childDeleteComponent: function(index) {
             this.$root.$emit('message', {
                                             type:             "delete_design_time_component",
                                             component_index:   index
                                         })

             }
             ,
         childSelectComponent: function(index) {
             this.$root.$emit('message', {
                                             type:             "select_design_time_component",
                                             component_index:   index
                                         })

             }
             ,

         //-------------------------------------------------------------------
         drop: async function (ev) {
         //
         // This is called when something happens on the main drag and drop
         // grid
         //
         //-------------------------------------------------------------------
             ev.preventDefault();
             var mm = this

             if (this.oldCursor) {
                    this.cursorSource.style.cursor = this.oldCursor
                    this.oldCursor = null
                    this.cursorSource = null
             }

             var data2 = ev.dataTransfer.getData("message");
             var data = eval("(" + data2 + ")")

             var newItem2 = new Object()
             var rrr2 = document.getElementById(this.vb_grid_element_id).getBoundingClientRect()
             newItem2.leftX = (ev.clientX  - rrr2.left)  - data.offsetX;
             newItem2.topY = (ev.clientY  - rrr2.top)   - data.offsetY;

             var parentId = null
             var parentName = null
             var parentOffsetX = 0
             var parentOffsetY = 0
             var parentOffsetWidth = 0
             var parentOffsetHeight = 0
             var parentContainer = this.getContainerForPoint(  newItem2.leftX,  newItem2.topY  )
             if (parentContainer) {
                 parentOffsetX = parentContainer.x
                 parentOffsetY = parentContainer.y
                 parentId      = parentContainer.base_component_id
                 parentName    = parentContainer.name
             }


             if (data.type == "add_component") {
                 var rrr = document.getElementById(this.vb_grid_element_id).getBoundingClientRect()
                 var xx = ((ev.clientX  - rrr.left)  - data.offsetX) - parentOffsetX  - 10;
                 var yy = ((ev.clientY  - rrr.top)   - data.offsetY) - parentOffsetY - 10;
                 await mm.addComponent(xx,yy,data, parentId, parentName, parentOffsetX, parentOffsetY,[])
                 this.highlighted_control = null

             } else if (data.type == "move_component") {
                var rrr = document.getElementById(this.vb_grid_element_id).getBoundingClientRect()

                var newLeftX = (ev.clientX  - rrr.left) - data.offsetX;
                var newTopY = (ev.clientY  - rrr.top) - data.offsetY;

                if (!this.model.forms[this.model.active_form].components[data.index].is_container) {
                    if (parentId) {
                       this.model.forms[this.model.active_form].components[data.index].parent = parentName
                       newLeftX = newLeftX - parentOffsetX
                       newTopY = newTopY - parentOffsetY
                    } else {
                       this.model.forms[this.model.active_form].components[data.index].parent = null
                    }
                }

                if (newLeftX < 0) {
                    newLeftX = 0
                }
                if (newTopY < 0) {
                    newTopY = 0
                }
                if ((newLeftX + this.model.forms[this.model.active_form].components[data.index].width)
                        > this.model.forms[this.model.active_form].width) {
                    newLeftX = this.model.forms[this.model.active_form].width - this.model.forms[this.model.active_form].components[data.index].width
                }
                if ((newTopY + this.model.forms[this.model.active_form].components[data.index].height)
                        > this.model.forms[this.model.active_form].height) {
                    newTopY = this.model.forms[this.model.active_form].height - this.model.forms[this.model.active_form].components[data.index].height
                }

                this.model.forms[this.model.active_form].components[data.index].leftX = Math.floor(newLeftX)
                this.model.forms[this.model.active_form].components[data.index].topY = Math.floor(newTopY)
                this.model.active_component_index = data.index


             } else if (data.type == "resize_top_left") {
                 var rrr = document.getElementById(this.vb_grid_element_id).getBoundingClientRect()
                 var oldX = this.model.forms[this.model.active_form].components[data.index].leftX
                 var oldY = this.model.forms[this.model.active_form].components[data.index].topY

                 var newLeftX = ev.clientX  + 2 - rrr.left ;
                 var newTopY = ev.clientY  + 2 - rrr.top ;

                 if (!this.model.forms[this.model.active_form].components[data.index].is_container) {
                     if (parentId) {
                        this.model.forms[this.model.active_form].components[data.index].parent = parentName
                        newLeftX = newLeftX - parentOffsetX
                        newTopY = newTopY - parentOffsetY
                     } else {
                        this.model.forms[this.model.active_form].components[data.index].parent = null
                     }
                 }

                 if (newLeftX < 0) {
                     newLeftX = 0
                 }
                 if (newTopY < 0) {
                     newTopY = 0
                 }

                 this.model.forms[this.model.active_form].components[data.index].leftX = Math.floor(newLeftX)
                 this.model.forms[this.model.active_form].components[data.index].topY = Math.floor(newTopY)
                 var diffX = this.model.forms[this.model.active_form].components[data.index].leftX - oldX
                 var diffY = this.model.forms[this.model.active_form].components[data.index].topY - oldY
                 this.model.forms[this.model.active_form].components[data.index].width -= Math.floor(diffX)
                 this.model.forms[this.model.active_form].components[data.index].height -= Math.floor(diffY)

                 this.model.active_component_index = data.index

             } else if (data.type == "resize_left") {
                 var rrr = document.getElementById(this.vb_grid_element_id).getBoundingClientRect()
                 var oldX = this.model.forms[this.model.active_form].components[data.index].leftX

                 var newLeftX = ev.clientX  + 2 - rrr.left ;


                 if (!this.model.forms[this.model.active_form].components[data.index].is_container) {
                     if (parentId) {
                        this.model.forms[this.model.active_form].components[data.index].parent = parentName
                        newLeftX = newLeftX - parentOffsetX
                        newTopY = newTopY - parentOffsetY
                     } else {
                        this.model.forms[this.model.active_form].components[data.index].parent = null
                     }
                 }

                 if (newLeftX < 0) {
                     newLeftX = 0
                 }

                 this.model.forms[this.model.active_form].components[data.index].leftX = Math.floor(newLeftX)
                 var diffX = this.model.forms[this.model.active_form].components[data.index].leftX - oldX
                 this.model.forms[this.model.active_form].components[data.index].width -= Math.floor(diffX)

                 this.model.active_component_index = data.index




             } else if (data.type == "resize_top") {
                 var rrr = document.getElementById(this.vb_grid_element_id).getBoundingClientRect()
                 var oldY = this.model.forms[this.model.active_form].components[data.index].topY

                 var newTopY = ev.clientY  + 2 - rrr.top ;

                 if (!this.model.forms[this.model.active_form].components[data.index].is_container) {
                     if (parentId) {
                        this.model.forms[this.model.active_form].components[data.index].parent = parentName
                        newLeftX = newLeftX - parentOffsetX
                        newTopY = newTopY - parentOffsetY
                     } else {
                        this.model.forms[this.model.active_form].components[data.index].parent = null
                     }
                 }

                 if (newTopY < 0) {
                     newTopY = 0
                 }

                 this.model.forms[this.model.active_form].components[data.index].topY = Math.floor(newTopY)
                 var diffY = this.model.forms[this.model.active_form].components[data.index].topY - oldY
                 this.model.forms[this.model.active_form].components[data.index].height -= Math.floor(diffY)

                 this.model.active_component_index = data.index



             } else if (data.type == "resize_top_right") {
                 var rrr = document.getElementById(this.vb_grid_element_id).getBoundingClientRect()
                 var newX = ev.clientX  - 10 - rrr.left ;
                 var newY = ev.clientY + 2 - rrr.top;

                 if (!this.model.forms[this.model.active_form].components[data.index].is_container) {
                     if (parentId) {
                        this.model.forms[this.model.active_form].components[data.index].parent = parentName
                        newX = newX - parentOffsetX
                        newY = newY - parentOffsetY
                     } else {
                        this.model.forms[this.model.active_form].components[data.index].parent = null
                     }
                 }

                 this.model.forms[this.model.active_form].components[data.index].width =
                    Math.floor(newX - this.model.forms[this.model.active_form].components[data.index].leftX)

                 var newHeight = (this.model.forms[this.model.active_form].components[data.index].topY +
                                    this.model.forms[this.model.active_form].components[data.index].height) - newY
                 this.model.forms[this.model.active_form].components[data.index].topY = Math.floor(newY)
                 this.model.forms[this.model.active_form].components[data.index].height = Math.floor(newHeight)


                 this.model.active_component_index = data.index

             } else if (data.type == "resize_bottom_left") {
                 var rrr = document.getElementById(this.vb_grid_element_id).getBoundingClientRect()
                 var newX = ev.clientX + 8 - rrr.left ;
                 var newY = ev.clientY - 12 - rrr.top ;

                 if (!this.model.forms[this.model.active_form].components[data.index].is_container) {
                     if (parentId) {
                        this.model.forms[this.model.active_form].components[data.index].parent = parentName
                        newX = newX - parentOffsetX
                        newY = newY - parentOffsetY
                     } else {
                        this.model.forms[this.model.active_form].components[data.index].parent = null
                     }
                 }
                 var newWidth = (this.model.forms[this.model.active_form].components[data.index].leftX + this.model.forms[this.model.active_form].components[data.index].width) - newX
                 var newHeight = newY - this.model.forms[this.model.active_form].components[data.index].topY

                 this.model.forms[this.model.active_form].components[data.index].leftX = Math.floor(newX)
                 this.model.forms[this.model.active_form].components[data.index].width = Math.floor(newWidth)
                 this.model.forms[this.model.active_form].components[data.index].height = Math.floor(newHeight)

                 this.model.active_component_index = data.index

             } else if (data.type == "resize_right") {

                 var rrr = document.getElementById(this.vb_grid_element_id).getBoundingClientRect()
                 var newX = ev.clientX  - rrr.left - 10;

                 if (!this.model.forms[this.model.active_form].components[data.index].is_container) {
                     if (parentId) {
                        this.model.forms[this.model.active_form].components[data.index].parent = parentName
                        newX = newX - parentOffsetX
                     } else {
                        this.model.forms[this.model.active_form].components[data.index].parent = null
                     }
                 }

                 var newWidth = newX - this.model.forms[this.model.active_form].components[data.index].leftX
                 this.model.forms[this.model.active_form].components[data.index].width = Math.floor(newWidth)

                 this.model.active_component_index = data.index



             } else if (data.type == "resize_bottom_right") {

                 var rrr = document.getElementById(this.vb_grid_element_id).getBoundingClientRect()
                 var newX = ev.clientX  - rrr.left - 10;
                 var newY = ev.clientY - rrr.top - 12;

                 if (!this.model.forms[this.model.active_form].components[data.index].is_container) {
                     if (parentId) {
                        this.model.forms[this.model.active_form].components[data.index].parent = parentName
                        newX = newX - parentOffsetX
                        newY = newY - parentOffsetY
                     } else {
                        this.model.forms[this.model.active_form].components[data.index].parent = null
                     }
                 }

                 var newWidth = newX - this.model.forms[this.model.active_form].components[data.index].leftX
                 this.model.forms[this.model.active_form].components[data.index].width = Math.floor(newWidth)

                 var newHeight = newY - this.model.forms[this.model.active_form].components[data.index].topY
                 this.model.forms[this.model.active_form].components[data.index].height = Math.floor(newHeight)

                 this.model.active_component_index = data.index

             } else if (data.type == "resize_bottom") {

                 var rrr = document.getElementById(this.vb_grid_element_id).getBoundingClientRect()
                 var newY = ev.clientY - rrr.top - 12;

                 if (!this.model.forms[this.model.active_form].components[data.index].is_container) {
                     if (parentId) {
                        this.model.forms[this.model.active_form].components[data.index].parent = parentName
                        newY = newY - parentOffsetY
                     } else {
                        this.model.forms[this.model.active_form].components[data.index].parent = null
                     }
                 }

                 var newHeight = newY - this.model.forms[this.model.active_form].components[data.index].topY
                 this.model.forms[this.model.active_form].components[data.index].height = Math.floor(newHeight)

                 this.model.active_component_index = data.index
             }


             this.selectComponent(this.model.active_component_index)
             this.refresh ++



         },

         //-------------------------------------------------------------------
         get_default_app_propeties: function() {
            var mm = this
            return [
                {   id:     "id",   name:   "ID",   type:   "String" , readonly: true,
                     get_fn: function() {
                        return mm.edited_app_component_id }
                 }
                 ,

                 {   id:     "default_form",       name:   "Load form on startup",   type:   "String"}
                 ,

                 {   id:     "app_started_event",  name:   "Called when the app is started",   type:   "Event"}

            ]
         }
         ,




         //-------------------------------------------------------------------
         //                             select_app
         //
         //
         //-------------------------------------------------------------------

         select_app: function() {
            var mm = this

            this.model.active_component_index   = null
            this.model.app_selected             = true
            this.active_property_index          = null

            this.properties                     = mm.get_default_app_propeties()

            if (this.model.app_properties) {
                this.properties = this.properties.concat(this.model.app_properties)
            }
            this.updatePropertySelector()

            this.refresh ++
         }
         ,





         //-------------------------------------------------------------------
         //                        myDataRenderFunction
         //
         //
         //-------------------------------------------------------------------

         myDataRenderFunction: function(data) {
             if (!isValidObject(data)) {
                 return "<div></div>"
             }

             var center = ""
             if (data.app) {
                center = "<b style='font-family:verdana,helvetica;font-size: 13px;'>" + (data.app?data.app:data.form) + "</b> "

             } else if (data.component) {
                 center = "<b style='font-family:verdana,helvetica;font-size: 13px;'>" + data.component + "</b> " + data.component_type
             } else if (data.form) {
                 center = "<b style='font-family:verdana,helvetica;font-size: 13px;'>" + data.form + "</b> "
             }

             var template =
               "<div  style='font-weight:normal;color:black;overflow:hidden ;text-overflow: ellipsis;border-radius: 1px;margin: 0px;padding:0px;border:0px;font-family:verdana,helvetica;font-size: 13px;'>" +
                    center +
               "</div>";
             return template;
         },


         actionRenderFunction: function(data) {
            if (!isValidObject(data)) {
                return "<div></div>"
            }

             var center = ""

             center = "<b style='font-family:verdana,helvetica;font-size: 13px;'>" + data.action_id + "</b> " + data.action_name

             var template =
               "<div  style='font-weight:normal;color:black;overflow:hidden ;text-overflow: ellipsis;border-radius: 1px;margin: 0px;padding:0px;border:0px;font-family:verdana,helvetica;font-size: 13px;'>" +
                    center +
               "</div>";
             return template;
         },





        // -------------------------------------------------------------------
        //                          updatePropertySelector
        //
        // This updates the property selector on the right of the editor,
        // and it uses the currently selected object to figure out what
        // to display
        // -------------------------------------------------------------------

        updatePropertySelector: function() {

            var mm = this

            //
            // if we are not in edit mode then do nothing
            //

            if (!designMode){
                return
            }


            //
            // If the property selector is not available then do nothing
            //

            if (!document.getElementById("property_selector_parent")) {
                return
            }




            //
            // Set up the property selector
            //

            document.getElementById("property_selector_parent").innerHTML=' <select id=property_selector ></select>'

            var sdata           = []
            var indexProp       = 0
            var selectedItem    = null

            if (mm.model.app_selected || (!isValidObject(mm.model.active_component_index))) {

                if (mm.edited_app_component_id) {
                    sdata.push(
                        {
                            value: "" + indexProp,
                            app: mm.edited_app_component_id,
                            form: null,
                            component: null
                        })
                }

                if (mm.model.app_selected) {
                    selectedItem = indexProp
                }
                indexProp++

                var forms = mm.getForms()
                for (  var ere = 0; ere < forms.length; ere++  ) {
                    var form = forms[ ere ]
                    sdata.push(
                        {
                            value:      "" + indexProp,
                            app:        null,
                            form:       form.name,
                            component:  null
                        }
                    )
                    if ((!mm.model.app_selected) && (form.name == mm.model.active_form)) {
                        selectedItem = indexProp
                    }
                    indexProp++
                }

            } else if (isValidObject(mm.model.active_component_index)) {

                sdata.push(
                    {
                        value:      "" + indexProp,
                        app:        null,
                        form:       mm.model.active_form,
                        component:  null
                    }
                )
                indexProp++

                var components = mm.getActiveFormComponents()
                for (  var ere = 0; ere < components.length; ere++  ) {
                    var component = components[ ere ]
                    sdata.push(
                        {
                            value:              "" + indexProp,
                            app:                null,
                            form:               mm.model.active_form,
                            component:          component.name,
                            component_type:     component.base_component_id,

                            component_index:    ere
                        }
                    )
                    if (mm.model.active_component_index == ere) {
                        selectedItem = indexProp
                    }
                    indexProp++
                }
            }

            //
            //   selector for property inspector
            //
            selectProp = new Selectr(
                document.getElementById('property_selector'),
                {
                	renderOption: mm.myDataRenderFunction,
                    renderSelection: mm.myDataRenderFunction,
            		selectedValue: selectedItem,
                    data: sdata,
                    customClass: 'my-custom-selectr',
                    searchable: false
                });

            document.getElementsByClassName("selectr-selected")[0].style.padding = "1px"
            document.getElementsByClassName("selectr-selected")[0].style["border-top"] = "2px solid gray"
            document.getElementsByClassName("selectr-selected")[0].style["border-left"] = "2px solid gray"

            selectProp.on('selectr.select', function(option) {
                var dd = sdata[option.idx]
                if (dd.component) {
                    mm.selectComponent(dd.component_index)
                } else if (dd.form) {
                    mm.selectForm(dd.form)
                } else if (dd.app) {
                    mm.select_app()
                }
            });


         },


         existsProp: function(compEvaled,propName) {
            for (var eee = 0 ;eee < compEvaled.length; eee++) {
                if (compEvaled[eee].id == propName) {
                    return true
                }
            }
            return false
         }
         ,
         //-------------------------------------------------------------------
         selectComponent: async function(index, showProps) {
         //-------------------------------------------------------------------
            if (!this.design_mode) {
                return
            }
            var mm = this

            if (index == null) {
                return
            }
            this.active_property_index = null
            this.model.app_selected = false
            this.model.active_component_index = index
            this.properties = []

            var compEvaled = this.getComponentProperties(this.model.forms[this.model.active_form].components[index].base_component_id)

            this.properties.push({   id:     "name",   name:   "Name",   type:   "String"    })
            this.properties.push({   id:     "base_component_id",   name:   "Type",   type:   "String" , readonly: true   })
            this.properties.push({   id:     "leftX",   name:   "X",   type:   "Number"    })
            this.properties.push({   id:     "topY",   name:   "Y",   type:   "Number"    })
            if (!this.existsProp(compEvaled,"width")) {
                this.properties.push({   id:     "width",   name:   "Width",   type:   "Number"    })
            }
            if (!this.existsProp(compEvaled,"height")) {
                this.properties.push({   id:     "height",   name:   "Height",   type:   "Number"    })
            }
            if (!this.existsProp(compEvaled,"load")) {
                this.properties.push({   id:     "load",   name:   "Load Event",   type:   "Event"    })
            }



            this.properties = this.properties.concat(compEvaled)
            this.updatePropertySelector()
            if (isValidObject(showProps) && showProps) {
                this.selected_pane = "properties";
                this.chooseRight("properties");
            }
            this.refresh ++
         },




         //-------------------------------------------------------------------
         addForm: function() {
         //-------------------------------------------------------------------
            var mm = this
            mm.model.active_component_index = null
            mm.properties = []
            this.properties.push({   id:     "name",   name:   "Name",   type:   "String"    })
            this.properties.push({   id:     "width",   name:   "Width",   type:   "Number"    })
            this.properties.push({   id:     "height",   name:   "Height",   type:   "Number"    })
            this.properties.push({   id:     "form_activate",   name:   "Activate Event",   type:   "Event"    })

            mm.model.max_form ++
            var newFormName = "form_" + mm.model.max_form
            mm.model.forms[newFormName] = {
                name: newFormName,
                components: [],
                width: 300,
                height: 300
            }
            mm.model.active_form = newFormName
            mm.refresh ++
         }
         ,




        //-------------------------------------------------------------------
        moveUp: function(   fieldId   ) {
        //-------------------------------------------------------------------
            var mm = this
            var itemD = null
            for (var tt=0; tt < mm.model.forms[mm.model.active_form].fields.length ; tt++) {
                var ciurr = mm.model.forms[mm.model.active_form].fields[tt]
                if (ciurr.id == fieldId) {
                    itemD = ciurr
                }
            }
            if (itemD) {
                var index = mm.model.forms[mm.model.active_form].fields.indexOf(  itemD  );
                if (index > -1) {
                  mm.model.fields.splice(index, 1);
                  mm.model.fields.splice(index - 1, 0, itemD);
                }

            }

        },

        //-------------------------------------------------------------------
        moveDown: function(   fieldId   ) {
        //-------------------------------------------------------------------
            var mm = this
            var itemD = null
            for (var tt=0; tt < mm.model.forms[mm.model.active_form].fields.length ; tt++) {
                var ciurr = mm.model.forms[mm.model.active_form].fields[tt]
                if (ciurr.id == fieldId) {
                    itemD = ciurr
                }
            }
            if (itemD) {
                var index = mm.model.forms[mm.model.active_form].fields.indexOf(  itemD  );
                if (index > -1) {
                  mm.model.fields.splice(index, 1);
                  mm.model.fields.splice(index + 1, 0, itemD);
                }

            }

        },

        //-------------------------------------------------------------------
        deleteField: function(   fieldId   ) {
        //-------------------------------------------------------------------
            var mm = this
            var itemD = null
            for (var tt=0; tt < mm.model.forms[mm.model.active_form].fields.length ; tt++) {
                var ciurr = mm.model.forms[mm.model.active_form].fields[tt]
                if (ciurr.id == fieldId) {
                    itemD = ciurr
                }
            }
            if (itemD) {
                var index = mm.model.forms[mm.model.active_form].fields.indexOf(  itemD  );
                if (index > -1) {
                  mm.model.fields.splice(index, 1);
                }
            }
        },





        //-------------------------------------------------------------------
        getText: async function() {
        //-------------------------------------------------------------------
            //console.log("2) VB: getText")
            await this.generateCodeFromModel()
            return this.text
        },




        //-------------------------------------------------------------------
        setText: function(textValue) {
        //-------------------------------------------------------------------
            //console.log("start setText")
            var mm = this
            this.text =  textValue
            var json2 = this.getJsonModelFromCode(  textValue  )
            //console.log("setText: mm.model = json2")
            mm.edited_app_component_id = saveHelper.getValueOfCodeString(textValue, "base_component_id")

            mm.model = json2
            mm.updatePropertySelector()
            mm.refresh ++
            //console.log("end setText")
        }
        ,
        //-------------------------------------------------------------------
        getJsonModelFromCode: function(  codeV  ) {
        //-------------------------------------------------------------------
            var mm = this
            mm.edited_app_component_id = saveHelper.getValueOfCodeString(codeV, "base_component_id")
            var json2 = saveHelper.getValueOfCodeString(codeV,"formEditor",")//formEditor")
            return json2
        }

        ,
        //-------------------------------------------------------------------
        generateCodeFromModel: async function(  ) {
        //-------------------------------------------------------------------
            var mm = this
            if (this.in_generate_code_from_model) {
                return
            }
            if (!this.design_mode) {
                return
            }
            this.in_generate_code_from_model = true
            if (online && this.design_mode) {

            //console.log("start generateCodeFromModel")

            var startIndex = this.text.indexOf("//** gen_" + "start **//")
            var endIndex = this.text.indexOf("//** gen_" + "end **//")


            var sql =    "select  cast(code as text)  as  code  from  system_code  where " +
                         "        base_component_id = 'vb_editor_component'   and   code_tag = 'LATEST' "

            var results = await callApp({ driver_name:    "systemFunctions2",method_name:    "sql"},
                {   sql: sql  })

            var editorCode = results[0].code
            var stt = "//*** COPY_" + "START ***//"
            var editorCodeToCopyStart = editorCode.indexOf(stt) + stt.length
            var editorCodeToCopyEnd = editorCode.indexOf("//*** COPY_" + "END ***//")
            var editorCodeToCopy = editorCode.substring(editorCodeToCopyStart, editorCodeToCopyEnd)





            this.text = this.text.substring(0,startIndex) +

                `//** gen_start **//
                var mm = null
                var texti = null
                var designMode = false
                var runtimeMode = true
                Vue.component('${this.edited_app_component_id}', {`

                + editorCodeToCopy +

                `,
                data: function () {
                  return {
                      uid2:                        null,
                      vb_grid_element_id:          null,
                      vb_editor_element_id:        null,
                      design_mode: designMode,
                      design_mode_pane:            {},
                      local_app:                    false,
                      refresh: 0,
                      runtime_mode: runtimeMode,
                      component_usage:             new Object(),
                      ui_code_editor: null,
                      form_runtime_info: {},
                      text: texti,
                      model: `
                      + JSON.stringify( mm.model,

                                        function(key, value) {
                                              if (typeof value === 'string') {
                                                return  value.toString()
                                              }
                                              return value;
                                        },

                                        2) +

                  `}
                }
              })`

              +
              this.text.substring(endIndex)





              var subComponents = saveHelper.getValueOfCodeString(this.text, "sub_components")
              var subComponentsMap = {}


              if (subComponents) {
                  this.text = saveHelper.deleteCodeString(this.text, "sub_components")
              } else {
                  subComponents = []
              }

              for (var tt = 0; tt < subComponents.length ; tt++) {
                  var subComponentName = subComponents[tt]
                  subComponentsMap[subComponentName] = {}
              }
              var forms = mm.getForms()


              for (  var formIndex = 0;  formIndex < forms.length;  formIndex ++  ) {
                   var formName = forms[formIndex].name

                   for (  var compenentInFormIndex = 0;  compenentInFormIndex < mm.model.forms[formName].components.length;  compenentInFormIndex ++  ) {
                       var newItem = mm.model.forms[formName].components[compenentInFormIndex]
                       if (newItem && newItem.base_component_id) {
                           if (!subComponentsMap[newItem.base_component_id]) {
                              subComponentsMap[newItem.base_component_id] = {}
                           }
                       }
                   }

                   var newListOfSubcomponents = Object.keys(  subComponentsMap  )
                   this.text = saveHelper.insertCodeString(this.text, "sub_components", newListOfSubcomponents)

              }


              this.text = saveHelper.deleteCodeString(  this.text, "control_type")

              this.text = saveHelper.insertCodeString(  this.text,
                                                          "control_type",
                                                          "SYSTEM")

              this.text = saveHelper.deleteCodeString(  this.text, "formEditor", ")//form" + "Editor")

              this.text = saveHelper.insertCodeString(  this.text,
                                                        "formEditor",
                                                        mm.model,
                                                        ")//form" + "Editor")


               this.text = saveHelper.deleteCodeString(  this.text, "properties", ")//prope" + "rties")

               this.text = saveHelper.insertCodeString(  this.text,
                                                          "properties",
                                                          mm.model.app_properties,
                                                          ")//prope" + "rties")

            //console.log("end generateCodeFromModel.Done")
            this.in_generate_code_from_model = false
            return
            }
        }

     }
     ,
                data: function () {
                  return {
                      uid2:                        null,
                      vb_grid_element_id:          null,
                      vb_editor_element_id:        null,
                      design_mode: designMode,
                      design_mode_pane:            {},
                      local_app:                    false,
                      refresh: 0,
                      runtime_mode: runtimeMode,
                      component_usage:             new Object(),
                      ui_code_editor: null,
                      form_runtime_info: {},
                      text: texti,
                      model: {
  "next_id": 7,
  "max_form": 5,
  "active_form": "Form_1",
  "default_form": "Form_1",
  "app_selected": false,
  "id": "vb_blank",
  "next_component_id": 112,
  "app_properties": [
    {
      "id": "test",
      "name": "test",
      "type": "String"
    }
  ],
  "forms": {
    "Form_1": {
      "name": "Form_1",
      "width": 372,
      "height": 355,
      "components": [
        {
          "leftX": 24,
          "topY": 25,
          "name": "aaa",
          "base_component_id": "label_control",
          "width": 320,
          "height": 156,
          "text": "Drag controls from the left onto this grid and then press the 'Save changes' button above",
          "background_color": "",
          "parent": null
        }
      ]
    },
    "Form_2": {
      "name": "Form_2",
      "components": [],
      "width": 300,
      "height": 300
    }
  },
  "active_component_index": null,
  "active_component_detail_name": null,
  "active_component_detail_index": null
}}
                }
              })//** gen_end **//
/*
allowAccessToAppBaseComponentIds([""])
allowAccessToAppTypes(["database_reader"])
sqlite(
[
  "Create the initial item table",
  ["CREATE TABLE items (id	TEXT, name	TEXT);",
   "alter TABLE items add column time INTEGER;"]
   ,
   "Add a column for the user name",
  ["alter TABLE items add column user TEXT;"]

])//sqlite
grant_full_db_access_to(["todo_app_reader"])
*/
}
