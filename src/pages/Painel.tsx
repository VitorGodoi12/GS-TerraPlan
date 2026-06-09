import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import { LoadingSpinner, ErrorState } from '../components/Icons'
import {
  propriedadeService, climaService,
  telemetriaService, irrigacaoService,
  alertaService, plantioService,
} from '../services/api'
import type {
  Propriedade, ClimaPropriedade,
  TelemetriaMeteorologica, RegistroIrrigacao,
  AlertaClimatico, Plantio,
} from '../types'
import { NIVEL_RISCO_BADGE, STATUS_PLANTIO_BADGE, STATUS_PLANTIO_LABEL } from '../constants'

// ─── Sub-componente: cartão de métrica ───────────────────────────────────────
interface MetricaCardProps {
  icon: string; label: string; val: string | number
  unit: string; pct: number; cor: string; hint: string
}
function MetricaCard({ icon, label, val, unit, pct, cor, hint }: MetricaCardProps) {
  return (
    <div className="bg-tp-surface border border-tp-border rounded-xl p-4 tp-card-hover">
      <div className="flex items-center gap-1.5 text-[10px] md:text-[11px] text-tp-green-muted uppercase tracking-[1px] mb-2.5">
        <i className={`ti ${icon} text-sm`} /><span className="truncate">{label}</span>
      </div>
      <div className="font-syne font-bold text-[22px] md:text-[26px] text-tp-text-primary leading-none">
        {val}<span className="text-[13px] text-tp-green-dim font-normal ml-1">{unit}</span>
      </div>
      <div className="mt-2.5 h-[3px] bg-tp-border-dim rounded-full overflow-hidden">
        <div className="h-full rounded-full transition-all duration-700" style={{ width: `${pct}%`, background: cor }} />
      </div>
      <div className="text-[11px] text-tp-green-muted mt-1.5">{hint}</div>
    </div>
  )
}

// ─── Sub-componente: badge nível de risco ────────────────────────────────────
function NivelBadge({ nivel }: { nivel: string }) {
  const cls = NIVEL_RISCO_BADGE[nivel] ?? 'bg-tp-border-dim text-tp-green-dim border-tp-border'
  return (
    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${cls}`}>
      {nivel}
    </span>
  )
}

// ─── Sub-componente: badge status plantio ────────────────────────────────────
function StatusPlantio({ status }: { status: string }) {
  const cls = STATUS_PLANTIO_BADGE[status] ?? 'bg-tp-border-dim text-tp-green-dim border-tp-border'
  return (
    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${cls}`}>
      {STATUS_PLANTIO_LABEL[status] ?? status}
    </span>
  )
}

// ─── Página principal ────────────────────────────────────────────────────────
export default function Painel() {
  const navigate = useNavigate()

  // Estados de dados
  const [propriedades, setPropriedades]   = useState<Propriedade[]>([])
  const [propriedadeSel, setPropriedadeSel] = useState<Propriedade | null>(null)
  const [clima, setClima]                 = useState<ClimaPropriedade | null>(null)
  const [telemetria, setTelemetria]       = useState<TelemetriaMeteorologica[]>([])
  const [irrigacoes, setIrrigacoes]       = useState<RegistroIrrigacao[]>([])
  const [alertas, setAlertas]             = useState<AlertaClimatico[]>([])
  const [plantios, setPlantios]           = useState<Plantio[]>([])

  // Estados de UI
  const [loadingProp, setLoadingProp]     = useState(true)
  const [loadingClima, setLoadingClima]   = useState(false)
  const [loadingDados, setLoadingDados]   = useState(false)
  const [erroProp, setErroProp]           = useState<string | null>(null)
  const [erroClima, setErroClima]         = useState<string | null>(null)
  const [erroDados, setErroDados]         = useState<string | null>(null)

  // 1. Carrega lista de propriedades
  useEffect(() => {
    setLoadingProp(true)
    setErroProp(null)
    propriedadeService.getAll()
      .then(data => {
        setPropriedades(data)
        if (data.length > 0) setPropriedadeSel(data[0])
      })
      .catch(e => setErroProp(e.message ?? 'Erro ao carregar propriedades'))
      .finally(() => setLoadingProp(false))
  }, [])

  // 2. Quando muda propriedade selecionada, carrega clima + telemetria + irrigação + alertas + plantios
  useEffect(() => {
    if (!propriedadeSel) return

    setLoadingClima(true)
    setErroClima(null)
    climaService.getByPropriedade(propriedadeSel.id)
      .then(setClima)
      .catch(e => setErroClima(e.message ?? 'Erro ao carregar clima'))
      .finally(() => setLoadingClima(false))

    setLoadingDados(true)
    setErroDados(null)
    Promise.all([
      telemetriaService.getAll(),
      irrigacaoService.getAll(),
      alertaService.getAll(),
      plantioService.getAll(),
    ])
      .then(([tel, irr, ale, pla]) => {
        setTelemetria(tel.filter(t => t.propriedadeid === propriedadeSel.id))
        setAlertas(ale.filter(a => a.propriedadeid === propriedadeSel.id))
        setPlantios(pla.filter(p => p.propriedadeid === propriedadeSel.id))
        setIrrigacoes(irr)
      })
      .catch(e => setErroDados(e.message ?? 'Erro ao carregar dados'))
      .finally(() => setLoadingDados(false))
  }, [propriedadeSel])

  // Pega a leitura mais recente de telemetria
  const ultimaTelemetria: TelemetriaMeteorologica | null =
    telemetria.length > 0 ? telemetria[telemetria.length - 1] : null

  const loading = loadingProp || loadingClima || loadingDados

  return (
    <div className="flex flex-col min-h-screen">
      <div className="px-5 md:px-6 py-5 max-w-[1100px] mx-auto w-full">

        {/* ── Seletor de propriedade ── */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-6 gap-4">
          <div className="flex-1">
            <p className="text-[11px] text-tp-green-muted uppercase tracking-[1px] mb-2">Propriedade ativa</p>
            {loadingProp ? (
              <div className="bg-tp-surface border border-tp-border rounded-xl px-4 py-3 w-60 animate-pulse">
                <div className="h-4 bg-tp-border rounded w-40 mb-1" />
                <div className="h-3 bg-tp-border rounded w-28" />
              </div>
            ) : erroProp ? (
              <div className="text-[12px] text-tp-red">{erroProp}</div>
            ) : (
              <div className="flex flex-wrap gap-2">
                {propriedades.map(p => (
                  <button
                    key={p.id}
                    onClick={() => setPropriedadeSel(p)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border font-syne font-semibold text-sm transition-all ${
                      propriedadeSel?.id === p.id
                        ? 'bg-tp-green text-tp-bg border-tp-green'
                        : 'bg-tp-surface border-tp-border text-tp-text-primary hover:border-tp-border-bright'
                    }`}
                  >
                    <span className={`w-2 h-2 rounded-full flex-shrink-0 ${propriedadeSel?.id === p.id ? 'bg-tp-bg' : 'bg-tp-green animate-pulse-glow'}`} />
                    {p.nome}
                    <span className={`text-[11px] font-normal ${propriedadeSel?.id === p.id ? 'text-tp-bg' : 'text-tp-green-dim'}`}>
                      {p.areaHectares} ha
                    </span>
                  </button>
                ))}
                <button
                  onClick={() => navigate('/propriedades')}
                  className="px-4 py-2.5 rounded-xl border border-dashed border-tp-border text-tp-green-muted text-sm hover:border-tp-border-bright transition-colors"
                >
                  <i className="ti ti-plus text-sm" /> Nova
                </button>
              </div>
            )}
          </div>
          {propriedadeSel && (
            <div className="text-left sm:text-right flex-shrink-0">
              <div className="text-[12px] text-tp-green-dim">
                <i className="ti ti-map-pin text-[11px]" /> {propriedadeSel.cidade}, {propriedadeSel.estado}
              </div>
              <div className="font-syne font-semibold text-[18px] text-tp-text-primary leading-tight">{propriedadeSel.nome}</div>
              <div className="text-[12px] text-tp-green-dim">{propriedadeSel.areaHectares} ha · ID #{propriedadeSel.id}</div>
            </div>
          )}
        </div>

        {/* ── Loading global ── */}
        {loading && !ultimaTelemetria && !clima && (
          <LoadingSpinner message="Buscando dados da API..." />
        )}

        {/* ── Banner de clima (OpenWeather via Java) ── */}
        {loadingClima && (
          <div className="bg-tp-surface border border-tp-border rounded-xl px-5 py-4 mb-6 animate-pulse">
            <div className="h-4 bg-tp-border rounded w-60 mb-2" />
            <div className="h-3 bg-tp-border rounded w-80" />
          </div>
        )}
        {erroClima && (
          <div className="bg-tp-surface border border-tp-red-border rounded-xl px-5 py-4 mb-6 flex items-center gap-3">
            <i className="ti ti-wifi-off text-tp-red text-lg" />
            <div>
              <div className="text-sm font-medium text-tp-red">API Java offline ou CORS bloqueado</div>
              <div className="text-[12px] text-tp-green-dim mt-0.5">
                Configure a URL em <code className="bg-tp-border-dim px-1 rounded text-[11px]">.env → VITE_API_URL</code> e garanta que a API está rodando.
              </div>
            </div>
          </div>
        )}
        {clima && (
          <div className="bg-tp-surface border border-tp-border border-l-[3px] border-l-tp-green rounded-xl px-4 md:px-5 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6 animate-fade-in-up">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-tp-border-dim border border-tp-border-bright flex items-center justify-center text-lg flex-shrink-0">
                <i className="ti ti-cloud-sun" />
              </div>
              <div>
                <div className="font-syne font-semibold text-[15px] text-tp-green">
                  {clima.clima.recomendacao || 'Clima atualizado'}
                </div>
                <div className="text-[12px] text-tp-green-dim">
                  {clima.clima.descricao} · {clima.propriedade}
                  {clima.clima.alerta && (
                    <span className="ml-2 text-tp-amber">⚠ {clima.clima.alerta}</span>
                  )}
                </div>
              </div>
            </div>
            <div className="flex gap-2 flex-wrap">
              <span className="text-[11px] px-2.5 py-1 rounded-full bg-tp-border-dim border border-tp-border-bright text-tp-green font-medium">
                {clima.clima.temperatura}°C
              </span>
              <span className="text-[11px] px-2.5 py-1 rounded-full bg-tp-blue-bg border border-[#1a3d60] text-tp-blue font-medium">
                {clima.clima.umidade}% umidade
              </span>
              <span className="text-[11px] px-2.5 py-1 rounded-full bg-tp-border-dim border border-tp-border text-tp-green-dim font-medium">
                {clima.clima.vento} km/h
              </span>
            </div>
          </div>
        )}

        {/* ── Métricas de telemetria ── */}
        <p className="text-[11px] text-tp-green-muted uppercase tracking-[1.2px] mb-3">
          Status do solo e clima
          {ultimaTelemetria && (
            <span className="normal-case ml-2 text-tp-border-bright">· {ultimaTelemetria.dataColeta}</span>
          )}
        </p>

        {erroDados ? (
          <ErrorState message={erroDados} onRetry={() => propriedadeSel && setPropriedadeSel({ ...propriedadeSel })} />
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
            <MetricaCard
              icon="ti-temperature" label="Temperatura" unit="°C"
              val={ultimaTelemetria?.temperatura ?? clima?.clima.temperatura ?? '–'}
              pct={Math.min(((ultimaTelemetria?.temperatura ?? 24) / 40) * 100, 100)}
              cor="#fbbf24" hint="Leitura do sensor de campo"
            />
            <MetricaCard
              icon="ti-droplet" label="Umidade do Solo" unit="%"
              val={ultimaTelemetria?.umidadeSolo ?? '–'}
              pct={ultimaTelemetria?.umidadeSolo ?? 0}
              cor="#4ade80" hint="Ideal: 60–75%"
            />
            <MetricaCard
              icon="ti-cloud-rain" label="Chuva (mm)" unit="mm"
              val={ultimaTelemetria?.chuvaMm ?? '–'}
              pct={Math.min(((ultimaTelemetria?.chuvaMm ?? 0) / 50) * 100, 100)}
              cor="#60a5fa" hint="Última leitura registrada"
            />
            <MetricaCard
              icon="ti-wind" label="Vento" unit="km/h"
              val={ultimaTelemetria?.velocidadeVento ?? clima?.clima.vento ?? '–'}
              pct={Math.min(((ultimaTelemetria?.velocidadeVento ?? 0) / 80) * 100, 100)}
              cor="#a78bfa" hint="Velocidade do vento"
            />
          </div>
        )}

        {/* ── Grid: Alertas + Plantios + Irrigações ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">

          {/* Alertas */}
          <div className="bg-tp-surface border border-tp-border rounded-xl p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2 font-syne font-semibold text-sm text-tp-text-secondary">
                <i className="ti ti-bell-ringing text-tp-amber text-[15px]" />
                Alertas climáticos
              </div>
              {alertas.length > 0 && (
                <span className="text-[10px] bg-tp-amber-bg text-tp-amber border border-tp-amber-border px-2 py-0.5 rounded-full">
                  {alertas.length}
                </span>
              )}
            </div>
            {loadingDados ? (
              <div className="space-y-2">
                {[1,2].map(i => <div key={i} className="h-12 bg-tp-border-dim rounded-lg animate-pulse" />)}
              </div>
            ) : alertas.length === 0 ? (
              <div className="text-center py-6">
                <i className="ti ti-circle-check text-tp-green text-2xl" />
                <p className="text-[12px] text-tp-green-dim mt-1">Nenhum alerta ativo</p>
              </div>
            ) : (
              <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                {alertas.map(a => (
                  <div key={a.id} className="bg-tp-border-dim rounded-lg p-2.5">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[12px] font-medium text-tp-text-secondary">{a.tipoAlerta}</span>
                      <NivelBadge nivel={a.nivelRisco} />
                    </div>
                    <p className="text-[11px] text-tp-green-dim leading-snug">{a.descricao}</p>
                    <p className="text-[10px] text-tp-green-muted mt-1">{a.dataAlerta}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Plantios */}
          <div className="bg-tp-surface border border-tp-border rounded-xl p-4">
            <div className="flex items-center gap-2 font-syne font-semibold text-sm text-tp-text-secondary mb-3">
              <i className="ti ti-plant-2 text-tp-green text-[15px]" />
              Plantios ativos
            </div>
            {loadingDados ? (
              <div className="space-y-2">
                {[1,2].map(i => <div key={i} className="h-12 bg-tp-border-dim rounded-lg animate-pulse" />)}
              </div>
            ) : plantios.length === 0 ? (
              <div className="text-center py-6">
                <i className="ti ti-seeding text-tp-green-muted text-2xl" />
                <p className="text-[12px] text-tp-green-dim mt-1">Nenhum plantio cadastrado</p>
              </div>
            ) : (
              <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                {plantios.map(p => (
                  <div key={p.id} className="bg-tp-border-dim rounded-lg p-2.5">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[12px] font-medium text-tp-text-secondary">
                        Plantio #{p.id} · Cultura {p.culturaid}
                      </span>
                      <StatusPlantio status={p.status} />
                    </div>
                    <p className="text-[11px] text-tp-green-dim">
                      Plantio: {p.dataPlantio}
                    </p>
                    <p className="text-[11px] text-tp-green-dim">
                      Colheita prevista: {p.dataColheitaPrevista}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Irrigações */}
          <div className="bg-tp-surface border border-tp-border rounded-xl p-4">
            <div className="flex items-center gap-2 font-syne font-semibold text-sm text-tp-text-secondary mb-3">
              <i className="ti ti-droplets text-tp-blue text-[15px]" />
              Registros de irrigação
            </div>
            {loadingDados ? (
              <div className="space-y-2">
                {[1,2].map(i => <div key={i} className="h-12 bg-tp-border-dim rounded-lg animate-pulse" />)}
              </div>
            ) : irrigacoes.length === 0 ? (
              <div className="text-center py-6">
                <i className="ti ti-droplet-off text-tp-green-muted text-2xl" />
                <p className="text-[12px] text-tp-green-dim mt-1">Nenhum registro de irrigação</p>
              </div>
            ) : (
              <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                {irrigacoes.slice(-5).reverse().map(r => (
                  <div key={r.id} className="bg-tp-border-dim rounded-lg p-2.5">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[12px] font-medium text-tp-text-secondary">
                        {r.quantidadeLitros.toFixed(1)} L/m²
                      </span>
                      <span className="text-[10px] text-tp-green-dim">{r.dataIrrigacao}</span>
                    </div>
                    <p className="text-[11px] text-tp-blue leading-snug">{r.recomendacao}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ── Histórico de telemetria ── */}
        {telemetria.length > 1 && (
          <div className="bg-tp-surface border border-tp-border rounded-xl p-4">
            <div className="flex items-center gap-2 font-syne font-semibold text-sm text-tp-text-secondary mb-3">
              <i className="ti ti-history text-tp-green text-[15px]" />
              Histórico de leituras — telemetria
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-[12px]">
                <thead>
                  <tr className="text-tp-green-muted text-left border-b border-tp-border-dim">
                    <th className="pb-2 pr-4 font-medium">Data</th>
                    <th className="pb-2 pr-4 font-medium">Temp.</th>
                    <th className="pb-2 pr-4 font-medium">Umidade Solo</th>
                    <th className="pb-2 pr-4 font-medium">Chuva</th>
                    <th className="pb-2 font-medium">Vento</th>
                  </tr>
                </thead>
                <tbody>
                  {[...telemetria].reverse().slice(0, 7).map(t => (
                    <tr key={t.id} className="border-b border-tp-border-dim last:border-0">
                      <td className="py-2 pr-4 text-tp-green-dim">{t.dataColeta}</td>
                      <td className="py-2 pr-4 text-tp-amber font-medium">{t.temperatura}°C</td>
                      <td className="py-2 pr-4 text-tp-green font-medium">{t.umidadeSolo}%</td>
                      <td className="py-2 pr-4 text-tp-blue">{t.chuvaMm} mm</td>
                      <td className="py-2 text-tp-green-dim">{t.velocidadeVento} km/h</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ── Atalho para Planejador ── */}
        <div className="mt-4 bg-tp-surface border border-tp-border rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex items-center gap-3 flex-1">
            <div className="w-10 h-10 rounded-xl bg-tp-border-dim border border-tp-border-bright flex items-center justify-center text-lg">
              <i className="ti ti-calendar-stats text-tp-green" />
            </div>
            <div>
              <div className="font-syne font-semibold text-sm text-tp-text-primary">Planejador de safra</div>
              <div className="text-[12px] text-tp-green-dim">Veja o calendário preditivo e insights de IA para Soja, Milho e Alface</div>
            </div>
          </div>
          <button
            onClick={() => navigate('/planejador/soja')}
            className="bg-tp-green text-tp-bg px-5 py-2.5 rounded-xl text-[13px] font-bold font-syne hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            Abrir Planejador →
          </button>
        </div>

      </div>
      <Footer />
    </div>
  )
}
