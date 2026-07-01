type UploadResponse = {
  ok?: boolean
  url?: string
}

export function obtenerArchivosDesdeInput(files: FileList | null): File[] {
  return files ? Array.from(files) : []
}

export function esImagen(file: File): boolean {
  return file.type.startsWith('image/')
}

export async function subirImagen(file: File): Promise<string> {
  if (!esImagen(file)) {
    throw new Error('El archivo seleccionado no es una imagen')
  }

  const formData = new FormData()
  formData.append('file', file)

  const respuesta = await $fetch<UploadResponse>('/api/upload', {
    method: 'POST',
    body: formData,
  })

  if (!respuesta.url) {
    throw new Error('El backend no retorno la URL de la imagen')
  }

  return respuesta.url
}

export async function subirImagenes(files: File[] | FileList): Promise<string[]> {
  const archivos = Array.isArray(files) ? files : Array.from(files)
  const urls: string[] = []

  for (const archivo of archivos) {
    urls.push(await subirImagen(archivo))
  }

  return urls
}

export function convertirUrlsAJson(urls: string[]): string {
  return JSON.stringify(urls.filter((url) => typeof url === 'string' && url.trim()))
}

export function leerUrlsDesdeJson(valor: string | null | undefined): string[] {
  if (!valor) {
    return []
  }

  try {
    const parseado = JSON.parse(valor)

    if (!Array.isArray(parseado)) {
      return []
    }

    return parseado.filter((url): url is string => typeof url === 'string' && Boolean(url.trim()))
  }
  catch {
    return []
  }
}
