export default class Pi {
	private buffer = 20n;

	static convertToBigInt(pi_str: string) {
		return BigInt(`3${pi_str.substring(2)}`);
	}

	constructor(private decimal_points: number) {
	}

	compute() {
		if (this.decimal_points < 1) {
			return "0";
		}

		const pi_value = this.pi(this.decimal_points);

		return this.convertToDecimal(pi_value);
	}


	private convertToDecimal(pi_bigint: bigint): string {
		return `3.${pi_bigint.toString().substring(1)}`;
	}

	private pi(decimals: number) {
		const bufferedDigits = BigInt(decimals) + this.buffer;

		let i = 1n;
		let x = 3n * 10n ** bufferedDigits;
		let pi = x;
		while (x > 0) {
			x = (x * i) / ((i + 1n) * 4n);
			pi += x / (i + 2n);
			i += 2n;
		}

		return pi / 10n ** this.buffer;
	}
}