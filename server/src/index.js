const knexConfig = require("./knexfile");
const knex = require("knex"); // (knexConfig);

if (process.env.NODE_ENV === "development") {
    module.exports = knex(knexConfig.development);
} else if (process.env.NODE_ENV === "production") {
    module.exports = knex(knexConfig.production);
    
}