import type { Knex } from "knex";

const tableName = "pi_calculations";

export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable(tableName, (table) => {
		table.bigIncrements("id", { primaryKey: true });
		table.text("calculated_value").notNullable();
		table.bigint("elapsed_time").unsigned().notNullable();
		table.timestamps(true, true);
	});
}


export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTable(tableName);
}

