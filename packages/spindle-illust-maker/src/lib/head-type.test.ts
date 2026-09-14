import { describe, expect, it } from 'vitest';
import { getHeadTypeFromPath } from './head-type';

describe('getHeadTypeFromPath', () => {
  it('head パーツのパスからヘッドタイプを取り出す', () => {
    expect(getHeadTypeFromPath('/illust/head/woman/01-green.svg')).toBe(
      'woman',
    );
    expect(getHeadTypeFromPath('/illust/head/old/01-green.svg')).toBe('old');
  });

  it('null や head 以外のパスでは null を返す', () => {
    expect(getHeadTypeFromPath(null)).toBeNull();
    expect(getHeadTypeFromPath('/illust/body/01-green.svg')).toBeNull();
  });

  it('未知のヘッドタイプでは null を返す', () => {
    expect(getHeadTypeFromPath('/illust/head/robot/01.svg')).toBeNull();
  });
});
