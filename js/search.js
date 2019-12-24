function getPage(o){
    var res=$(o).attr("id");
    var id=$(o).attr("name");
    var color=$(o).css("color");
    console.log(color);
    var width=screen.width;
    if(width<1024){
        window.location.href="result.html?"+res+"&"+id+"&"+color;
    }
    else{
        window.open("result.html?"+res+"&"+id+"&"+color,'newwindow', 'width=768,height=768,top=0, left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=no, status=no');
    }
}
$(document).ready(function(){
    "using stricts";
    $(".result").hide();
    $("#garbge").blur(function(){
        if($("#garbge").val()===null||$("#garbge").val().trim()===""){
            $(".content .iconfont").show();
            $("#garbge").attr("placeholder","请输入你要查询的垃圾");
            $(".result").empty();
            $(".result").hide();
        }
    })
    $('#garbge').bind('keypress', function (event) { 
        if (event.keyCode == "13") { 
            $(".search-btn").click();
        }
    })
    $(".search-btn").click(function(){
        var garbge=$("#garbge").val();
        if(garbge===null||garbge===""){
            $("#garbge").attr("placeholder","您要找的垃圾飞到了外太空！");
            return;
        }
        if($(".result>ul")){
            $(".result").empty();
        }
        $.ajax({
            url:"https://api.tianapi.com/txapi/lajifenlei/index",
            type:"GET",
            data:{"key":"a60e8ce03367d4aa8f289c6e7214ab07","word":garbge},
            timeout:"3000",
            async:true,
            cache:false,
            dataType:"json",
            success:function(data,status){
                if(data.code===200){
                    var tip=null;
                    $(".content .iconfont").hide();
                    $(".result").append("<ul></ul>");
                    $(".result>ul").append("<li><span>查询项</span><span>垃圾分类</span></li>");
                    for(i in data.newslist){
                        if(data.newslist[i].type===3){
                            data.newslist[i].type="其他垃圾";
                        }
                        if(data.newslist[i].type===2){
                            data.newslist[i].type="厨余垃圾";
                        }
                        if(data.newslist[i].type===1){
                            data.newslist[i].type="有害垃圾";
                        }
                        if(data.newslist[i].type===0){
                            data.newslist[i].type="可回收物";
                        }
                        tip="introduction.html";
                        if($.cookie(data.newslist[i].name)!==undefined){
                            $(".result>ul").append("<li><span>"+data.newslist[i].name+"</span><span><a href='"+tip+"'>"+$.cookie(data.newslist[i].name)+"</a></span></li>");
                        }else{
                            $.cookie(data.newslist[i].name,data.newslist[i].type,{expires:7,path:'/',secure:false,raw:false});
                            $(".result>ul").append("<li><span>"+data.newslist[i].name+"</span><span><a href='"+tip+"'>"+data.newslist[i].type+"</a></span></li>");
                        }
                    }
                    $(".content").css({
                        "justify-content":"center",
                        "align-items":"center",
                        "width":"100%"
                    })
                    $(".result").css({
                        "height":"75%",
                        "width":"75%",
                        "display":"flex",
                        "justify-content":"center",
                        "align-items":"center"
                    })
                    $(".result > ul").css({
                        "list-style":"none",
                        "width":"80%",
                        "height":"auto"
                    })
                    $(".result > ul > li").css({
                        "width":"100%",
                        "height":"auto",
                        "float":"left",
                        "margin":"0 auto",
                        "border-bottom":"1px solid #c5464a",
                        "background":"#f9f0db"
                    })
                    $(".result > ul > li > span").css({
                        "font-size":"1rem",
                        "display":"inline-block",
                        "width":"50%",
                        "border-right":"1px solid white",
                        "color":"black",
                        "text-align":"center",
                        "padding":"4px 0"
                    })
                    $(".result > ul > li:first-child").css({
                        "background":"#c5464a",
                    })
                    $(".result > ul > li:first-child > span").css({
                        "color":"#f9f0db"
                    })
                    $(".result").show();
                }else{
                    alert("连接服务器失败！请重试！");
                }
            },
            error:function(){
                alert("服务器连接失败！请稍后再试！");
            },
            contentType:"application/x-www-form-urlencoded"
        })
    })
})
