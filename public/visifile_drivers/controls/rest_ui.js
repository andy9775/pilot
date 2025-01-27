function(args) {
/*
is_app(true)
control_type("VB")
display_name("REST API call control")
description("This will return the REST APIn call control")
base_component_id("rest_control")
load_once_from_file(true)
visibility("PRIVATE")
read_only(true)
properties(
    [
        {
            id:         "text",
            name:       "Dev text",
            default:    "REST API Call",
            type:       "String"
        }
        ,
        {
            id:         "width",
            name:       "Width",
            default:    140,
            type:       "Number"
        }
        ,
        {
            id:         "height",
            name:       "Height",
            default:    40,
            type:       "Number"
        }
        ,
        {
            id:         "callRestApi",
            pre_snippet:    `await `,
            snippet:    `callRestApi("http://INSERT_URL_HERE")`,
            name:       "Execute Command",
            type:       "Action"
        }
        ,
        {
            id:         "URL",
            name:       "URL",
            default:    "https://raw.githubusercontent.com/typicode/demo/master/db.json",
            type:       "String"
        }


    ]
)//properties
logo_url("/driver_icons/rest.png")
*/

    Vue.component("rest_control",{

        props: ["meta", "args","design_mode","refresh"]

        ,



        template:

`<div v-bind:style='"height:100%;width:100%; border: 0px;" +
    "background-color: "+    args["background_color"]  +  ";"'>

    <div v-if="design_mode">
        {{args.text}}
    </div>

    <div v-bind:style='"position:relative;width:100%;height:100%;border: 0px solid gray;background-color: "+    args["background_color"]  +  ";"'>
        <div style="position:absolute;top:0px">
            <slot v-bind:refresh='refresh'>
            </slot>
        </div>
    </div>
</div>`

        ,

        data: function() {
            return {
            }
        }

        ,

        mounted: async function() {
            registerComponent(this)

        }
        ,


        methods: {
            callRestApiInternal: async function() {
                var mm = this

                var result = await callFunction(
                {
                    driver_name: "rest_call_service",
                    method_name: "rest_call_service"
                }
                ,
                {
                    URL:    mm.args.URL
                })


                if (result) {
                    return result
                }
                return null
            }
            ,


            callRestApi: async function(urlToCall) {

                var mm = this
                if (urlToCall) {
                    mm.args.URL = urlToCall
                }
                var qwe = await this.callRestApiInternal()
                return qwe
            }

        }




    })
}
