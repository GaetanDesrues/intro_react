import { Navigate, useRoutes } from 'react-router-dom';
import SimpleForm from './pages/first_example';
import Page404 from "./pages/404";
import Layout from "./layouts/main_layout";
import HomePage from "./pages/home";
import SecondEx from "./pages/second_example";



export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '', element: <HomePage /> },
        { path: 'post_ex', element: <SimpleForm /> },
        { path: 'sec_ex', element: <SecondEx /> },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
