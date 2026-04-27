export const site = {
  name: 'LIV Active Therapy',
  tagline: { en: 'LivActive, LivWell.', es: 'LivActive, LivWell.' },
  email: 'info@livactivetherapy.com',
  fax: '786-369-7054',
  hours: {
    en: [
      { label: 'Mon – Thurs', value: '8:00 AM – 7:00 PM' },
      { label: 'Friday', value: '8:00 AM – 5:00 PM' },
    ],
    es: [
      { label: 'Lun – Jue', value: '8:00 AM – 7:00 PM' },
      { label: 'Viernes', value: '8:00 AM – 5:00 PM' },
    ],
  },
  locations: [
    {
      slug: 'kendall',
      name: 'Kendall',
      address: '9495 SW 72 Street, Suite B-120',
      city: 'Miami, FL 33173',
      phone: '786-332-2672',
      phoneHref: 'tel:+17863322672',
      mapsUrl: 'https://maps.google.com/?q=9495+SW+72+Street+Suite+B-120+Miami+FL+33173',
      mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3595.041468355725!2d-80.35240530321043!3d25.703051000000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9c741a26ea06d%3A0x1c08b1f1dfe13ef3!2sLiV%20Active%20Therapy%20Center%20Kendall!5e0!3m2!1sen!2sus!4v1777251607522!5m2!1sen!2sus',
    },
    {
      slug: 'doral',
      name: 'Doral',
      address: '8725 NW 18 Terrace, Suite 101',
      city: 'Miami, FL 33172',
      phone: '786-761-1107',
      phoneHref: 'tel:+17867611107',
      mapsUrl: 'https://maps.google.com/?q=8725+NW+18+Terrace+Suite+101+Miami+FL+33172',
      mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.347235743593!2d-80.34048544152189!3d25.79211609999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b9df9c2e023b%3A0x4935004fc303dbc9!2sLiv%20Active%20Therapy%20Center%20Doral!5e0!3m2!1sen!2sus!4v1777251568245!5m2!1sen!2sus',
    },
  ],
  social: {
    instagram: 'https://instagram.com/livactivetherapy',
    facebook: 'https://facebook.com/livactivetherapy',
  },
  forms: {
    en: '/forms/registration-english.pdf',
    es: '/forms/registration-spanish.pdf',
  },
} as const;
