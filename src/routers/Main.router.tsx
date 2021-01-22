import React, { Suspense } from 'react';
import Loading from "../components/core/Loading";
import { Switch, Route } from 'react-router-dom';
// const HomePage = React.lazy(() => import('container/homePage/HomePage'));
// const DashBoard = React.lazy(() => import('container/dashboard/DashBoard'));
// const Wrapper = React.lazy(() => import('container/wrapper/Wrapper'));
// const UnWrapper = React.lazy(() => import('container/unWrapper/UnWrapper'));
// const DashBoardUser = React.lazy(() => import('container/dashboardUser/DashBoardUser'));
// const Page404 = React.lazy(() => import('container/page404/Page404'));
// const SearchUser = React.lazy(() => import('container/searchPage/SearchUser'));
import HomePage from "../container/homePage/HomePage";
import DashBoard from "../container/dashboard/DashBoard";
import Wrapper from "../container/wrapper/Wrapper";
import UnWrapper from "../container/unWrapper/UnWrapper";
import DashBoardUser from "../container/dashboardUser/DashBoardUser";
import SearchUser from "../container/searchPage/SearchUser";
import Page404 from "../container/page404/Page404";
const routers = [
    {
        path: '/',
        exact: true,
        component: HomePage
    },
    {
        path: '/dashboard',
        exact: true,
        component: DashBoard
    },
    {
        path: '/wrapper',
        exact: true,
        component: Wrapper
    },
    {
        path: '/unwrapper',
        exact: true,
        component: UnWrapper
    },
    {
        path: '/dashboard-user/:address',
        exact: true,
        component: DashBoardUser
    },
    {
        path: '/search',
        exact: true,
        component: SearchUser
    },
    {
        path: '*',
        exact: false,
        component: Page404
    },
];
interface MainRouterProps {
    path: string,
    component: any
}
function MainRouter() {
    return (
        // <Suspense fallback={<Loading/>}>
            <Switch>
                {
                    routers.map(({ path, component }:MainRouterProps,index) => {
                       <Route key={index} path={path} component={component} />
                    })
                }
            </Switch>
        // </Suspense>
    );
}

export default MainRouter;