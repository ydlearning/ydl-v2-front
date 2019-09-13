import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

// const router = new Router({
export default new Router({
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home,
            meta: { requiresAuth: false }
        },
        {
            path: "/about",
            name: "About",
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ "./views/About.vue")
        },
        {
            path: "/news",
            name: "News",
            component: () => import("./views/News.vue")
        },
        {
            path: "/login",
            name: "Login",
            component: () => import("./views/Login.vue")
        },
        {
            path: "/signup",
            name: "Sign up",
            component: () => import("./views/Signup.vue")
        },
        {
            path: "/forgot_username",
            name: "Forgot Username",
            component: () => import("./views/ForgotUsername.vue")
        },
        {
            path: "/reset_password",
            name: "Reset Password",
            component: () => import("./views/ResetPassword.vue")
        },
        {
            path: "/dashboard",
            name: "Dashboard",
            component: () => import("./views/Dashboard.vue")
        },
        {
            path: "/datenschutzerklaerung",
            name: "Datenschutzerklärung",
            component: () => import("./views/Datenschutzerklaerung.vue")
        },
        {
            path: "/privacy_policy",
            name: "Privacy Policy",
            component: () => import("./views/PrivacyPolicy.vue")
        },
        {
            path: "/impressum",
            name: "Impressum",
            component: () => import("./views/Impressum.vue")
        },
        {
            path: "/legal_disclosure",
            name: "Legal Disclosure",
            component: () => import("./views/LegalDisclosure.vue")
        },
        {
            path: "/kontakt",
            name: "Kontakt",
            component: () => import("./views/Kontakt.vue")
        },
        {
            path: "/contact_us",
            name: "Contact us",
            component: () => import("./views/ContactUs.vue")
        },
        {
            path: "/courses",
            name: "Courses",
            component: () => import("./views/Courses.vue")
        },
        {
            path: "/courses/:id",
            name: "Course",
            component: () => import("./views/Course.vue")
        },
        {
            path: "/courses/:id",
            name: "CourseEnrolled",
            props: {
                showWelcomeScreen: true
            },
            component: () => import("./views/Course.vue")
        },
        {
            path: "/calendar",
            name: "Calendar",
            component: () => import("./views/Calendar.vue")
        },
        {
            path: "/profile",
            name: "Profile",
            component: () => import("./views/Profile.vue")
        },
        {
            path: "/settings",
            name: "Settings",
            component: () => import("./views/Settings.vue"),
            children: [
                {
                    path: "",
                    name: "Edit profile",
                    component: () => import("./views/SettingsEditProfile.vue")
                },
                {
                    path: "change-password",
                    name: "Change password",
                    component: () => import("./views/SettingsChangePassword.vue")
                },
                {
                    path: "change-email",
                    name: "E-mail settings",
                    component: () => import("./views/SettingsEmailSettings.vue")
                }
            ]
        },
        {
            path: "/mycourses",
            name: "MyCourses",
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
