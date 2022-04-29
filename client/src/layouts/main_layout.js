import {Outlet} from 'react-router-dom';
import TemporaryDrawer from "./side_bar";


export default function Layout() {
    return (
        <>
            <TemporaryDrawer />
            <Outlet />
        </>
    );
}