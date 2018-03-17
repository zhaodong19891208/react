import Bottom from '../components/bottom/bottom';
import City from '../components/city/city';
import Home from '../components/home/home';
import List from '../components/list/list';
import Shpping from '../components/shpping/shpping';
import LogIn from '../components/logIn/logIn';
import Detail from '../components/detail/detail';
import App from "../App";

const routeConfig = [
    { path: '/',component: App,
      indexRoute:{ component: Home },
      childRoutes: [
      { path: 'home', component: Home,onEnter:()=>{
          console.log('enter home')
      },onLeave:()=>{
          console.log('leave home')
       } },
      {path: 'city', component: City},
      {path: 'list', component: List},
      {path: 'logIn', component: LogIn},
      { path: 'bottom', component: Bottom},
      {path: 'shpping', component: Shpping},
      { path: 'detail', component: Detail },
      {path:'*',component:Home}
     ]
    }
  ]
export default routeConfig;