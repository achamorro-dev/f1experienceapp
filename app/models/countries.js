exports.definition = {
    config : {
        "columns": {
            "id": "int",
            "name": "string"
        },
        "defaults": {
        },
        "adapter": {
            "collection_name": "countries",
            "idAttribute": "id",
            "type": "sql"
        }
    }
};
