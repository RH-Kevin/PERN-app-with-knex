const knex = require("knex");
const knexConfig = require("./knexfile");

if (process.env.NODE_ENV === "development") {
    module.exports = knex(knexConfig.development);
} else if (process.env.NODE_ENV === "production") {
    const db = knex(knexConfig.production);
    module.exports = db;
    
}