import App from './components/App';
import Dashboard from './components/Dashboard';
import CreateUser from './components/CreateUser';
import CreateCook from './components/CreateCook';
import About from './components/About';

export default {
    mode: 'history',

    routes: [
        { path: '/', component: Dashboard, name: 'home' },
        { path: '/dashboard', component: Dashboard, name: 'dashboard' },
        { path: '/create-user', component: CreateUser, name: 'create-user' },
        { path: '/create-cook', component: CreateCook, name: 'create-cook' },
        { path: '/about', component: About }
    ],
};
