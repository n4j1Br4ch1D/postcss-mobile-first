# :calling: postcss-mobile-first

- :date:**01-03-2023** :pushpin:**Version 1.0.0 Initial**
- :computer:<a href="https://github.com/n4j1Br4ch1D" target="_blank" title="NajibRachid: Agile full-stack developer">NajibRachid</a> :purple_circle:<a href="https://anmoonweb.com/?ref=postcss-mobile-first" target="_blank" title="ANMOON: Right talents at the right place ">ANMOON</a> :office: <a href="https://x-hub.io/?ref=anmoon-postcss-mobile-first" target="_blank" title="XHUB: For Developers By Developers">XHUB</a>

This PostCSS plugin converts your desktop-first CSS code to mobile-first CSS code.

This plugin helps you automatically converting your old css desktop first code into modern mobile-first code. 
This Plugin can save time and effort. 

**keywords:** _CSS mobile first, PostCSS, CSS mobile 1st, PostCSS plugin, production CSS files, CSS mobile first, Code customization, CSS customization, CSS desktop first, make css fast, Mobile-first approach, Media queries, Responsive web design, css breakpoints, Desktop-first approach,Responsive design, Mobile-first development, CSS optimization, Code formatting, CSS preprocessing, Build tools._

**Check Also:** <a href="https://github.com/n4j1Br4ch1D/postcss-obfuscator" target="_blank" title="postcss-obfuscator: HTML/CSS Obfuscation Compiling">PostCSS-Obfuscator</a> | <a href="https://github.com/n4j1Br4ch1D/postcss-prepend" target="_blank" title="postcss-prepend:prepends a comment to the top of your CSS files">PostCSS-prepend</a>

---

## Motivation
A mobile-first approach is important in web development because it prioritizes the needs of mobile users, who now make up a significant percentage of internet traffic. By designing for mobile first, you can ensure that your website is optimized for smaller screens and slower network connections. Here are some reasons why a mobile-first approach is important:

 - Mobile usage is increasing: According to Statista, in 2021, mobile devices accounted for 54.8% of global website traffic. This means that more than half of all website visitors are accessing the internet from mobile devices. By designing for mobile first, you can ensure that your website provides a good experience for the majority of your users.
 - Smaller screen sizes: Mobile devices typically have smaller screens than desktop computers, so it's important to design for those smaller screens to ensure that your website is usable and easy to navigate. By designing for mobile first, you can ensure that your website works well on smaller screens and then scale up to larger screens as needed.
 - Slower network connections: Mobile devices are often used on the go and may have slower network connections than desktop computers. By designing for mobile first, you can optimize your website for faster loading times and ensure that it doesn't require too much data to load.
 -  SEO benefits: Google's mobile-first indexing means that the mobile version of your website is used for ranking and indexing purposes. By designing for mobile first, you can ensure that your website is optimized for SEO and that it ranks well in mobile search results.

In summary, designing for mobile first is important because it ensures that your website is optimized for the majority of your users, provides a good user experience on smaller screens, loads quickly on slower network connections, and is optimized for SEO.

## Criterias
Changes that need to be made to convert desktop-first CSS code to mobile-first:

1. Reverse media queries to target smaller screens first
2. Adjust styles outside of media queries to be written for smallest screen size first
3. Adjust nested styles inside media queries to be written for smaller screen sizes first
4. Adjust typography to be designed for smaller screens first and scaled up for larger screens## Installation

```sh
# npm
npm install postcss-mobile-first --save-dev
```

```sh
# yarn
yarn add postcss-mobile-first --dev
```

## Usage

To use the plugin, first import it into your PostCSS configuration file:

```js
//postcss.config.js
const mobileFirst = require("postcss-mobile-first");

module.exports = {
  plugins: [
    // Add any other plugins you need here
    mobileFirst({ /* options */}),
  ],
};
```

## Examples

Let specify the desktopWidth attribute.

```js
mobileFirst({ desktopWidth: 600 }),
```

After running it , this code will turn into the one below it
```css
/* desktop first */
.blue {
  background: indigo;
}
.red {
  background: peru;
}

@media (max-width: 600px) {
  .blue {
    background: blue;
  }
  .red {
    background: red;
  }
}
```

```css
/* mobile first */
.blue {
  background: blue;
}
.red {
  background: red;
}
@media (min-width: 600px) {
  .blue {
    background: indigo;
  }
  .red {
    background: peru;
  }
}

```
## npm scripts example

```json
    "postcss": "postcss src/**/*.css  --dir build",
    "postcss:watch": "postcss src/**/*.css --dir build --watch"
```

## Releases

```txt
 - Initial Version 1.0.0 : 01/03/2023
    - Project Setup.
    - Theory & prove of concept.
  - [Agenda] Initial Version 1.x.x : xx/xx/2023
    - ...
```

## Contributing

Contributions are welcome! If you find a bug or have a feature request, please open an issue on the GitHub repository.

Tests included:

```sh
   npm test
```

### License

This project is licensed under the MIT License. See the LICENSE file for more information.
