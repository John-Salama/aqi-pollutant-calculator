/**
 * Calculates the Air Quality Index (AQI) for Carbon Monoxide (CO).
 *
 * @param {number} coConcentration - The concentration of Carbon Monoxide.
 * @returns {number} The calculated CO AQI.
 */
export declare const CO_AQI: (coConcentration: number) => number;
/**
 * Calculates the Air Quality Index (AQI) for PM2.5 (Particulate Matter 2.5).
 *
 * @param {number} pm25Concentration - The concentration of PM2.5.
 * @returns {number} The calculated PM2.5 AQI.
 */
export declare const PM25_AQI: (pm25Concentration: number) => number;
/**
 * Calculates the Air Quality Index (AQI) for Ozone (O3).
 *
 * @param {number} ozoneConcentration - The concentration of Ozone.
 * @returns {number} The calculated O3 AQI.
 */
export declare const O3_AQI: (ozoneConcentration: number) => number;
/**
 * Calculates the Air Quality Index (AQI) for PM10 (Particulate Matter 10).
 *
 * @param {number} pm10Concentration - The concentration of PM10.
 * @returns {number} The calculated PM10 AQI.
 */
export declare const PM10_AQI: (pm10Concentration: number) => number;
/**
 * Calculates the Air Quality Index (AQI) for Sulfur Dioxide (SO2).
 *
 * @param {number} so2Concentration - The concentration of Sulfur Dioxide.
 * @returns {number} The calculated SO2 AQI.
 */
export declare const SO2_AQI: (so2Concentration: number) => number;
/**
 * Calculates the Air Quality Index (AQI) for Nitrogen Dioxide (NO2).
 *
 * @param {number} no2Concentration - The concentration of Nitrogen Dioxide.
 * @returns {number} The calculated NO2 AQI.
 */
export declare const NO2_AQI: (no2Concentration: number) => number;
/**
 * Calculates the Air Quality Index (AQI) for Lead (Pb).
 *
 * @param {number} leadConcentration - The concentration of Lead.
 * @returns {number} The calculated Lead AQI.
 */
export declare const Lead_AQI: (leadConcentration: number) => number;
/**
 * Calculates the overall Air Quality Index (AQI) based on gas concentrations provided.
 *
 * @param {object} gasConcentration - An object containing gas concentrations for CO, PM2.5, Ozone, PM10, SO2, NO2, and Lead.
 * @returns {number} The maximum AQI value calculated from the provided gas concentrations.
 */
export declare const calculateAQI: (gasConcentration: {
    co?: number;
    pm25?: number;
    ozone?: number;
    pm10?: number;
    so2?: number;
    no2?: number;
    lead?: number;
}) => number;
