
exports.seed = async function(knex) {

  await knex("cars").truncate()

  await knex("cars").insert([
    { VIN: 123456, make: "Kia", model: "Soul", mileage:156000, transmission: "manual", titleStatus: "salvage" },
    { VIN: 789123, make: "Dodge", model: "Charger", mileage:120365, transmission: "automatic" },
    { VIN: 456789, make: "Cadillac", model: "DeVille", mileage:200505, transmission: "manual", titleStatus: "clean" },
    { VIN: 156485, make: "Toyota", model: "Camry", mileage:140000 },
    { VIN: 802465, make: "Ford", model: "Mustang", mileage:56000, transmission: "automatic"},
    { VIN: 045155, make: "Jeep", model: "Wrangler", mileage:75658 },
  ]);

};