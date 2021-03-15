// eslint-disable-next-line @typescript-eslint/no-var-requires
const { extendDefaultPlugins } = require('svgo');

module.exports = {
  plugins: extendDefaultPlugins([
    {
      name: 'removeViewBox',
      active: false,
    },
    {
      name: 'removeAttrs',
      params: {
        attrs: 'fill',
      },
    },
    {
      name: 'addAttributesToSVGElement',
      params: {
        attributes: [
          {
            fill: 'currentColor',
          },
        ],
      },
    },
  ]),
};
