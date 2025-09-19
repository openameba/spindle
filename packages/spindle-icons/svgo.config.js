module.exports = {
  plugins: [
    {
      name: 'preset-default',
      // v4で removeViewBox と removeTitle がデフォルト無効になったため上書きしない
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
  ],
};
