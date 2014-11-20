var preload_data = [
{id:1,engine: "Ferrari",tyres: "Pirelli",start_year: 1950,technical_chief: "Pat Fry",full_name: "Scuderia Ferrari",chassis: "Ferrari F14 T",team_principal: "Stefano Domenicali",championships: 16,base: "Maranello, Italy",name: "Ferrari"},
{id:2,engine: "Renault Sport Energy F1-2014",tyres: "Pirelli",start_year: 2005,technical_chief: "Adrian Newey",full_name: "Infiniti Red Bull Racing",chassis: "RB10",team_principal: "Christian Horner",championships: 4,base: "Milton Keynes, UK",name: "Red Bull Racing"},
{id:3,engine: "Renault Sport Energy F1-2014",tyres: "Pirelli",start_year: 2010,technical_chief: "Mark Smith",full_name: "Caterham F1 Team",chassis: "CT05",team_principal: "Cyril Abiteboul",championships: 0,base: "Leafield, UK",name: "Caterham"},
{id:4,engine: "Mercedes-Benz PU106A Hybrid",tyres: "Pirelli",start_year: 2008,technical_chief: "Andrew Green",full_name: "Sahara Force India F1 Team",chassis: "VJM07",team_principal: "Vijay Mallya",championships: 0,base: "Silverstone, UK",name: "Force India"},
{id:5,engine: "Renault Sport Energy F1-2014",tyres: "Pirelli",start_year: 1981,technical_chief: "Nick Chester",full_name: "Lotus F1 Team",chassis: "E22",team_principal: "Gerard Lopez",championships: 2,base: "Enstone, UK",name: "Lotus"},
{id:6,engine: "Ferrari",tyres: "Pirelli",start_year: 2010,technical_chief: "Max Chilton",full_name: "Marussia F1 Team",chassis: "MR03",team_principal: "John Booth",championships: 0,base: "Banbury, UK",name: "Marussia"},
{id:7,engine: "Mercedes-Benz PU106A Hybrid",tyres: "Pirelli",start_year: 1966,technical_chief: "Tim Goss",full_name: "McLaren Mercedes",chassis: "MP4-29",team_principal: "Martin Whitmarsh",championships: 8,base: "Woking, UK",name: "McLaren"},
{id:8,engine: "Mercedes-Benz PU106A Hybrid",tyres: "Pirelli",start_year: 2010,technical_chief: "Bob Bell",full_name: "Mercedes AMG Petronas F1 Team",chassis: "F1 W05",team_principal: "Ross Brawn",championships: 0,base: "Brackley, UK",name: "Mercedes"},
{id:9,engine: "Ferrari",tyres: "Pirelli",start_year: 1993,technical_chief: "null",full_name: "Sauber F1 Team",chassis: "C33",team_principal: "Monisha Kaltenborn",championships: 0,base: "Hinwil, Switzerland",name: "Sauber"},
{id:10,engine: "Renault Sport Energy F1-2014",tyres: "Pirelli",start_year: 2006,technical_chief: "James Key",full_name: "Scuderia Toro Rosso",chassis: "STR9",team_principal: "Franz Tost",championships: 0,base: "Faenza, Italy",name: "Toro Rosso"},
{id:11,engine: "Mercedes-Benz PU106A Hybrid",tyres: "Pirelli",start_year: 1975,technical_chief: "Pat Symonds",full_name: "Williams F1 Team",chassis: "FW36",team_principal: "Frank Williams",championships: 9,base: "Grove, UK",name: "Williams"}
];

migration.up = function(migrator)
{
    migrator.createTable({
        "columns":
        {
            "id": "int",
            "base": "string",
            "championships": "int",
            "chassis": "string",
            "engine": "string",
            "full_name": "string",
            "name": "string",
            "start_year": "int",
            "team_principal": "string",
            "technical_chief": "string",
            "tyres": "string"
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
