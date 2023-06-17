import { destroyCookie } from 'nookies';

type DestroyAllCookies = {
  ctx?: undefined;
};

export const destroyAllCookies = ({ ctx = undefined }: DestroyAllCookies) => {
  destroyCookie(ctx, 'adminAnalytics.token', {
    path: '/',
  });
};