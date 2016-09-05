var Foo = Vue.extend({ 
	data: function(){ 
		return {
			"lists": [
				{"url":"#page2","img":"img/1.jpg","title":"标题1","sub_title":"子标题1"},
				{"url":"#page2","img":"img/1.jpg","title":"标题2","sub_title":"子标题2"},
				{"url":"#page2","img":"img/1.jpg","title":"标题2","sub_title":"子标题2"}
			],
			"gridData": [],
		}
	},
	ready:function(){
		this.getdatas()
	},
	template: 
	'<div id="mainBox" v-on:scroll="mainScroll">'+
		'<div id="mainBoxSroll">'+
			'<div class="bd">'+
			    '<div class="weui_search_bar" id="search_bar">'+
			        '<form class="weui_search_outer">'+
			            '<div class="weui_search_inner">'+
			                '<i class="weui_icon_search"></i>'+
			                '<input type="search" class="weui_search_input" id="search_input" placeholder="搜索" required="" v-on:focus="searchBarFocus" v-on:blur="searchBarBlur" v-on:keyup="searchBarKeyup">'+
			                '<a href="javascript:" class="weui_icon_clear" id="search_clear" v-on:click="searchClear($event)" ></a>'+
			            '</div>'+
			            '<label for="search_input" class="weui_search_text" id="search_text">'+
			                '<i class="weui_icon_search"></i>'+
			                '<span>搜索</span>'+
			            '</label>'+
			        '</form>'+
			        '<a href="javascript:" class="weui_search_cancel" id="search_cancel">取消</a>'+
			    '</div>'+
			    '<div class="weui_cells weui_cells_access search_show" id="search_show">'+
			        '<div class="weui_cell">'+
			            '<div class="weui_cell_bd weui_cell_primary">'+
			                '<p>实时搜索文本</p>'+
			            '</div>'+
			        '</div>'+
			    '</div>'+
			'</div>'+
			'<div class="weui_panel_bd">'+
				'<div class="lists_img" id="lists">'+
				
			        '<a href="{{v.url}}" class="weui_media_box weui_media_appmsg" v-for="v in gridData">'+
			            '<div class="weui_media_hd">'+
			                '<img class="weui_media_appmsg_thumb" :src="v.img" alt="">'+
			            '</div>'+
			            '<div class="weui_media_bd">'+
			                '<h4 class="weui_media_title">{{v.title}}</h4>'+
			                '<p class="weui_media_desc">{{v.sub_title}}</p>'+
			            '</div>'+
			        '</a>'+
			        
				'</div>'+
			    '<div class="infinite-scroll-preloader">'+
					'<div class="preloader"></div>'+
				'</div>'+
		    '</div>'+
		'</div>'+
	'</div>',
    methods: {
		searchClear: function(event){
			event.stopPropagation();
			$("#search_input").val('');
			$("#search_show").css("display","none");
			$("#search_text").css("display","");
		},
		searchBarFocus: function(){
			$("#search_bar").addClass("weui_search_focusing");
		},
		searchBarBlur: function(){
			if($("#search_input").val()==''){
				$("#search_text").css("display","");
				$("#search_bar").removeClass("weui_search_focusing");
			}
		},
		searchBarKeyup: function(){
			if($("#search_input").val()==''){
				$("#search_show").css("display","none");
			} else {
				$("#search_show").css("display","block");
				$("#search_text").css("display","none");
			}
		},
		mainScroll: function(){
			if($("#mainBoxSroll").height() - $("#mainBox").scrollTop()<=700){
				console.log($("#mainBoxSroll").height() - $("#mainBox").scrollTop());
			}
		},
		getdatas : function(){
			this.$http.get('json/1.json').then(function(response){
		    	// 响应成功回调
		    	this.$set('gridData',response.data);
		    },function(response){
		    	// 响应错误回调
		    	console.log('获取失败！')
		    });
		}
	}


})

