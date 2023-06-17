import React from 'react';

export interface IAlert {
  severity: any
  message: string
}
interface IContextResult { currentAlert?: IAlert; NewAlert: (severity: any, message: string) => void; }
interface IProviderProps { children: React.ReactNode; }

const Context = React.createContext<IContextResult>({ currentAlert: undefined, NewAlert: (severity, message) => console.warn('no provider') });

const AlertProvider = ({ children }: IProviderProps) => {

  const [alert, setAlert] = React.useState<IAlert | undefined>(undefined);

  const resetAlert = () => setAlert(undefined);
  const newAlert = (severity: any, message: string) => {
    setAlert({ severity, message });
    setTimeout(() => resetAlert(), 3000);
  }

  return (
    <Context.Provider value={{ currentAlert: alert, NewAlert: newAlert }}>
      {children}
    </Context.Provider >
  );

}
export { AlertProvider };
export const useAlert = () => React.useContext(Context);