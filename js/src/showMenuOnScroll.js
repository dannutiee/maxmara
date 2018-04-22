var oMenu = {

	sel: {

		menu:  'nav'
	},

	data:  {

		     currentScroll:  null,
             windowHeight: null,
             windowScrollPosBottom: null,
             previousScroll: 0 ,
             menuHeight: 80


	},

	init: function(){

			

			$(window).scroll(function(){

				oMenu.data.windowHeight =  $(window).height();
				oMenu.data.currentScroll = $(this).scrollTop();
                oMenu.data.windowScrollPosBottom = $(document).height() - oMenu.data.windowHeight;

                oMenu.switchMenu();

			});

	},

	switchMenu: function(){

		
		if ( oMenu.data.currentScroll > oMenu.data.menuHeight && oMenu.data.currentScroll < oMenu.data.windowScrollPosBottom )
		{
					$(oMenu.sel.menu).addClass('fixed');
				    if (oMenu.data.currentScroll > oMenu.data.previousScroll)
				    {
				    	
				        window.setTimeout(oMenu.hideNav(), 300);

				        // console.log( 'down');

				    } else {
				 
				        window.setTimeout(oMenu.showNav(), 300);
				         // console.log( ' up');
				    }

				    
				    oMenu.data.previousScroll = oMenu.data.currentScroll;


		}

		if (  oMenu.data.currentScroll == 0 )
		{
			$(oMenu.sel.menu).removeClass('fixed').delay(1000);
			$(oMenu.sel.menu).removeClass('is-visible');
		}




	},

	showNav: function(){

			$(oMenu.sel.menu).removeClass('is-hidden').addClass('is-visible');
			
	},

	hideNav: function(){

			$(oMenu.sel.menu).removeClass('is-visible').addClass('is-hidden');
			

	}

}

$(document).ready(function(){

	oMenu.init();

});