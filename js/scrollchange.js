$(function(){ 
//start   
 var divAll = $('.page1, .page2, .page3, .page4, .page5');
 var secArr = [];
        
 divAll.each(function(idx){
        secArr.push(divAll.eq(idx).offset().top); 
});

$(window).scroll(function(){
    $.each(secArr,function(idx){
        if($(window).scrollTop() >= secArr[0]-200){
            $('main').css({
                background:"#fef3d7",
                transition:".4s"
            });
        }if($(window).scrollTop() >= secArr[1]-300){
            $('main').css({background:"#a27f50"});
        }if($(window).scrollTop() >= secArr[2]-300){
            $('main').css({background:"#505e20"});
        }if($(window).scrollTop() >= secArr[3]-200){
            $('main').css({background:"#0091d6"});
        }if($(window).scrollTop() >= secArr[4]-250){
            $('main').css({background:"#411b0e"});
        }
    }); 
 });

//end  
});
    