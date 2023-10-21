declare module "aqi-pollutant-calculator" {
  interface GasConcentration {
    co?: number;
    pm25?: number;
    ozone?: number;
    pm10?: number;
    so2?: number;
    no2?: number;
    lead?: number;
  }

  export function calculateAQI(gasConcentration: GasConcentration): number;
  export function CO_AQI(coConcentration: number): number;
  export function PM25_AQI(pm25Concentration: number): number;
  export function O3_AQI(ozoneConcentration: number): number;
  export function PM10_AQI(pm10Concentration: number): number;
  export function SO2_AQI(so2Concentration: number): number;
  export function NO2_AQI(no2Concentration: number): number;
  export function Lead_AQI(leadConcentration: number): number;
}
