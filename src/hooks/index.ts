import { useState, useEffect, useCallback } from 'react'
import type { ApiError } from '../types'

// ─── useFetch: hook genérico para qualquer chamada GET ───────────────────────

interface UseFetchState<T> {
  data: T | null
  loading: boolean
  error: ApiError | null
  refetch: () => void
}

export function useFetch<T>(
  fetcher: () => Promise<T>,
  deps: unknown[] = []
): UseFetchState<T> {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<ApiError | null>(null)

  const run = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const result = await fetcher()
      setData(result)
    } catch (err) {
      setError(err as ApiError)
    } finally {
      setLoading(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  useEffect(() => { run() }, [run])

  return { data, loading, error, refetch: run }
}

// ─── useMutation: hook para POST / PUT / DELETE ──────────────────────────────

interface UseMutationState<T> {
  data: T | null
  loading: boolean
  error: ApiError | null
  mutate: (payload?: unknown) => Promise<T | null>
  reset: () => void
}

export function useMutation<T>(
  mutationFn: (payload?: unknown) => Promise<T>
): UseMutationState<T> {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<ApiError | null>(null)

  const mutate = useCallback(async (payload?: unknown): Promise<T | null> => {
    setLoading(true)
    setError(null)
    try {
      const result = await mutationFn(payload)
      setData(result)
      return result
    } catch (err) {
      setError(err as ApiError)
      return null
    } finally {
      setLoading(false)
    }
  }, [mutationFn])

  const reset = useCallback(() => {
    setData(null)
    setError(null)
    setLoading(false)
  }, [])

  return { data, loading, error, mutate, reset }
}

// ─── useLocalStorage: persiste estado no localStorage ───────────────────────

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? (JSON.parse(item) as T) : initialValue
    } catch {
      return initialValue
    }
  })

  const setValue = useCallback((value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch {
      console.error('useLocalStorage: falha ao salvar', key)
    }
  }, [key, storedValue])

  return [storedValue, setValue] as const
}
