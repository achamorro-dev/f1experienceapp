var args = arguments[0] || {};

function createRaceView(race){	
	var contentView = Ti.UI.createView({
		backgroundColor: '#FFFFFF',
		borderColor: '#D1D1D1',
		borderWidth: '1px',
		height: '72dp',
		width: '100%'
	});
	var racePicture = Ti.UI.createImageView({
		height: '40dp',
	    left: '16dp',
	    top: '16dp',
	    width: '40dp'
	});
	var raceName = Ti.UI.createLabel({
		color: '#3d3d3d',
	    font: {
	        fontFamily: Alloy.CFG.title_font,
	        fontSize: '16sp'
	    },
	    height: '39dp',
	    left: '72dp',
	    right: '16dp',
	    top: '16.5dp',
	    verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_TOP
	});
 	
	racePicture.image = '/images/countries/' + race.get('id') + '.jpg';
	raceName.text = race.get('name');
	
	contentView.add(racePicture);
	contentView.add(raceName);
			
	$.races_list_view.add(contentView);
}


// Coleccion con los circuitos
var races = Alloy.createCollection('races');
// Extraemos los datos
races.fetch();
// Por cada circuito creamos su vista
races.map(createRaceView);
