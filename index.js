const postcss = require('postcss');

module.exports = postcss.plugin('mobile-first', function (options) {
  return function (css) {
    // Create an array to hold the desktop-first selectors
    const desktopFirstSelectors = [];

    // Loop through each rule and declaration in the CSS
    css.walkRules(function (rule) {
      let ruleHasMobileQuery = false;

      // Check if the rule is inside a mobile-first media query
      if (rule.parent.params && rule.parent.params.startsWith('(max-width:')) {
        ruleHasMobileQuery = true;

        // Move the rule outside the media query
        css.prepend(rule.clone({ media: '' }));
        rule.remove();
      }

      if (!ruleHasMobileQuery) {
        if (rule.selector.trim() !== '') {
          // Add the selector to the desktop-first selectors array
          desktopFirstSelectors.push(rule);
        }
        rule.remove();
      }
    });

    // Wrap the desktop-first selectors in a media query
    if (desktopFirstSelectors.length > 0) {
      const desktopFirstMedia = postcss.atRule({
        name: 'media',
        params: `(min-width: ${options.desktopWidth}px)`
      });
      desktopFirstSelectors.forEach(function (rule) {
        rule.walkDecls(function (decl) {
          desktopFirstMedia.append(postcss.rule({
            selector: rule.selector,
            nodes: [ decl.clone() ]
          }));
        });
      });
      css.append(desktopFirstMedia);
    }

    // Delete empty max-width media query
    css.walkAtRules('media', function (atRule) {
      if (atRule.params && atRule.params.startsWith('(max-width:')) {
        if (atRule.nodes && atRule.nodes.length === 0) {
          atRule.remove();
        }
      }
    });

    return css;
  };
});
