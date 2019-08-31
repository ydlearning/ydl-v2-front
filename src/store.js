import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isLoggedIn: false,
        // isLoggedIn: true, // Test!! (Debug)
        user: {
            username: "Max-Mustermann",
            name: "Max Mustermann",
            email: {
                address: "max.mustermann@muster.mann",
                isVerified: false,
                status: "public" //public | private | contacts
            },
            password: "AbCd1234+-",
            role: "Student"
        },
        current_course: {
            name: "Computergraphics",
            term: "WS",
            start: "2019-08-31T22:34:54+0000",
            end: "2019-10-31T22:34:54+0000",
            content: {
                announcement: {
                    body: {
                        content: "Thats Content inside the Announcement!",
                        last_edit: "2019-08-31T22:34:54+0000"
                    },
                    resources: [
                        {
                            name: "Announcements",
                            category: "forum",
                            type: "link"
                        },
                        {
                            name: "Studentforum",
                            category: "forum",
                            type: "link"
                        },
                        {
                            name: "Script",
                            category: "script",
                            type: "pdf",
                            uploaded: "2019-08-27T22:34:54+0000",
                            last_edit: "2019-08-28T22:34:54+0000"
                        },
                        {
                            name: "OpenGL Cheat Sheet (v2)",
                            category: null,
                            type: "pdf",
                            uploaded: "2019-08-29T22:34:54+0000",
                            last_edit: "2019-08-30T22:34:54+0000"
                        }
                    ]
                },
                contents: [
                    {
                        // calculated based on the start date from the course inside the backend
                        week: "29.03 - 06.4",
                        body: null,
                        resources: [
                            {
                                name: "CG Lecture 00: Begin",
                                category: "lecture",
                                type: "pdf",
                                uploaded: "2019-08-29T22:34:54+0000",
                                last_edit: "2019-08-29T22:34:54+0000"
                            },
                            {
                                name: "CG Lecture 00",
                                category: "movie",
                                type: "movie",
                                uploaded: "2019-08-29T22:34:54+0000",
                                last_edit: "2019-08-29T22:34:54+0000"
                            },
                            {
                                name: "CG Quiz for Lecture 00",
                                category: "interactive learning",
                                type: "quiz",
                                uploaded: "2019-08-29T22:34:54+0000",
                                last_edit: "2019-08-29T22:34:54+0000"
                            }
                        ]
                    },
                    {
                        // calculated based on the start date from the course inside the backend
                        week: "12.04 - 19.04",
                        body: null,
                        resources: [
                            {
                                name: "CG Lecture 01: OpenGL Pipeline",
                                category: "lecture",
                                type: "pdf",
                                uploaded: "2019-08-29T22:34:54+0000",
                                last_edit: "2019-08-29T22:34:54+0000"
                            },
                            {
                                name: "CG Lecture 01",
                                category: "movie",
                                type: "movie",
                                uploaded: "2019-08-29T22:34:54+0000",
                                last_edit: "2019-08-29T22:34:54+0000"
                            },
                            {
                                name: "CG Quiz for Lecture 01",
                                category: "interactive learning",
                                type: "quiz",
                                uploaded: "2019-08-29T22:34:54+0000",
                                last_edit: "2019-08-29T22:34:54+0000"
                            },
                            {
                                name: "Reference Card for OpenGL Pipeline",
                                category: "cheat sheet",
                                type: "pdf",
                                uploaded: "2019-08-29T22:34:54+0000",
                                last_edit: "2019-08-29T22:34:54+0000"
                            }
                        ]
                    }
                ]
            }
        }
    },
    mutations: {
        login(state) {
            state.isLoggedIn = true;
        },
        logout(state) {
            state.isLoggedIn = false;
        }
    },
    actions: {
        login(context) {
            context.commit("login");
        },
        logout(context) {
            context.commit("logout");
        }
    }
});
