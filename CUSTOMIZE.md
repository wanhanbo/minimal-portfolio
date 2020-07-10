## :technologist: Customisation Steps

> I personally suggest you to keep this repository private as it
> contains usage of few secret keys such as Github Personal Access Token. So don't push the secret keys publically to any of your repository

Change and customize every section according to your need by configuring only one file.

### Step 1 
Open `portfolio.js` in the `src` directory
```bash
$ cd src/
```
*Note: Please don't change any keys of any object to make the configuration simple*

### Step 2
Find `const home` in portfolio.js to configure details of home screen.
*Note: Please don't change any keys of home object*
```javascript
const home = {
	name:  'Rahul Jain',
	
	// Cover Image resolution should be 1000x1500 pixels
	// to be placed in `src/assets/images` folder
	coverImage:  'Rahul.png',
	
	welcomeText:  'Hi, I am ',
	// to animate the name with flicker effect
	neonText: ['r', 'ahul', 'j', 'ain'],
	skillsPrefix:  'I <i>design</i> and develop ',
	skills: ['websites', 'web apps', 'ui/ux', 'animations'],
	bio:  "Apart from being a nerd, I love to enjoy the time by pursuing hobbies as a part time job. You won't regret seeing my part time work by clicking on the Favourites button, here on the top right corner. If you are still here that means you want to see my full time work too. No worries, click on the Work button to check that out too. Oh God! you are still reading. Cool, welcome to nerd's league. Click on Awards button to explore the possibilites of being a nerd.",
	buttons: {
		resume: {
			placeholder:  'Resume',
			link:  'https://github.com/rahuldkjain/minimal-portfolio/raw/master/src/assets/files/ResumeRahulJain.pdf'
		}

	}
}
```

### Step 3
Find `const work` in portfolio.js to configure details of work screen.
*Note: No need to fill the `data` field of projects as it will be dynamically fetched from Github API using graphql.*
```javascript
const work = {
	internships: {
		heading:  'Internships',
		description:  '',
		data: [
			{
			thumb:  'coviam-intern.png',
			title:  'Software Development Internship',
			company:  'Coviam Technologies Pvt Ltd',
			location:  'Bangalore, India',
			about:  'An amazing experience with full of learning and fun with best of the brains of Coviam. Got to work on several projects of different difficulties during training period. Worked with Digital Products team that manages all the digital products of Blibli.com. I can proudly say that my contribution is serving millions of Indonesians customers out there.',
			outcome: ['Git', 'Java', 'Spring Boot', 'Vuejs', 'SCSS', 'SQL', 'MongoDB', 'Redis'],
			source:  'https://www.blibli.com/digital/p/voucher-game'
			},
			{
			thumb:  'ankaha-intern.png',
			title:  'Data Science Internship',
			company:  'Ank Aha Pvt Ltd',
			location:  'New Delhi, India',
			about:  'Won the chance of creating Jaano India Chatbot with Ank Aha by winning the hackathon. It was a roller coaster ride to develop the chatbot with no prior experience in the field of data science. Met few extraordinary people who are very passionate about technology.',
			outcome: ['Git', 'Python', 'PostgreSQL', 'NLP'],
			source:  'www.jaanoindia.com'
			}
		]
	},
	// this section is to showcase github projects
	// Please the data array empty
	projects: {
		heading:  'Open Source Projects',
		description:  '',
		buttons: {
			showMore: {
			placeholder:  'Show More Projects',
			link:  'https://github.com/rahuldkjain'
			}
		},
		data: []
	},
	misc_projects: {
		heading:  'Miscellaneous Projects',
		description:  '',
		data: [
			{
			thumb:  'genieAid.png',
			title:  'Genie Aid',
			about:  'Wireframe & UI Design Freelance project for a LA based client. Designed 10 pages, logo and one intro video',
			outcome: ['Adobe Xd'],
			source:  ''
			},
			{
			thumb:  'alarm.png',
			title:  'Alarm Short Film',
			about:  'The whole film revolves around the relationship between an engineering student with alarm. Watch the film on youtube by clicking the link down below.',
			outcome: ['Adobe Premiere Pro', 'After Effects'],
			source:  'https://www.youtube.com/watch?v=9O3tj0kcKY0'
			}
		]
	}
};
```

### Step 4
Find `const awards` in portfolio.js to configure details of awards screen.
*Note: You can leave the fields empty if not applicable*
```javascript
const awards = [
	{
		rank:  '1st',
		product:  'Jarvis Captionizer',
		productLink:  '',
		event:  'IBM Hackathon',
		org:  'Abhikalpan 2018, IIITDM Jabalpur',
		certificate:  'ibm-hack-2018.png'
	},
	{
		rank:  '2nd',
		product:  'Jaano India Chatbot',
		productLink:  '',
		event:  'Jaano India Hackathon',
		org:  'HackerEarth, Ank Aha, Swaniti Initiative',
		certificate:  'jaano-india-hackathon.png'
	},
	{
		rank:  '3rd',
		product: '',
		productLink: '',
		event:  'IBM AI/ML Hackathon',
		org:  'Abhikalpan 2018, IIITDM Jabalpur',
		certificate:  'ibm-hack-2019.png'
	},
	{
		rank:  '1st',
		product: '',
		productLink: '',
		event:  'Short Filmmaking Competition',
		org:  'Abhikalpan 2018, IIITDM Jabalpur',
		certificate:  'short-film-making.png'
	},
	{
		rank:  '1st',
		product: '',
		productLink: '',
		event:  'District Merit',
		org:  'CBSE Examinations, 2015',
		certificate:  ''
	},
	{
		rank:  '2nd',
		product: '',
		productLink: '',
		event:  'District Merit',
		org:  'RBSE Examinations, 2013',
		certificate:  ''
	}
]
```

### Step 5
The project is using **[TMDB](https://www.themoviedb.org/?language=en-US)(The Movie Database)** API to showcase your favourite movies and tv shows. 

> TMDB is free and amazing. A big thanks to all the contributors and developers of TMDB out there.

Please follow the steps in sequence to configure the favourites screen functionality. I know it will take a number of steps, but believe me you will love it.

 1. Go to [TMDB](https://www.themoviedb.org/?language=en-US) website
 2. Sign Up for developers account
 3. Get the **API key** from the settings [(steps](https://developers.themoviedb.org/3/getting-started/introduction))
 4. Create a new [request token](https://developers.themoviedb.org/3/authentication/create-request-token)
 Please copy & store the token immediately
 5. Get the user to authorize the request token
 6. Create a new [session id](https://developers.themoviedb.org/3/authentication/create-session) with the authorized request token
 Please copy & store the session id immediately, as it will be visible only once. You will need to regenerate the session id again if lost.
 7. Get [account id](https://developers.themoviedb.org/3/account/get-account-details).

So now you will have 4 things
 1. API Key
 2. Request Token
 3. Session Id
 4. Account Id

Convert the 3 keys to base64 by running following command in your browser console and add them to `const TMDB` in `portfolio.js`
*Note: This step is neccessary to overcome the security warning of displaying secret keys publically.*
```bash
> btoa('TMDB Api Key here')
> btoa('TMDB Session Id here')
> btoa('TMDB Account Id here')
```
Please add the output string of each `btoa` command as
```javascript
const TMDB = {
	TMDB_ACCOUNT_ID:  '<btoa account id output>',
	TMDB_API_KEY:  '<btoa api key output>',
	TMDB_SESSION_ID:  '<btoa session id output>'
}
```

### Step 6
Set your social media profiles in `const social`.
```javascript
const  social = {
	linkedin:  'https://www.linkedin.com/in/rahuldkjain/',
	quora:  'https://www.quora.com/profile/Rahul-Jain-1489',
	github:  'https://github.com/rahuldkjain',
	instagram:  'https://instagram.com/rahul_dk_jain',
	facebook:  'https://www.facebook.com/rahuljain997'
};
```

### Step 7
Create the personal access token from github([steps](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)).
Convert the access token to base64 from your browser's console
```bash
> btoa('github access token here')
```
Paste the output string into `const github`
```javascript
const  github = {
	username:  'rahuldkjain',
	auth_token:  'btoa output string here'
}
```
Tada! You are all set.

Now run the application using the command and see the MAGIC!
```bash
$ npm run dev
```


## 📦 Deployment  
Once you have done with your customisation and setup. You need to put your website online!
I highly recommend to use [Github Pages](https://cli.vuejs.org/guide/deployment.html#github-pages) to achieve this on the EASIEST WAY. 

You could also deploy it directly with Netlify or Heroku by linking your own repo.

[![Deploy To Netlify](https://www.netlify.com/img/deploy/button.svg)](https://cli.vuejs.org/guide/deployment.html#netlify)

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://cli.vuejs.org/guide/deployment.html#heroku)