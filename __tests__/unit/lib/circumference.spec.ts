import { SunCircumference } from "../../../src/lib/circumference";

describe("SunCircumference", () => {
	it("should return 4375800.56 when pi is 3.142 and decimal points is 3", () => {
		const testCircumferenceKM = 2 * 3.142 * 696340;
		const actualCircumferenceKM = new SunCircumference(BigInt("3142"), 3).calculate();
		expect(actualCircumferenceKM).toBe(testCircumferenceKM.toFixed(3));
	});

	it("should return 4375229.56120 when pi is 3.14159 and decimal points is 5", () => {
		const testCircumferenceKM = 2 * 3.14159 * 696340;
		const actualCircumferenceKM = new SunCircumference(BigInt("314159"), 5).calculate();
		expect(actualCircumferenceKM).toBe(testCircumferenceKM.toFixed(5));
	});

	it("should return 4375233.25180200 when pi is 3.14159265 and decimal points is 8", () => {
		const testCircumferenceKM = 2 * 3.14159265 * 696340;
		const actualCircumferenceKM = new SunCircumference(BigInt("314159265"), 8).calculate();
		expect(actualCircumferenceKM).toBe(testCircumferenceKM.toFixed(8));
	});
});