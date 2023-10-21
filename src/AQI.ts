/**
 * Calculates the Air Quality Index (AQI) for a specific pollutant.
 *
 * @param {number} concentration - The concentration of the pollutant.
 * @param {number[]} breakpoints - An array of concentration breakpoints.
 * @param {number[]} aqiValues - An array of AQI values corresponding to the breakpoints.
 * @returns {number} The calculated AQI.
 */
const calculatePollutantAQI = (
  concentration: number,
  breakpoints: number[],
  aqiValues: number[]
): number => {
  let interval = 0;
  while (interval < breakpoints.length && concentration > breakpoints[interval])
    interval += 1;

  if (interval === 0) return 0;
  if (interval === breakpoints.length) return aqiValues[interval - 1];
  const cLow = breakpoints[interval - 1];
  const cHigh = breakpoints[interval];
  const aqiLow = aqiValues[interval - 1];
  const aqiHigh = aqiValues[interval];
  const aqi =
    ((aqiHigh - aqiLow) / (cHigh - cLow)) * (concentration - cLow) + aqiLow;
  return Math.round(aqi);
};

/**
 * Calculates the Air Quality Index (AQI) for Carbon Monoxide (CO).
 *
 * @param {number} coConcentration - The concentration of Carbon Monoxide.
 * @returns {number} The calculated CO AQI.
 */
export const CO_AQI = (coConcentration: number): number =>
  calculatePollutantAQI(
    coConcentration,
    [0, 4.4, 9.4, 12.4, 15.4, 30.4, 40.4, 50.4],
    [0, 50, 100, 150, 200, 300, 400, 500]
  );

/**
 * Calculates the Air Quality Index (AQI) for PM2.5 (Particulate Matter 2.5).
 *
 * @param {number} pm25Concentration - The concentration of PM2.5.
 * @returns {number} The calculated PM2.5 AQI.
 */
export const PM25_AQI = (pm25Concentration: number): number =>
  calculatePollutantAQI(
    pm25Concentration,
    [0, 12, 35.4, 55.4, 150.4, 250.4, 350.4, 500],
    [0, 50, 100, 150, 200, 300, 400, 500]
  );

/**
 * Calculates the Air Quality Index (AQI) for Ozone (O3).
 *
 * @param {number} ozoneConcentration - The concentration of Ozone.
 * @returns {number} The calculated O3 AQI.
 */
export const O3_AQI = (ozoneConcentration: number): number =>
  calculatePollutantAQI(
    ozoneConcentration,
    [0, 54, 70, 85, 105, 200, 405, 505],
    [0, 50, 100, 150, 200, 300, 400, 500]
  );

/**
 * Calculates the Air Quality Index (AQI) for PM10 (Particulate Matter 10).
 *
 * @param {number} pm10Concentration - The concentration of PM10.
 * @returns {number} The calculated PM10 AQI.
 */
export const PM10_AQI = (pm10Concentration: number): number =>
  calculatePollutantAQI(
    pm10Concentration,
    [0, 54, 154, 254, 354, 424, 504, 604],
    [0, 50, 100, 150, 200, 300, 400, 500]
  );

/**
 * Calculates the Air Quality Index (AQI) for Sulfur Dioxide (SO2).
 *
 * @param {number} so2Concentration - The concentration of Sulfur Dioxide.
 * @returns {number} The calculated SO2 AQI.
 */
export const SO2_AQI = (so2Concentration: number): number =>
  calculatePollutantAQI(
    so2Concentration,
    [0, 35, 75, 185, 304, 604, 1004, 1504],
    [0, 50, 100, 150, 200, 300, 400, 500]
  );

/**
 * Calculates the Air Quality Index (AQI) for Nitrogen Dioxide (NO2).
 *
 * @param {number} no2Concentration - The concentration of Nitrogen Dioxide.
 * @returns {number} The calculated NO2 AQI.
 */
export const NO2_AQI = (no2Concentration: number): number =>
  calculatePollutantAQI(
    no2Concentration,
    [0, 53, 100, 360, 649, 1249, 2049, 3049],
    [0, 50, 100, 150, 200, 300, 400, 500]
  );

/**
 * Calculates the Air Quality Index (AQI) for Lead (Pb).
 *
 * @param {number} leadConcentration - The concentration of Lead.
 * @returns {number} The calculated Lead AQI.
 */
export const Lead_AQI = (leadConcentration: number): number =>
  calculatePollutantAQI(
    leadConcentration,
    [0, 0.3, 0.6, 1.0, 1.5, 2.0, 2.4, 2.9],
    [0, 50, 100, 150, 200, 300, 400, 500]
  );

/**
 * Calculates the overall Air Quality Index (AQI) based on gas concentrations provided.
 *
 * @param {object} gasConcentration - An object containing gas concentrations for CO, PM2.5, Ozone, PM10, SO2, NO2, and Lead.
 * @returns {number} The maximum AQI value calculated from the provided gas concentrations.
 */
export const calculateAQI = (gasConcentration: {
  co?: number;
  pm25?: number;
  ozone?: number;
  pm10?: number;
  so2?: number;
  no2?: number;
  lead?: number;
}): number => {
  const coAQI = CO_AQI(gasConcentration.co ? gasConcentration.co : 0);
  const pm25AQI = PM25_AQI(gasConcentration.pm25 ? gasConcentration.pm25 : 0);
  const ozoneAQI = O3_AQI(gasConcentration.ozone ? gasConcentration.ozone : 0);
  const pm10AQI = PM10_AQI(gasConcentration.pm10 ? gasConcentration.pm10 : 0);
  const so2AQI = SO2_AQI(gasConcentration.so2 ? gasConcentration.so2 : 0);
  const no2AQI = NO2_AQI(gasConcentration.no2 ? gasConcentration.no2 : 0);
  const leadAQI = Lead_AQI(gasConcentration.lead ? gasConcentration.lead : 0);

  return Math.max(coAQI, pm25AQI, ozoneAQI, pm10AQI, so2AQI, no2AQI, leadAQI);
};
