async function(args) {
/*
created_timestamp(-1)
base_component_id("homepage_2")
is_app(true)
display_name("Homepage 2")
uses_javascript_librararies(["aframe"])
description('Homepage 1')
load_once_from_file(true)
logo_url("https://moe.it.slotshaven.dk/wp/wp-content/uploads/2017/11/homepage.png")
*/

    await load("form_subscribe_to_appshare")
    Vue.component('homepage_2', {

      template:
`<div  style='background-color: white; color: black; padding: 10px'>
    <h2><b>Create amazing interactive forms for your website</b></h2>
      <ul style='background-color: black; color: white;'>
          <li style='background-color: black; color: white;'>Build forms in under 5 minutes in Javascript</li>
          <li style='background-color: black; color: white;'>Embed forms easily into your website</li>
          <li style='background-color: black; color: white;'>Many templates available to get started easily</li>
          <li style='background-color: black; color: white;'>Use online or host it in your Enterprise</li>
      </ul>
</div>`
    })
}
