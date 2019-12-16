import service from '../utils/request'

const getPdf = html => {
  return service.post('/file/pdf', { html })
}

export { getPdf }