import { Navigate, useRoutes } from 'react-router-dom';
import SimpleForm from './App';
import Page404 from "./pages/404";
import Layout from "./layouts/main_layout";



export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: 'post_ex', element: <SimpleForm /> },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
