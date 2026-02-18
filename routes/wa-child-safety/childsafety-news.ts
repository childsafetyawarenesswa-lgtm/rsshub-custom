import { Route } from '@/types';

export const route: Route = {
  path: '/wa-child-safety/childsafety-news',
  name: 'ChildSafety.gov.au - News (POC)',
  example: '/wa-child-safety/childsafety-news',
  maintainers: ['scott'],
  handler: async (ctx) => {
    ctx.state.data = {
      title: 'POC feed - ChildSafety news',
      link: 'https://www.childsafety.gov.au/news',
      item: [
        {
          title: 'Test item',
          link: 'https://www.childsafety.gov.au/news',
          description: 'If you can see this, your custom route is wired correctly.',
        },
      ],
    };
  },
};

