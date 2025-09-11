import { startServer } from './server.js';

// 直接実行された場合のみサーバーを起動
if (require.main === module) {
  startServer().catch((error) => {
    console.error('Fatal error in startServer():', error);
    process.exit(1);
  });
}
