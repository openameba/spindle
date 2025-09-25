const bundlewatchConfig = {
  files: [
    {
      path: './dist/src/Icon/@(OnedariFill|Peta).mjs',
      maxSize: '2 kB',
      compression: 'gzip',
    },
    {
      path: './dist/src/Icon/!(index|OnedariFill|Peta).mjs',
      maxSize: '1.1 kB',
      compression: 'gzip',
    },
    {
      path: './dist/src/!(Icon|Toast|DropdownMenu|Pagination|Modal|SnackBar|StackNotificationManager|SegmentedControl)/*.mjs',
      maxSize: '1.1 kB',
      compression: 'gzip',
    },
    {
      path: './dist/src/Modal/*.mjs',
      maxSize: '1.5 kB',
      compression: 'gzip',
    },
    {
      path: './dist/src/SnackBar/*.mjs',
      maxSize: '1.6 kB',
      compression: 'gzip',
    },
    {
      path: './dist/src/Toast/*.mjs',
      maxSize: '1.0 kB',
      compression: 'gzip',
    },
    {
      path: './dist/src/DropdownMenu/*.mjs',
      maxSize: '1.6 kB',
      compression: 'gzip',
    },
    {
      path: './dist/src/Pagination/*.mjs',
      maxSize: '1.5 kB',
      compression: 'gzip',
    },
    {
      path: './dist/src/StackNotificationManager/*.mjs',
      maxSize: '2.8 kB',
      compression: 'gzip',
    },
    {
      path: './dist/src/SegmentedControl/*.mjs',
      maxSize: '1.3 kB',
      compression: 'gzip',
    },
    {
      path: './dist/src/InlineNotification/*.mjs',
      maxSize: '1.2 kB',
      compression: 'gzip',
    },
    {
      path: './dist/!(InlineNotification|Modal|SnackBar)/!(index).css',
      maxSize: '1.5 kB',
      compression: 'gzip',
    },
    {
      path: './dist/Modal/!(index).css',
      maxSize: '2.0 kB',
      compression: 'gzip',
    },
    {
      path: './dist/SnackBar/!(index).css',
      maxSize: '2.1 kB',
      compression: 'gzip',
    },
    {
      path: './dist/InlineNotification/!(index).css',
      maxSize: '2.9 kB',
      compression: 'gzip',
    },
  ],
};

module.exports = bundlewatchConfig;
