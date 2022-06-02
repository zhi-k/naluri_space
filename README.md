# Naluri Space

[![Unit Tests & Migrations](https://github.com/zhi-k/naluri_space/actions/workflows/run_tests.yml/badge.svg)](https://github.com/zhi-k/naluri_space/actions/workflows/run_tests.yml)

### Production Url
`https://naluri-space-server.herokuapp.com/` 

## To start the project, run
```bash
pnpm install
pnpm run
```

## To run tests
```bash
pnpm t
```

## API Endpoints
- Endpoints are versioned (Current: v1)

### Sun Circumference
#### Request
```http request
GET /api/v1/sun
```
#### Response

```json
{
  "success": boolean,
  "message": string,
  "data": {
    "pi": string,
    "decimal_points": number,
    "circumference": string,
    "elapsed_time": string
  }
}
```
The `success` attribute describes whether the request was successful.

The `message` attribute usually contains message to indicate why the request fails on error.

The `data` attribute contains the sun circumference data that was requested.

