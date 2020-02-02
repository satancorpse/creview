import store from './store';
import Login from './view/pages/Login';
import Dashboard from './view/pages/Dashboard';
import Master from './view/pages/Master';
import CreateUser from './view/pages/CreateUser';
import CreateCook from './view/pages/CreateCook';
import CreateItem from './view/pages/CreateItem';
import ItemReviews from './view/pages/ItemReviews';
import SubmitReview from './view/pages/SubmitReview';
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
                { path: '/create-user', component: CreateUser, name: 'create-user', meta: {requiresGod: true}},
                { path: '/create-cook', component: CreateCook, name: 'create-cook', meta: {requiresAdmin: true}},
                { path: '/create-item', component: CreateItem, name: 'create-item', meta: {requiresAdmin: true}},
                { path: '/items/:id/reviews', component: ItemReviews, name: 'item-reviews', meta: {requiresAdmin: true}},
                { path: '/items/:id/submit-review', component: SubmitReview, name: 'submit-review'},
                { path: '/about', component: About }
            ],
        }
    ],
};
