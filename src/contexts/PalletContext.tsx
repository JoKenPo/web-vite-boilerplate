import React, { useEffect } from 'react';
// import { readStore, writeStore } from '../helpers/persistence';
// import PaletContextService from '../services/PaletContextService';
import { IPallet, schema } from '../models/Pallet.Model'


interface IPalletProviderProps { children: React.ReactNode; }
interface IPalletContextResult { pallet: IPallet }

// const Context = React.createContext<IPalletContextResult>({ pallet: null, setPallet: () => console.warn('no provider') });
const Context = React.createContext<IPalletContextResult>({ pallet: null });

const PalletProvider = ({ children }: IPalletProviderProps) => {
  const [pallet, setPallet] = React.useState<IPallet>();

  useEffect(() => {
    const GetPallet = () => {
      // if (!pallet)
      //readStore('ColorPallet').then(p => p ?
      //setPallet(() => p) : 
      // PaletContextService.execute()
      // .then(result => {
      //writeStore('ColorPallet', result);
      // setPallet(() => result)
      // }).catch(err => console.error('Pallet Context Error=>', err))
      //);
    }
    setPallet(() => schema)

    // GetPallet()
  }, []);


  return (
    <Context.Provider value={{ pallet }}>
      {children}
    </Context.Provider>
  );

}

export { PalletProvider };
export const usePallet = () => React.useContext(Context);