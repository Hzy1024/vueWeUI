var Foo = require("../tpl/foo.vue");
var Bar = require("../tpl/bar.vue");
var vy = require("../tpl/vy.vue");
var zoev = require("../tpl/zoev.vue");
module.exports = function(router){
	router.map({
		'/': {
	        component: Foo
	    },
	    '/foo': {
	        component: Foo
	    },
	    '/bar': {
	        component: Bar
	    },
	    '/vy': {
	        component: vy
	    },
	    '/zoev': {
	        component: zoev
	    }
	})
}