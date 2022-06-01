import Pi from "../../../src/lib/pi";

describe("Pi", () => {
	it("should compute pi with the correct number of decimals given decimals input", () => {
		expect(new Pi(6).compute().substring(2).length).toBe(6);
		expect(new Pi(30).compute().substring(2).length).toBe(30);
		expect(new Pi(50).compute().substring(2).length).toBe(50);
		expect(new Pi(69).compute().substring(2).length).toBe(69);
	});

	it("should return 3.141592 for 6 decimals", () => {
		expect(new Pi(6).compute()).toBe("3.141592");
	});

	it("should return 3.141592653589 for 12 decimals", () => {
		expect(new Pi(12).compute()).toBe("3.141592653589");
	});

	it("should return 3.141592653589793238462643383279 for 30 decimals", () => {
		expect(new Pi(30).compute()).toBe("3.141592653589793238462643383279");
	});

	it("should convert computed pi value to string", () => {
		expect(typeof new Pi(12).compute()).toBe("string");
	});

	it("should return 0 if input decimals is 0", () => {
		expect(new Pi(0).compute()).toBe("0");
	});

	it("should convert string pi value to bigint", () => {
		const bigIntPi = Pi.convertToBigInt("3.141592653589793238462643383279");

		expect(bigIntPi).toBe(BigInt("3141592653589793238462643383279"));
		expect(typeof bigIntPi).toBe("bigint");
	});
});
