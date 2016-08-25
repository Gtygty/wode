var myApp = angular.module('myModule', [])
.controller("myController",function($scope){
	var employees = [{
		firstName: "Fang",
		lastName: "vane",
		gender: "Male"
	}, {
		firstName: "Sara",
		lastName: "rose",
		gender: "Female"
	}, {
		firstName: "Mark",
		lastName: "bear",
		gender: "Male"
	}, {
		firstName: "Pam",
		lastName: "hot",
		gender: "Male"
	}];
	$scope.title = "随机";
	$scope.employees = employees;
})
/*
这里需要注意angularApp启动时会创建rootScope

创建controller和directive 的时候，会自动创建自己的私有scope对象，私有scope从rootScope继承

所有的directives 都有自己的 scope 对象。 在默认的情况下，directive  不会创建他们自己的scope. 
他们会用他们父对象的scope作为自己的scope.  但是 angularjs 允许改变这种默认行为。

scope : false (Directives 将使用parent 的scope), 这个是默认值
http://jsfiddle.net/od3a4ddw/9/

scope : true(Directives 会创建一个新的scope,但是创建的这个scope 将从parent controller 中的 scope 对象继承。)
http://jsfiddle.net/od3a4ddw/10/

Scope : {}(Directives 会创建一个新的隔离scope,这个隔离的scope 不从parent scope对象继承)
http://jsfiddle.net/qggdk7gg/
*/

.directive('randomEmployee',function(){
	return{
		restrict:'E',
		/*
		scope可以设置为true/false或者是{}对象
		scope的操作符号可以有
		1.@定义，单向字符串绑定，后面使用 {{}}进行赋值。
		2.=定义，模型绑定，后面使用scope中的属性名字。
		3.&定义，方法绑定，后面直接跟方法调用。

		<div class="directive" my-directive name="{{name}}" title="title" change-name="changeName()" ></div>
		它的scope就如下:
		scope: {
            name: "@",
            title: "=",
            changeName: "&"
        }
		*/
		scope:{
			employees:'=',
			title:'='
		},
		transclude:true,//注意模板中的ng-transclude
		replace:true, //如果为true的时候替换div标签,false的时候还是自定义指令的显示(需要查看元素的操作)
		// templateUrl:'Templates/29.1/employee.html',
		template:'<div><div>{{title}}<br/> random employee: {{employees[random].firstName}} </div><div ng-transclude></div></div>',
		
		//这里需要注意controller、link、compile，简单的三个单词意思是controller控制，link连接事件操作，如jquery中的append/prepend操作，compile编译生成dom对象
		controller:function($scope){
			$scope.random = Math.floor(Math.random()*4)
		}

	}
})
