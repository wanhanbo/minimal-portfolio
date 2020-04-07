const personalDetails = {
    name: 'Rahul Jain',
    bio: 'I design & develop',
    skills: ['websites', 'web apps', 'ui/ux', 'animations'],
    // Cover Image resolution should be 
    coverImage: 'linkedin-logo.png'
};
const social = {
    linkedin: {
        link: 'https://www.linkedin.com/in/rahuldkjain/'
    },
    quora: {
        link: 'https://www.quora.com/profile/Rahul-Jain-1489'
    },
    github: {
        link: 'https://github.com/rahuldkjain'
    },
    instagram: {
        link: 'https://instagram.com/rahul_dk_jain'
    },
    facebook: {
        link: 'https://www.facebook.com/rahuljain997'
    }
};
const work = {
    internship: [
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
        },
        // {
        //     thumb: '',
        //     title: '',
        //     company: '',
        //     location: '',
        //     about: '',
        //     outcome: [],
        //     source: ''
        // }
    ],
    projects: [
        {
            thumb: 'ApnaAnaaj.png',
            title: 'Apna Anaaj',
            repo: 'rahuldkjain/Crop_Prediction',
            about: 'Crop Price prediction app based on rainfall, MSP datasets',
            outcome: ['ML', 'Python', 'Javascript'],
            forkCount: '3',
            starCount: '5',
            language: 'Python',
            source: 'https://github.com/rahuldkjain/Crop_Prediction'
        },
        {
            thumb: 'JaanoIndia.png',
            title: 'Jaano India Chatbot',
            repo: 'rahuldkjain/jaano-india-chatbot',
            about: 'AI enabled chatbot for huge Indian Statistical data',
            outcome: ['NLP', 'Python'],
            forkCount: '1',
            starCount: '0',
            language: 'Javascript',
            source: 'https://github.com/jainsomya972/jaano-india-chatbot'
        },
        {
            thumb: 'scienceAnimation.png',
            title: 'Science Animations',
            repo: 'rahuldkjain/Three.js-Animations',
            about: 'User interacting animations of physics experiments to understand the depth of physics',
            outcome: ['JavaScript', 'Three.js'],
            forkCount: '1',
            starCount: '1',
            language: 'Threejs',
            source: 'https://github.com/rahuldkjain/Three.js-Animations'
        },
        {
            thumb: '',
            title: 'Hobo',
            repo: 'rahuldkjain/Hobo',
            about: 'e-Commerce platform for clothing, sports and electronics',
            outcome: ['JavaScript', 'Three.js'],
            forkCount: '4',
            starCount: '1',
            language: 'Vue',
            source: 'https://github.com/rahuldkjain/Hobo'
        }
        // {
        //     thumb: '',
        //     title: '',
        //     about: '',
        //     outcome: [],
        //     source: ''
        // },
    ],
    misc_projects: [
        {
            thumb: 'genieAid.png',
            title: 'Genie Aid',
            about: 'Wireframe & UI Design freelance project for a LA based client',
            outcome: ['Adobe Xd'],
            source: ''
        },
        {
            thumb: 'alarm.png',
            title: 'Alarm Short Film',
            about: 'Short film based on an engineering student common situation',
            outcome: ['Adobe Premiere Pro', 'After Effects'],
            source: 'https://www.youtube.com/watch?v=9O3tj0kcKY0'
        },
        {
            thumb: '',
            title: '',
            about: '',
            outcome: [],
            source: ''
        }
    ]
};
const achievements = [
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
        event: 'IBM AI/ML Hackathon',
        org: 'Abhikalpan 2018, IIITDM Jabalpur',
        certificate: 'ibm-hack-2019.png'
    },
    {
        rank: '1st',
        event: 'Short Filmmaking Competition',
        org: 'Abhikalpan 2018, IIITDM Jabalpur',
        certificate: 'short-film-making.png'
    },
    {
        rank: '1st',
        event: 'District Merit',
        org: 'CBSE Examinations, 2015',
        certificate: ''
    },
    {
        rank: '2nd',
        event: 'District Merit',
        org: 'RBSE Examinations, 2013',
        certificate: ''
    }
];

const favourites = {
    movies: [
        {
            name: 'The Terminal',
            thumb: 'theTerminal.png'
        },
        {
            name: 'Parasite',
            thumb: 'parasite.png'
        },
        {
            name: 'Zindagi Na Milegi Dobara',
            thumb: 'znmd.png'
        },
        {
            name: 'Yes Man',
            thumb: 'yesMan.png'
        },
        {
            name: 'Lucy',
            thumb: 'lucy.png'
        },
        {
            name: 'Chhichhore',
            thumb: 'chhichhore.png'
        },
        {
            name: 'Forrest Gump',
            thumb: 'forrestGump.png'
        },
        {
            name: 'Dil Chahta Hai',
            thumb: 'dilChahtaHai.png'
        },
        {
            name: 'Wedding Crashers',
            thumb: 'weddingCrashers.png'
        },
        {
            name: 'PK',
            thumb: 'pk.png'
        }
    ],
    best4Movies: [
        {
            name: 'The Terminal',
            thumb: 'theTerminalSmall.png'
        },
        {
            name: 'Forrest Gump',
            thumb: 'forrestGumpSmall.png'
        },
        {
            name: 'Parasite',
            thumb: 'parasiteSmall.png'
        },
        {
            name: 'Zindagi Na Milegi Dobara',
            thumb: 'znmdSmall.png'
        },
    ],
    best4Tv: [
        {
            name: 'Money Heist',
            thumb: 'moneyHeistSmall.png'
        },
        {
            name: 'Friends',
            thumb: 'friendsSmall.png'
        },
        {
            name: 'Silicon Valley',
            thumb: 'siliconValleySmall.png'
        },
        {
            name: 'TVF Pitchers',
            thumb: 'pitchersSmall.png'
        },
    ],
    best4Books: [
        {
            name: 'Shoe Dog: Phil Knight',
            thumb: 'shoeDogSmall.png'
        },
        {
            name: 'Crushing It: Gary Vaynerchuk',
            thumb: 'crushingItSmall.png'
        },
        {
            name: 'Rich Dad Poor Dad: Robert Kiyosaki',
            thumb: 'richDadPoorDadSmall.png'
        },
        {
            name: 'One Day In December',
            thumb: 'oneDayInDecemberSmall.png'
        }
    ],
    tv: [
        {
            name: '13 Reasons Why',
            thumb: '13reasons.png'
        },
        {
            name: 'The Big Bang Theory',
            thumb: 'bbt.png'
        },
        {
            name: 'TVF Cubicles',
            thumb: 'cubicles.png'
        },
        {
            name: 'Flames',
            thumb: 'flames.png'
        },
        {
            name: 'Friends',
            thumb: 'friends.png'
        },
        {
            name: "I'm Mature",
            thumb: 'immature.png'
        },
        {
            name: 'Kota Factory',
            thumb: 'kotaFactory.png'
        },
        {
            name: 'Money Heist',
            thumb: 'moneyHeist.png'
        },
        {
            name: 'Operation MBBS',
            thumb: 'opMBBS.png'
        },
        {
            name: 'TVF Pitchers',
            thumb: 'pitchers.png'
        },
        {
            name: 'Silicon Valley',
            thumb: 'silicon.png'
        },
        {
            name: 'TVF Tripling',
            thumb: 'tripling.png'
        }
    ],
    books: [
        {
            name: 'Shoe Dog: Phil Knight',
            thumb: 'shoeDog.png'
        },
        {
            name: 'Crushing It: Gary Vaynerchuk',
            thumb: 'crushingIt.png'
        },
        {
            name: 'Think & Grow Rich: Napoleon Hill',
            thumb: 'thinkAndGrowRich.png'
        },
        {
            name: 'Rich Dad Poor Dad: Robert Kiyosaki',
            thumb: 'richDadPoorDad.png'
        },
        {
            name: 'One Day In December',
            thumb: 'oneDayInDecember.png'
        }
    ]
};

export { work, favourites, achievements, social };