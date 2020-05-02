const home = {
    name: 'Rahul Jain',
    neonText: ['r', 'ahul', 'j', 'ain'],
    // Cover Image resolution should be 1000x1500 pixels
    coverImage: 'Rahul.png',
    welcomeText: 'Hi, I am ',
    skillsPrefix: 'I <i>design</i> and develop ',
    skills: ['websites', 'web apps', 'ui/ux', 'animations'],
    bio: "Apart from being a nerd, I love to enjoy the time by pursuing hobbies as a part time job. You won't regret seeing my part time work by clicking on the Favourites button, here on the top right corner. If you are still here that means you want to see my full time work too. No worries, click on the Work button to check that out too. Oh God! you are still reading. Cool, welcome to nerd's league. Click on Awards button to explore the possibilites of being a nerd.",
    buttons: {
        resume: {
            placeholder: 'Resume',
            link: 'https://github.com/rahuldkjain/minimal-portfolio/raw/master/src/assets/files/ResumeRahulJain.pdf'
        }
    }
};
const social = {
    linkedin: 'https://www.linkedin.com/in/rahuldkjain/',
    quora: 'https://www.quora.com/profile/Rahul-Jain-1489',
    github: 'https://github.com/rahuldkjain',
    instagram: 'https://instagram.com/rahul_dk_jain',
    facebook: 'https://www.facebook.com/rahuljain997'
};
const work = {
    internships: {
        heading: 'Internships',
        description: '',
        data: [
            {
                thumb: 'coviam-intern.png',
                title: 'Software Development Internship',
                company: 'Coviam Technologies Pvt Ltd',
                location: 'Bangalore, India',
                about: 'An amazing experience with full of learning and fun with best of the brains of Coviam. Got to work on several projects of different difficulties during training period. Worked with Digital Products team that manages all the digital products of Blibli.com. I can proudly say that my contribution is serving millions of Indonesians customers out there.',
                outcome: ['Git', 'Java', 'Spring Boot', 'Vuejs', 'SCSS', 'SQL', 'MongoDB', 'Redis'],
                source: 'https://www.blibli.com/digital/p/voucher-game'
            },
            {
                thumb: 'ankaha-intern.png',
                title: 'Data Science Internship',
                company: 'Ank Aha Pvt Ltd',
                location: 'New Delhi, India',
                about: 'Won the chance of creating Jaano India Chatbot with Ank Aha by winning the hackathon. It was a roller coaster ride to develop the chatbot with no prior experience in the field of data science. Met few extraordinary people who are very passionate about technology.',
                outcome: ['Git', 'Python', 'PostgreSQL', 'NLP'],
                source: 'www.jaanoindia.com'
            }
        ]
    },
    projects: {
        heading: 'Open Source Projects',
        description: '',
        buttons: {
            showMore: {
                placeholder: 'Show More Projects',
                link: 'https://github.com/rahuldkjain'
            }
        },
        data: []
    },
    misc_projects: {
        heading: 'Miscellaneous Projects',
        description: '',
        data: [
            {
                thumb: 'genieAid.png',
                title: 'Genie Aid',
                about: 'Wireframe & UI Design Freelance project for a LA based client. Designed 10 pages, logo and one intro video',
                outcome: ['Adobe Xd'],
                source: ''
            },
            {
                thumb: 'alarm.png',
                title: 'Alarm Short Film',
                about: 'The whole film revolves around the relationship between an engineering student with alarm. Watch the film on youtube by clicking the link down below.',
                outcome: ['Adobe Premiere Pro', 'After Effects'],
                source: 'https://www.youtube.com/watch?v=9O3tj0kcKY0'
            }
        ]
    }
};
const awards = [
    {
        rank: '1st',
        product: 'Jarvis Captionizer',
        productLink: '',
        event: 'IBM Hackathon',
        org: 'Abhikalpan 2018, IIITDM Jabalpur',
        certificate: 'ibm-hack-2018.png'
    },
    {
        rank: '2nd',
        product: 'Jaano India Chatbot',
        productLink: '',
        event: 'Jaano India Hackathon',
        org: 'HackerEarth, Ank Aha, Swaniti Initiative',
        certificate: 'jaano-india-hackathon.png'
    },
    {
        rank: '3rd',
        product: '',
        productLink: '',
        event: 'IBM AI/ML Hackathon',
        org: 'Abhikalpan 2018, IIITDM Jabalpur',
        certificate: 'ibm-hack-2019.png'
    },
    {
        rank: '1st',
        product: '',
        productLink: '',
        event: 'Short Filmmaking Competition',
        org: 'Abhikalpan 2018, IIITDM Jabalpur',
        certificate: 'short-film-making.png'
    },
    {
        rank: '1st',
        product: '',
        productLink: '',
        event: 'District Merit',
        org: 'CBSE Examinations, 2015',
        certificate: ''
    },
    {
        rank: '2nd',
        product: '',
        productLink: '',
        event: 'District Merit',
        org: 'RBSE Examinations, 2013',
        certificate: ''
    }
];
const favourites = [
    {
        kind: 'Movies',
        id: 'movies',
        heading: 'Favourite movies',
    },
    {
        kind: 'Tvs',
        id: 'tv',
        heading: 'Favourites TV/Web Shows',
    }
];
const header = {
    logoText: 'Rahul',
    work: 'Work',
    awards: 'Awards',
    favourites: 'Favourites'
};

const TMDB = {
  TMDB_ACCOUNT_ID: 'OTI3NzfdfdsddsffAxMw==',
  TMDB_API_KEY: 'I3sdfsdfsdfsdNjRlMGRjYTJiNTM4ZTQzNzBjNDc3Zjc=',
  TMDB_SESSION_ID: 'WZlNGsfdsfsdfNmMDJjNGNiNmQ2N2I5MTFhZGVmZjI5NzQ3OTYzMw=='
}

const genres = {
  '28': 'Action',
  '12': "Adventure",
  '16': "Animation",
  '35': "Comedy",
  '80': "Crime",
  '99': "Documentary",
  '18': "Drama",
  '10751': "Family",
  '14': "Fantasy",
  '36': "History",
  '27': "Horror",
  '10402': "Music",
  '9648': "Mystery",
  '10749': "Romance",
  '878': "Science Fiction",
  '10770': "TV Movie",
  '53': "Thriller",
  '10752': "War",
  '37': "Western"
}

const github = {
    username: 'rahuldkjain',
    auth_token: 'sdfsdfTU1ZDFjNDZlYmQ5MzQ5ODIzMWFjMWI4OGZUYGDjkf'
}

export { home, work, favourites, awards, social, header, TMDB, github };