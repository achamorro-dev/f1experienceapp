var args = arguments[0] || {};

function createDriverView(driver){	
	var contentView = Ti.UI.createView({
		backgroundColor: '#FFFFFF',
		borderColor: '#D1D1D1',
		borderWidth: '1px',
		height: '72dp',
		width: '100%'
	});
	var driverPicture = Ti.UI.createImageView({
		height: '40dp',
	    left: '16dp',
	    top: '16dp',
	    width: '40dp'
	});
	var driverName = Ti.UI.createLabel({
		color: '#3d3d3d',
	    font: {
	        fontFamily: Alloy.CFG.title_font,
	        fontSize: Alloy.CFG.title_size
	    },
	    height: '25dp',
	    left: '72dp',
	    right: '16dp',
	    top: '23.5dp',
	    verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_TOP
	});
 	
	driverPicture.image = '/images/drivers/' + driver.get('id') + '.jpg';
	driverName.text = driver.get('name');
	
	contentView.add(driverPicture);
	contentView.add(driverName);
			
	$.drivers_list_view.add(contentView);
}


// Coleccion con los pilotos
var drivers = Alloy.createCollection('drivers');
// Extraemos los datos
drivers.fetch();
// Por cada piloto creamos su vista
drivers.map(createDriverView);
