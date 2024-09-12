import type { SizeLimitConfig } from 'size-limit'

module.exports = [
  {
    path: "./dist/Icon/@(OnedariFill|Peta).mjs",
    limit: "2 kB",
    gzip: true
  }
] satisfies SizeLimitConfig
