const { exporter } = require('./lib/output-styles-as-style-dictionary');

module.exports = {
    commands: [
        ['styles', {
            fileId: process.env.FIGMA_COLOR_PRIMITIVE_FILE_ID,
            outputters: [
                exporter({
                    output: './tokens/color',
                    replacer: result => JSON.stringify({ Color: result }, null, 2),
                    fileName: 'primitive.json'
                })
            ]
        }]
    ]
}
