var preload_data = [
{id: 1,name: "Finlandia"},
{id: 2,name: "Alemania"},
{id: 3,name: "Francia"},
{id: 4,name: "Inglaterra"},
{id: 5,name: "Suecia"},
{id: 6,name: "México"},
{id: 7,name: "Rusia"},
{id: 8,name: "Dinamarca"},
{id: 9,name: "Venezuela"},
{id: 10,name: "Brasil"},
{id: 11,name: "Australia"},
{id: 12,name: "Malasia"},
{id: 13,name: "Baréin"},
{id: 14,name: "China"},
{id: 15,name: "España"},
{id: 16,name: "Mónaco"},
{id: 17,name: "Canadá"},
{id: 18,name: "Austria"},
{id: 19,name: "Hungría"},
{id: 20,name: "Bélgica"},
{id: 21,name: "Italia"},
{id: 22,name: "Singapur"},
{id: 23,name: "Japón"},
{id: 24,name: "Estados Unidos"},
{id: 25,name: "Abu Dhabi"},
{id: 26,name: "Países Bajos"}
];

migration.up = function(migrator)
{
    migrator.createTable({
        "columns":
        {
            "id": "int",
            "name": "string"
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
