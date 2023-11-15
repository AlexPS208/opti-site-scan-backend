import { MyData } from './dto/CustomResponse.dto'

// Парсинг объектов
export function ParceSpeed(data: MyData): MyData {
  const resData: MyData = {}

  resData['lighthouseResult'] = data.lighthouseResult

  return resData
}
