import React from 'react';
import PrivateRoute from '../components/PrivateRoute';
import Agenda from '../pages/agenda/index';
import { Route } from 'react-router-dom';

export function AgendaRoutes(): JSX.Element {
  return (
    <React.Fragment>
      {/* <PrivateRoute path="/" element={< Agenda />} /> */}
      {/* <PrivateRoute path="/agenda" element={< Agenda />} /> */}

      <Route path="/" element={< Agenda />} />
      <Route path="/agenda" element={< Agenda />} />
    </React.Fragment>
  );
}
