import React from 'react'
import { AuthorizationProvider } from './AuthorizationContext';
import { AlertProvider } from './AlertContext';
import { ToastContainer } from 'react-toastify';
import { PalletProvider } from './PalletContext';

// children?:
// | React.ReactChild
// | React.ReactChild[]

function Providers(props: { children?: React.ReactNode; }): JSX.Element {
  return (
    <>
      <AuthorizationProvider>
        <div style={{ position: 'absolute', top: '0', right: '0' }}>
          <ToastContainer />
        </div>
        {/* @ts-ignore */}
        <AlertProvider>
          <PalletProvider>
            {props.children}
          </PalletProvider>
        </AlertProvider>
      </AuthorizationProvider>
    </>
  );
}

export { Providers };