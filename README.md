# :muscle: Awesome Portfolio Template :sparkles:
![](https://img.shields.io/github/license/rahuldkjain/minimal-portfolio?color=8e5dee&style=plastic) ![](https://img.shields.io/github/labels/rahuldkjain/minimal-portfolio/help wanted?color=%238e5dee&style=plastic) ![](https://img.shields.io/github/issues/rahuldkjain/minimal-portfolio?color=%238e5dee&style=plastic)   ![](https://img.shields.io/github/last-commit/rahuldkjain/minimal-portfolio?color=%238e5dee&style=plastic)  ![](https://img.shields.io/github/languages/code-size/rahuldkjain/minimal-portfolio?color=%238e5dee&style=plastic)

#### A clean, minimal and responsive portfolio template for All!

Just change `src/portfolio.js` to get your personal portfolio . Feel free to use it as-is or customize it as much as you want.

**Note**: *please read all the comments in `src/portfolio.js` carefully for hassle free customisation.*

But if you want to **contribute** and make this much better for other developer have a look at [Issues](https://github.com/rahuldkjain/minimal-portfolio/issues).

If you created something awesome and want to contribute then feel free to open Please don't hesitate to open an [pull request](https://github.com/rahuldkjain/minimal-portfolio/pulls).

## Sections 

:dart: **Home** (Introduction, Skills, Contact me)


:dart: **Work** (Internships, Projects, Miscellaneous Projects)


:dart:  **Achievements And Certifications**
  

:dart: **Favourites** (Movies, TV/ Web Shows, Books)



## Getting Started 🚀

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

You'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer.

```
node@v10.16.0 or higher
npm@6.9.0 or higher
git@2.17.1 or higher
```

## How To Use 🔧

From your command line, clone and run minimal-portfolio:

```bash
# Clone this repository
$ git clone https://github.com/rahuldkjain/minimal-portfolio.git

# Go into the repository
$ cd minimal-portfolio

# Install dependencies
$ npm install

#Run 
$ npm run dev

```

## Change and customize every section according to your need.

### To Change website content go to `/src/portfolio.js` & modify it as per your need.


```javascript
/* Change this file to get your Personal Porfolio */


const home = { .... }

const work = { .... }

const awards = { .... } 

const favourites = { .... }

const social = {

/*Social Profile links*/

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

const header = {
/*Navbar Titles*/
    logoText: 'Rahul',
    work: 'Work',
    awards: 'Awards',
    favourites: 'Favourites'
};

```

## Technologies used 🛠️

- [Vuejs](https://vuejs.org/)
- [SCSS](https://sass-lang.com/documentation/syntax) 
- [vue-fontawesome](https://github.com/FortAwesome/vue-fontawesome) 
- [epic-spinners](https://github.com/epicmaxco/epic-spinners)


## Deployment 📦 
Once you have done with your setup. You need to put your website online!
I highly recommend to use [Github Pages](https://cli.vuejs.org/guide/deployment.html#github-pages) to achieve this on the EASIEST WAY. 

You could also deploy it directly with Netlify by linking your own repo.

[![Deploy To Netlify](https://www.netlify.com/img/deploy/button.svg)](https://cli.vuejs.org/guide/deployment.html#netlify)

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://cli.vuejs.org/guide/deployment.html#heroku)



## License 📄

This project is licensed under the MIT License - see the [LICENSE.md](./LICENSE) file for details




## For the Future 
If you can help us with these. Please don't hesitate to open a [pull request](https://github.com/rahuldkjain/minimal-portfolio/pulls).

- Customisable Color Scheme feature
- Add More Sections

Designed & Developed with :hearts: by [Rahul Jain](https://github.com/rahuldkjain "Rahul Jain")
