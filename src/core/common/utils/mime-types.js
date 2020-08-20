const mimeTypeMapping = {
  'text/javascript': 'javascript',
  'text/typescript': 'typescript',
  'text/x-markdown': 'markdown',
  'text/html': 'html',
  'application/json': 'json',
  'application/xml': 'xml',
  'text/x-c': 'cpp',
  'text/x-h': 'cpp',
  'text/plain': 'plaintext',
}

const extensionMapping = {
  js: 'text/javascript',
  jsx: 'text/javascript',
  ts: 'text/typescript',
  tsx: 'text/typescript',
  md: 'text/x-markdown',
  json: 'application/json',
  xml: 'application/xml',
  cpp: 'text/x-c',
  c: 'text/x-c',
  h: 'text/x-h'
}

export function getLanguageFromMimeType(mimeType) {
  return mimeTypeMapping[mimeType]
}

export function getMimeTypeFromFileName(fileName) {
  const extension = fileName.split('.').pop()

  const mapped = extensionMapping[extension]

  return mapped ? mapped : 'text/plain'
}
