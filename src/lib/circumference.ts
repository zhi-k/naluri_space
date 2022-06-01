export interface ICircumference {
	radius: bigint;
	calculate: () => string;
}

abstract class Circumference implements ICircumference {
	protected constructor(public radius: bigint) {
	}

	public abstract calculate(): string;
}

export class SunCircumference extends Circumference {
	private buffer = 20;

	constructor(private pi: bigint, private decimalPoints: number) {
		const SUN_RADIUS_KM = 696_340n;
		super(SUN_RADIUS_KM);
	}

	calculate(): string {
		const totalDecimalPoints = BigInt(this.decimalPoints) + BigInt(this.buffer);

		// 2 pi r
		const circumference = 2n * this.pi * this.radius * 10n ** totalDecimalPoints;

		const cWithoutDecimal =  (circumference / 10n ** totalDecimalPoints).toString();

		const indexToAddDot = cWithoutDecimal.length - this.decimalPoints;

		return cWithoutDecimal.slice(0, indexToAddDot) + "." + cWithoutDecimal.slice(indexToAddDot);
	}
}