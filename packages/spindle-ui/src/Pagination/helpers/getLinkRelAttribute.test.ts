import { getLinkRelAttribute } from './getLinkRelAttribute';

const NOFOLLOW = 'nofollow';

describe('getLinkRelAttribute', () => {
  it('should return undefined when linkFollowType is all', () => {
    const linkFollowType = 'all';
    const pageNumber = 1;

    const linkRelAttribute = getLinkRelAttribute({
      linkFollowType,
      pageNumber,
    });
    expect(linkRelAttribute).toEqual(undefined);
  });

  it('should return nofollow when linkFollowType is none', () => {
    const linkFollowType = 'none';
    const pageNumber = 1;

    const linkRelAttribute = getLinkRelAttribute({
      linkFollowType,
      pageNumber,
    });
    expect(linkRelAttribute).toEqual(NOFOLLOW);
  });

  it('should return undefined when linkFollowType is firstPage and pageNumber is 1', () => {
    const linkFollowType = 'firstPage';
    const pageNumber = 1;

    const linkRelAttribute = getLinkRelAttribute({
      linkFollowType,
      pageNumber,
    });
    expect(linkRelAttribute).toEqual(undefined);
  });

  it('should return nofollow when linkFollowType is firstPage and pageNumber is not 1', () => {
    const linkFollowType = 'firstPage';
    const pageNumber = 2;

    const linkRelAttribute = getLinkRelAttribute({
      linkFollowType,
      pageNumber,
    });
    expect(linkRelAttribute).toEqual(NOFOLLOW);
  });
});
