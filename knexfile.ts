import type { Knex } from "knex";

// Update with your config settings.
const base = {
	client: "postgresql",
	pool: {
		min: 2,
		max: 10,
	},
	migrations: {
		tableName: "knex_migrations",
		directory: `${__dirname}/db/migrations`,
	},
};

const config: { [key: string]: Knex.Config } = {
	development: {
		...base,
		connection: {
			database: "my_db",
			user: "username",
			password: "password",
		},
	},

	production: {
		...base,
		connection: {
			database: "my_db",
			user: "username",
			password: "password",
		},
		pool: {
			min: 2,
			max: 20,
		},
	},
};

module.exports = config;
