export function speedQueryEndpoint(link: string, key: string | undefined): string {
  const api = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed'
  
  const parameters = {
    url: encodeURIComponent(link)
  }
  
  let query = `${api}?`
  query += `url=${parameters.url}${key? '&key='+key : ''}&strategy=DESKTOP&category=ACCESSIBILITY&category=PERFORMANCE`

  return query
}


export function secureQueryEndpoint(link: string, key: string | undefined): string {
  const api = 'https://ssl-certificates.whoisxmlapi.com/api/v1'

  const parameters = {
    url: encodeURIComponent(link)
  }

  let query = `${api}?`
  query += `apiKey=${key}&domainName=${parameters.url}`

  return query
}


export function smmQuery(link: string, key: string | undefined): object {
  const data = JSON.stringify({
    q: getDomainFromUrl(link)
  })

  return {
    method: 'post',
    url: 'https://google.serper.dev/search',
    headers: { 
      'X-API-KEY': key, 
      'Content-Type': 'application/json'
    },
    data : data
  }
}



function getDomainFromUrl(url: string): string | null {
  try {
    const urlObject = new URL(url)
    return urlObject.hostname
  } catch (error: any) {
    console.error('Invalid URL:', error.message)
    return null
  }
}
