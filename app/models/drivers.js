exports.definition = {
    config : {
        "columns": {
            "id": "int",
            "birthday": "date",
            "championships": "int",
            "driver_type": "string",
            "name": "string",
            "country_id": "int", // countries model id
            "shortname": "string",
            "team_id": "int" // teams model id
        },
        "defaults": {
            "championships": 0,
            "country_id": 0,
            "team_id": 0
        },
        "adapter": {
            "collection_name": "drivers",
            "idAttribute": "id",
            "type": "sql"
        }
    },
    
    extendCollection: function(Collection) {		
        _.extend(Collection.prototype, {
        	
    	    comparator : function(driver) {
        	    return driver.get('name');
            }
            
        });
		
        return Collection;
    }
};
