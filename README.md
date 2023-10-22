# aqi - Calculate Air Quality Index (AQI)

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Introduction

The `aqi-pollutant-calculator` package is a simple Node.js library that calculates the Air Quality Index (AQI) for various air pollutants, including CO (Carbon Monoxide), PM2.5 (Particulate Matter), O3 (Ozone), PM10 (Particulate Matter), SO2 (Sulfur Dioxide), NO2 (Nitrogen Dioxide), and Lead (Pb). It provides a straightforward interface for converting pollutant concentrations into their respective AQI values.

## Installation

To install `aqi-pollutant-calculator` in your Node.js project, you can use npm:

```bash
npm install aqi-pollutant-calculator
```

## Usage

Here's how you can use the `aqi-pollutant-calculator` library in your Node.js code:

```javascript
const aqi = require("aqi-pollutant-calculator");

// Calculate the AQI for a specific pollutant concentration
const coAQI = aqi.CO_AQI(4.0); // Concentration in ppm
console.log("CO AQI:", coAQI);

// Calculate the overall AQI for a set of gas concentrations
const gasConcentration = {
  co: 4.0, // Concentration in ppm
  pm25: 15.0, // Concentration in µg/m³
  ozone: 70.0, // Concentration in ppb
  pm10: 30.0, // Concentration in µg/m³
  so2: 20.0, // Concentration in ppb
  no2: 40.0, // Concentration in ppb
  lead: 0.2, // Concentration in µg/m³
};
const overallAQI = aqi.calculateAQI(gasConcentration);
console.log("Overall AQI:", overallAQI);
```

It can also be used in TypeScript:

```typescript
import { O3_AQI, calculateAQI } from "aqi-pollutant-calculator";

// Calculate the AQI for a specific pollutant concentration
const coAQI: number = O3_AQI(25.0); // Concentration in ppb
console.log("CO AQI:", coAQI);
// Calculate the overall AQI for a set of gas concentrations
const gasConcentration: {
  co: number;
  pm25: number;
  ozone: number;
  pm10: number;
  so2: number;
  no2: number;
  lead: number;
} = {
  co: 4.0, // Concentration in ppm
  pm25: 15.0, // Concentration in µg/m³
  ozone: 70.0, // Concentration in ppb
  pm10: 30.0, // Concentration in µg/m³
  so2: 20.0, // Concentration in ppb
  no2: 40.0, // Concentration in ppb
  lead: 0.2, // Concentration in µg/m³
};
const overallAQI: number = calculateAQI(gasConcentration);
console.log("Overall AQI:", overallAQI);
```

And in ES6:

```javascript
import { CO_AQI, calculateAQI } from "aqi-pollutant-calculator";

// Calculate the AQI for a specific pollutant concentration
const coAQI = CO_AQI(4.0); // Concentration in ppm
console.log("CO AQI:", coAQI);

// Calculate the overall AQI for a set of gas concentrations
const gasConcentration = {
  co: 4.0, // Concentration in ppm
  pm25: 15.0, // Concentration in µg/m³
  ozone: 70.0, // Concentration in ppb
  pm10: 30.0, // Concentration in µg/m³
  so2: 20.0, // Concentration in ppb
  no2: 40.0, // Concentration in ppb
  lead: 0.2, // Concentration in µg/m³
};
const overallAQI = calculateAQI(gasConcentration);
console.log("Overall AQI:", overallAQI);
```

The package provides functions for calculating the AQI for individual pollutants as well as a function for computing the overall AQI based on multiple pollutant concentrations.

## Supported Pollutants

- Carbon Monoxide (CO)
  - Concentration unit: ppm (parts per million)
- Particulate Matter (PM2.5)
  - Concentration unit: µg/m³ (micrograms per cubic meter)
- Ozone (O3)
  - Concentration unit: ppb (parts per billion)
- Particulate Matter (PM10)
  - Concentration unit: µg/m³ (micrograms per cubic meter)
- Sulfur Dioxide (SO2)
  - Concentration unit: ppb (parts per billion)
- Nitrogen Dioxide (NO2)
  - Concentration unit: ppb (parts per billion)
- Lead (Pb)
  - Concentration unit: µg/m³ (micrograms per cubic meter)

## AQI Ranges

The `aqi-pollutant-calculator` package uses the following AQI breakpoints and values for each pollutant:

- CO AQI:

  - Breakpoints: [0, 4.4, 9.4, 12.4, 15.4, 30.4, 40.4, 50.4]
  - AQI Values: [0, 50, 100, 150, 200, 300, 400, 500]

- PM2.5 AQI:

  - Breakpoints: [0, 12.1, 35.5, 55.5, 150.5, 250.5, 350.5, 500.5]
  - AQI Values: [0, 50, 100, 150, 200, 300, 400, 500]

- Ozone AQI:

  - Breakpoints: [0, 54, 70, 85, 105, 200, 270, 360]
  - AQI Values: [0, 50, 100, 150, 200, 300, 400, 500]

- PM10 AQI:

  - Breakpoints: [0, 54, 154, 254, 354, 424, 504, 604]
  - AQI Values: [0, 50, 100, 150, 200, 300, 400, 500]

- SO2 AQI:

  - Breakpoints: [0, 35, 75, 185, 304, 604, 804, 1004]
  - AQI Values: [0, 50, 100, 150, 200, 300, 400, 500]

- NO2 AQI:

  - Breakpoints: [0, 53, 100, 360, 649, 1249, 1649, 2049]
  - AQI Values: [0, 50, 100, 150, 200, 300, 400, 500]

- Lead AQI:
  - Breakpoints: [0, 0.2, 0.4, 0.6, 0.8, 1.0, 1.2, 1.4]
  - AQI Values: [0, 50, 100, 150, 200, 300, 400, 500]

## License

This package is released under the MIT License. See the [LICENSE](LICENSE) file for details.

## Issues

If you encounter any issues or have suggestions for improvement, please open an issue on the [GitHub repository](https://github.com/John-Salama/aqi-pollutant-calculator).

## Author

- John Salama

## Contributing

If you'd like to contribute to this project, feel free to submit a pull request. Your contributions are welcome!
