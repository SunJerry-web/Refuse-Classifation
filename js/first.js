window.onload=function(){
    (function(){
        var canvas=document.getElementById("myCanvas");
        var ctx=canvas.getContext("2d");

        var WinWidth=document.body.clientWidth;
        var x;
        var y;
        if(WinWidth<=480){
            canvas.width=60;
            canvas.height=60;
            x=5;
            y=5;
        }
        else{
            canvas.width=100;
            canvas.height=100;
            x=26;
            y=26;
        }
        canvas.style.border="2px solid black";
        canvas.style.padding="1px";
        canvas.style.background="white";

        var img=new Image();
        img.src="../images/canvas.jpeg";
        img.onload=function(){
            var frameIndex=0;
            ctx.clearRect(0,0,canvas.width,canvas.height);
            setInterval(function(){
                ctx.drawImage(img,0,frameIndex*48,48,48,x,y,48,48);
                frameIndex++;
                frameIndex %=5;
            },1000);
        }
    })();
}