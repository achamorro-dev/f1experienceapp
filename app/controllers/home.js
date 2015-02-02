/*
 * Funcion para mostrar/ocultar el menu que se encuentra en un panel lateral
 */
function toggleMenu(event){
    var menuView = $.menu.getView("menu_view");
    //Si el menu esta oculto
    if(menuView._toggle == false){
    	menuView.animate({
			left: 0,
			duration: 250,
			curve:Ti.UI.ANIMATION_CURVE_EASE_IN_OUT
		});
		// $.scrollView.animate({
			// backgroundColor: '#222222',
			// duration: 250
		// });
		menuView._toggle=true;
	//Si el menu esta visible
    }else{
    	menuView.animate({
			left: '-80%',
			duration: 250,
			curve:Ti.UI.ANIMATION_CURVE_EASE_IN_OUT
		});
		// $.scrollView.animate({
			// backgroundColor: '#FFFFFF',
			// duration: 250
		// });
		menuView._toggle=false;
    }
}

function disableViews(cb){
	var index_list_view = $.index_list.getView("index_list_view"),
		drivers_list_view = $.drivers_list.getView("drivers_list_view"),
		teams_list_view = $.teams_list.getView("teams_list_view"),
		races_list_view = $.races_list.getView("races_list_view");
	index_list_view.zIndex=3; 
	drivers_list_view.zIndex=3; 
	teams_list_view.zIndex=3;
	races_list_view.zIndex=3;
	index_list_view.active="false"; 
	drivers_list_view.active="false"; 
	teams_list_view.active="false";
	races_list_view.active="false";
	return cb();
}

function enableView(viewSelected, event){
	toggleMenu(event);
	if(viewSelected.active != "true"){
		disableViews(function(){
			viewSelected.left='-100%';
			viewSelected.zIndex=4;
			viewSelected.animate({
				left: 0,
				duration: 1000
			});
			viewSelected.active="true";	
		});
	}
}


$.menu.getView("index_menu_row").addEventListener('click',function(e){
	enableView($.index_list.getView("index_list_view"),e);
});
$.menu.getView("drivers_menu_row").addEventListener('click',function(e){
	enableView($.drivers_list.getView("drivers_list_view"),e);
});
$.menu.getView("teams_menu_row").addEventListener('click',function(e){
	enableView($.teams_list.getView("teams_list_view"),e);
});
$.menu.getView("races_menu_row").addEventListener('click',function(e){
	enableView($.races_list.getView("races_list_view"),e);
});

