import type { Knex } from "knex";

export interface IPiCalculations {
	id: string;
	calculated_value: string;
	elapsed_time: number;
	created_at?: string;
	updated_at?: string;
}

export default class PiCalculations {

	private TABLE_NAME = "pi_calculations";

	constructor(private knex: Knex) {
	}

	async getLatestRow() {
		return await this.knex.select<IPiCalculations>().from(this.TABLE_NAME).orderBy("id", "desc").first();
	}

	async insertRow(piPayload: Omit<IPiCalculations, "created_at" | "updated_at">) {
		return await this.knex.insert<PiCalculations>(piPayload).into(this.TABLE_NAME);
	}
}