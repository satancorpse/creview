import store from './store';
import Login from './view/pages/auth/Login';
import Dashboard from './view/pages/Dashboard';
import Master from './view/pages/Master';
import Users from './view/pages/users/Users';
import CreateUser from './view/pages/users/CreateUser';
import Cooks from './view/pages/cooks/Cooks';
import CreateCook from './view/pages/cooks/CreateCook';
import Items from './view/pages/items/Items';
import CreateItem from './view/pages/items/CreateItem';
import ItemReviews from './view/pages/items/ItemReviews';
import SubmitReview from './view/pages/reviews/SubmitReview';
import About from './view/pages/About';

export default {
    mode: 'history',

    routes: [
        { path: '/', component: Login },
        { path: '/login', component: Login, name: 'login' },

        {
            path: '/dashboard',
            component: Master,
            children: [
                { path: '/', component: Dashboard, name: 'dashboard' },
                { path: '/users', component: Users, name: 'Users', meta: {requiresGod: true}},
                { path: '/create-user', component: CreateUser, name: 'create-user', meta: {requiresGod: true}},
                { path: '/cooks', component: Cooks, name: 'cooks', meta: {requiresAdmin: true}},
                { path: '/create-cook', component: CreateCook, name: 'create-cook', meta: {requiresAdmin: true}},
                { path: '/items', component: Items, name: 'items', meta: {requiresAdmin: true}},
                { path: '/create-item', component: CreateItem, name: 'create-item', meta: {requiresAdmin: true}},
                { path: '/items/:id/reviews', component: ItemReviews, name: 'item-reviews', meta: {requiresAdmin: true}},
                { path: '/items/:id/submit-review', component: SubmitReview, name: 'submit-review'},
                { path: '/about', component: About }
            ],
        }
    ],
};
