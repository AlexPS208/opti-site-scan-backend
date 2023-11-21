export interface MyResponse {
    data?: object,
    lighthouseResult: object,
    loadingExperience: object,
    originLoadingExperience: object
}

export interface MyData {
  lighthouseResult?: LighthouseResult,
  loadingExperience?: object,
  originLoadingExperience?: object
}

interface LighthouseResult {
  audits?: Audits,
  'fullPageScreenshot'?: object
}

interface Audits {
  'screenshot-thumbnails'?: object,
  'final-screenshot'?: object
}
