$(function(){
    
    //変数定義
var flickitySyncer = [];

// エレメントを取得する
var elms = document.getElementsByClassName( "flickity-syncer" ) ;

// ループ処理
for( var i=0,l=elms.length; l>i; i++ )
{
	flickitySyncer[i] = new Flickity( elms[i] , {wrapAround: true,} ) ;
}
	
 
	
	
    // スムーズスクロール
    $('a[href^="#"]').click(function() {

   var speed = 600;
   var href= $(this).attr("href");
   var target = $(href == "#" || href == "" ? 'html' : href);
   var position = target.offset().top;

   $('body,html').animate({scrollTop:position}, speed, 'swing');
   return false;

    });
    
    //positon fledx相殺
	var headerHight = 70; 
 $('a[href^=#]').click(function(){
     var href= $(this).attr("href");
       var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top-headerHight;
     $("html, body").animate({scrollTop:position}, 550, "swing");
        return false;
   });
    
　//ハンバーガメニュー制御
　var $header = $('#top-head');
        // Nav Fixed
        $(window).scroll(function() {
            if ($(window).scrollTop() > 250) {
                $header.addClass('fixed');
            } else {
                $header.removeClass('fixed');
            }
        });
        // Nav Toggle Button
        $('#nav-toggle').click(function(){
            $header.toggleClass('open');
        });
        $('#global-nav ul li a').click(function() {
    $('#nav-toggle').trigger('click');
});
    
 //アコーディオン制御
$(".accordion-wrap").on("click", function(){   
    $(this).children().eq(1).slideToggle(300);  
    $(this).children().eq(0).toggleClass("accordion-no-bar");
    $(this).siblings().find(".accordion-header").removeClass("accordion-gold");
    $(this).siblings().find(".accordion-header i").removeClass("rotate-fa");
    $(this).find(".accordion-header").toggleClass("accordion-gold");
    $(this).find(".fa").toggleClass("rotate-fa");

    $(".accordion-wrap .accordion-text").not($(this).children().eq(1)).slideUp(300);
});


	

});
