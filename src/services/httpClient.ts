import { API_BASE_URL } from '../constants'
import type { ApiError } from '../types'

async function request<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`

  const response = await fetch(url, {
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    ...options,
  })

  if (!response.ok) {
    const error: ApiError = {
      status: response.status,
      message: `Erro ${response.status}: ${response.statusText}`,
    }
    try {
      const body = await response.json()
      error.details = body?.message ?? body?.error ?? String(body)
    } catch { /* body não é JSON */ }
    throw error
  }

  // DELETE retorna 200 sem body
  const text = await response.text()
  if (!text) return undefined as T
  return JSON.parse(text) as T
}

export const http = {
  get:    <T>(endpoint: string)                    => request<T>(endpoint, { method: 'GET' }),
  post:   <T>(endpoint: string, body: unknown)     => request<T>(endpoint, { method: 'POST',   body: JSON.stringify(body) }),
  put:    <T>(endpoint: string, body: unknown)     => request<T>(endpoint, { method: 'PUT',    body: JSON.stringify(body) }),
  delete: <T>(endpoint: string)                    => request<T>(endpoint, { method: 'DELETE' }),
}
