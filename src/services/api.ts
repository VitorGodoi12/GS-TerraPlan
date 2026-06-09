import { http } from './httpClient'
import { API } from '../constants'
import type {
  Produtor, Propriedade, Cultura, Plantio,
  TelemetriaMeteorologica, RegistroIrrigacao,
  AlertaClimatico, Clima, ClimaPropriedade,
} from '../types'

// ─── Produtor ─────────────────────────────────────────────────────────────────
export const produtorService = {
  getAll:   ()                             => http.get<Produtor[]>(API.PRODUTOR_LIST),
  getById:  (id: number)                   => http.get<Produtor>(API.PRODUTOR_BY_ID(id)),
  create:   (data: Omit<Produtor, 'id'>)   => http.post<void>(API.PRODUTOR_LIST, data),
  update:   (id: number, data: Produtor)   => http.put<void>(API.PRODUTOR_BY_ID(id), data),
  delete:   (id: number)                   => http.delete<void>(API.PRODUTOR_BY_ID(id)),
}

// ─── Propriedade ──────────────────────────────────────────────────────────────
export const propriedadeService = {
  getAll:   ()                                  => http.get<Propriedade[]>(API.PROPRIEDADE_LIST),
  getById:  (id: number)                        => http.get<Propriedade>(API.PROPRIEDADE_BY_ID(id)),
  create:   (data: Omit<Propriedade, 'id'>)     => http.post<void>(API.PROPRIEDADE_LIST, data),
  update:   (id: number, data: Propriedade)     => http.put<void>(API.PROPRIEDADE_BY_ID(id), data),
  delete:   (id: number)                        => http.delete<void>(API.PROPRIEDADE_BY_ID(id)),
}

// ─── Cultura ──────────────────────────────────────────────────────────────────
export const culturaService = {
  getAll:   ()                              => http.get<Cultura[]>(API.CULTURA_LIST),
  getById:  (id: number)                    => http.get<Cultura>(API.CULTURA_BY_ID(id)),
  create:   (data: Omit<Cultura, 'id'>)     => http.post<void>(API.CULTURA_LIST, data),
  update:   (id: number, data: Cultura)     => http.put<void>(API.CULTURA_BY_ID(id), data),
  delete:   (id: number)                    => http.delete<void>(API.CULTURA_BY_ID(id)),
}

// ─── Plantio ──────────────────────────────────────────────────────────────────
export const plantioService = {
  getAll:   ()                              => http.get<Plantio[]>(API.PLANTIO_LIST),
  getById:  (id: number)                    => http.get<Plantio>(API.PLANTIO_BY_ID(id)),
  create:   (data: Omit<Plantio, 'id'>)     => http.post<void>(API.PLANTIO_LIST, data),
  update:   (id: number, data: Plantio)     => http.put<void>(API.PLANTIO_BY_ID(id), data),
  delete:   (id: number)                    => http.delete<void>(API.PLANTIO_BY_ID(id)),
}

// ─── Telemetria ───────────────────────────────────────────────────────────────
export const telemetriaService = {
  getAll:   ()                                          => http.get<TelemetriaMeteorologica[]>(API.TELEMETRIA_LIST),
  getById:  (id: number)                                => http.get<TelemetriaMeteorologica>(API.TELEMETRIA_BY_ID(id)),
  create:   (data: Omit<TelemetriaMeteorologica,'id'>) => http.post<void>(API.TELEMETRIA_LIST, data),
  update:   (id: number, data: TelemetriaMeteorologica) => http.put<void>(API.TELEMETRIA_BY_ID(id), data),
  delete:   (id: number)                                => http.delete<void>(API.TELEMETRIA_BY_ID(id)),
}

// ─── Irrigação ────────────────────────────────────────────────────────────────
export const irrigacaoService = {
  getAll:   ()                                       => http.get<RegistroIrrigacao[]>(API.IRRIGACAO_LIST),
  getById:  (id: number)                             => http.get<RegistroIrrigacao>(API.IRRIGACAO_BY_ID(id)),
  create:   (data: Omit<RegistroIrrigacao, 'id'>)   => http.post<void>(API.IRRIGACAO_LIST, data),
  update:   (id: number, data: RegistroIrrigacao)   => http.put<void>(API.IRRIGACAO_BY_ID(id), data),
  delete:   (id: number)                            => http.delete<void>(API.IRRIGACAO_BY_ID(id)),
}

// ─── Alertas ──────────────────────────────────────────────────────────────────
export const alertaService = {
  getAll:   ()                                       => http.get<AlertaClimatico[]>(API.ALERTA_LIST),
  getById:  (id: number)                             => http.get<AlertaClimatico>(API.ALERTA_BY_ID(id)),
  create:   (data: Omit<AlertaClimatico, 'id'>)     => http.post<void>(API.ALERTA_LIST, data),
  update:   (id: number, data: AlertaClimatico)     => http.put<void>(API.ALERTA_BY_ID(id), data),
  delete:   (id: number)                            => http.delete<void>(API.ALERTA_BY_ID(id)),
}

// ─── Clima (OpenWeather via Java) ─────────────────────────────────────────────
export const climaService = {
  getByCoords:       (lat: number, lon: number) => http.get<Clima>(API.CLIMA_BY_COORDS(lat, lon)),
  getByPropriedade:  (id: number)               => http.get<ClimaPropriedade>(API.CLIMA_BY_PROPRIEDADE(id)),
}
