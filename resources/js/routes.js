import Dashboard from './view/pages/Dashboard';
import CreateUser from './view/pages/CreateUser';
import CreateCook from './view/pages/CreateCook';
import CreateItem from './view/pages/CreateItem';
import SubmitReview from './view/pages/SubmitReview';
import About from './view/pages/About';

export default {
    mode: 'history',

    routes: [
        { path: '/', component: Dashboard, name: 'home' },
        { path: '/dashboard', component: Dashboard, name: 'dashboard' },
        { path: '/create-user', component: CreateUser, name: 'create-user' },
        { path: '/create-cook', component: CreateCook, name: 'create-cook' },
        { path: '/create-item', component: CreateItem, name: 'create-item' },
        { path: '/items/:id/submit-review', component: SubmitReview, name: 'submit-review' },
        { path: '/about', component: About }
    ],
};
