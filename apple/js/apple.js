/*下拉菜单*/
$(function(){
    var clientW=$(window).width();
    var clientH=$(window).height();
    $(".son").css({
        width:clientW,
        height:clientH
    })

    $(".link-xl").click(function(){

        $(".son").slideToggle(200);
    })

    $(".mb").click(function(){
        var index=$(this).index();
        $(".m").eq(index).slideToggle(200);
    })
})
/*轮播*/
$(function(){
    var now=0;
    var next=0;
    var current=0;
    var flag=true;
    /*轮播图*/
    function move(){
        next++;
        if(next==3){
            next=0;
            flag=false;
        }
        $(".imgbox").eq(now).css({width:"90%",height:"90%"}).css("zIndex",0);
        $(".imgbox").eq(next).animate({left:0},function(){
            $(".imgbox").eq(now).css({width:"100%",height:"100%",left:"100%"}).css("zIndex",1);
            now=next;
            current=0;
            flag=true;
        }).css("zIndex",1);
    }
    function move2(){
        current+=50;
        var pro=current/3000;
        if(pro>1){
            pro=1;
        }
        $(".progress").eq(now).css({width:pro*100+"%"});
        if(flag==false){
            $(".progress").css({width:0})
        }

    }
    var t1=setInterval(move,3000);
    var t2=setInterval(move2,50);
    /*按钮*/
    function stop(){
        $(".btn").find(".progress").css("width",0);
        $(".btn").eq(next).find(".progress").css("width","100%");
        clearInterval(t1);
        clearInterval(t2);
        // if(next>now){

            $(".imgbox").eq(now).animate({width:"90%",height:"90%"}).css("zIndex",0);
            $(".imgbox").eq(next).animate({left:0},function(){
                $(".imgbox").eq(now).css({width:"100%",height:"100%",left:"100%"});
                now=next;
            }).css("zIndex",1);
        }/*else if(next<now){
            $(".imgbox").eq(now).animate({left:"100%"}).css("zIndex",1);
            $(".imgbox").eq(next).css({width:"90%",height:"90%",left:0}.animate({width:"100%",height:"100%"}),function(){
                now=next;
            })
        }else{
            return false;
        }*/
    // }
    $(".btn").click(function(){
        next=$(this).index(".btn");
        stop();
    })
    $(".rightbtn").click(function(){
        next++;
        if(next>=3){
            next=0;
        }

        stop();
    })
    $(".leftbtn").click(function(){

        next--;
        if(next==-1){
            next=2;
        }
        stop();
    })

})