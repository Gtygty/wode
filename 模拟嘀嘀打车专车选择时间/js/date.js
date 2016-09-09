/*
 * 日期插件
 * 滑动选取日期（年，月，日）
 * V1.1
 */
(function ($) {
    $.fn.date = function (options,Ycallback,Ncallback) {
        //插件默认选项
        var that = $(this);
        var docType = $(this).is('input');
        var datetime = false;
        var nowdate = new Date();
        var indexY=1,indexM=1,indexD=1;
        var yearScroll=null,monthScroll=null,dayScroll=null;
        $.fn.date.defaultOptions = {
            beginyear:2014,                 //日期--年--份开始
            endyear:nowdate.getFullYear()+50,                   //日期--年--份结束
            beginmonth:1,                   //日期--月--份结束
            endmonth:12,                    //日期--月--份结束
            beginday:1,                     //日期--日--份结束
            endday:31,                      //日期--日--份结束
            beginhour:1,
            endhour:12,
            beginminute:00,
            endminute:59,
            curdate:false,                   //打开日期是否定位到当前日期
            theme:"date",                    //控件样式（1：日期，2：日期+时间）
            mode:null,                       //操作模式（滑动模式）
            event:"click",                    //打开日期插件默认方式为点击后后弹出日期
            show:true
        }
        //用户选项覆盖插件默认选项
        var opts = $.extend( true, {}, $.fn.date.defaultOptions, options );
        if(opts.theme === "datetime"){datetime = true;}
        if(!opts.show){
            that.unbind('click');
        }
        else{
            //绑定事件（默认事件为获取焦点）
            that.bind(opts.event,function () {
                createUL();      //动态生成控件显示的日期
                init_iScrll();   //初始化iscrll
                extendOptions(); //显示控件
                that.blur();
                if(datetime){
                    showdatetime();
                    refreshTime();
                }
                refreshDate();
                bindButton();
            })
        };
        function refreshDate(){
            yearScroll.refresh();
            monthScroll.refresh();
            dayScroll.refresh();

            // resetInitDete();
            // yearScroll.scrollTo(0, initY*40, 100, true);
            // monthScroll.scrollTo(0, initM*40-40, 100, true);
            // dayScroll.scrollTo(0, initD*40-40, 100, true);
        }
	function resetIndex(){
            indexY=1;
            indexM=1;
            indexD=1;
        }
        // function resetInitDete(){//初始化时间
        //     if(opts.curdate){return false;}
        //     else if(that.val()===""){return false;}
        //     initY = parseInt(that.val().substr(0,4))-opts.beginyear;
        //     initM = parseInt(that.val().substr(5,2));
        //     initD = parseInt(that.val().substr(8,2));
        // }
        function bindButton(){//返回字符串
            resetIndex();
            $("#dateconfirm").unbind('click').click(function () {
                var datestr = $("#yearwrapper ul li:eq("+indexY+")").html().substr(0,$("#yearwrapper ul li:eq("+indexY+")").html().length-1)+"-"+
                          $("#monthwrapper ul li:eq("+indexM+")").html().substr(0,$("#monthwrapper ul li:eq("+indexM+")").html().length-1)+"-"+
			  $("#daywrapper ul li:eq("+Math.round(indexD)+")").html().substr(0,$("#daywrapper ul li:eq("+Math.round(indexD)+")").html().length-1);

                if(Ycallback===undefined){
                     if(docType){that.val(datestr);}else{that.html(datestr);}
                }else{
                                    Ycallback(datestr);
                }
                $("#datePage").hide();
                $("#dateshadow").hide();
            });
            $("#datecancle").click(function () {
                $("#datePage").hide();
		$("#dateshadow").hide();
                Ncallback(false);
            });
        }
        function extendOptions(){
            $("#datePage").show();
            $("#dateshadow").show();
        }
        //日期滑动
        function init_iScrll() {
              yearScroll = new iScroll("yearwrapper",{snap:"li",vScrollbar:false,
                  onScrollEnd:function () {
                       indexY = (this.y/40)*(-1)+1;
                       indexYY=indexY;
                       panduanDay();
                       // panduan2();
                  }});
              monthScroll = new iScroll("monthwrapper",{snap:"li",vScrollbar:false,
                  onScrollEnd:function (){
                      indexM = (this.y/40)*(-1)+1;
                      panduanHour();
                  }});
              dayScroll = new iScroll("daywrapper",{snap:"li",vScrollbar:false,
                  onScrollEnd:function () {
                      indexD = (this.y/40)*(-1)+1;
                  }});
        }
        function panduanDay(){
                if(indexYY==1){
                        $("#monthwrapper").children("ul").remove();
                        $("#monthwrapper").html("<ul></ul>");
                        $("#monthwrapper ul").html(createHOURS_UL());
                        $("#daywrapper").children("ul").remove();
                        $("#daywrapper").html("<ul></ul>");
                 monthScroll = new iScroll("monthwrapper",{snap:"li",vScrollbar:false,
                  onScrollEnd:function (){
                      indexM = (this.y/40)*(-1)+1;
                      panduanHour();
                  }});
                 dayScroll = new iScroll("daywrapper",{snap:"li",vScrollbar:false,
                  onScrollEnd:function () {
                      indexD = (this.y/40)*(-1)+1;
                  }});
                };
                if(indexYY!==1){
                        $("#monthwrapper").children("ul").remove();
                        $("#monthwrapper").html("<ul></ul>");
                        $("#monthwrapper ul").html(createHOURS_UL2());
                        $("#daywrapper").children("ul").remove();
                        $("#daywrapper").html("<ul></ul>");
                        $("#daywrapper ul").html(createMINUTE_UL2());
                monthScroll = new iScroll("monthwrapper",{snap:"li",vScrollbar:false,
                  onScrollEnd:function (){
                      indexM = (this.y/40)*(-1)+1;
                  }});
                dayScroll = new iScroll("daywrapper",{snap:"li",vScrollbar:false,
                  onScrollEnd:function () {
                      indexD = (this.y/40)*(-1)+1;
                  }});
                        };
                }
        function panduanHour(){
                      if (indexM==1) {
                        $("#daywrapper").children("ul").remove();
                        $("#daywrapper").html("<ul></ul>");
                      };
                      if (indexM==2) {
                        $("#daywrapper").children("ul").remove();
                        $("#daywrapper").html("<ul></ul>");
                        $("#daywrapper ul").html(createMINUTE_UL());
                        dayScroll = new iScroll("daywrapper",{snap:"li",vScrollbar:false,
                         onScrollEnd:function () {
                            indexD = (this.y/40)*(-1)+1;
                  }});
                      };
                      if (indexM!=2&&indexM!=1) {
                        $("#daywrapper").children("ul").remove();
                        $("#daywrapper").html("<ul></ul>");
                        $("#daywrapper ul").html(createMINUTE_UL2());
                        // alert(1);
                        dayScroll = new iScroll("daywrapper",{snap:"li",vScrollbar:false,
                        onScrollEnd:function () {
                        indexD = (this.y/40)*(-1)+1;
                  }});
                      };
        }
        function showdatetime(){
            init_iScroll_datetime();
        }

        function  createUL(){
            CreateDateUI();
            $("#yearwrapper ul").html(createDAY_UL());
            $("#monthwrapper ul").html(createHOURS_UL());
            $("#daywrapper ul").html("<li>&nbsp;</li>"+"<li>&nbsp;</li>");
        }
        function  createUL2(){
            $("#yearwrapper ul").html(createDAY_UL());
            $("#monthwrapper ul").html(createHOURS_UL2());
            $("#daywrapper ul").html(createMINUTE_UL2());
        }
        function CreateDateUI(){
            var str = ''+
                '<div id="dateshadow"></div>'+
                '<div id="datePage" class="page">'+
                    '<section>'+
                        '<footer id="dateFooter">'+
                        '<div id="setcancle">'+
                            '<ul>'+
                                '<li id="datecancle">取消</li>'+
                                '<div id="datetitle1">选择出行时间</div>'+
                                '<li id="dateconfirm">确定</li>'+
                            '</ul>'+
                        '</div>'+
                    '</footer>'+
                        '<div id="datemark"></div>'+
                        '<div id="datescroll">'+
                            '<div id="yearwrapper">'+
                                '<ul></ul>'+
                            '</div>'+
                            '<div id="monthwrapper">'+
                                '<ul></ul>'+
                            '</div>'+
                            '<div id="daywrapper">'+
                                '<ul></ul>'+
                            '</div>'+
                        '</div>'+
                    '</section>'+
                '</div>'
            $("#datePlugin").html(str);
        }
        //创建 --日-- 列表
        function createDAY_UL(){
            var str="<li>&nbsp;</li>";
            var a = new Array("今天", "明天", "后天");
                for(var i=0;i<a.length;i++){
                str+='<li>'+a[i]+'</li>'
            }
            return str+"<li>&nbsp;</li>";;
        }
        //创建 --时-- 列表
        function createHOURS_UL(){
            var str="<li>&nbsp;</li>"+"<li>现在</li>";
            var mydate = new Date();
            for(var i=mydate.getHours();i<=23;i++){
                str+='<li>'+i+'点</li>'
            }
            return str+"<li>&nbsp;</li>";;
        }
        //创建 --分-- 列表
        function createMINUTE_UL(){
            var str="<li>&nbsp;</li>";
            var mydate = new Date();
            for(var i=mydate.getMinutes();i<=40;i=i+10){
                str+='<li>'+(Math.ceil(i/10)*10+10)+'分</li>'
            }
            return str+"<li>&nbsp;</li>";;
        }


        //创建 --时-- 列表2
        function createHOURS_UL2(){
            var str="<li class='liH'>&nbsp;</li>";
            for(var i=0;i<=23;i++){
                str+="<li class='liH'>"+i+'点</li>'
            }
            return str+"<li class='liH'>&nbsp;</li>";;
        }
        //创建 --分-- 列表2
        function createMINUTE_UL2(){
            var str="<li>&nbsp;</li>";
            for(var i=00;i<=50;i=i+10){
                str+='<li>'+i+'分</li>'
            }
            return str+"<li>&nbsp;</li>";;
        }
    }
})(jQuery);
