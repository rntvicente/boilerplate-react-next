module.exports = function (plop) {
  plop.setGenerator('componets', {
    description: 'application componets logic',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'componets name please'
    }],
    actions: [{
      type: 'add',
      path: '../src/components/{{pascalCase name}}/index.jsx',
      templateFile: 'templates/index.jsx.hbs'
    }, {
      type: 'add',
      path: '../src/components/{{pascalCase name}}/stories.jsx',
      templateFile: 'templates/stories.jsx.hbs'
    }, {
      type: 'add',
      path: '../src/components/{{pascalCase name}}/style.js',
      templateFile: 'templates/style.js.hbs'
    }, {
      type: 'add',
      path: '../src/components/{{pascalCase name}}/test.jsx',
      templateFile: 'templates/test.jsx.hbs'
    }]
  });
};
