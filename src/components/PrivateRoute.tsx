import { Route } from "react-router-dom";
// import { useAuthorization } from "../contexts/AuthorizationContext";
// import SignIn from "../pages/login/SignIn";
// import CircularLoading from '../components/CircularLoading';

interface Props {
    element: any;
    path: string;
    children?: any;
}

export default function PrivateRoute({ element, path, children }: Props) {
    // const { isAuthenticated, loading } = useAuthorization();
    // if (loading) element = <CircularLoading />
    // else if (!isAuthenticated()) element = <SignIn />
    return <Route path={path} element={element}>{children}</Route>
}