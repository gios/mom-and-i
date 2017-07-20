exports.up = async function(knex, Promise) {
  await knex.schema.createTableIfNotExists("categories", (table) => {
    table.increments();
    table.string("name").notNullable();
    table.timestamps(true, true);
  });

  await knex("categories").insert([
    { name: "moms" },
    { name: "girls" },
    { name: "boys" },
    { name: "family look" },
  ]);

  await knex.schema.createTableIfNotExists("subcategories", (table) => {
    table.increments();
    table.integer("category_id").unsigned().notNullable();
    table.foreign("category_id").references("categories.id");
    table.string("name").notNullable();
    table.timestamps(true, true);
  });

  await knex("subcategories").insert([
    { category_id: 1, name: "outerwear" },
    { category_id: 1, name: "footwear" },
    { category_id: 1, name: "dresses and costumes" },
    { category_id: 1, name: "blouses and sweaters" },
    { category_id: 1, name: "pants" },
    { category_id: 1, name: "sportswear" },
    { category_id: 1, name: "home clothes" },
    { category_id: 2, name: "outerwear" },
    { category_id: 2, name: "footwear" },
    { category_id: 2, name: "dresses and costumes" },
    { category_id: 2, name: "blouses and sweaters" },
    { category_id: 2, name: "pants" },
    { category_id: 2, name: "skirts" },
    { category_id: 2, name: "sportswear" },
    { category_id: 2, name: "home clothes" },
    { category_id: 2, name: "toys" },
    { category_id: 3, name: "outerwear" },
    { category_id: 3, name: "footwear" },
    { category_id: 3, name: "costumes" },
    { category_id: 3, name: "sweaters" },
    { category_id: 3, name: "pants" },
    { category_id: 3, name: "sportswear" },
    { category_id: 3, name: "home clothes" },
    { category_id: 3, name: "toys" },
    { category_id: 4, name: "festive" },
    { category_id: 4, name: "everyday" },
    { category_id: 4, name: "sports" },
    { category_id: 4, name: "national" },
  ]);
};

exports.down = async function(knex, Promise) {
  await knex.schema.dropTableIfExists("subcategories");
  await knex.schema.dropTableIfExists("categories");
};
