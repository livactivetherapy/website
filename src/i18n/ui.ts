export const languages = {
  en: 'English',
  es: 'Español',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.team': 'Our Team',
    'nav.locations': 'Locations',
    'nav.contact': 'Contact',
    'nav.insurance': 'Insurance',
    'nav.injury': 'Accident Injury',
    'nav.forms': 'Forms',
    'nav.book': 'Book an appointment',

    'cta.call': 'Call now',
    'cta.book': 'Book a session',
    'cta.learn': 'Learn more',
    'cta.directions': 'Get directions',

    'hero.eyebrow': 'Outpatient physical & occupational therapy in Miami',
    'hero.title': 'Move better. Heal faster. LIV Active.',
    'hero.body': 'Personalized rehabilitation built around you — from sports injuries and post-surgery recovery to pediatric and prenatal care. Two locations: Kendall and Doral.',
    'hero.primary': 'Book a session',
    'hero.secondary': 'See our services',

    'trust.title': 'Trusted by Miami families since 2015',
    'trust.bilingual': 'Bilingual care (EN / ES)',
    'trust.insurance': 'Most insurances accepted',
    'trust.locations': 'Two convenient locations',

    'services.title': 'Therapies tailored to your recovery',
    'services.subtitle': 'Evidence-based care from licensed clinicians — combined with hands-on techniques that get you moving again.',

    'team.title': 'Meet the experts',
    'team.subtitle': 'At LivActive, we strive to provide you with the best. Our team is built of industry-leading physical and occupational therapists dedicated to helping you surpass your goals.',

    'locations.title': 'Plan your visit.',
    'locations.subtitle': 'Two Miami clinics, most major insurances accepted, and same-week availability for new patients.',
    'locations.hours': 'Hours',
    'locations.phone': 'Phone',
    'locations.address': 'Address',

    'cta.banner.title': 'Ready to feel like yourself again?',
    'cta.banner.body': 'Most patients are seen within 48 hours. Call us or send a quick message — we will get back to you the same day.',

    'footer.tagline': 'LivActive, LivWell.',
    'footer.rights': 'All rights reserved.',
    'footer.forms': 'Registration forms',
    'footer.formsEn': 'English form',
    'footer.formsEs': 'Formulario en Español',
    'footer.privacy': 'Privacy policy',
    'footer.about': 'At LivActive, we strive to provide you with the best. Our team is built of industry-leading physical and occupational therapists dedicated to helping you surpass your goals. We have worked with patients of all ages, and dedicated our resources to providing you with top-level care from the moment you step through our door.',
    'footer.navigation': 'Navigation',
    'footer.visitUs': 'Visit us',
    'footer.fax': 'Fax',
    'footer.hours': 'Hours',

    'forms.name': 'Your name',
    'forms.email': 'Email',
    'forms.phone': 'Phone',
    'forms.message': 'How can we help?',
    'forms.submit': 'Send message',

    'promise.eyebrow': 'Our promise',
    'promise.title': 'Care that puts your comfort first.',
    'promise.body': "We're dedicated to your comfort and satisfaction. Our customized, quality pain-relief treatments are delivered in a comfortable, friendly environment — and combined with our hands-on technique, we're certain we'll relieve the pain that's currently ailing you.",
    'promise.cta': 'Contact us',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.services': 'Servicios',
    'nav.about': 'Nosotros',
    'nav.team': 'Equipo',
    'nav.locations': 'Ubicaciones',
    'nav.contact': 'Contacto',
    'nav.insurance': 'Seguros',
    'nav.injury': 'Lesiones',
    'nav.forms': 'Formularios',
    'nav.book': 'Reservar una cita',

    'cta.call': 'Llamar ahora',
    'cta.book': 'Reservar sesión',
    'cta.learn': 'Más información',
    'cta.directions': 'Cómo llegar',

    'hero.eyebrow': 'Terapia física y ocupacional ambulatoria en Miami',
    'hero.title': 'Muévete mejor. Sana más rápido. LIV Active.',
    'hero.body': 'Rehabilitación personalizada diseñada para ti — desde lesiones deportivas y recuperación postquirúrgica hasta cuidado pediátrico y prenatal. Dos ubicaciones: Kendall y Doral.',
    'hero.primary': 'Reservar sesión',
    'hero.secondary': 'Ver nuestros servicios',

    'trust.title': 'La confianza de las familias de Miami desde 2015',
    'trust.bilingual': 'Atención bilingüe (EN / ES)',
    'trust.insurance': 'Aceptamos la mayoría de seguros',
    'trust.locations': 'Dos ubicaciones convenientes',

    'services.title': 'Terapias adaptadas a tu recuperación',
    'services.subtitle': 'Atención basada en evidencia por clínicos licenciados — combinada con técnicas manuales que te devuelven el movimiento.',

    'team.title': 'Conoce a los expertos',
    'team.subtitle': 'En LivActive nos esforzamos por brindarte lo mejor. Nuestro equipo está formado por terapeutas físicos y ocupacionales líderes en la industria, dedicados a ayudarte a superar tus metas.',

    'locations.title': 'Planifica tu visita.',
    'locations.subtitle': 'Dos clínicas en Miami, aceptamos la mayoría de los seguros y disponibilidad la misma semana para pacientes nuevos.',
    'locations.hours': 'Horario',
    'locations.phone': 'Teléfono',
    'locations.address': 'Dirección',

    'cta.banner.title': '¿Listo para sentirte tú mismo de nuevo?',
    'cta.banner.body': 'La mayoría de pacientes son atendidos en menos de 48 horas. Llámanos o envíanos un mensaje — te responderemos el mismo día.',

    'footer.tagline': 'LivActive, LivWell.',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.forms': 'Formularios de registro',
    'footer.formsEn': 'Formulario en Inglés',
    'footer.formsEs': 'Formulario en Español',
    'footer.privacy': 'Política de privacidad',
    'footer.about': 'En LivActive nos esforzamos por brindarte lo mejor. Nuestro equipo está formado por terapeutas físicos y ocupacionales líderes en la industria, dedicados a ayudarte a superar tus metas. Hemos trabajado con pacientes de todas las edades y dedicamos nuestros recursos para brindarte la atención del más alto nivel desde el momento en que cruzas nuestra puerta.',
    'footer.navigation': 'Navegación',
    'footer.visitUs': 'Visítanos',
    'footer.fax': 'Fax',
    'footer.hours': 'Horario',

    'forms.name': 'Tu nombre',
    'forms.email': 'Correo electrónico',
    'forms.phone': 'Teléfono',
    'forms.message': '¿En qué podemos ayudarte?',
    'forms.submit': 'Enviar mensaje',

    'promise.eyebrow': 'Nuestra promesa',
    'promise.title': 'Atención que pone tu comodidad primero.',
    'promise.body': 'Estamos dedicados a tu comodidad y satisfacción. Nuestros tratamientos personalizados y de calidad para el alivio del dolor se brindan en un ambiente cómodo y amigable — y combinados con nuestra técnica manual, estamos seguros de que aliviaremos el dolor que te esté afectando.',
    'promise.cta': 'Contáctanos',
  },
} as const;

export type UIKey = keyof (typeof ui)['en'];

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return (ui[lang] as Record<string, string>)[key] ?? (ui[defaultLang] as Record<string, string>)[key];
  };
}

export function getLangFromUrl(url: URL): Lang {
  const [, seg] = url.pathname.split('/');
  if (seg in languages) return seg as Lang;
  return defaultLang;
}

export function localizedPath(lang: Lang, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === defaultLang) return clean === '/' ? '/' : clean;
  return clean === '/' ? `/${lang}/` : `/${lang}${clean}`;
}
