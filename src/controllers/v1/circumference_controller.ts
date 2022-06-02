import type { Request, Response } from "express";

import db from "../../db";
import PiCalculations from "../../models/piCalculations";
import { SunCircumference } from "../../lib/circumference";
import Pi from "../../lib/pi";
import CacheService from "../../services/cache";

const piCalculationsModel = new PiCalculations(db);
const circumferenceCacheStore = new CacheService({
	ttl: 120,
})

export default {

	getSun: async function(_: Request, res: Response): Promise<void> {
		const row = await piCalculationsModel.getLatestRow();

		if (!row) {
			 res.json({
				 pi: "0",
				 circumference: "0",
				 elapsed_time: "0",
				 decimal_points: 0,
			 })
			return
		}

		let sunCircumference = circumferenceCacheStore.get(row.id);

		if (!sunCircumference) {
			sunCircumference = new SunCircumference(Pi.convertToBigInt(row.calculated_value), parseInt(row.id)).calculate()

			circumferenceCacheStore.set(row.id, sunCircumference);
		}

		res.json({
			pi: row.calculated_value,
			circumference: sunCircumference,
			elapsed_time: row.elapsed_time,
			decimal_points: row.id,
		});
	},
};