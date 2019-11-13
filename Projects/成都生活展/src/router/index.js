
import Home from '../container/home'
import Recommended from '../container/recommended'
import Attractions from '../container/attractions.js'
import Mine from '../container/mine'
import Details from '../container/details'
import LoginRegister from '../container/login-register'

const routes = [
    {
        path: '/',
        exact: true,
        component: LoginRegister
    },
    {
        path: '/home',
        exact: true,
        component: Home
    },
    {
        path: '/recommended',
        exact: true,
        component: Recommended
    },
    {
        path: '/attractions',
        exact: true,
        component: Attractions
    },
    {
        path: '/mine',
        exact: true,
        component: Mine
    },
    {
        path: '/details',
        exact: true,
        component: Details
    },
]
export default routes;