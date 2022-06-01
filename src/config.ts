export const config = Object.freeze({
	env: process.env['NODE_ENV'] ?? "development",
	port: process.env['PORT'] ?? "8080",
})