import Vue from 'vue'
import VueRouter from 'vue-router'
import VisitorRegister from '../views/visitor-register'
import VisitorManaget from '../views/visitor-manager'
import LogginIn from '../views/login-in'
import AppTab from '../views/app-tab'
import equipmentPage from '../views/equipment-page'
import globalPage from '../views/global-page'
import homePage from '../views/home-page'
import myPage from '../views/my-page'
import settingPage from '../views/setting-page'
Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
const router = new VueRouter({
    mode: 'hash',
    routes: [{
            path: '/loginin',
            component: LogginIn
        }, {
            path: '/visitor-register',
            component: VisitorRegister
        },
        {
            path: '/visitor-managet',
            component: VisitorManaget
        },
        {
            path: '/app-tab',
            component: AppTab,
            children: [{
                    path: 'equipment-page',
                    component: equipmentPage
                },
                {
                    path: 'global-page',
                    component: globalPage
                },
                {
                    path: 'home-page',
                    component: homePage,
                    children: [{
                        path: 'routeone',
                        component: () =>
                            import ('../views/home-page/componnets/route-one'),
                    }, {
                        path: 'routetwo',
                        component: () =>
                            import ('../views/home-page/componnets/route-two'),
                    }, {
                        path: 'routethree',
                        component: () =>
                            import ('../views/home-page/componnets/route-three'),
                    }, {
                        path: 'routefour',
                        component: () =>
                            import ('../views/home-page/componnets/route-four'),
                    }, {
                        path: '/',
                        redirect: '/app-tab/home-page/routeone'
                    }]
                },
                {
                    path: 'my-page',
                    component: myPage
                },
                {
                    path: 'setting-page',
                    component: settingPage
                },
            ]
        },
        {
            path: '/loginin',
            component: LogginIn
        },
        {
            path: '/',
            redirect: '/app-tab/home-page'
        }
    ]

})
export default router