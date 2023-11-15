import { MyData } from './dto/CustomResponse.dto'

export function ParceSpeed(data: MyData): MyData {
  const resData: MyData = {}

  resData['lighthouseResult'] = data.lighthouseResult
  // Delete encoded screenshots
  delete resData['lighthouseResult']['audits']['screenshot-thumbnails']
  delete resData['lighthouseResult']['audits']['final-screenshot']
  delete resData['lighthouseResult']['fullPageScreenshot']

  return resData
}
