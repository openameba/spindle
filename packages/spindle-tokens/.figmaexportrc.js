const { exporter } = require('./lib/output-styles-as-style-dictionary');
const { sortObj } = require('jsonabc');

module.exports = {
    commands: [
      ['styles', {
        fileId: process.env.FIGMA_COLOR_PRIMITIVE_FILE_ID,
          outputters: [
            exporter({
              output: './tokens/color',
                replacer: result => JSON.stringify({ Color: { Primitive: sortObj(result) } }, null, 2),
                  fileName: 'primitive.json'
            })
          ]
        }],
        ['styles', {
          fileId: process.env.FIGMA_COLOR_THEME_FILE_ID,
          outputters: [
            exporter({
              output: './tokens/color',
              replacer: result => JSON.stringify({ Color: { ThemeLight: sortObj(result) } }, null, 2),
              fileName: 'theme-light.json'
            })
          ]
        }],
      ['styles', {
        fileId: process.env.FIGMA_COLOR_THEME_DARK_FILE_ID,
        outputters: [
          exporter({
            output: './tokens/color',
            replacer: result => JSON.stringify({ Color: { ThemeDark: sortObj(result) } }, null, 2),
            fileName: 'theme-dark.json'
          })
        ]
      }],
      ['styles', {
        fileId: process.env.FIGMA_DROP_SHADOW_FILE_ID,
        outputters: [
            exporter({
                output: './tokens/shadow',
                replacer: result => JSON.stringify({ Shadow: { ['Drop Shadow']: sortObj(result) } }, null, 2),
                fileName: 'drop-shadow.json'
            })
        ]
    }]
    ]
}
