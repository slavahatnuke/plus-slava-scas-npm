module.exports = {
    actions: {
        'new': {
            title: 'Generates npm package',
            arguments: ['dir', 'name'],
            batch: [
                '.bin',
                '.src',
                '.test',
                '.gitignore',
                '.index',
                '.package',
                '.readme'
            ]
        },
        '.bin': {
            arguments: ['dir', 'name'],
            input: 'template/bin/plus-slava-scas-npm.js',
            out: '{{{ dir }}}/bin/{{{ name | kebab }}}.js'
        },
        '.src': {
            arguments: ['dir', 'name'],
            input: 'template/src/index.js',
            out: '{{{ dir }}}/src/index.js'
        },
        '.test': {
            arguments: ['dir', 'name'],
            input: 'template/test/test.js',
            out: '{{{ dir }}}/test/test.js'
        },
        '.gitignore': {
            arguments: ['dir', 'name'],
            input: 'template/.gitignore',
            out: '{{{ dir }}}/.gitignore'
        },
        '.index': {
            arguments: ['dir', 'name'],
            input: 'template/index.js',
            out: '{{{ dir }}}/index.js'
        },

        '.package': {
            arguments: ['dir', 'name'],
            input: 'template/package.json',
            out: '{{{ dir }}}/package.json'
        },
        '.readme': {
            arguments: ['dir', 'name'],
            input: 'template/README.md',
            out: '{{{ dir }}}/README.md'
        },





    }
};
