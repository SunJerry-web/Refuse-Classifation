$(document).ready(function(){
    var result=window.location.search.slice(window.location.search.indexOf("?")+1);
    result=result.split("&");
    console.log(result[0]);
    result[0]=decodeURIComponent(result[0]);
    result[2]=decodeURIComponent(result[2]);
    console.log(result);
    $.getJSON("../json/garbge",function(data){
      var JSON={"type":result[0],"code":result[1],"color":result[2]};
      JSON["list"]=[];
      var type_2=new Array();
      var garbge=new Array();
      for(let i in data){
        if(data[i].type_1===result[0]){
          garbge.push(data[i]);
          if(type_2.indexOf(data[i].type_2)===-1){
            type_2.push(data[i].type_2);
          }
        }
      }
      
      for(let i in type_2){
        JSON["list"].push([]);
        JSON["list"][i].push(type_2[i]);
      }
      console.log(JSON);
      for(let i in garbge){
        for(let j in JSON["list"]){
          if(garbge[i].type_2===JSON["list"][j][0]){
            JSON["list"][j].push(garbge[i].name);
          }
        }
      }
      console.log(JSON);
      $.get("./result.tpl",function(result){
        var html=ejs.compile(result)(JSON);
        $("#main").html(html);
      })
    })
  })