var preload_data = [
{id: 1,driver_type: "FD",name: "Fernando Alonso",country_id: 15,birthday: "1981-07-29",championships: 2,team_id: 1,shortname: "ALO"},
{id: 2,driver_type: "SD",name: "Kimi Räikkönen",country_id: 1,birthday: "1979-10-17",championships: 1,team_id: 1,shortname: "RAI"},
{id: 3,driver_type: "FD",name: "Sebastian Vettel",country_id: 2,birthday: "1987-07-03",championships: 4,team_id: 2,shortname: "VET"},
{id: 4,driver_type: "FD",name: "Jules Bianchi",country_id: 3,birthday: "1989-08-03",championships: 0,team_id: 6,shortname: "BIA"},
{id: 5,driver_type: "SD",name: "Valtteri Bottas",country_id: 1,birthday: "1989-08-28",championships: 0,team_id: 11,shortname: "BOT"},
{id: 6,driver_type: "FD",name: "Jenson Button",country_id: 4,birthday: "1980-01-19",championships: 1,team_id: 7,shortname: "BUT"},
{id: 7,driver_type: "SD",name: "Max Chilton",country_id: 4,birthday: "1991-04-21",championships: 0,team_id: 6,shortname: "CHI"},
{id: 8,driver_type: "SD",name: "Marcus Ericsson",country_id: 5,birthday: "1990-09-02",championships: 0,team_id: 3,shortname: "ERC"},
{id: 9,driver_type: "FD",name: "Romain Grosjean",country_id: 3,birthday: "1986-04-17",championships: 0,team_id: 5,shortname: "GRO"},
{id: 10,driver_type: "SD",name: "Esteban Gutierrez",country_id: 6,birthday: "1991-08-05",championships: 0,team_id: 9,shortname: "GUT"},
{id: 11,driver_type: "FD",name: "Lewis Hamilton",country_id: 4,birthday: "1985-01-07",championships: 1,team_id: 8,shortname: "HAM"},
{id: 12,driver_type: "FD",name: "Nico Hulkenberg",country_id: 2,birthday: "1987-08-19",championships: 0,team_id: 4,shortname: "HUL"},
{id: 13,driver_type: "FD",name: "Kamui Kobayashi",country_id: 23,birthday: "1986-09-13",championships: 0,team_id: 3,shortname: "KOB"},
{id: 14,driver_type: "SD",name: "Daniil Kvyat",country_id: 7,birthday: "1994-04-26",championships: 0,team_id: 10,shortname: "KVY"},
{id: 15,driver_type: "SD",name: "Kevin Magnussen",country_id: 8,birthday: "1992-10-05",championships: 0,team_id: 7,shortname: "MAG"},
{id: 16,driver_type: "SD",name: "Pastor Maldonado",country_id: 9,birthday: "1985-03-09",championships: 0,team_id: 5,shortname: "MAL"},
{id: 17,driver_type: "FD",name: "Felipe Massa",country_id: 10,birthday: "1981-04-25",championships: 0,team_id: 11,shortname: "MAS"},
{id: 18,driver_type: "SD",name: "Sergio Perez",country_id: 6,birthday: "1990-01-26",championships: 0,team_id: 4,shortname: "PER"},
{id: 19,driver_type: "SD",name: "Daniel Ricciardo",country_id: 11,birthday: "1989-07-01",championships: 0,team_id: 2,shortname: "RIC"},
{id: 20,driver_type: "SD",name: "Nico Rosberg",country_id: 2,birthday: "1985-06-27",championships: 0,team_id: 8,shortname: "ROS"},
{id: 21,driver_type: "FD",name: "Adrian Sutil",country_id: 2,birthday: "1983-01-11",championships: 0,team_id: 9,shortname: "SUT"},
{id: 22,driver_type: "FD",name: "Jean-Eric Vergne",country_id: 3,birthday: "1990-04-25",championships: 0,team_id: 10,shortname: "VER"}
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
            "team_id": "int" // teams model id
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
