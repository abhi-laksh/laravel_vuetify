require("./bootstrap");
window.Vue = require("vue");
import vuetify from "./plugins/vuetify";
import router from "./plugins/router";
import App from "./App.vue";

const createComponeent = function(file) {
    var config = globalComponents(file).default || globalComponents(file);
    var fileName =
        config.name || file.replace(/^.+\//, "").replace(/\.\w+$/, "");
    return Vue.component(fileName, config); 
};   

Vue.component(
    "example-component",
    require("./components/ExampleComponent.vue").default
);

Vue.component(
    "vuetify-btn",
    require("./App.vue").default
);

const globalComponents = require.context(
    "./components/global/",
    false,
    /^.\/\bBase[A-Z]\w+\.vue\b/i
);

globalComponents.keys().map(createComponeent);

const app = new Vue({
    // render: function(h) {
    //     return h(App);
    // },
    el: "#app",
    vuetify,
    router
});