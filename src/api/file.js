import service from '../utils/request'

const postPdf = body => {
  return service.post('/file/pdf', body)
}

export { postPdf }