angular
	.module('app.services', [])
	.factory('navData',function(){
		var data = [
			{
				name: '规范',
				router: 'rule',
				menu: [
					{
						name: '分类方法',
						route: 'index'
					},
					{
						name: '命名规则',
						route: 'name',
					},
					{
						name: '代码格式',
						route:'format'
					},
					{
						name: '优化方案',
						route:'optimize'
					},
					{
						name: '最佳实践',
						route:'practice'
					},
					{
						name: '典型错误',
						route:'error'
					},
				]
			},
			{
				name: 'ui5.0',
				router: 'ui5.0',
				menu: [
					{
						name: '元素',
						route: 'atomic'
					},
					{
						name: '按钮',
						route: 'btn',
					},
					{
						name: '表格',
						route:'table'
					},
					{
						name: '表单',
						route:'form'
					},
					{
						name: '组件',
						route:'module'
					},
				]
			},
			{
				name: 'ui5.0',
				router: 'ui5.0',
				menu: [
					{
						name: '元素',
						route: 'atomic'
					},
					{
						name: '按钮',
						route: 'btn',
					},
					{
						name: '表格',
						route:'table'
					},
					{
						name: '表单',
						route:'form'
					},
					{
						name: '组件',
						route:'module'
					},
				]
			}
		]
	});
