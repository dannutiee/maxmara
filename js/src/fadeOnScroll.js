var oScroll = {

     sel: {

        revelObjects:      'section, footer'
     },

     data: {

             currentScroll:  null,
             windowHeight: null,
             windowScrollPosBottom: null,
             sectionOffset: null
            
            
            
     },


     init: function(){

                    oScroll.data.windowHeight =  $(window).height();
                    oScroll.hideContent();  
                     $(window).scroll(function(){

                             oScroll.data.currentScroll = $(this).scrollTop();
                             oScroll.data.windowScrollPosBottom = oScroll.data.currentScroll + oScroll.data.windowHeight

                             oScroll.revelOnScroll(); 

                                
                     });

     },

     hideContent: function() {

                    $(oScroll.sel.revelObjects).each(function()
                    {
                           if (  $(this).offset().top > oScroll.data.windowHeight )
                           {
                                    $(this).css('opacity', '0');

                           }

                    });                 
     },

     revelOnScroll: function() {


                    $(oScroll.sel.revelObjects).each(function()
                    {
                         if ( oScroll.data.windowScrollPosBottom > $(this).offset().top )
                              
                                     $(this).animate({"opacity" : 1 } , 1000);
                               
                    });  
     }


}

$(document).ready(function(){

     oScroll.init();

});
