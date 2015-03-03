var args = arguments[0] || {};
var tabActive=$.tab1;

function clickTabItem(e){
	// Movemos a la vista de ScrollableView
	$.tabs_views.scrollToView(e.source.idx-1);
};

function scrollTabsViews(e){
	var viewIdx = e.currentPage + 1;
	var tabItem = $.getView('tab'+viewIdx);
	$.removeClass(tabActive,"tab-item-active");
	$.addClass(tabItem,"tab-item-active");
	tabActive=tabItem;
	return moveTabsListScroll(viewIdx);
};

function moveTabsListScroll(viewIdx){
	return $.tabs_list.scrollTo((viewIdx-1)*100,0);
};

function doOpen(){
	// Coleccion con los pilotos
	var drivers = Alloy.createCollection('drivers');
	// Extraemos los datos
	drivers.fetch();
	// Extraemos el piloto
	var driverArray = drivers.where({id: args.driver});
	var driverSelected = driverArray[0];
	
	// Rellenamos la vista con los datos
	$.bar_title.text=driverSelected.get('name');
	// Pestanya info
	
};


function closeWindow(e){
	$.win_details.close();
};
