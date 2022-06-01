import { performance } from "perf_hooks";

import db from "./db";
import PiCalculations from "./models/piCalculations";
import Pi from "./lib/pi";

const piCalculationModel = new PiCalculations(db);

/**
 * We first get the latest row id and increment that by 1
 * pass that counter into Pi class and compute the next value of pi
 */
export default async function calculatePi() {
	let counter;

	const latestRow = await piCalculationModel.getLatestRow();

	if (latestRow?.id) {
		counter = parseInt(latestRow.id) + 1;
	} else {
		counter = 1;
	}

	const t0 = performance.now();
	const next_pi_value = new Pi(counter).compute();
	const t1 = performance.now();

	await piCalculationModel.insertRow({
		id: counter.toString(),
		calculated_value: next_pi_value,
		elapsed_time: Math.trunc(t1 - t0),
	});
}