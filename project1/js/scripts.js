$(function(){
    $('.h_menu > li').each(function(){
        
        var sub = $(this).find('.submenu');

        $(this).hover(function(){
            sub.stop().slideDown();
        }, function(){
            sub.stop().slideUp();
        });
    });


    $('.h_icon div:nth-child(4)').hover(function(){
        $('.language').slideDown();
    },function(){
        $('.language').slideUp();
    });



    $('.n_title li').click(function(){

        $('.n_title li').removeClass('active');

        $(this).addClass('active');

        var i = $(this).index();

        $('.tabset > div').fadeOut(0);
        $('.tabset > div').eq(i).fadeIn(0);

    });

    $('.box3_title li').click(function(){

        $('.box3_title li').removeClass('active2');

        $(this).addClass('active2');

        var i = $(this).index();

        $('.box3_con').fadeOut(0);
        $('.box3_con').eq(i).fadeIn(0);

    });


        $('.next').click(function(){

       

        $('.ideaset > li:nth-child(1)').animate(
            {marginLeft:'-100%'},500,
            function(){
                $('.ideaset').append($('.ideaset > li:nth-child(1)'));
                $('.ideaset > li:nth-child(3)').css('margin-left','0px');
            }
        );
    });

    
    $('.prev').click(function(){

        $('.ideaset > li:nth-child(1)').animate(
            {marginLeft:'-100%'},500,
            function(){
                $('.ideaset').append($('.ideaset > li:nth-child(1)'));
                $('.ideaset > li:nth-child(3)').css('margin-left','0px');
            }
        );

    });


    // setInterval(function(){

    //     $('.ideaset > li:nth-child(1)').animate(
    //         {marginLeft:'-381px'},500,
    //         function(){
    //             $('.ideaset').append($('.ideaset > li:nth-child(1)'));
    //             $('.ideaset > li:nth-child(3)').css('margin-left','0px');
    //         }
    //     );
    // },3000);


    var bannerLeft=0;            
    var first=1;            
    var last;            
    var imgCnt=0;            
    var $img = $(".banner_wraper li");            
    var $first;            
    var $last;


    $img.each(function(){
        $(this).css("left",bannerLeft);
        bannerLeft += $(this).width()+20;
        $(this).attr("id", "banner"+(++imgCnt));

    });


    if(imgCnt > 5){

        last = imgCnt;
        setInterval(function(){
            $img.each(function(){
                $(this).css("left", $(this).position().left-1);
            });

            $first = $("#banner"+first);
            $last = $("#banner"+last);

            if($first.position().left < -500) {
                $first.css("left", $last.position().left + $last.width()+20 );
                first++;
                last++;
                if(last > imgCnt) { last=1; }
                if(first > imgCnt) { first=1; }
            }
        },10);


    }


});


$(document).ready(function(){
    mobile_menu();
});

function mobile_menu(){
    /* ?????? ?????? */
    var $menu = null;
    var $left_gnb = null; // ?????? ??????
    var $depth1_wrap = null;
    var $depth1 = null;
    var $depth1_btn = null;
    
    /* ?????? ?????? */
    function start(){
        init();
        init_event();
    }
    /* ?????? ????????? ?????? */
    function init(){
        $menu = $('.menu');
        $left_gnb = $('.left_gnbWrap'); // ?????? ??????
        $depth1_wrap = $('.left_gnb>li');
        $depth1 = $depth1_wrap.children('ul');
        $depth1_btn = $depth1_wrap.children('a');
    }
    /* ????????? ?????? */
    function init_event(){
        
        /* ????????? ?????? ?????? ??????????????? ????????? ???????????? ????????? ?????? */
        $menu.click(function(event){
            event.preventDefault();
            $left_gnb.addClass('on');
        });
        
        /* x?????? ???????????? ????????? ?????? ?????? */
        $('.close').click(function(event){
            event.preventDefault();

            $left_gnb.removeClass('on');
            
            // x?????? ????????? ????????? ???????????? ????????? ????????? ??????
            setTimeout(function(){
                $depth1_btn.removeClass('on');
                $depth1.slideUp();
            },300)
        });
        
        /* depth1??? ????????? ????????? depth2 ????????? ?????? */
        $depth1_btn.click(function(event){
            event.preventDefault();
            var $this = $(this);
            var $this_ul = $this.siblings('ul');

            var check = $this.hasClass('on');
            if(check){
                $this.removeClass('on');
                $this_ul.stop(true,true).slideUp();
            }else{
                $depth1_btn.removeClass('on');
                $depth1.stop().slideUp();
                $this.addClass('on');
                $this_ul.stop(true,true).slideDown();
            }
        });
        
        /* ???????????? ?????? ????????? ????????? ???????????? ????????? */
        $(window).resize(function(){
            $left_gnb.removeClass('on');
        });
    }
    
    start(); // ?????? ??????
}



        $(document).ready(function() {


            $(".ethicsbox").hide();
            
            $(".sub_tab div:first").addClass("active").show();
            $(".ethicsbox:first").show();
            $(".sub_tab div").click(function() {
                $(".sub_tab div").removeClass("active");
                $(this).addClass("active");
                $(".ethicsbox").hide();
                var activeTab = $(this).find("a").attr("href");
                $(activeTab).fadeIn();
                return false;
            });


            $(function() { 
                $(".sub_left li").hover(function(){
                    $('.sub_left img').attr("src",'img/submenu_arrow_w.png')
                }, function(){
                    $('.sub_left img').attr("src",'img/submenu_arrow_g.png')
                }); 
            });
        });