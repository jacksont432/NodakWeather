export interface Weather {
  DATE: string;
  PRCP: number|null;
  SNOW: number|null;
  TAVG: number|null;
  TMAX: number|null;
  TMIN: number|null;
}

export interface Data {
  name: string;
  value: number | null;
}