import { MyData, MyResponse, LighthouseResult, Audits } from './dto/CustomResponse.dto'

export function ParceSpeed(data: MyResponse): MyData {
  const resData: MyData = {
    lighthouseResult: filterLighthouseResult(data.lighthouseResult),
    loadingExperience: data.loadingExperience,
    originLoadingExperience: data.originLoadingExperience
  }
  
  delete resData.lighthouseResult['fullPageScreenshot']

  return resData
}
 

function filterLighthouseResult(result: LighthouseResult): LighthouseResult {
  const filteredResult: LighthouseResult = { ...result }

  delete filteredResult.fullPageScreenshot

  // Фильтрация audits
  if (filteredResult.audits) {
    const filteredAudits: Audits = {}
    
    delete filteredResult.audits['screenshot-thumbnails']
    delete filteredResult.audits['final-screenshot']

    for (const key in filteredResult.audits) {
      const audit = filteredResult.audits[key]

      if (audit.score !== null) {
        filteredAudits[key] = audit
      }
    }

    filteredResult.audits = filteredAudits
  }

  return filteredResult
}
