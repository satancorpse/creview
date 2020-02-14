import store from './store';
import Login from './view/pages/auth/Login';
import Dashboard from './view/pages/Dashboard';
import Master from './view/pages/Master';
import Users from './view/pages/users/Users';
import Profile from './view/pages/users/Profile';
import CreateUser from './view/pages/users/CreateUser';
import Cooks from './view/pages/cooks/Cooks';
import Cook from './view/pages/cooks/Profile';
import CreateCook from './view/pages/cooks/CreateCook';
import Items from './view/pages/items/Items';
import PublishedItems from './view/pages/items/PublishedItems';
import ClosedItems from './view/pages/items/ClosedItems';
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
                { path: '/users', component: Users, name: 'Users'},
                { path: '/profile/:id', component: Profile, name: 'profile'},
                { path: '/create-user', component: CreateUser, name: 'create-user', meta: {requiresAdmin: true}},
                { path: '/cooks', component: Cooks, name: 'cooks'},
                { path: '/cooks/:id', component: Cook, name: 'cook'},
                { path: '/create-cook', component: CreateCook, name: 'create-cook', meta: {requiresAdmin: true}},
                { path: '/items', component: Items, name: 'items'},
                { path: '/items/published', component: PublishedItems, name: 'published-items'},
                { path: '/items/closed', component: ClosedItems, name: 'closed-items'},
                { path: '/create-item', component: CreateItem, name: 'create-item', meta: {requiresAdmin: true}},
                { path: '/items/:id/reviews', component: ItemReviews, name: 'item-reviews'},
                { path: '/items/:id/submit-review', component: SubmitReview, name: 'submit-review'},
                { path: '/about', component: About }
            ],
        }
    ],
};
