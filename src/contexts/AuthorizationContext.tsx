import React from 'react';
import { useEffect } from 'react';
import { readStore } from '../helpers/persistence';
import { ILoggedUser } from '../models/User.Model';
import AuthorizationService from '../services/auth.services'
import { parseCookies, setCookie } from 'nookies';
import { destroyAllCookies } from '../utils/destroyAllCookies';


interface IProps { children: React.ReactNode; }
interface IContextResult {
  user?: ILoggedUser,
  isAuthenticated: () => boolean,
  loading: boolean,
  hasAccess: (rule: string) => boolean,
  login: (username: String, password: String) => Promise<ILoggedUser | undefined>,
  logout: () => void
}

const Context = React.createContext<IContextResult>({
  user: undefined,
  isAuthenticated: () => false,
  loading: false,
  hasAccess: (id: string) => false,
  login: (username: string, password: string) => Promise.resolve(undefined),
  logout: () => console.warn('no provider')
});

const AuthorizationProvider = ({ children }: IProps) => {

  const [user, setUser] = React.useState<ILoggedUser | undefined>(undefined);
  const [loading, setLoading] = React.useState<boolean>(false);

  useEffect(() => {
    // const { 'token': token } = parseCookies();

    if (!user && !loading) {
      readStore('token')
        .then(token => {
          if (token) {
            setLoading(true);
            AuthorizationService.me()
              .then(u => {
                setUser(u);
                setLoading(false)
              }).catch(() => {
                setLoading(false)
              })

            setCookie(undefined, 'token', token, {
              maxAge: 60 * 60 * 24 * 30, // 30 Days
              path: '/',
            });

          }
        })
    }
    // eslint-disable-next-line
  }, []);

  const logout = () => {
    destroyAllCookies({});

    setUser(undefined);
  };

  const login = (username: String, password: String): Promise<ILoggedUser | undefined> => {
    setLoading(true);
    return AuthorizationService
      .login(username, password)
      .then(u => {
        // if (useAuthorization) {
        setLoading(false);
        setUser(u);

        return u;
        // } else {
        //   setLoading(false);
        //   return undefined;
        // }
      })
      .catch(() => { setLoading(false); return undefined; });
  }

  const hasAccess = (rule: string) => user && user.roles && Array.isArray(user.roles) && user.roles.length > 0 ? user.roles.indexOf(rule) > 0 : true;
  const isAuthenticated = () => !!(!!user && user.id.length > 0 && localStorage.getItem('token') && localStorage.getItem('token') !== '')

  return (
    <Context.Provider value={{ user, isAuthenticated, loading, login, logout, hasAccess }}>
      {children}
    </Context.Provider>
  );

}

export { AuthorizationProvider };
export const useAuthorization = () => React.useContext(Context);