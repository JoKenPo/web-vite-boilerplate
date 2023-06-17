import { isMobile } from 'react-device-detect';
import CircularLoading from '../components/CircularLoading';
import { useAuthorization } from '../contexts/AuthorizationContext';
// import SignIn from '../components/Login/Signin';
import { Routes, RouteProps } from 'react-router-dom';
import { AgendaRoutes } from './_Agenda.Routes';
import SignIn from '../pages/login/SignIn';

const Rotas: React.FC = (): JSX.Element => {
    const { isAuthenticated, loading } = useAuthorization();

    if (loading) return (
        <>
            {
                isMobile ?
                    <CircularLoading
                        size={80}
                        top={"50%"}
                        left={"25%"}
                        zIndex={2}
                    />
                    :
                    <CircularLoading
                        size={80}
                        top={"50%"}
                        left={"50%"}
                        zIndex={2}
                    />
            }
        </>
    )
    else if (!isAuthenticated()) return <SignIn />
    else return (
        <>

            <Routes>
                {AgendaRoutes() as RouteProps}
                {/* <Route path="/cadastro" element={<SignUp />} /> */}
                {/* <Route path="/login" element={<SignIn />} /> */}
            </Routes >
        </>
    );
}

export default Rotas;