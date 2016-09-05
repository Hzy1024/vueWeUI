var vy = Vue.extend({
    template: 
    '<style>'+
		'.list-block{ margin:0}'+
		'.content-block{ margin:1rem 0}'+
	'</style>'+
  '<div class="list-block">'+
    '<ul>'+
      '<li>'+
        '<div class="item-content">'+
          '<div class="item-media"><i class="icon icon-form-name"></i></div>'+
          '<div class="item-inner">'+
            '<div class="item-title label">姓名</div>'+
            '<div class="item-input">'+
              '<input type="text" placeholder="你的名字">'+
            '</div>'+
          '</div>'+
        '</div>'+
      '</li>'+
      '<li>'+
        '<div class="item-content">'+
          '<div class="item-media"><i class="icon icon-form-email"></i></div>'+
          '<div class="item-inner">'+
            '<div class="item-title label">邮箱</div>'+
            '<div class="item-input">'+
              '<input type="email" placeholder="">'+
            '</div>'+
          '</div>'+
        '</div>'+
      '</li>'+
      '<li>'+
        '<div class="item-content">'+
          '<div class="item-media"><i class="icon icon-form-password"></i></div>'+
          '<div class="item-inner">'+
            '<div class="item-title label">密码</div>'+
            '<div class="item-input">'+
              '<input type="password" placeholder="" class="">'+
            '</div>'+
          '</div>'+
        '</div>'+
      '</li>'+
      '<li>'+
        '<div class="item-content">'+
          '<div class="item-media"><i class="icon icon-form-gender"></i></div>'+
          '<div class="item-inner">'+
            '<div class="item-title label">性别</div>'+
            '<div class="item-input">'+
              '<select>'+
                '<option>男</option>'+
                '<option>女</option>'+
              '</select>'+
            '</div>'+
          '</div>'+
        '</div>'+
      '</li>'+
      '<li>'+
        '<div class="item-content">'+
          '<div class="item-media"><i class="icon icon-form-calendar"></i></div>'+
          '<div class="item-inner">'+
            '<div class="item-title label">生日</div>'+
            '<div class="item-input">'+
              '<input type="text" id="myInput" data-toggle="date" value="2015-12-09" v-on:click="calendar" />'+
            '</div>'+
          '</div>'+
        '</div>'+
      '</li>'+
      '<li>'+
        '<div class="item-content">'+
          '<div class="item-media"><i class="icon icon-form-toggle"></i></div>'+
          '<div class="item-inner">'+
            '<div class="item-title label">开关</div>'+
            '<div class="item-input">'+
              '<label class="label-switch">'+
                '<input type="checkbox">'+
                '<div class="checkbox"></div>'+
              '</label>'+
            '</div>'+
          '</div>'+
        '</div>'+
      '</li>'+
      '<li class="align-top">'+
        '<div class="item-content">'+
          '<div class="item-media"><i class="icon icon-form-comment"></i></div>'+
          '<div class="item-inner">'+
            '<div class="item-title label">文本域</div>'+
            '<div class="item-input">'+
              '<textarea></textarea>'+
            '</div>'+
          '</div>'+
        '</div>'+
      '</li>'+
    '</ul>'+
  '</div>'+
  '<div class="content-block">'+
    '<div class="row">'+
      '<div class="col-50"><a href="#" class="button button-big button-fill button-danger">取消</a></div>'+
      '<div class="col-50"><a href="#" class="button button-big button-fill button-success">提交</a></div>'+
    '</div>'+
  '</div>',
  methods:{
  	calendar: function(){
  		console.log(this);
  		$("#myInput").calendar({
		    value: ['2015-12-09']
		});
  	}
  }
})