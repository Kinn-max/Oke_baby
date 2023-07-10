


const menuDm = document.querySelector('.bar_flex')

function tonggleClass(){
    const withMenu = document.querySelector('.menu__shopp--hv')

    withMenu.classList.toggle('with_menu')

}

$(document).ready(function(){
   $(window).scroll(function(){
      if($(this).scrollTop()){
        $('#backTop').fadeIn();
      }
      else {
        $('#backTop').fadeOut();
      }
   });
   $('#backTop').click(function(){
      $('html, body').animate({scrollTop:0},200)
   });
});