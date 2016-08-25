// 基础gulp模块
var gulp = require('gulp');
// webserver服务器
var webserver = require('gulp-webserver');
// mock数据
var url = require('url');
// FileSystem
var fs = require('fs');

//创建本地服务的任务
gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: true,
      // host: '192.168.2.1',
      //利用中间件进行mock数据的转换，让它们能够在浏览器中显示运行
      // req:request  res:response next:指的是下一个

      middleware: function(req, res, next) {
        //获取url信息，将url信息转换为jsonObject对象类型
        var urlObj = url.parse(req.url, true),
          method = req.method;

        //进行switch判断，条件基础是urlObj.pathname，路径
        switch (urlObj.pathname) {
          //如果我们的判断条件上中带有/api/employees_1这个条件成立，那么继续执行后面的代码
          case '/api/employees_1':
            //返回的内容我们将它设置成json的数据类型
            res.setHeader('Content-Type', 'application/json');
            //通过fileSystem文件模块去读取mock目录下的employees_1.json文件，并将返回的数据发送到浏览器端进行处理
            fs.readFile('mock/employees_1.json', 'utf-8', function(err, data) {
              res.end(data);
            });
            return;
          // case '/api/employees_2':
          //   res.setHeader('Content-Type', 'application/json');
          //   fs.readFile('mock/employees_2.json', 'utf-8', function(err, data) {
          //     res.end(data);
          //   });
          //   return;
          // case '/api/employees_3':
          //   res.setHeader('Content-Type', 'application/json');
          //   fs.readFile('mock/employees_3.json', 'utf-8', function(err, data) {
          //     res.end(data);
          //   });
          //   return;
          // case '/api/employees_4':
          //   res.setHeader('Content-Type', 'application/json');
          //   fs.readFile('mock/employees_4.json', 'utf-8', function(err, data) {
          //     res.end(data);
          //   });
          //   return;
          case '/api/employee_detail_43':
            res.setHeader('Content-Type', 'application/json');
            fs.readFile('mock/employee_detail_43.json', 'utf-8', function(err, data) {
              res.end(data);
            });
            return;
          // case '/api/employee_detail_44':
          //   res.setHeader('Content-Type', 'application/json');
          //   fs.readFile('mock/employee_detail_44.json', 'utf-8', function(err, data) {
          //     res.end(data);
          //   });
          //   return;
          // case '/api/employee_detail_45':
          //   res.setHeader('Content-Type', 'application/json');
          //   fs.readFile('mock/employee_detail_45.json', 'utf-8', function(err, data) {
          //     res.end(data);
          //   });
          //   return;
          // case '/api/employee_detail_46':
          //   res.setHeader('Content-Type', 'application/json');
          //   fs.readFile('mock/employee_detail_46.json', 'utf-8', function(err, data) {
          //     res.end(data);
          //   });
          //   return;
          // case '/api/employee_detail_47':
          //   res.setHeader('Content-Type', 'application/json');
          //   fs.readFile('mock/employee_detail_47.json', 'utf-8', function(err, data) {
          //     res.end(data);
          //   });
          //   return;
          // case '/api/employee_detail_48':
          //   res.setHeader('Content-Type', 'application/json');
          //   fs.readFile('mock/employee_detail_48.json', 'utf-8', function(err, data) {
          //     res.end(data);
          //   });
          //   return;
          // case '/api/employee_detail_49':
          //   res.setHeader('Content-Type', 'application/json');
          //   fs.readFile('mock/employee_detail_49.json', 'utf-8', function(err, data) {
          //     res.end(data);
          //   });
          //   return;
          // case '/api/employee_detail_50':
          //   res.setHeader('Content-Type', 'application/json');
          //   fs.readFile('mock/employee_detail_50.json', 'utf-8', function(err, data) {
          //     res.end(data);
          //   });
          //   return;
          // case '/api/employee_detail_51':
          //   res.setHeader('Content-Type', 'application/json');
          //   fs.readFile('mock/employee_detail_51.json', 'utf-8', function(err, data) {
          //     res.end(data);
          //   });
          //   return;
          // case '/api/employee_detail_52':
          //   res.setHeader('Content-Type', 'application/json');
          //   fs.readFile('mock/employee_detail_52.json', 'utf-8', function(err, data) {
          //     res.end(data);
          //   });
          //   return;
          // case '/api/employee_detail_53':
          //   res.setHeader('Content-Type', 'application/json');
          //   fs.readFile('mock/employee_detail_53.json', 'utf-8', function(err, data) {
          //     res.end(data);
          //   });
          //   return;
          // case '/api/employee_detail_54':
          //   res.setHeader('Content-Type', 'application/json');
          //   fs.readFile('mock/employee_detail_54.json', 'utf-8', function(err, data) {
          //     res.end(data);
          //   });
          //   return;
          // case '/api/employee_detail_55':
          //   res.setHeader('Content-Type', 'application/json');
          //   fs.readFile('mock/employee_detail_55.json', 'utf-8', function(err, data) {
          //     res.end(data);
          //   });
          //   return;
          // case '/api/employee_detail_56':
          //   res.setHeader('Content-Type', 'application/json');
          //   fs.readFile('mock/employee_detail_56.json', 'utf-8', function(err, data) {
          //     res.end(data);
          //   });
          //   return;
          // case '/api/employee_detail_57':
          //   res.setHeader('Content-Type', 'application/json');
          //   fs.readFile('mock/employee_detail_57.json', 'utf-8', function(err, data) {
          //     res.end(data);
          //   });
          //   return;
          // case '/api/employee_detail_58':
          //   res.setHeader('Content-Type', 'application/json');
          //   fs.readFile('mock/employee_detail_58.json', 'utf-8', function(err, data) {
          //     res.end(data);
          //   });
          //   return;
          // case '/api/employee_detail_59':
          //   res.setHeader('Content-Type', 'application/json');
          //   fs.readFile('mock/employee_detail_59.json', 'utf-8', function(err, data) {
          //     res.end(data);
          //   });
          //   return;
          // case '/api/employee_detail_60':
          //   res.setHeader('Content-Type', 'application/json');
          //   fs.readFile('mock/employee_detail_60.json', 'utf-8', function(err, data) {
          //     res.end(data);
          //   });
          //   return;
          // case '/api/employee_detail_61':
          //   res.setHeader('Content-Type', 'application/json');
          //   fs.readFile('mock/employee_detail_61.json', 'utf-8', function(err, data) {
          //     res.end(data);
          //   });
          //   return;
          // case '/api/employee_detail_62':
          //   res.setHeader('Content-Type', 'application/json');
          //   fs.readFile('mock/employee_detail_62.json', 'utf-8', function(err, data) {
          //     res.end(data);
          //   });
          //   return;
          case '/api/province':
            res.setHeader('Content-Type', 'application/json');
            fs.readFile('mock/province.json', 'utf-8', function(err, data) {
              res.end(data);
            });
            return;
          default:
            ;
        } // end switch
        next();
      } // end middleware
    }) //  end webserver
  ); // end gulp
}); // end task

gulp.task('default', ['webserver']);
// end
