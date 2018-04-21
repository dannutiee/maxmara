var oScroll = {

     sel: {




     },

     data: {

             current_scroll:  null,
             advertOffsetTop: null,



     },


     init: function(){

                     $(window).scroll(function(){

                             oScroll.data.current_scroll = $(this).scrollTop();
                             oScroll.data.windowScrollTop = $(window).scrollTop();

                      


                             console.log(oScroll.data.current_scroll);
                             console.log(oScroll.data.advertOffsetTop);

                     });



     }









}

$(document).ready(function(){

     oScroll.init();

});
