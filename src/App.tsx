import { useState } from 'react'

const HOURS = [
  '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
  '11:00', '11:30', '12:00', '12:30', '14:00', '14:30',
  '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
]

const TODAY = new Date().toISOString().split('T')[0]

export default function App() {
  const [selectedDate, setSelectedDate] = useState(TODAY)
  const [selectedTime, setSelectedTime] = useState('')

  const waMessage = selectedTime
    ? `Hola Dr., quisiera agendar una consulta para el ${selectedDate} a las ${selectedTime}.`
    : `Hola Dr., quisiera agendar una consulta.`

  const waUrl = `https://wa.me/56931473954?text=${encodeURIComponent(waMessage)}`

  return (
    <div className="min-h-screen bg-[#0f0f1a]">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0f0f1a]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <span className="text-lg font-semibold tracking-tight text-white">
            Dr. <span className="text-blue-400">Enmanuel</span> Rivas
          </span>
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <a href="#inicio" className="hover:text-white transition-colors">Inicio</a>
            <a href="#servicios" className="hover:text-white transition-colors">Servicios</a>
            <a href="#agendar" className="hover:text-white transition-colors">Agendar</a>
            <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
          </nav>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl text-sm font-medium transition-all"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Agendar por WhatsApp
          </a>
        </div>
      </header>

      <main>
        <section id="inicio" className="min-h-screen flex items-center pt-16">
          <div className="max-w-6xl mx-auto px-4 w-full">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 px-4 py-1.5 rounded-full text-sm">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  Disponible para consultas
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                  Tu salud en manos{' '}
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                    expertas
                  </span>
                </h1>
                <p className="text-lg text-gray-400 leading-relaxed max-w-lg">
                  Médico general con más de 15 años de experiencia. Atención
                  personalizada y diagnósticos precisos para cuidar de ti y tu
                  familia.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="#agendar"
                    className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-medium transition-all shadow-lg shadow-blue-500/25"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                    Agendar consulta
                  </a>
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-white/10 hover:border-white/20 text-gray-300 px-6 py-3 rounded-xl font-medium transition-all"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    Escribir al WhatsApp
                  </a>
                </div>
                <div className="flex items-center gap-6 pt-4">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                    <span>4.9 <span className="text-gray-600">(120+ reseñas)</span></span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                    <span>Colegio Médico</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl blur-3xl" />
                <div className="relative bg-gradient-to-br from-[#1a1b2e] to-[#252640] rounded-3xl p-8 border border-white/10">
                  <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-cyan-300 flex items-center justify-center text-4xl font-bold text-white mb-4 shadow-xl">
                        ER
                      </div>
                      <h3 className="text-2xl font-bold text-white">Dr. Enmanuel Rivas</h3>
                      <p className="text-blue-400 font-medium">Médico General</p>
                      <p className="text-gray-500 text-sm mt-2">MN: 123456 | RNE: 78901</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="servicios" className="py-24">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-blue-400 text-sm font-medium uppercase tracking-widest">Servicios</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
                Atención médica integral
              </h2>
              <p className="text-gray-400 mt-3 max-w-lg mx-auto">
                Ofrecemos servicios de salud con un enfoque humano y basado en evidencia científica.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"/></svg>
                  ),
                  title: 'Consulta General',
                  desc: 'Evaluación completa de tu estado de salud con historia clínica detallada y plan de tratamiento personalizado.',
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"/></svg>
                  ),
                  title: 'Medicina Preventiva',
                  desc: 'Chequeos regulares, vacunación y screenings para detectar y prevenir enfermedades a tiempo.',
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"/></svg>
                  ),
                  title: 'Telemedicina',
                  desc: 'Consultas virtuales desde la comodidad de tu hogar con la misma calidad y calidez de siempre.',
                },
              ].map((s, i) => (
                <div key={i} className="group bg-[#1a1b2e] hover:bg-[#252640] border border-white/5 hover:border-blue-500/20 rounded-2xl p-6 transition-all">
                  <div className="w-14 h-14 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                    {s.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{s.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="agendar" className="py-24 bg-[#0a0a14]">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-blue-400 text-sm font-medium uppercase tracking-widest">Agenda</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
                Reserva tu consulta
              </h2>
              <p className="text-gray-400 mt-3 max-w-lg mx-auto">
                Selecciona la fecha y hora que mejor se adapte a tu agenda.
              </p>
            </div>
            <div className="max-w-xl mx-auto bg-[#1a1b2e] rounded-3xl border border-white/5 p-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Fecha</label>
                  <input
                    type="date"
                    value={selectedDate}
                    min={TODAY}
                    onChange={e => { setSelectedDate(e.target.value); setSelectedTime('') }}
                    className="w-full bg-[#252640] border border-white/10 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                  />
                </div>
                {selectedDate && (
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">Horario disponible</label>
                    <div className="grid grid-cols-3 gap-2">
                      {HOURS.map(h => (
                        <button
                          key={h}
                          onClick={() => setSelectedTime(h)}
                          className={`py-2.5 px-3 rounded-xl text-sm font-medium transition-all ${
                            selectedTime === h
                              ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                              : 'bg-[#252640] text-gray-400 hover:bg-[#2f3050] hover:text-white border border-white/5'
                          }`}
                        >
                          {h}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-3 w-full py-4 rounded-xl font-semibold text-lg transition-all ${
                    selectedTime
                      ? 'bg-green-500 hover:bg-green-600 text-white shadow-lg shadow-green-500/25'
                      : 'bg-green-500/50 text-white/70 cursor-not-allowed'
                  }`}
                  onClick={e => { if (!selectedTime) e.preventDefault() }}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    {selectedTime ? 'Confirmar cita por WhatsApp' : 'Selecciona un horario'}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="contacto" className="py-24">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <span className="text-blue-400 text-sm font-medium uppercase tracking-widest">Contacto</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
                    Estamos para ayudarte
                  </h2>
                  <p className="text-gray-400 mt-3">
                    Responde mos tus mensajes en menos de 24 horas hábiles.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Teléfono</p>
                      <p className="text-white font-medium">+56 9 3147 3954</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="text-white font-medium">contacto@drenmanuelrivas.cl</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Ubicación</p>
                      <p className="text-white font-medium">Av. Providencia 1234, Santiago</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#1a1b2e] rounded-3xl border border-white/5 p-8">
                <h3 className="text-xl font-semibold text-white mb-6">Envíanos un mensaje</h3>
                <form
                  onSubmit={e => {
                    e.preventDefault()
                    const data = new FormData(e.currentTarget)
                    const msg = `Hola Dr., soy ${data.get('nombre') || 'paciente'}. ${data.get('mensaje') || 'Quisiera agendar una consulta.'}`
                    window.open(`https://wa.me/56931473954?text=${encodeURIComponent(msg)}`, '_blank')
                  }}
                  className="space-y-4"
                >
                  <input
                    type="text"
                    name="nombre"
                    placeholder="Tu nombre"
                    className="w-full bg-[#252640] border border-white/10 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder:text-gray-500"
                  />
                  <textarea
                    name="mensaje"
                    rows={4}
                    placeholder="Escribe tu mensaje..."
                    className="w-full bg-[#252640] border border-white/10 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder:text-gray-500 resize-none"
                  />
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-3 w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-semibold transition-all shadow-lg shadow-green-500/25"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    Enviar por WhatsApp
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 py-8">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 Dr. Enmanuel Rivas. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-green-400 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </a>
            <span className="text-gray-600 text-sm">contacto@drenmanuelrivas.cl</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
