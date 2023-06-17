/* eslint-disable */

import { parseCookies } from 'nookies';
// import { AuthTokenError } from '../../service/errors/AuthTokenError';
import { destroyAllCookies } from '../destroyAllCookies';

export const withSSRAuthLogged = <P extends { [key: string]: any }>(
  fn: any
) => {
  return async (
    context: any
  ): Promise<any> => {
    const { ['token']: token } = parseCookies(context);

    if (token) {
      return {
        redirect: {
          destination: '/agenda',
          permanent: false,
        },
      };
    }

    try {
      return await fn(context);
    } catch (err) {
      if (err /*instanceof AuthTokenError*/) {
        destroyAllCookies({ ctx: context });

        return {
          redirect: {
            destination: '/login',
            permanent: false,
          },
        };
      }
    }
  };
};