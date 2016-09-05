var Vue = require("./js/vue.1.0.11.min");
var VueRouter = require("./js/vue-route.min");
var resource = require("./js/vue-resource.min");
var $ = require("zepto");
require("./css/weui.css");
require("./css/font-awesome.css");
require("./css/demo.css");

Vue.use(VueRouter);
Vue.use(resource);

var App = Vue.extend();
var router = new VueRouter();

require("./js/route")(router);
router.start(App,"#app");