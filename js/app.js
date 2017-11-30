//创建应用模块
var app = angular.module("yike", ["ctrls", "ngRoute"]);

//run方法的作用是在模块创建好了之后立刻执行
//因为toggle切换页面的方法对所有页面都有效,所以将该方法绑定在根作用域上
app.run(["$rootScope", function($rootScope) {
	//绑定toggle方法:点击菜单,页面来回切换
	//alert(111);
	//在根目录绑定collapsed属性,初始值为false
	$rootScope.collapsed = false;
	$rootScope.toggle = function() {
		$rootScope.collapsed = !$rootScope.collapsed;
		//将导航栏的小标题添加显示和隐藏效果 
		//获取所有的dd
	var dds = document.querySelectorAll("dd");
		//循环遍历每一个dd,修改dd的样式,达到显示隐藏的效果
		if($rootScope.collapsed) { //true，显示
			for(var i = 0; i < dds.length; i++) { // 遍历所有的dd
				dds[i].style.transform = "translate(0)";
				//设置过渡的效果
				dds[i].style.transitionDuration = (i + 2) * 0.15 + "s";
			}
		} else { // false，隐藏
			for(var i = 0; i < dds.length; i++) { // 遍历所有的dd
				dds[i].style.transform = "translate(-100%)";
				//设置过渡的效果
				dds[i].style.transitionDuration = (dds.length - i) * 0.15 + "s";
			}
		}
	}
}])



