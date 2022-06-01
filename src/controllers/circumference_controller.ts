import type { Request, Response } from "express";

import db from "../db";
import PiCalculations from "../models/piCalculations";
import { SunCircumference } from "../lib/circumference";
import Pi from "../lib/pi";

const piCalculationsModel = new PiCalculations(db);

export default {

	getSun: async function(_: Request, res: Response) {
		const row = await piCalculationsModel.getLatestRow();

		if (!row) {
			return res.json({
				pi: "0",
				circumference: "0",
			});
		}

		const sunCircumference = new SunCircumference(Pi.convertToBigInt(row.calculated_value), parseInt(row.id!)).calculate()

		return res.json({
			pi: row.calculated_value,
			circumference: sunCircumference,
		});
	},
};