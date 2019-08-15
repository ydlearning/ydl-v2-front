import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/about",
            name: "about",
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ "./views/About.vue")
        },
        {
            path: "/news",
            name: "news",
            component: () => import(/* webpackChunkName: "about" */ "./views/News.vue")
        },
        {
            path: "/login",
            name: "login",
            component: () => import(/* webpackChunkName: "about" */ "./views/Login.vue")
        },
        {
            path: "/signup",
            name: "signup",
            component: () => import(/* webpackChunkName: "about" */ "./views/Signup.vue")
        },
        {
            path: "/dashboard",
            name: "dashboard",
            component: () => import(/* webpackChunkName: "about" */ "./views/Dashboard.vue")
        },
        {
            path: "/courses",
            name: "courses",
            component: () => import(/* webpackChunkName: "about" */ "./views/AllCourses.vue")
        },
        {
            path: "/calendar",
            name: "calendar",
            component: () => import(/* webpackChunkName: "about" */ "./views/Calendar.vue")
        },
        {
            path: "/profile",
            name: "profile",
            component: () => import(/* webpackChunkName: "about" */ "./views/Profile.vue")
        },
        {
            path: "/settings",
            name: "settings",
            component: () => import(/* webpackChunkName: "about" */ "./views/Settings.vue")
        },
        {
            path: "/courses",
            name: "courses",
            component: () => import(/* webpackChunkName: "about" */ "./views/Courses.vue")
        }
    ]
});
