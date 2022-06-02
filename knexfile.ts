require("dotenv").config();
import type { Knex } from "knex";

// Update with your config settings.
const base: Knex.Config = {
	client: "postgresql",
	pool: {
		min: 2,
		max: 10,
	},
	migrations: {
		tableName: "knex_migrations",
		directory: `${__dirname}/db/migrations`,
	},
	connection: {
		port: 5432,
		database: process.env["PG_DATABASE"] as string,
		host: process.env["PG_HOST"] as string,
		user: process.env["PG_USER"] as string,
		password: process.env["PG_PASSWORD"] as string,
		ssl: {
			rejectUnauthorized: false
		}
	},
};

const config: { [key: string]: Knex.Config } = {
	development: {
		...base,
	},

	production: {
		...base,
		pool: {
			min: 2,
			max: 20,
		},
	},
};

module.exports = config;
