![](./src/assets/generatify-github-banner.png)

<h2 align="center"> Generatify - Strong and Secure Passwords Generator for Online Accounts</h2>

<br/>

**Generatify** is an open source [Angular 14](https://angular.io/) SPA (_Single Page Application_) written in [Typescript](https://www.typescriptlang.org/) and built with [TailwindCSS](https://tailwindcss.com/).

The **main purpose** of the application is to **generate strong and secure passwords** by randomly combining letters, numbers and characters.

In this way, the application **prevents patterns** that can make the password an easy target **for brute force attacks**.

<br/>

## Getting Started

You can visit a LIVE Demo here: [Generatify LIVE Website]()

### Run Generatify locally

If you prefer to run this application locally you must first make sure you have the [latest LTS version of nodejs](https://nodejs.org/en/) installed.

By the time you have already installed a version of nodejs :

1.  Open your IDE
2.  Clone this repository

    ```
      git clone https://github.com/rafitajaen/generatify.git
    ```

3.  IMPORTANT: Do no skip this step because npm < v7 don't install peerDependencies by default. [More info](https://stackoverflow.com/questions/66239691/what-does-npm-install-legacy-peer-deps-do-exactly-when-is-it-recommended-wh).

    ```
      npm install --legacy-peer-deps
    ```

4.  Build and serve your application. Run the following command on your console:
    ```
      ng serve
    ```
5.  Open your browser [http://localhost:4200]()

<br/>

## Documentation

### Architecture

The source code follows a feature-driven structure proposed by Shijin Nath to make medium-sized applications easily scalable and maintainable. You can read more about his vision [here](https://medium.com/@shijin_nath/angular-right-file-structure-and-best-practices-that-help-to-scale-2020-52ce8d967df5).

```bash
src
├───app
│   ├───core
│   │   ├───components
│   │   │   ├───footer
│   │   │   └───navbar
│   │   ├───models
│   │   └───services
│   ├───features
│   │   ├───generator
│   │   │   └───components
│   │   │       ├───password-input
│   │   │       ├───password-strength
│   │   │       └───strength-score-badge
│   │   ├───hero
│   │   │   └───components
│   │   └───illustration
│   │       └───components
│   │           ├───larry-good
│   │           ├───larry-secure
│   │           ├───larry-strong
│   │           ├───larry-vulnerable
│   │           └───larry-weak
│   └───shared
│       └───components
│           ├───logo-icon
│           └───logo-text
├───assets
└───environments
```

### Password Service

This is the main service of the application. It depends on two npm packages:

- `generate-password-ts`: This library was forked from the original Node.js version [generate-password](https://github.com/brendanashworth/generate-password). This forked version was totally re-written in TypeScript from the original JS version and supports not only Node.js but also browsers without need of crypto-browserify. It generates random and unique passwords.

- `@zxcvbn-ts`: It is a password strength estimator inspired by password crackers. It recognizes and analyzes over 40 thousand common passwords using pattern matching and conservative estimation and filters out common first names, last names, popular words from Wikipedia and common words in many cultures, and recognizes common patterns like dates, repetitions (e.g. 'aaa'), sequences (e.g. 'abcd'), keyboard smashes (e.g. 'qwertyuiop'), and l33t speak.

The password service encapsulates in a single object all the necessary information obtained from the packages mentioned above:

```ts
interface Password {
  value: string;
  crackTime: string;
  score: number;
}
```

This service is also responsible of the state management and is consumed by the components through an observable.

<br/>

## 🚨 Forking this Repo (please read!)

Many people have contacted me asking me if they can use this code for their own website, and the answer to that question is usually yes, with attribution.

I value keeping this site open source, but as you all know, plagiarism is bad. I spent a non-trivial amount of effort building and designing this app for my portfolio, and I am proud of it!

All I ask of you is to not claim this effort as your own.

### TL;DR

Yes, you can fork this repository. Please give me proper credit by linking back to my [github account](https://github.com/rafitajaen). Thanks!

<br/>

## Screenshots

<div align="center">

![generatify-screenshot](./src/assets/generatify-screenshot.gif)

</div>

<br/>

## Credits and Resources Links

[Angular File Structure and Best Practices](https://medium.com/@shijin_nath/angular-right-file-structure-and-best-practices-that-help-to-scale-2020-52ce8d967df5) by Shijin Nath

[Larry Character Illustrations](https://drawkit.com/product/larry-character-illustrations).

[Google Font to SVG](https://danmarshall.github.io/google-font-to-svg-path/)

<br/>

<h2 align="center">
🧐 Let's Get in Touch!
</h2>

<p align="center"> 
I look forward to gaining new knowledge, sharing my experiences, collaborating and creating amazing products to make the world a better place!
</p>

<div align="center">

[![Linkedin Badge](https://img.shields.io/badge/-rafitajaen-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/rafitajaen/)](https://www.linkedin.com/in/rafitajaen/)

</div>

<p align="center"> 
🧠🏭🤝🌍
</p>
