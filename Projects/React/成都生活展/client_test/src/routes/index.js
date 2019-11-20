import Home from "../pages/home/home";
import Recommend from "../pages/recommend/recommend";
import ScenicSpot from "../pages/scenic-spot/scenic-spot";
import Mine from "../pages/mine/mine";

export default [
    {path: "/", component: Home, exact: true},
    {path: "/recommend", component: Recommend},
    {path: "/scenic-spot", component: ScenicSpot},
    {path: "/mine", component: Mine},
];
