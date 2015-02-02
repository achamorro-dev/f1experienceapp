var args = arguments[0] || {};

function createTeamView(team){	
	var contentView = Ti.UI.createView({
		backgroundColor: '#FFFFFF',
		borderColor: '#D1D1D1',
		borderWidth: '1px',
		height: '72dp',
		width: '100%'
	});
	var teamPicture = Ti.UI.createImageView({
		height: '40dp',
	    left: '16dp',
	    top: '16dp',
	    width: '40dp'
	});
	var teamName = Ti.UI.createLabel({
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
 	
	teamPicture.image = '/images/teams/' + team.get('id') + '.jpg';
	teamName.text = team.get('name');
	
	contentView.add(teamPicture);
	contentView.add(teamName);
			
	$.teams_list_view.add(contentView);
}


// Coleccion con los equipos
var teams = Alloy.createCollection('teams');
// Extraemos los datos
teams.fetch();
// Por cada equipo creamos su vista
teams.map(createTeamView);
