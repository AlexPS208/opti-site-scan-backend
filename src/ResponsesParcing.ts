import { MyData, MyResponse } from './dto/CustomResponse.dto'

export function ParceSpeed(data: MyResponse): MyData {
  const resData: MyData = {}

  resData.lighthouseResult = data.lighthouseResult
  resData.loadingExperience = data.loadingExperience
  resData.originLoadingExperience = data.originLoadingExperience

  // Delete encoded screenshots
  if (resData.lighthouseResult.audits) {
    delete resData.lighthouseResult.audits['screenshot-thumbnails']
    delete resData.lighthouseResult.audits['final-screenshot']
  }
  
  delete resData.lighthouseResult['fullPageScreenshot']

  return resData
}
