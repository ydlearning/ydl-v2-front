import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

// const router = new Router({
export default new Router({
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
            meta: { requiresAuth: false }
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
            component: () => import("./views/News.vue")
        },
        {
            path: "/login",
            name: "login",
            component: () => import("./views/Login.vue")
        },
        {
            path: "/signup",
            name: "signup",
            component: () => import("./views/Signup.vue")
        },
        {
            path: "/dashboard",
            name: "Dashboard",
            component: () => import("./views/Dashboard.vue")
        },
        {
            path: "/courses",
            name: "courses",
            component: () => import("./views/AllCourses.vue")
        },
        {
            path: "/calendar",
            name: "calendar",
            component: () => import("./views/Calendar.vue")
        },
        {
            path: "/profile",
            name: "profile",
            component: () => import("./views/Profile.vue")
        },
        {
            path: "/settings",
            name: "settings",
            component: () => import("./views/Settings.vue"),
            children: [
                {
                    path: "",
                    name: "edit-profile",
                    component: () => import("./views/SettingsEditProfile.vue")
                },
                {
                    path: "change-password",
                    name: "change-password",
                    component: () => import("./views/SettingsChangePassword.vue")
                }
            ]
        },
        {
            path: "/mycourses",
            name: "mycourses",
            component: () => import(/* webpackChunkName: "about" */ "./views/MyCourses.vue")
        }
    ]
});

// router.beforeEach((to, from, next) => {
//     console.debug("Fire");
//     if (to.matched.some(record => record.meta.requiresAuth)) {
//         // this route requires auth, check if logged in
//         // if not, redirect to login page.
//         console.debug("redirect");
//         if (true) {
//             console.debug("redirect");
//             next({
//                 path: "/login",
//                 query: { redirect: to.fullPath }
//             });
//         } else {
//             next();
//         }
//     } else {
//         next(); // make sure to always call next()!
//     }
// });

// export default router;
