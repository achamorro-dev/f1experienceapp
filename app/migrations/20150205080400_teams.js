var preload_data = [
{id:1,engine: "Mercedes-Benz PU106B Hybrid",tyres: "Pirelli",start_year: 2010,technical_chief: "Paddy Lowe",full_name: "Mercedes AMG Petronas F1 Team",chassis: "F1 W06 Hybrid",team_principal: "Toto Wolff",championships: 1,base: "Brackley, UK",name: "Mercedes"},
{id:2,engine: "Renault Sport Energy F1-2015",tyres: "Pirelli",start_year: 2005,technical_chief: "Adrian Newey",full_name: "Infiniti Red Bull Racing",chassis: "RB11",team_principal: "Christian Horner",championships: 4,base: "Milton Keynes, UK",name: "Red Bull Racing"},
{id:3,engine: "Mercedes-Benz PU106B Hybrid",tyres: "Pirelli",start_year: 1975,technical_chief: "Pat Symonds",full_name: "Williams Martini Racing",chassis: "FW37",team_principal: "Frank Williams",championships: 9,base: "Grove, UK",name: "Williams"},
{id:4,engine: "Ferrari",tyres: "Pirelli",start_year: 1950,technical_chief: "James Allison",full_name: "Scuderia Ferrari",chassis: "SF15-T",team_principal: "Maurizio Arrivabene",championships: 16,base: "Maranello, Italy",name: "Ferrari"},
{id:5,engine: "Honda RA615H Hybrid",tyres: "Pirelli",start_year: 1966,technical_chief: "Tim Goss",full_name: "McLaren Honda",chassis: "MP4-30",team_principal: "Eric Boullier",championships: 8,base: "Woking, UK",name: "McLaren Honda"},
{id:6,engine: "Mercedes-Benz PU106B Hybrid",tyres: "Pirelli",start_year: 2008,technical_chief: "Andrew Green",full_name: "Sahara Force India F1 Team",chassis: "VJM08",team_principal: "Vijay Mallya",championships: 0,base: "Silverstone, UK",name: "Force India"},
{id:7,engine: "Renault Sport Energy F1-2015",tyres: "Pirelli",start_year: 2006,technical_chief: "James Key",full_name: "Scuderia Toro Rosso",chassis: "STR10",team_principal: "Franz Tost",championships: 0,base: "Faenza, Italy",name: "Toro Rosso"},
{id:8,engine: "Mercedes-Benz PU106B Hybrid",tyres: "Pirelli",start_year: 1981,technical_chief: "Nick Chester",full_name: "Lotus F1 Team",chassis: "E23 Hybrid",team_principal: "Gerard Lopez",championships: 2,base: "Enstone, UK",name: "Lotus"},
{id:9,engine: "Ferrari",tyres: "Pirelli",start_year: 1993,technical_chief: "Eric Gandelin",full_name: "Sauber F1 Team",chassis: "C34",team_principal: "Monisha Kaltenborn",championships: 0,base: "Hinwil, Switzerland",name: "Sauber"}
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
