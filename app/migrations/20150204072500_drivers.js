var preload_data = [
{id: 1,driver_type: "FD",name: "Lewis Hamilton",country_id: 4,birthday: "1985-01-07",championships: 2,team_id: 8,shortname: "HAM",number: 44},
{id: 2,driver_type: "SD",name: "Nico Rosberg",country_id: 2,birthday: "1985-06-27",championships: 0,team_id: 8,shortname: "ROS",number: 6},
{id: 3,driver_type: "FD",name: "Daniel Ricciardo",country_id: 11,birthday: "1989-07-01",championships: 0,team_id: 2,shortname: "RIC",number: 3},
{id: 4,driver_type: "SD",name: "Daniil Kvyat",country_id: 7,birthday: "1994-04-26",championships: 0,team_id: 2,shortname: "KVY",number: 26},
{id: 5,driver_type: "FD",name: "Felipe Massa",country_id: 10,birthday: "1981-04-25",championships: 0,team_id: 11,shortname: "MAS",number: 19},
{id: 6,driver_type: "SD",name: "Valtteri Bottas",country_id: 1,birthday: "1989-08-28",championships: 0,team_id: 11,shortname: "BOT",number: 77},
{id: 7,driver_type: "FD",name: "Sebastian Vettel",country_id: 2,birthday: "1987-07-03",championships: 4,team_id: 1,shortname: "VET",number: 5},
{id: 8,driver_type: "SD",name: "Kimi Räikkönen",country_id: 1,birthday: "1979-10-17",championships: 1,team_id: 1,shortname: "RAI",number: 7},
{id: 9,driver_type: "FD",name: "Fernando Alonso",country_id: 15,birthday: "1981-07-29",championships: 2,team_id: 7,shortname: "ALO",number: 14},
{id: 10,driver_type: "SD",name: "Jenson Button",country_id: 4,birthday: "1980-01-19",championships: 1,team_id: 7,shortname: "BUT",number: 22},
{id: 11,driver_type: "FD",name: "Nico Hulkenberg",country_id: 2,birthday: "1987-08-19",championships: 0,team_id: 4,shortname: "HUL",number: 27},
{id: 12,driver_type: "SD",name: "Sergio Perez",country_id: 6,birthday: "1990-01-26",championships: 0,team_id: 4,shortname: "PER",number: 11},
{id: 13,driver_type: "FD",name: "Max Verstappen",country_id: 26,birthday: "1997-09-30",championships: 0,team_id: 10,shortname: "VES",number: 33},
{id: 14,driver_type: "SD",name: "Carlos Sainz Jr",country_id: 15,birthday: "1994-09-01",championships: 0,team_id: 10,shortname: "SAI",number: 55},
{id: 15,driver_type: "FD",name: "Romain Grosjean",country_id: 3,birthday: "1986-04-17",championships: 0,team_id: 5,shortname: "GRO",number: 8},
{id: 16,driver_type: "SD",name: "Pastor Maldonado",country_id: 9,birthday: "1985-03-09",championships: 0,team_id: 5,shortname: "MAL",number: 13},
{id: 17,driver_type: "FD",name: "Marcus Ericsson",country_id: 5,birthday: "1990-09-02",championships: 0,team_id: 3,shortname: "ERC",number: 9},
{id: 18,driver_type: "SD",name: "Felipe Nasr",country_id: 10,birthday: "1992-08-21",championships: 0,team_id: 3,shortname: "NAS",number: 12}
];

migration.up = function(migrator)
{
    migrator.createTable({
        "columns":
        {
            "id": "int",
            "birthday": "date",
            "championships": "int",
            "driver_type": "string",
            "name": "string",
            "country_id": "int", // countries model id
            "shortname": "string",
            "team_id": "int", // teams model id
            "number" : "int"
        }
    });
    for (var i = 0; i < preload_data.length; i++) {
        migrator.insertRow(preload_data[i]);
    }
};

migration.down = function(migrator)
{
    migrator.dropTable();
};
