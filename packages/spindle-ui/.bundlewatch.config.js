const bundlewatchConfig = {
  files: [
    {
      path: './dist/Icon/@(OnedariFill|Peta).mjs',
      maxSize: '2 kB',
      compression: 'gzip',
    },
    {
      path: './dist/Icon/!(index|OnedariFill|Peta).mjs',
      maxSize: '1.1 kB',
      compression: 'gzip',
    },
    {
      path: './dist/!(Icon|Toast|DropdownMenu|Pagination|Modal|SnackBar|StackNotificationManager|SegmentedControl)/*.mjs',
      maxSize: '1.1 kB',
      compression: 'gzip',
    },
    {
      path: './dist/Modal/*.mjs',
      maxSize: '1.5 kB',
      compression: 'gzip',
    },
    {
      path: './dist/SnackBar/*.mjs',
      maxSize: '1.5 kB',
      compression: 'gzip',
    },
    {
      path: './dist/Toast/*.mjs',
      maxSize: '1.0 kB',
      compression: 'gzip',
    },
    {
      path: './dist/DropdownMenu/*.mjs',
      maxSize: '1.5 kB',
      compression: 'gzip',
    },
    {
      path: './dist/Pagination/*.mjs',
      maxSize: '1.5 kB',
      compression: 'gzip',
    },
    {
      path: './dist/StackNotificationManager/*.mjs',
      maxSize: '2.8 kB',
      compression: 'gzip',
    },
    {
      path: './dist/SegmentedControl/*.mjs',
      maxSize: '1.3 kB',
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
      maxSize: '2.8 kB',
      compression: 'gzip',
    },
  ],
};

module.exports = bundlewatchConfig;
