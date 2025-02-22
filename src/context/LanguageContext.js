import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext(undefined);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'fr' : 'en');
  };

  const translations = {
    en: {
      contactInfo: 'Contact Info',
      ourServices: 'Our Services',
      rights: 'All rights reserved.',
      services: [
        'Machinery & Equipment Customisation',
        'Product Design & Engineering',
        'Manufacturing Documents Management'
      ],
      navigation: {
        home: 'Home',
        services: 'Services',
        testimonials: 'Testimonials',
        contact: 'Contact'
      },
      hero: {
        title: {
          line1: 'Engineering the',
          line2: 'Future of',
          line3: 'Innovation'
        },
        subtitle: 'We combine precision engineering with innovative design to create solutions that define the next generation of mechanical excellence.',
        cta: 'Get Started',
        services: [
          {
            title: 'Mechanical Design',
            desc: 'Machinery & Equipment Customizations'
          },
          {
            title: 'Systems Engineering',
            desc: 'Product Design & Engineering'
          },
          {
            title: 'Technical Innovation',
            desc: 'Manufacturing Documents Management'
          }
        ]
      },
      servicesSection: {
        title: "Pioneering Excellence in Engineering",
        services: [
          {
            title: "Machinery & Equipment Customizations",
            description: "Specialized in designing and delivering customized machinery and equipment solutions. Our expertise spans industrial systems, precision assembly lines, and advanced packaging solutions, driving efficiency and productivity through innovation.",
          },
          {
            title: "Product Design & Engineering",
            description: "Comprehensive end-to-end solutions in design, engineering, and product development. We transform concepts into reality, ensuring precision, functionality, and scalability throughout the entire process.",
          },
          {
            title: "Manufacturing Documents Management",
            description: "Expert management of technical documentation and equipment optimization. We enhance efficiency and scalability for production lines, providing clear and precise documentation management solutions.",
          }
        ],
        exploreButton: "Explore Innovation"
      },
      testimonialsSection: {
        title: "Here's what our customers say",
        testimonials: [
          {
            quote: "Very professional designer, he knows what the clients need and manage to satisfy the client in a very professional manners and a great quality of work",
            name: "Abdullah A.",
            location: "Dammam, Saudi Arabia",
            project: "Project: 3D design of a machine",
            stars: 5
          },
          {
            quote: "Excellant job with assisting in creating electrical assembly drawings. I look forward to working with him again soon",
            name: "Eric N.",
            location: "Merl West Coast, USA",
            project: "Project: Surface layout optimisation (Engineering)",
            stars: 5
          },
          {
            quote: "Very skilled and super responsive. We enjoyed working with him a lot and will hire him again in the future. Thank you.",
            name: "Stefan N.",
            location: "Neufeld, Germany",
            project: "Project: Technical documents assistance",
            stars: 5
          }
        ]
      },
      contactSection: {
        title: "Let's Create Together",
        formFields: [
          { name: 'firstName', label: 'First Name', type: 'text' },
          { name: 'lastName', label: 'Last Name', type: 'text' },
          { name: 'email', label: 'Email Address', type: 'email' },
          { name: 'message', label: 'Your Message', type: 'textarea' }
        ],
        submitButton: 'Send Message',
        alerts: {
          success: 'Your message has been sent!',
          error: 'Failed to send your message. Please try again.',
          networkError: 'An error occurred. Please try again later.'
        }
      }
    },
    fr: {
      contactInfo: 'Informations de Contact',
      ourServices: 'Nos Services',
      rights: 'Tous droits réservés.',
      services: [
        'Personnalisation de Machines et Équipements',
        'Conception et Ingénierie de Produits',
        'Gestion des Documents de Fabrication'
      ],
      navigation: {
        home: 'Accueil',
        services: 'Services',
        testimonials: 'Témoignages',
        contact: 'Contact'
      },
      hero: {
        title: {
          line1: "L'Ingénierie du",
          line2: 'Futur de',
          line3: "l'Innovation"
        },
        subtitle: 'Nous combinons l\'ingénierie de précision avec un design innovant pour créer des solutions qui définissent la prochaine génération d\'excellence mécanique.',
        cta: 'Commencer',
        services: [
          {
            title: 'Conception Mécanique',
            desc: 'Précision dans chaque détail'
          },
          {
            title: 'Ingénierie des Systèmes',
            desc: 'Solutions intégrées'
          },
          {
            title: 'Innovation Technique',
            desc: 'Développement tourné vers l\'avenir'
          }
        ]
      },
      servicesSection: {
        title: "Excellence Pionnière en Ingénierie",
        services: [
          {
            title: "Personnalisation de Machines et Équipements",
            description: "Spécialisés dans la conception et la livraison de solutions de machines et d'équipements personnalisés. Notre expertise couvre les systèmes industriels, les lignes d'assemblage de précision et les solutions d'emballage avancées.",
          },
          {
            title: "Conception et Ingénierie de Produits",
            description: "Solutions complètes de bout en bout en conception, ingénierie et développement de produits. Nous transformons les concepts en réalité, assurant précision, fonctionnalité et évolutivité.",
          },
          {
            title: "Gestion des Documents de Fabrication",
            description: "Gestion experte de la documentation technique et optimisation des équipements. Nous améliorons l'efficacité et l'évolutivité des lignes de production avec des solutions de gestion documentaire précises.",
          }
        ],
        exploreButton: "Explorer l'Innovation"
      },
      testimonialsSection: {
        title: "Voici ce que disent nos clients",
        testimonials: [
          {
            quote: "Designer très professionnel, il comprend les besoins des clients et parvient à les satisfaire de manière très professionnelle avec un travail de grande qualité",
            name: "Abdullah A.",
            location: "Dammam, Arabie Saoudite",
            project: "Projet : Conception 3D d'une machine",
            stars: 5
          },
          {
            quote: "Excellent travail d'assistance dans la création de schémas d'assemblage électrique. J'ai hâte de retravailler avec lui bientôt",
            name: "Eric N.",
            location: "Côte Ouest Merl, États-Unis",
            project: "Projet : Optimisation de la disposition de surface (Ingénierie)",
            stars: 5
          },
          {
            quote: "Très compétent et super réactif. Nous avons beaucoup apprécié travailler avec lui et nous le réembaucherons à l'avenir. Merci.",
            name: "Stefan N.",
            location: "Neufeld, Allemagne",
            project: "Projet : Assistance documents techniques",
            stars: 5
          }
        ]
      },
      contactSection: {
        title: "Créons Ensemble",
        formFields: [
          { name: 'firstName', label: 'Prénom', type: 'text' },
          { name: 'lastName', label: 'Nom', type: 'text' },
          { name: 'email', label: 'Adresse Email', type: 'email' },
          { name: 'message', label: 'Votre Message', type: 'textarea' }
        ],
        submitButton: 'Envoyer le Message',
        alerts: {
          success: 'Votre message a été envoyé !',
          error: 'Échec de l\'envoi du message. Veuillez réessayer.',
          networkError: 'Une erreur est survenue. Veuillez réessayer plus tard.'
        }
      }
    }
  };

  const value = {
    language,
    toggleLanguage,
    translations
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
