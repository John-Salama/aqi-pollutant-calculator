const calculatePollutantAQI = (concentration, breakpoints, aqiValues) => {
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

exports.CO_AQI = (coConcentration) =>
  calculatePollutantAQI(
    coConcentration,
    [0, 4.4, 9.4, 12.4, 15.4, 30.4, 40.4, 50.4],
    [0, 50, 100, 150, 200, 300, 400, 500]
  );

exports.PM25_AQI = (pm25Concentration) =>
  calculatePollutantAQI(
    pm25Concentration,
    [0, 12, 35.4, 55.4, 150.4, 250.4, 350.4, 500],
    [0, 50, 100, 150, 200, 300, 400, 500]
  );

exports.O3_AQI = (ozoneConcentration) =>
  calculatePollutantAQI(
    ozoneConcentration,
    [0, 54, 70, 85, 105, 200, 405, 505],
    [0, 50, 100, 150, 200, 300, 400, 500]
  );

exports.PM10_AQI = (pm10Concentration) =>
  calculatePollutantAQI(
    pm10Concentration,
    [0, 54, 154, 254, 354, 424, 504, 604],
    [0, 50, 100, 150, 200, 300, 400, 500]
  );

exports.SO2_AQI = (so2Concentration) =>
  calculatePollutantAQI(
    so2Concentration,
    [0, 35, 75, 185, 304, 604, 1004, 1504],
    [0, 50, 100, 150, 200, 300, 400, 500]
  );

exports.NO2_AQI = (no2Concentration) =>
  calculatePollutantAQI(
    no2Concentration,
    [0, 53, 100, 360, 649, 1249, 2049, 3049],
    [0, 50, 100, 150, 200, 300, 400, 500]
  );

exports.Lead_AQI = (leadConcentration) =>
  calculatePollutantAQI(
    leadConcentration,
    [0, 0.3, 0.6, 1.0, 1.5, 2.0, 2.4, 2.9],
    [0, 50, 100, 150, 200, 300, 400, 500]
  );

exports.calculateAQI = (gasConcentration) => {
  const coAQI = exports.CO_AQI(gasConcentration.co ? gasConcentration.co : 0);
  const pm25AQI = exports.PM25_AQI(
    gasConcentration.pm25 ? gasConcentration.pm25 : 0
  );
  const ozoneAQI = exports.O3_AQI(
    gasConcentration.ozone ? gasConcentration.ozone : 0
  );
  const pm10AQI = exports.PM10_AQI(
    gasConcentration.pm10 ? gasConcentration.pm10 : 0
  );
  const so2AQI = exports.SO2_AQI(
    gasConcentration.so2 ? gasConcentration.so2 : 0
  );
  const no2AQI = exports.NO2_AQI(
    gasConcentration.no2 ? gasConcentration.no2 : 0
  );
  const leadAQI = exports.Lead_AQI(
    gasConcentration.lead ? gasConcentration.lead : 0
  );

  return Math.max(coAQI, pm25AQI, ozoneAQI, pm10AQI, so2AQI, no2AQI, leadAQI);
};
