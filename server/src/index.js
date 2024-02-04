const knexConfig = require("./db/knexfile"); // This needs to point to the specific knexfile
const knex = require("knex");//(knexConfig);

if (process.env.NODE_ENV === "development") {
    module.exports = knex(knexConfig.development);
} else if (process.env.NODE_ENV === "production") {
    module.exports = knex(knexConfig.production);
    
}