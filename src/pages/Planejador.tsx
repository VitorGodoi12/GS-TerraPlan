import { useParams, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import { CULTURAS_PLANNER } from '../data'
import type { CulturaKey } from '../types'
import {
  STATUS_CULTIVO_CARD,
  STATUS_CULTIVO_BADGE,
  STATUS_CULTIVO_LABEL,
  INSIGHT_BORDER,
  INSIGHT_ICON,
} from '../constants'

const tabs: CulturaKey[] = ['soja', 'milho', 'alface']

export default function Planejador() {
  const { cultura = 'soja' } = useParams<{ cultura: string }>()
  const navigate = useNavigate()
  const key: CulturaKey = (cultura in CULTURAS_PLANNER) ? (cultura as CulturaKey) : 'soja'
  const data = CULTURAS_PLANNER[key]

  return (
    <div className="flex flex-col min-h-screen">
      <div className="text-[12px] text-tp-green-muted px-5 md:px-6 py-2.5 border-b border-tp-border-dim">
        Planejador › <span className="text-tp-green-light">/planejador/{key}</span>
      </div>
      <div className="px-5 md:px-6 py-5 max-w-[1100px] mx-auto w-full">
        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-5">
          {tabs.map((t) => (
            <button key={t} onClick={() => navigate(`/planejador/${t}`)}
              className={`px-4 py-2 rounded-lg text-[13px] font-medium border capitalize transition-all ${
                t === key ? 'bg-tp-green text-tp-bg border-tp-green' : 'bg-transparent text-tp-green-dim border-tp-border hover:border-tp-border-bright'
              }`}>
              {CULTURAS_PLANNER[t].name}
            </button>
          ))}
          <button className="px-4 py-2 rounded-lg text-[13px] font-medium border border-tp-border text-tp-green-muted hover:border-tp-border-bright transition-colors">
            + Cultura
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-4">
          {/* Cultura card */}
          <div className="bg-tp-surface border-2 border-tp-border-bright rounded-2xl p-4 tp-card-hover">
            <div className="w-12 h-12 rounded-xl bg-tp-border-dim border border-tp-border-bright flex items-center justify-center text-2xl mb-3">{data.emoji}</div>
            <div className="font-syne font-bold text-xl text-tp-text-primary">{data.name}</div>
            <div className="text-[12px] text-tp-green-dim italic mb-3.5">{data.sci}</div>
            <div className="flex flex-col">
              {([
                { icon: 'ti-thermometer', label: 'Temperatura ideal', val: data.temp },
                { icon: 'ti-droplet', label: 'Umidade mínima', val: data.umidade },
                { icon: 'ti-cloud-rain', label: 'Água por ciclo', val: data.agua },
                { icon: 'ti-calendar', label: 'Ciclo', val: data.ciclo },
                { icon: 'ti-sun', label: 'Radiação', val: data.radiacao },
              ]).map((row) => (
                <div key={row.label} className="flex items-center justify-between py-2 border-b border-tp-border-dim last:border-0">
                  <span className="flex items-center gap-1.5 text-[12px] text-tp-green-muted">
                    <i className={`ti ${row.icon} text-[12px]`} />{row.label}
                  </span>
                  <span className="text-[12px] text-tp-green-light font-medium">{row.val}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-tp-border">
              <div className="text-[11px] text-tp-green-muted uppercase tracking-wide mb-1.5">Probabilidade de sucesso</div>
              <div className="font-syne font-bold text-[22px] text-tp-green leading-none mb-1.5">{data.score}%</div>
              <div className="h-1.5 bg-tp-border-dim rounded-full overflow-hidden mb-1.5">
                <div className="h-full rounded-full bg-tp-green transition-all duration-700" style={{ width: `${data.score}%` }} />
              </div>
              <div className="text-[11px] text-tp-green-muted">Base: previsão climática dos próximos 6 meses</div>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-4">
            {/* Calendar */}
            <div className="bg-tp-surface border border-tp-border rounded-xl p-4">
              <div className="flex items-center gap-2 font-syne font-semibold text-sm text-tp-text-secondary mb-4">
                <i className="ti ti-calendar-stats text-tp-green text-[15px]" />
                Calendário de plantio — próximos 6 meses
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {data.meses.map((m) => (
                  <div key={m.mes} className={`rounded-lg p-2.5 text-center border ${STATUS_CULTIVO_CARD[m.status]}`}>
                    <div className="text-[11px] text-tp-green-dim mb-1">{m.mes}</div>
                    <div className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full inline-block ${STATUS_CULTIVO_BADGE[m.status]}`}>
                      {STATUS_CULTIVO_LABEL[m.status]}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-3.5 mt-3">
                {[{ cor: 'bg-tp-green', label: 'Ideal' }, { cor: 'bg-tp-amber', label: 'Alerta' }, { cor: 'bg-tp-red', label: 'Inadequado' }].map((l) => (
                  <div key={l.label} className="flex items-center gap-1.5 text-[11px] text-tp-green-dim">
                    <div className={`w-2 h-2 rounded-sm ${l.cor}`} />{l.label}
                  </div>
                ))}
              </div>
            </div>

            {/* Insights */}
            <div className="bg-tp-surface border border-tp-border rounded-xl p-4">
              <div className="flex items-center gap-2 font-syne font-semibold text-sm text-tp-text-secondary mb-4">
                <i className="ti ti-bulb text-tp-green text-[15px]" />
                Insights do modelo preditivo
              </div>
              <div className="flex flex-col gap-2">
                {data.insights.map((ins, idx) => (
                  <div key={idx} className={`flex items-start gap-2.5 p-3 rounded-lg border border-tp-border border-l-[3px] ${INSIGHT_BORDER[ins.type]}`}>
                    <i className={`ti ${ins.icon} text-sm mt-0.5 flex-shrink-0 ${INSIGHT_ICON[ins.type]}`} />
                    <div className="text-[12px] text-tp-text-secondary leading-relaxed">{ins.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
