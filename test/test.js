const postcss = require('postcss');
const mobileFirst = require('../index');

const input = `
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
`;


const output = postcss([ mobileFirst({ desktopWidth: 600 }) ]).process(input).css;

console.log(output);
