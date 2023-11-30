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
  categories?: Categories,
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

export interface Categories {
  accessibility: Categoria,
  performance: Categoria
}

export interface Categoria {
  auditRefs: Array<{id: string, weight: number}>
}
