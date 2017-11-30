//创建应用模块
var app =angular.module("yike",[]);








//run方法的作用是在模块创建好了之后立刻执行
//因为toggle切换页面的方法对所有页面都有效,所以将该方法绑定在根作用域上
app.run(["$rootScope",function($rootScope){
	//绑定toggle方法:点击菜单,页面来回切换
	//alert(111);
	//在根目录绑定collapsed属性,初始值为false
	$rootScope.collapsed=false;
	$rootScope.toggle=function(){
		$rootScope.collapsed=!$rootScope.collapsed;
	}
}]);