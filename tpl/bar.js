var Bar = Vue.extend({
	data: function(){
        return {
            liyi: 'me'
        };
	},
    template: 
    	'<style>'+
    		'.list-block{ margin:0}'+
    	'</style>'+
    	'<div class="list-block">'+
		    '<ul>'+
		      '<li class="item-content item-link">'+
		        '<div class="item-media"><i class="icon icon-f7"></i></div>'+
		        '<div class="item-inner">'+
		          '<div class="item-title">商品名称</div>'+
		        '</div>'+
		      '</li>'+
		      '<li class="item-content item-link">'+
		        '<div class="item-media"><i class="icon icon-f7"></i></div>'+
		        '<div class="item-inner">'+
		          '<div class="item-title">型号</div>'+
		        '</div>'+
		      '</li>'+
		   ' </ul>'+
		  '</div>'
})