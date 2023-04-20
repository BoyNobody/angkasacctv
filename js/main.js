$(function(){
    //navbar toggle
   
    const menus = document.querySelectorAll(".menu-2");
const navMenu = document.querySelector('.nav-menu');
const hambergerMenu = document.querySelector(".hamberger-menu");
const toggle = document.querySelectorAll("navbar-toggler");
menus.forEach(function (menu) {
    menu.addEventListener("click", function () {
        hambergerMenu.classList.toggle("open");
    });
});
$('.menu-2').click(function(){
    $('#navbarSupportedContent').slideToggle();
})
    ////    
    //this slide toggle1
    $("#upbtn").hide();
$("#togglebtn").click(function(){
    $("#content").slideToggle(1000,'easeInOutExpo',);
    $("#img").slideDown();
    var text = document.getElementById('togglebtn').innerHTML='Selengkapnya';
    $("#togglebtn").hide();
    $("#upbtn").show();
    document.getElementById('upbtn').innerHTML='Sedikitnya';
});

$("#upbtn").click(function(){

    $("#content").slideToggle(1000,'easeInOutExpo',);
    $("#togglebtn").show();
    var text = document.getElementById('togglebtn').innerHTML='Selengkapnya';
  
    $("#upbtn").hide();  
}); 
//this slide btndropdown
$("#produk").click(function(){
    $('.dropdown-menu').slideToggle();
 });
 //..............................//
 //..................FaQ............//
 $('.btn-down1').hide();
 $('.btn-up1').click(function(){
     $("#content1").slideToggle(1000,'easeInOutExpo',);
     $('.btn-up1').hide();
     $('.btn-down1').show();
     document.querySelectorAll('.btn-down').innerHTML='Sedikitnya';
 });
 
 $('.btn-down1').click(function(){
 
     $("#content1").slideToggle(1000,'easeInOutExpo',);
     $('.btn-up1').show();
     var text = document.getElementById('togglebtn').innerHTML='Selengkapnya';
   
     $('.btn-down1').hide();  
 }); 
 //content 2//
 $('.btn-down2').hide();
 $('.btn-up2').click(function(){
     $("#content2").slideToggle(1000,'easeInOutExpo',);
     $('.btn-up2').hide();
     $('.btn-down2').show();
     document.querySelectorAll('.btn-down').innerHTML='Sedikitnya';
 });
 
 $('.btn-down2').click(function(){
 
     $("#content2").slideToggle(1000,'easeInOutExpo',);
     $('.btn-up2').show();
     var text = document.getElementById('togglebtn').innerHTML='Selengkapnya';
   
     $('.btn-down2').hide();  
 }); 
//..............content3...............//
$('.btn-down3').hide();
 $('.btn-up3').click(function(){
     $("#content3").slideToggle(1000,'easeInOutExpo',);
     $('.btn-up3').hide();
     $('.btn-down3').show();
     document.querySelectorAll('.btn-down').innerHTML='Sedikitnya';
 });
 
 $('.btn-down3').click(function(){
 
     $("#content3").slideToggle(1000,'easeInOutExpo',);
     $('.btn-up3').show();
     var text = document.getElementById('togglebtn').innerHTML='Selengkapnya';
   
     $('.btn-down3').hide();  
 }); 

 ///tabs link
 $('.tab-panel ul li').click(function(event){
    $(this).addClass('active');
    $('.all').show();
});
$('#dahua').click(function(event){
     $('tab-panel ul li').removeClass('active');
     $(this).addClass('active');
    
     $('.row-2').hide();
    $('.row-1').show();
});
$('#hikvision').click(function(event){
    $('tab-panel ul li').removeClass('active');
    $(this).addClass('active');
    $('.row-1').hide();
    $('.row-2').show();
});
//......................................//
//dropdown tabs link//
// $('#btn1').click(function(event){

//     $('tab-panel ul li').removeClass('active');
//     $(this).addClass('active');
   
//     $('.row2').hide();
//    $('.row1').show();
// });
// $('#btn2').click(function(event){

//     $('tab-panel ul li').removeClass('active');
//     $(this).addClass('active');
//     $('.row1').hide();
//     $('.row2').show();
// });

//scroll page
$('.page-scroll').on('click',function(e){
    var href = $(this).attr('href');
    var active = $(href);
    $('html').animate({
        scrollTop: active.offset().top-10.
    },1350,'easeInOutExpo',);
    
    e.preventDefault();



});
////////......../////////
//..btnTop
window.addEventListener('scroll',function(){
    var scroll = this.document.getElementById('tooltip');
    scroll.classList.toggle("active",window.scrollY > 900);
    
})

//..anmate  moving text
$(document).on('scroll',function(){
    $('.to-left').css("right",Math.max(1460-0.44*window.scrollY,100)+"px");
})
$(document).on('scroll',function(){
    $('.to-right').css("left",Math.max(1460-0.44*window.scrollY,100)+"px");
})
$(document).on('scroll',function(){
    $('.to-left-2').css("right",Math.max(1400-0.39*window.scrollY,100)+"px");
})
$(document).on('scroll',function(){
    $('.to-right-2').css("left",Math.max(1400-0.39*window.scrollY,100)+"px");
})
//........//
// var line = document.querySelector('.to-right')
// window.onscroll = ()=> {
//     var pos = window.scrollY =1400;
//     line.style.left = '${pos}px'
// }
//end//
///..........//
ScrollOut({
    targets:'.slideInUp,.to-left,.to-right'
});
//img modal//
document.querySelectorAll('.img-pop img').forEach(image =>{
    image.onclick = () =>{
        document.querySelector('.modal-img').style.display = 'block';
        document.querySelector('.modal-img img').src = image.getAttribute('src');
    }

});
document.querySelector('.modal-img span').onclick = () =>{
    document.querySelector('.modal-img').style.display = 'none';
}
});
// window.addEventListener('scroll',()=>{
//     var animasi =$('.animated');
//     var anim = document.querySelactorAll('.animated');
//     for (var i =0;i<anim.lenght;i++){
//         var windowheight = window.innerHeight;
//         var animasiTop = anim[i].getBoundingClientRect().top;
//         var point = 150;
    
//         if(animasiTop<windowheight-point){
//             alert('hello');
//             anim[i].classList.add('active');
//         }
//         else{
//             anim[i].classList.remove('active');
//         }
//     }
// });

// window.addEventListener('scroll',()=>{
// var content =document.querySelector('.row-grid');
// var position = content.getBoundingClientRect().top;
// var screenposition = window.innerHeight;
// if(position < screenposition){
//     alert('hello')
//     content.classList.add('active');
// } 
// else{
//     content.classList.remove('active');
// }
// });
    