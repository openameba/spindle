import type { LinkFollowType } from '../Pagination';

type Payload = {
  linkFollowType: LinkFollowType;
  pageNumber: number;
};

export function getLinkRelAttribute({ linkFollowType, pageNumber }: Payload) {
  switch (linkFollowType) {
    case 'all':
      return undefined;
    case 'none':
      return 'nofollow';
    case 'firstPage':
      return pageNumber === 1 ? undefined : 'nofollow';
  }
}
