import ContactForm from '../components/ContactForm'
import ContactInfo from '../components/ContactInfo'
import Footer from '../components/Footer'

const CONTACT_INFO_DATA = {
  tag: 'Contato',
  title: 'Fale com a',
  highlight: 'equipe TerraPlan',
  description:
    'Tem dúvidas sobre o sistema, quer colaborar ou é professor avaliando o projeto? Entra em contato, respondemos em até 24h.',
  infoItems: [
    { icon: 'ti-mail', label: 'E-mail', val: 'terraplan@fiap.com.br' },
    { icon: 'ti-school', label: 'Instituição', val: 'FIAP · 1TDS Agosto · 2026' },
    { icon: 'ti-map-pin', label: 'Localização', val: 'São Paulo, SP - Brasil' },
  ],
  socialLinks: [
    { icon: 'ti-brand-github', label: 'GitHub', href: '#' },
    { icon: 'ti-brand-youtube', label: 'YouTube', href: '#' },
    { icon: 'ti-world', label: 'Vercel', href: '#' },
  ],
}

export default function ContatoPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="max-w-5xl mx-auto px-5 md:px-8 w-full py-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start">
        <ContactInfo {...CONTACT_INFO_DATA} />
        <ContactForm />
      </div>
      <Footer />
    </div>
  )
}
