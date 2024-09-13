const bundlewatchConfig = {
  files: [
    {
      path: './dist/**/*.mjs',
      maxSize: '1.5 kB',
      compression: 'gzip',
    },
  ],
};

module.exports = bundlewatchConfig;
