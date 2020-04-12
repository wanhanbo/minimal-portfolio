const home = {
    name: 'Rahul Jain',
    neonText: ['r', 'ahul', 'j', 'ain'],
    // Cover Image resolution should be 
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
        data: [
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
        ]
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
const favourites = [
    {
        kind: 'Movies',
        id: 'movies',
        heading: 'Favourite movies',
        best: [
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
        list: [
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
        ]
    },
    {
        kind: 'Tvs',
        id: 'tv',
        heading: 'Favourites TV/Web Shows',
        best: [
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
        list: [
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
        ]
    },
    {
        kind: 'Books',
        id: 'books',
        heading: 'Favourites Books',
        best: [
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
        list: [
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
    }
];
const header = {
    logoText: 'Rahul',
    work: 'Work',
    awards: 'Awards',
    favourites: 'Favourites'
};


export { home, work, favourites, awards, social, header };