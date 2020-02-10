import Home from '../pages/home/home';
import Recommend from '../pages/recommend/recommend';
import ScenicSpot from '../pages/scenic-spot/scenic-spot';
import Mine from '../pages/mine/mine';
import Login from '../pages/login/login';
import Details from '../pages/details/details';


const routes = [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/recommend',
        component: Recommend
    },
    {
        path: '/scenic-spot',
        component: ScenicSpot
    },
    {
        path: '/mine',
        component: Mine
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/details',
        component: Details
    }
]

export default routes;