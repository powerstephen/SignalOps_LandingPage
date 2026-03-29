'use client'
import { useState } from 'react'
import { ArrowRight, CheckCircle, BarChart2, Target, RefreshCw, Zap, Shield, TrendingUp, ChevronRight } from 'lucide-react'

export default function LandingPage() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email || !name) return
    setSubmitting(true)
    await new Promise(r => setTimeout(r, 1000))
    setSubmitted(true)
    setSubmitting(false)
  }

  return (
    <main className="min-h-screen bg-[#080E1A] text-white overflow-x-hidden" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=DM+Serif+Display:ital@0;1&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .grain { background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E"); }
        @keyframes fadeUp { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
        @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
        @keyframes pulse-slow { 0%,100% { opacity:0.4; } 50% { opacity:0.7; } }
        .fade-up-1 { animation: fadeUp 0.7s ease forwards; }
        .fade-up-2 { animation: fadeUp 0.7s 0.15s ease forwards; opacity:0; }
        .fade-up-3 { animation: fadeUp 0.7s 0.3s ease forwards; opacity:0; }
        .fade-up-4 { animation: fadeUp 0.7s 0.45s ease forwards; opacity:0; }
        .fade-up-5 { animation: fadeUp 0.7s 0.6s ease forwards; opacity:0; }
        .glow-teal { box-shadow: 0 0 60px rgba(20,184,166,0.15), 0 0 120px rgba(20,184,166,0.06); }
        .card-hover { transition: transform 0.2s ease, border-color 0.2s ease; }
        .card-hover:hover { transform: translateY(-2px); border-color: rgba(20,184,166,0.3); }
        .btn-primary { background: linear-gradient(135deg, #0d9488 0%, #14b8a6 100%); transition: all 0.2s ease; }
        .btn-primary:hover { transform: translateY(-1px); box-shadow: 0 8px 24px rgba(20,184,166,0.35); }
        .teal-line { background: linear-gradient(90deg, transparent, #14b8a6, transparent); }
        .stat-num { font-family: 'DM Serif Display', serif; }
      `}</style>

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4" style={{ background: 'rgba(8,14,26,0.85)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #0d9488, #14b8a6)' }}>
            <BarChart2 size={14} className="text-white" />
          </div>
          <span className="font-semibold text-white text-sm tracking-wide">SignalOps</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {['Product','Pricing','About'].map(item => (
            <a key={item} href="#" className="text-sm text-slate-400 hover:text-white transition-colors">{item}</a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a href="/app" className="text-sm text-slate-400 hover:text-white transition-colors hidden md:block">Sign in</a>
          <a href="#access" className="btn-primary text-white text-sm font-semibold px-4 py-2 rounded-lg">
            Request access
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-16">
        {/* Background effects */}
        <div className="absolute inset-0 grain pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(20,184,166,0.08) 0%, transparent 70%)', animation: 'pulse-slow 4s ease-in-out infinite' }} />
        <div className="absolute top-20 right-1/4 w-64 h-64 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.05) 0%, transparent 70%)' }} />

        <div className="relative max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="fade-up-1 inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full text-xs font-medium" style={{ background: 'rgba(20,184,166,0.08)', border: '1px solid rgba(20,184,166,0.2)', color: '#2dd4bf' }}>
            <div className="w-1.5 h-1.5 rounded-full bg-teal-400" style={{ animation: 'pulse-slow 2s ease-in-out infinite' }} />
            Now in early access · B2B SaaS revenue teams
          </div>

          {/* Headline */}
          <h1 className="fade-up-2 mb-6 leading-tight" style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(2.8rem, 6vw, 5.5rem)', fontWeight: 400, letterSpacing: '-0.02em' }}>
            Your revenue has a leak.
            <br />
            <span style={{ color: '#14b8a6', fontStyle: 'italic' }}>Here's exactly where.</span>
          </h1>

          {/* Subheadline */}
          <p className="fade-up-3 text-slate-400 mb-10 mx-auto leading-relaxed" style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', maxWidth: '600px', fontWeight: 300 }}>
            SignalOps connects to your CRM, billing, and CS data to tell you which customers are profitable, which are draining margin, and exactly what to do about it.
          </p>

          {/* CTAs */}
          <div className="fade-up-4 flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a href="#access" className="btn-primary flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-xl text-sm w-full sm:w-auto justify-center">
              Request early access <ArrowRight size={15} />
            </a>
            <a href="/app" className="flex items-center gap-2 text-slate-300 hover:text-white font-medium px-8 py-4 rounded-xl text-sm transition-colors w-full sm:w-auto justify-center" style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
              View live demo <ChevronRight size={15} />
            </a>
          </div>

          {/* Stats row */}
          <div className="fade-up-5 grid grid-cols-3 gap-6 max-w-lg mx-auto">
            {[
              { num: '€405k', label: 'avg revenue at risk identified' },
              { num: '6', label: 'modules covering full revenue cycle' },
              { num: '< 30m', label: 'to first insight after connecting data' },
            ].map(s => (
              <div key={s.label} className="text-center">
                <p className="stat-num text-2xl font-normal text-white mb-1" style={{ color: '#2dd4bf' }}>{s.num}</p>
                <p className="text-xs text-slate-500 leading-tight">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
          <div className="w-px h-12 teal-line" />
        </div>
      </section>

      {/* Problem section */}
      <section className="py-24 px-6" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#14b8a6' }}>The problem</p>
            <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, lineHeight: 1.2 }}>
              Most SaaS companies are flying blind<br />on their own revenue data.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { stat: '45%', label: 'of customers cost more to serve than they generate in revenue — but most teams never measure it.' },
              { stat: '71%', label: 'of revenue typically comes from fewer than 15% of customers. The rest dilutes your margin.' },
              { stat: '3×', label: 'higher churn rate when there\'s only one contact in an account. Invisible risk, until it\'s too late.' },
            ].map(item => (
              <div key={item.stat} className="card-hover p-8 rounded-2xl" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)' }}>
                <p className="stat-num mb-3" style={{ fontSize: '3.5rem', fontWeight: 400, color: '#f87171', lineHeight: 1 }}>{item.stat}</p>
                <p className="text-slate-400 text-sm leading-relaxed" style={{ fontWeight: 300 }}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules section */}
      <section className="py-24 px-6" style={{ background: 'rgba(20,184,166,0.02)', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#14b8a6' }}>The platform</p>
            <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, lineHeight: 1.2 }}>
              Six modules. One revenue intelligence layer.
            </h2>
            <p className="text-slate-400 mt-4 text-sm" style={{ fontWeight: 300 }}>Each module is independently valuable — together they compound.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: BarChart2,  emoji: '🗄️',  name: 'Data Centre',    color: '#3b82f6', desc: 'Connect CRM, billing, and CS data into a single verified source of truth.' },
              { icon: Target,     emoji: '🎯',  name: 'ICP Profile',    color: '#14b8a6', desc: 'Discover the precise attributes of your highest-value accounts — derived from real data, not guesswork.' },
              { icon: BarChart2,  emoji: '📊',  name: 'Profit Matrix',  color: '#f59e0b', desc: 'See exactly which accounts are profitable, which are draining margin, and what to do about each.' },
              { icon: RefreshCw,  emoji: '🔄',  name: 'Recover',        color: '#8b5cf6', desc: 'Surface dormant accounts showing buying signals — with personalised reengagement sequences ready to send.' },
              { icon: Zap,        emoji: '⚡',  name: 'Generate',       color: '#06b6d4', desc: 'Build targeted prospect lists matched against your live ICP — not your average customer, your best.' },
              { icon: TrendingUp, emoji: '🔥',  name: 'Ignite',         color: '#f97316', desc: 'Score every active deal across six health dimensions and surface exactly what to do next to close.' },
            ].map(mod => (
              <div key={mod.name} className="card-hover p-6 rounded-2xl" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)' }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg" style={{ background: `${mod.color}15`, border: `1px solid ${mod.color}30` }}>
                    {mod.emoji}
                  </div>
                  <h3 className="font-semibold text-white text-sm">{mod.name}</h3>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed" style={{ fontWeight: 300 }}>{mod.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#14b8a6' }}>How it works</p>
            <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400 }}>
              First insight in under 30 minutes.
            </h2>
          </div>
          <div className="space-y-4">
            {[
              { step: '01', title: 'Connect your data', desc: 'Link your CRM, billing system, and CS platform. SignalOps normalises and joins the data automatically — no manual data prep required.', time: '~10 minutes' },
              { step: '02', title: 'See your profitability picture', desc: 'Every customer is classified into Champions, Diamonds, Quick Wins, or Drains. You\'ll see immediately where revenue is concentrated and where margin is leaking.', time: '~5 minutes' },
              { step: '03', title: 'Get your action list', desc: 'SignalOps surfaces the highest-value interventions ranked by revenue impact — with owners, timelines, and step-by-step plans attached to each one.', time: 'Immediate' },
            ].map((step, i) => (
              <div key={step.step} className="flex gap-6 p-6 rounded-2xl card-hover" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)' }}>
                <div className="flex-shrink-0">
                  <span className="stat-num text-4xl font-normal" style={{ color: 'rgba(20,184,166,0.25)' }}>{step.step}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-white">{step.title}</h3>
                    <span className="text-xs px-2 py-1 rounded-full" style={{ background: 'rgba(20,184,166,0.1)', color: '#2dd4bf', border: '1px solid rgba(20,184,166,0.2)' }}>{step.time}</span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed" style={{ fontWeight: 300 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features / proof points */}
      <section className="py-24 px-6" style={{ background: 'rgba(255,255,255,0.01)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#14b8a6' }}>Why SignalOps</p>
              <h2 className="mb-6" style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 400, lineHeight: 1.2 }}>
                Not another dashboard.<br /><span style={{ fontStyle: 'italic', color: '#94a3b8' }}>A decision engine.</span>
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-8" style={{ fontWeight: 300 }}>
                Most analytics tools tell you what happened. SignalOps tells you what to do next — with a ranked list of actions, the owners responsible, and the revenue at stake for each one.
              </p>
              <div className="space-y-4">
                {[
                  'Profitability analysis across your entire customer base',
                  'AI-ranked actions with step-by-step playbooks',
                  'Personalised outreach sequences ready to send or schedule',
                  'Live pipeline health scoring with deal-level intelligence',
                  'ICP profiling built from your actual best customers',
                  'Champion monitoring with early warning signals',
                ].map(point => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle size={14} className="flex-shrink-0 mt-0.5" style={{ color: '#14b8a6' }} />
                    <p className="text-slate-300 text-sm" style={{ fontWeight: 300 }}>{point}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              {[
                { label: 'Revenue at risk identified', value: '€405k', color: '#f87171', sub: 'avg across customer base' },
                { label: 'Recoverable margin', value: '€457k', color: '#14b8a6', sub: 'with targeted interventions' },
                { label: 'Expansion potential', value: '€315k', color: '#3b82f6', sub: 'from existing accounts' },
                { label: 'Time to first action', value: '< 30m', color: '#f59e0b', sub: 'from data connection' },
              ].map(stat => (
                <div key={stat.label} className="flex items-center justify-between p-5 rounded-xl card-hover" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <div>
                    <p className="text-xs text-slate-500 mb-0.5">{stat.label}</p>
                    <p className="text-xs text-slate-600">{stat.sub}</p>
                  </div>
                  <p className="stat-num text-3xl font-normal" style={{ color: stat.color }}>{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing teaser */}
      <section className="py-24 px-6" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#14b8a6' }}>Pricing</p>
          <h2 className="mb-4" style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400 }}>
            Simple, transparent pricing.
          </h2>
          <p className="text-slate-400 text-sm mb-12" style={{ fontWeight: 300 }}>Start free. Upgrade when you see the value.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Free', price: '€0', per: 'forever', features: ['ICP Profile', 'Data Centre', 'Up to 3 integrations'], cta: 'Get started', highlight: false },
              { name: 'Growth', price: '€99', per: 'per month', features: ['Everything in Free', 'Profit Matrix Snapshot', 'Recover', 'Generate'], cta: 'Request access', highlight: true },
              { name: 'Scale', price: '€299', per: 'per month', features: ['Everything in Growth', 'Ignite pipeline intelligence', 'Advanced segmentation', 'Priority support'], cta: 'Request access', highlight: false },
            ].map(plan => (
              <div key={plan.name} className={`p-8 rounded-2xl card-hover text-left relative ${plan.highlight ? 'glow-teal' : ''}`} style={{ background: plan.highlight ? 'rgba(20,184,166,0.06)' : 'rgba(255,255,255,0.02)', border: plan.highlight ? '1px solid rgba(20,184,166,0.3)' : '1px solid rgba(255,255,255,0.07)' }}>
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-semibold text-white" style={{ background: 'linear-gradient(135deg, #0d9488, #14b8a6)' }}>Most popular</div>
                )}
                <p className="text-sm font-semibold text-slate-300 mb-2">{plan.name}</p>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="stat-num text-4xl font-normal text-white">{plan.price}</span>
                </div>
                <p className="text-xs text-slate-500 mb-6">{plan.per}</p>
                <div className="space-y-2.5 mb-8">
                  {plan.features.map(f => (
                    <div key={f} className="flex items-center gap-2">
                      <CheckCircle size={12} style={{ color: '#14b8a6', flexShrink: 0 }} />
                      <span className="text-xs text-slate-400" style={{ fontWeight: 300 }}>{f}</span>
                    </div>
                  ))}
                </div>
                <a href="#access" className={`block text-center text-sm font-semibold py-2.5 rounded-xl transition-all ${plan.highlight ? 'btn-primary text-white' : 'text-slate-300 hover:text-white'}`} style={!plan.highlight ? { border: '1px solid rgba(255,255,255,0.1)' } : {}}>
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Access form */}
      <section id="access" className="py-24 px-6" style={{ background: 'rgba(20,184,166,0.02)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="max-w-xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#14b8a6' }}>Early access</p>
          <h2 className="mb-4" style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400 }}>
            Join the waitlist.
          </h2>
          <p className="text-slate-400 text-sm mb-10" style={{ fontWeight: 300 }}>
            SignalOps is currently in early access. We're onboarding B2B SaaS companies with 20–200 customers. Request access and we'll be in touch within 48 hours.
          </p>

          {submitted ? (
            <div className="p-8 rounded-2xl" style={{ background: 'rgba(20,184,166,0.08)', border: '1px solid rgba(20,184,166,0.25)' }}>
              <CheckCircle size={32} className="mx-auto mb-4" style={{ color: '#14b8a6' }} />
              <h3 className="font-semibold text-white mb-2">You're on the list.</h3>
              <p className="text-slate-400 text-sm" style={{ fontWeight: 300 }}>We'll be in touch within 48 hours. In the meantime, feel free to explore the live demo.</p>
              <a href="/app" className="inline-flex items-center gap-2 mt-6 text-sm font-semibold" style={{ color: '#14b8a6' }}>
                View live demo <ArrowRight size={14} />
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={e => setName(e.target.value)}
                required
                className="w-full px-5 py-4 rounded-xl text-sm text-white placeholder-slate-600 outline-none transition-all"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', caretColor: '#14b8a6' }}
                onFocus={e => e.target.style.borderColor = 'rgba(20,184,166,0.4)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
              />
              <input
                type="email"
                placeholder="Work email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className="w-full px-5 py-4 rounded-xl text-sm text-white placeholder-slate-600 outline-none transition-all"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', caretColor: '#14b8a6' }}
                onFocus={e => e.target.style.borderColor = 'rgba(20,184,166,0.4)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
              />
              <button
                type="submit"
                disabled={submitting}
                className="btn-primary w-full flex items-center justify-center gap-2 text-white font-semibold py-4 rounded-xl text-sm disabled:opacity-70"
              >
                {submitting ? (
                  <><div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />Submitting...</>
                ) : (
                  <>Request early access <ArrowRight size={15} /></>
                )}
              </button>
              <p className="text-xs text-slate-600">No spam. No sales calls unless you want one. Just a quick conversation.</p>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #0d9488, #14b8a6)' }}>
              <BarChart2 size={12} className="text-white" />
            </div>
            <span className="text-sm font-semibold text-slate-400">SignalOps</span>
            <span className="text-slate-700 text-sm">·</span>
            <span className="text-xs text-slate-600">Revenue Intelligence Platform</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="/app" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">View demo</a>
            <a href="#access" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Request access</a>
            <span className="text-xs text-slate-700">© 2025 Koreva</span>
          </div>
        </div>
      </footer>
    </main>
  )
}
