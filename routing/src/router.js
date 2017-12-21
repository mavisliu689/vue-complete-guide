import User from './components/user/User.vue';
import Home from './components/Home.vue';
import Header from './components/Header.vue';
import UserStart from './components/user/UserStart.vue';
import UserDetail from './components/user/UserDetail.vue';
import UserEdit from './components/user/UserEdit.vue';
export const routes = [
    {path: '',
        component: Home,
        name: 'home',
        components: {
            default: Home,
            'header-top': Header
        }},
    {path: '/user',
        components:{
            default: User,
            'header-bottom': Header
        },
        children: [
            {path: '', component: UserStart, name: 'userStart'},
            {path: ':id', component: UserDetail, name: 'userDetail'},
            {path: ':id/edit', component: UserEdit, name: 'userEdit'}
        ]
    },
    { path: '/redirect-me', redirect: {name: 'home'}},
    { path: '*', redirect: '/'}
]