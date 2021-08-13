const { exporter } = require('./lib/output-styles-as-style-dictionary');

module.exports = {
    commands: [
        ['styles', {
            fileId: process.env.FIGMA_COLOR_PRIMITIVE_FILE_ID,
            outputters: [
                exporter({
                    output: './tokens/color',
                    replacer: result => JSON.stringify({ Color: { Primitive: result } }, null, 2),
                    fileName: 'primitive.json'
                })
            ]
        }],
        ['styles', {
          fileId: process.env.FIGMA_COLOR_THEME_DARK_FILE_ID,
          outputters: [
              exporter({
                  output: './tokens/color',
                  replacer: result => JSON.stringify({ Color: { Theme: result } }, null, 2),
                  fileName: 'themedark.json' // TODO: change filename
              })
          ]
      }],
      ['styles', {
        fileId: process.env.FIGMA_DROP_SHADOW_FILE_ID,
        outputters: [
            exporter({
                output: './tokens/shadow',
                replacer: result => JSON.stringify({ Shadow: { ['Drop Shadow']: result } }, null, 2),
                fileName: 'drop-shadow.json'
            })
        ]
    }]
    ]
}
