import {computed} from 'vue'
import {useRoute} from 'vue-router'

export type Lang = 'en' | 'ru' | 'kz'

const SUPPORTED_LANGS: Lang[] = ['en', 'ru', 'kz']
const DEFAULT_LANG: Lang = 'en'

const translations = {
  en: {
    common: {
      arrowAlt: 'Arrow',
    },
    header: {
      greeting: 'Hi, I am',
      subtitle: 'Expert developer',
      description:
        'Passionate full-stack developer crafting beautiful and functional web experiences. I turn ideas into elegant solutions using modern technologies.',
      resume: 'Download resume',
      contact: 'Contact',
    },
    featured: {
      title: 'Featured Projects',
      subtitle: 'Here are some of my recent projects that showcase my skills and experience in web development.',
    },
    skills: {
      title: 'Skills & Expertise',
      subtitle: 'I work with a wide range of modern technologies and tools to build scalable and efficient applications.',
    },
    experience: {
      title: 'Experience',
      subtitle: 'My professional journey and work experience across different companies.',
    },
    reviews: {
      title: 'Client Reviews',
      subtitle: 'What clients and colleagues say about working with me.',
      iconAlt: 'Review',
    },
    contact: {
      title: 'Get In Touch',
      subtitle: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.",
      form: {
        username: 'Username',
        email: 'Email',
        message: 'Message',
        submit: 'Send Message',
      },
      info: {
        email: 'Email',
        phone: 'Phone',
        location: 'Location',
      },
    },
  },
  ru: {
    common: {
      arrowAlt: 'Стрелка',
    },
    header: {
      greeting: 'Привет, я',
      subtitle: 'Эксперт разработчик',
      description:
        'Увлечённый full-stack разработчик, создающий красивые и функциональные веб-продукты. Превращаю идеи в элегантные решения с помощью современных технологий.',
      resume: 'Скачать резюме',
      contact: 'Связаться',
    },
    featured: {
      title: 'Избранные проекты',
      subtitle: 'Вот некоторые из моих недавних проектов, которые демонстрируют мои навыки и опыт в веб-разработке.',
    },
    skills: {
      title: 'Навыки и экспертиза',
      subtitle: 'Я работаю с широким набором современных технологий и инструментов для создания масштабируемых и эффективных приложений.',
    },
    experience: {
      title: 'Опыт работы',
      subtitle: 'Мой профессиональный путь и опыт работы в различных компаниях.',
    },
    reviews: {
      title: 'Отзывы клиентов',
      subtitle: 'Что говорят обо мне клиенты и коллеги, с которыми я работал.',
      iconAlt: 'Отзыв',
    },
    contact: {
      title: 'Свяжитесь со мной',
      subtitle: 'Я всегда открыт для обсуждения новых проектов, творческих идей или возможностей стать частью вашей команды.',
      form: {
        username: 'Имя',
        email: 'Email',
        message: 'Сообщение',
        submit: 'Отправить сообщение',
      },
      info: {
        email: 'Email',
        phone: 'Телефон',
        location: 'Локация',
      },
    },
  },
  kz: {
    common: {
      arrowAlt: 'Жебе',
    },
    header: {
      greeting: 'Сәлем, мен',
      subtitle: 'Сарапшы әзірлеуші',
      description:
        'Әсем әрі функционалды веб-тәжірибе жасайтын full-stack әзірлеуші. Заманауи технологиялар арқылы идеяларды талғампаз шешімдерге айналдырамын.',
      resume: 'Түйіндемені жүктеу',
      contact: 'Байланысу',
    },
    featured: {
      title: 'Таңдаулы жобалар',
      subtitle: 'Мұнда веб-әзірлеудегі дағдыларым мен тәжірибемді көрсететін соңғы жобаларым бар.',
    },
    skills: {
      title: 'Дағдылар және тәжірибе',
      subtitle: 'Мен ауқымды әрі тиімді қосымшаларды құру үшін заманауи технологиялар мен құралдардың кең спектрімен жұмыс істеймін.',
    },
    experience: {
      title: 'Жұмыс тәжірибесі',
      subtitle: 'Әртүрлі компаниялардағы кәсіби жолым мен жұмыс тәжірибем.',
    },
    reviews: {
      title: 'Клиент пікірлері',
      subtitle: 'Клиенттер мен әріптестер менімен жұмыс істеу туралы не дейді.',
      iconAlt: 'Пікір',
    },
    contact: {
      title: 'Байланысқа шығайық',
      subtitle: 'Жаңа жобаларды, шығармашылық идеяларды немесе сіздің командаңыздың бір бөлігі болу мүмкіндігін талқылауға әрқашан ашықпын.',
      form: {
        username: 'Аты-жөні',
        email: 'Email',
        message: 'Хабарлама',
        submit: 'Хабарлама жіберу',
      },
      info: {
        email: 'Email',
        phone: 'Телефон',
        location: 'Мекенжай',
      },
    },
  },
} as const

export function useI18n() {
  const route = useRoute()

  const lang = computed<Lang>(() => {
    const raw = route.query.lang
    const value = Array.isArray(raw) ? raw[0] : raw
    if (SUPPORTED_LANGS.includes(value as Lang)) {
      return value as Lang
    }
    return DEFAULT_LANG
  })

  const t = computed(() => translations[lang.value])

  return {
    lang,
    t,
  }
}

export const localizedContent = {
  skills: {
    en: [
      {
        icon: 'frontend2.svg',
        title: 'Frontend Development',
        skills: ['Vue', 'Angular', 'HTML', 'CSS', 'TypeScript', 'Tailwind CSS', 'Nuxt.js', 'Storybook'],
      },
      {
        icon: 'backend.svg',
        title: 'Backend Development',
        skills: ['Node.js', 'Nest js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs'],
      },
      {
        icon: 'mobile.svg',
        title: 'Mobile Development',
        skills: ['Ionic', 'Responsive Design', 'Progressive Web Apps', 'Flutter'],
      },
      {
        icon: 'code.svg',
        title: 'Programming Languages',
        skills: ['JavaScript', 'TypeScript', 'SQL'],
      },
      {
        icon: 'tools.svg',
        title: 'Tools & Workflow',
        skills: ['Git', 'GitHub', 'GitLub', 'WebStorm', 'Docker', 'CI/CD'],
      },
      {
        icon: 'design.svg',
        title: 'Design',
        skills: ['Figma', 'UI/UX Design', 'Prototyping', 'Wireframing'],
      },
    ],
    ru: [
      {
        icon: 'frontend2.svg',
        title: 'Фронтенд-разработка',
        skills: ['Vue', 'Angular', 'HTML', 'CSS', 'TypeScript', 'Tailwind CSS', 'Nuxt.js', 'Storybook'],
      },
      {
        icon: 'backend.svg',
        title: 'Бэкенд-разработка',
        skills: ['Node.js', 'Nest js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs'],
      },
      {
        icon: 'mobile.svg',
        title: 'Мобильная разработка',
        skills: ['Ionic', 'Responsive Design', 'Progressive Web Apps', 'Flutter'],
      },
      {
        icon: 'code.svg',
        title: 'Языки программирования',
        skills: ['JavaScript', 'TypeScript', 'SQL'],
      },
      {
        icon: 'tools.svg',
        title: 'Инструменты и процессы',
        skills: ['Git', 'GitHub', 'GitLub', 'WebStorm', 'Docker', 'CI/CD'],
      },
      {
        icon: 'design.svg',
        title: 'Дизайн',
        skills: ['Figma', 'UI/UX Design', 'Prototyping', 'Wireframing'],
      },
    ],
    kz: [
      {
        icon: 'frontend2.svg',
        title: 'Фронтенд әзірлеу',
        skills: ['Vue', 'Angular', 'HTML', 'CSS', 'TypeScript', 'Tailwind CSS', 'Nuxt.js', 'Storybook'],
      },
      {
        icon: 'backend.svg',
        title: 'Бэкенд әзірлеу',
        skills: ['Node.js', 'Nest js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs'],
      },
      {
        icon: 'mobile.svg',
        title: 'Мобильді әзірлеу',
        skills: ['Ionic', 'Responsive Design', 'Progressive Web Apps', 'Flutter'],
      },
      {
        icon: 'code.svg',
        title: 'Бағдарламалау тілдері',
        skills: ['JavaScript', 'TypeScript', 'SQL'],
      },
      {
        icon: 'tools.svg',
        title: 'Құралдар және процесс',
        skills: ['Git', 'GitHub', 'GitLub', 'WebStorm', 'Docker', 'CI/CD'],
      },
      {
        icon: 'design.svg',
        title: 'Дизайн',
        skills: ['Figma', 'UI/UX Design', 'Prototyping', 'Wireframing'],
      },
    ],
  },
  projects: {
    en: [
      {
        img: '/images/test-site.png',
        title: 'Online Test',
        description: 'A site for preparing online frontend tests at different levels.',
        link: 'https://frontend-test-eta-nine.vercel.app/',
        stack: ['Html', 'Css', 'JavaScript'],
      },
      {
        img: '/images/alser.png',
        title: 'E-commerce Store',
        description: 'Online store for Alser customers.',
        link: 'https://alser.kz',
        stack: ['Nuxt', 'Nest.js', 'Firebase'],
      },
      {
        img: '/images/greet.png',
        title: 'IT Solutions for Your Business',
        description: 'Template website to promote an outsourcing team.',
        link: 'https://greet-route.vercel.app/',
        stack: ['Vuw', 'Vite', 'Typescript'],
      },
      {
        img: '/images/sdu.png',
        title: 'Academic Compass',
        description:
          'Built for a diploma project. Helps analyze the grades a student might receive in the future for specific subjects.',
        link: 'https://sdu-analytics.vercel.app/',
        stack: ['Vue', 'Firebase', 'Typescript', 'Vite'],
      },
    ],
    ru: [
      {
        img: '/images/test-site.png',
        title: 'Онлайн тест',
        description: 'Сайт для подготовки к онлайн тестированию по фронтенд-разработке на разные уровни.',
        link: 'https://frontend-test-eta-nine.vercel.app/',
        stack: ['Html', 'Css', 'JavaScript'],
      },
      {
        img: '/images/alser.png',
        title: 'Интернет магазин',
        description: 'Интернет магазин для клиентов Alser.',
        link: 'https://alser.kz',
        stack: ['Nuxt', 'Nest.js', 'Firebase'],
      },
      {
        img: '/images/greet.png',
        title: 'IT решения для вашего бизнеса',
        description: 'Шаблонный сайт для рекламирования аутсорс команды.',
        link: 'https://greet-route.vercel.app/',
        stack: ['Vuw', 'Vite', 'Typescript'],
      },
      {
        img: '/images/sdu.png',
        title: 'Academic Compass',
        description:
          'Сайт был сделан для дипломной работы. Предназначен для анализа оценки студента, которую он может получить по определенным предметам.',
        link: 'https://sdu-analytics.vercel.app/',
        stack: ['Vue', 'Firebase', 'Typescript', 'Vite'],
      },
    ],
    kz: [
      {
        img: '/images/test-site.png',
        title: 'Онлайн тест',
        description: 'Фронтенд бойынша әр деңгейдегі онлайн тестке дайындыққа арналған сайт.',
        link: 'https://frontend-test-eta-nine.vercel.app/',
        stack: ['Html', 'Css', 'JavaScript'],
      },
      {
        img: '/images/alser.png',
        title: 'Интернет дүкен',
        description: 'Alser клиенттеріне арналған интернет дүкен.',
        link: 'https://alser.kz',
        stack: ['Nuxt', 'Nest.js', 'Firebase'],
      },
      {
        img: '/images/greet.png',
        title: 'Бизнесіңізге арналған IT шешімдер',
        description: 'Аутсорс команданы жарнамалауға арналған шаблон сайт.',
        link: 'https://greet-route.vercel.app/',
        stack: ['Vuw', 'Vite', 'Typescript'],
      },
      {
        img: '/images/sdu.png',
        title: 'Academic Compass',
        description:
          'Дипломдық жұмыс үшін жасалған сайт. Белгілі пәндер бойынша студенттің болашақта алуы мүмкін бағасын талдауға арналған.',
        link: 'https://sdu-analytics.vercel.app/',
        stack: ['Vue', 'Firebase', 'Typescript', 'Vite'],
      },
    ],
  },
  experience: {
    en: [
      {
        title: 'Frontend / Software Developer',
        company: 'Alser.kz',
        description:
          'Developed and optimized the main customer site. Improved performance and initial load time via async data loading. ' +
          'Built a mobile app for sellers, improving efficiency and service quality. ' +
          'Created a push notification service to increase user engagement. ' +
          'Built an admin web app for broker analytics and an emergency order creation tool. ' +
          'Performed cross-browser testing and improved responsiveness.',
        skills: [
          'Vue.js',
          'Nuxt.js',
          'TypeScript',
          'JavaScript (ES6+)',
          'Node.js',
          'NestJS',
          'MongoDB',
          'Ionic',
          'Firebase',
          'HTML5',
          'CSS3 / SCSS',
        ],
      },
      {
        title: 'Middle Software Developer',
        company: 'Kaspi.kz',
        description:
          'Developed and supported a SaaS product for partners. Optimized modules to improve performance and speed up business processes. ' +
          'Refreshed user interfaces with modern design and improved UX. ' +
          'Participated in design system rollout, building and adding new components. ' +
          'Performed code reviews, maintained existing projects, and added tests for critical modules.',
        skills: [
          'Angular',
          'TypeScript',
          'JavaScript',
          'RxJS',
          'REST API',
          'CI/CD',
          'Clean Architecture',
          'Feature-Sliced Design',
          'TDD',
          'Git',
        ],
      },
      {
        title: 'Expert developer',
        company: 'Halyk bank',
        description:
          'Developed websites and client interfaces. Implemented responsive and cross-browser layouts. ' +
          'Collaborated with designers and project managers, integrating interfaces with backend services. ' +
          'Maintained and evolved existing projects.',
        skills: ['Angular', 'Typescript', 'JavaScript', 'Web view'],
      },
    ],
    ru: [
      {
        title: 'Frontend / Software Developer',
        company: 'Alser.kz',
        description:
          'Разработка и оптимизация основного клиентского сайта. Улучшение производительности и первой загрузки за счёт асинхронной подгрузки данных. ' +
          'Разработка мобильного приложения для продавцов, повысившего эффективность работы и качество клиентского сервиса. ' +
          'Создание сервиса push-уведомлений для повышения вовлечённости пользователей. ' +
          'Разработка административного веб-приложения для брокерской аналитики и приложения для аварийного создания заказов при сбоях сервисов. ' +
          'Проведение кроссбраузерного тестирования и улучшение адаптивности.',
        skills: [
          'Vue.js',
          'Nuxt.js',
          'TypeScript',
          'JavaScript (ES6+)',
          'Node.js',
          'NestJS',
          'MongoDB',
          'Ionic',
          'Firebase',
          'HTML5',
          'CSS3 / SCSS',
        ],
      },
      {
        title: 'Middle Software Developer',
        company: 'Kaspi.kz',
        description:
          'Разработка и поддержка SaaS-продукта для партнёров. Оптимизация модулей для повышения производительности и ускорения бизнес-процессов менеджеров. ' +
          'Обновление пользовательских интерфейсов с внедрением современного дизайна и улучшенного UX. ' +
          'Участие во внедрении дизайн-системы, разработка и добавление новых компонентов. ' +
          'Проведение код-ревью, сопровождение текущих проектов и покрытие ключевых модулей тестами.',
        skills: [
          'Angular',
          'TypeScript',
          'JavaScript',
          'RxJS',
          'REST API',
          'CI/CD',
          'Clean Architecture',
          'Feature-Sliced Design',
          'TDD',
          'Git',
        ],
      },
      {
        title: 'Expert developer',
        company: 'Halyk bank',
        description:
          'Разработка веб-сайтов и клиентских интерфейсов. Реализация адаптивной и кроссбраузерной вёрстки. ' +
          'Работа с дизайнерами и проект-менеджерами, интеграция интерфейсов с backend-сервисами. ' +
          'Поддержка и развитие существующих проектов.',
        skills: ['Angular', 'Typescript', 'JavaScript', 'Web view'],
      },
    ],
    kz: [
      {
        title: 'Frontend / Software Developer',
        company: 'Alser.kz',
        description:
          'Негізгі клиенттік сайтты әзірлеу және оңтайландыру. Асинхронды дерек жүктеу арқылы өнімділік пен алғашқы жүктеуді жақсарту. ' +
          'Сатушыларға арналған мобильді қосымша жасап, тиімділік пен сервис сапасын арттыру. ' +
          'Қолданушы белсенділігін арттыру үшін push-хабарлама қызметін құру. ' +
          'Брокерлік аналитикаға арналған әкімшілік веб-қосымша және сервистер істен шыққанда тапсырыс жасау қосымшасын әзірлеу. ' +
          'Кроссбраузерлік тестілеу жүргізу және бейімделуді жақсарту.',
        skills: [
          'Vue.js',
          'Nuxt.js',
          'TypeScript',
          'JavaScript (ES6+)',
          'Node.js',
          'NestJS',
          'MongoDB',
          'Ionic',
          'Firebase',
          'HTML5',
          'CSS3 / SCSS',
        ],
      },
      {
        title: 'Middle Software Developer',
        company: 'Kaspi.kz',
        description:
          'Серіктестерге арналған SaaS өнімін әзірлеу және қолдау. Модульдерді оңтайландыру арқылы өнімділікті арттырып, бизнес үдерістерін жеделдету. ' +
          'Қазіргі дизайнмен интерфейстерді жаңарту және UX-ті жақсарту. ' +
          'Дизайн жүйесін енгізуге қатысып, жаңа компоненттерді әзірлеу. ' +
          'Код-ревью жүргізу, жобаларды қолдау және маңызды модульдерді тестпен қамту.',
        skills: [
          'Angular',
          'TypeScript',
          'JavaScript',
          'RxJS',
          'REST API',
          'CI/CD',
          'Clean Architecture',
          'Feature-Sliced Design',
          'TDD',
          'Git',
        ],
      },
      {
        title: 'Expert developer',
        company: 'Halyk bank',
        description:
          'Веб-сайттар мен клиенттік интерфейстерді әзірлеу. Бейімделгіш және кроссбраузерлік верстканы іске асыру. ' +
          'Дизайнерлер және жоба менеджерлерімен бірге жұмыс істеу, интерфейстерді backend сервистерімен интеграциялау. ' +
          'Бар жобаларды қолдау және дамыту.',
        skills: ['Angular', 'Typescript', 'JavaScript', 'Web view'],
      },
    ],
  },
  reviews: {
    en: [
      {
        name: 'Иван Петров',
        position: 'CEO, Tech Company',
        rating: 5,
        text: 'Great specialist! The project was delivered on time and with high quality. Highly recommended for any task.',
      },
      {
        name: 'Мария Сидорова',
        position: 'Product Manager, StartupXYZ',
        rating: 5,
        text: 'Professional approach and excellent communication skills. It was a pleasure to work together!',
      },
      {
        name: 'Алексей Николаев',
        position: 'CTO, Digital Agency',
        rating: 5,
        text: 'Quickly understood the project and proposed effective solutions. Clean, well-documented code.',
      },
    ],
    ru: [
      {
        name: 'Иван Петров',
        position: 'CEO, Tech Company',
        rating: 5,
        text: 'Отличный специалист! Проект был выполнен в срок и с высоким качеством. Рекомендую для любых задач.',
      },
      {
        name: 'Мария Сидорова',
        position: 'Product Manager, StartupXYZ',
        rating: 5,
        text: 'Профессиональный подход к работе, отличные коммуникационные навыки. Было приятно работать вместе!',
      },
      {
        name: 'Алексей Николаев',
        position: 'CTO, Digital Agency',
        rating: 5,
        text: 'Быстро разобрался в проекте и предложил эффективные решения. Код чистый и хорошо документированный.',
      },
    ],
    kz: [
      {
        name: 'Иван Петров',
        position: 'CEO, Tech Company',
        rating: 5,
        text: 'Өте мықты маман! Жоба уақытында және жоғары сапамен орындалды. Кез келген тапсырмаға ұсынамын.',
      },
      {
        name: 'Мария Сидорова',
        position: 'Product Manager, StartupXYZ',
        rating: 5,
        text: 'Кәсіби көзқарас және тамаша коммуникация. Бірге жұмыс істеу өте жағымды болды!',
      },
      {
        name: 'Алексей Николаев',
        position: 'CTO, Digital Agency',
        rating: 5,
        text: 'Жобаны тез түсініп, тиімді шешімдер ұсынды. Код таза әрі жақсы құжатталған.',
      },
    ],
  },
  contactInfo: {
    en: {
      location: 'Kazakhstan, Almaty',
    },
    ru: {
      location: 'Казахстан, Алматы',
    },
    kz: {
      location: 'Қазақстан, Алматы',
    },
  },
} as const
