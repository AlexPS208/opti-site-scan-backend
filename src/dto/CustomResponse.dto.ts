export interface MyResponse {
    data?: object,
    lighthouseResult: object
}

export interface MyData {
  lighthouseResult?: LighthouseResult
}

interface LighthouseResult {
  audits?: Audits,
  'fullPageScreenshot'?: object
}

interface Audits {
  'screenshot-thumbnails'?: object,
  'final-screenshot'?: object
}
