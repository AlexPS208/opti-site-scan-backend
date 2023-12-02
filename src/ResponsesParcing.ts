import { MyData, MyResponse, LighthouseResult, Audits, Categories, Categoria} from './dto/CustomResponse.dto'


const filterAuditRefs = (auditRefs: Array<{ id: string, weight: number }>): Array<{ id: string, weight: number }> => {
  return auditRefs.filter(auditRef => auditRef.weight !== 0)
}

// Функция для фильтрации объектов в категории с weight !== 0
const filterCategoria = (categoria: Categoria): Categoria => {
  return {
    auditRefs: filterAuditRefs(categoria.auditRefs),
  }
}

const filterCategories = (categories?: Categories): Categories | undefined => {
  if (!categories) {
    return undefined
  }

  const filteredCategories: Categories = {
    accessibility: filterCategoria(categories.accessibility),
    performance: filterCategoria(categories.performance),
  }

  return filteredCategories
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

      if (audit.score !== null && audit.score !== 0) {
        filteredAudits[key] = audit
      }
    }

    filteredResult.audits = filteredAudits
  }

  if (filteredResult.categories) {
    filteredResult.categories = filterCategories(filteredResult.categories)
  }

  return filteredResult
}



export function ParseSpeed(data: MyResponse): MyData {
  const resData: MyData = {
    lighthouseResult: filterLighthouseResult(data.lighthouseResult),
    loadingExperience: data.loadingExperience,
    originLoadingExperience: data.originLoadingExperience
  }
  
  delete resData.lighthouseResult['fullPageScreenshot']

  return resData
}
