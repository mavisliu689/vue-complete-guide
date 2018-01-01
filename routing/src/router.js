import User from './components/user/User.vue';
import Home from './components/Home.vue';
import Header from './components/Header.vue';
// import UserStart from './components/user/UserStart.vue';
// import UserDetail from './components/user/UserDetail.vue';
// import UserEdit from './components/user/UserEdit.vue';

const User = resolve => {
    require.ensure(['./component/User/User.vue'], () => {
        resolve(require('./component/User/User.vue'))
    })
}
const UserStart = resolve => {
    require.ensure(['./component/User/UserStart.vue'], () => {
        resolve(require('./component/User/UserStart.vue'))
    })
}
const UserDetail = resolve => {
    require.ensure(['./component/User/UserDetail.vue'], () => {
        resolve(require('./component/User/UserDetail.vue'))
    })
}
const UserEdit = resolve => {
    require.ensure(['./component/User/UserEdit.vue'], () => {
        resolve(require('./component/User/UserEdit.vue'))
    })
}

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
            {path: ':id', component: UserDetail, name: 'userDetail', beforeEnter: (to, from, next) => {
                next();
            }},
            {path: ':id/edit', component: UserEdit, name: 'userEdit'}
        ]
    },
    { path: '/redirect-me', redirect: {name: 'home'}},
    { path: '*', redirect: '/'}
]