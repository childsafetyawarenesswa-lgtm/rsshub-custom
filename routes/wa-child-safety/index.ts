import type { router } from '@/router';
import { route as childsafetyNews } from './childsafety-news';

export default (router: router) => {
  router.get(childsafetyNews.path, childsafetyNews.handler);
};

