export interface MyResponse {
    data?: object,
    lighthouseResult: LighthouseResult,
    loadingExperience: object,
    originLoadingExperience: object
}

export interface MyData {
  lighthouseResult: LighthouseResult,
  loadingExperience: object,
  originLoadingExperience: object
}

export interface LighthouseResult {
  audits?: Audits,
  'fullPageScreenshot'?: object
}

export interface Audits {
  [key: string]: {
    'score'?: number | null;
  } & (
    | { 'screenshot-thumbnails'?: object }
    | { 'final-screenshot'?: object }
  );
}
