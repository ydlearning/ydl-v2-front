<template lang="pug">
    v-app
        v-navigation-drawer(v-model="drawer" app clipped)
            v-list(dense='')
                v-list-item(to="/Dashboard")
                    v-list-item-action
                        v-icon mdi-home
                    v-list-item-content
                        v-list-item-title My dashboard
                v-list-item(to="/courses")
                    v-list-item-action
                        v-icon mdi-folder-multiple-outline
                    v-list-item-content
                        v-list-item-title All courses
                v-list-item(to="/calendar")
                    v-list-item-action
                        v-icon mdi-calendar-account-outline
                    v-list-item-content
                        v-list-item-title Calendar
                template(v-if="isLoggedIn")
                    v-list-item(@click='')
                        v-list-item-action
                            v-icon mdi-folder-account-outline
                        v-list-item-content
                            v-list-item-title My courses
        v-app-bar(app text color="primary" clipped-left dense)
            v-app-bar-nav-icon(@click.stop="drawer = !drawer")
            //- router-link(to="/" color="rgb(200,200,200)")
            //- v-btn(color="transparent" depressed tile to="/")
            v-toolbar-title.headline
                span Y&D
                span.font-weight-light Learning
            //- a.link(href="/ydl-v2-front/#/") Hi
            //- router-link.link(to="/News") Test
            v-spacer
            v-toolbar-items
                v-btn(text to="/").tile Home 
                v-btn(text to="News").tile News
                v-btn(text to="About") About
                v-menu(bottom offset-y)
                    template(v-slot:activator='{ on: menu }')
                        v-btn(color='primary' depressed v-on='{...menu }') Log in / Sign up
                            v-icon(right) mdi-account-circle-outline
                    v-list
                        v-list-item(v-if="!isLoggedIn" to="/Login")
                            v-list-item-title Login
                        //- [wenn eingeloggt]
                        v-list-item(v-else @click='')
                            v-list-item-title [Logout]
                        //- [wenn nicht eingeloggt]
                        v-list-item(v-if="!isLoggedIn" to="/Signup") 
                            v-list-item-title Sign up
                        //- [wenn eingeloggt]
                        template(v-if="isLoggedIn")
                            v-list-item(@click='')
                                v-list-item-title [My profile]
                            //- [wenn eingeloggt]
                            v-list-item(@click='')
                                v-list-item-title [Settings]
        v-content
            router-view
</template>

<script>
import { mapState } from "vuex";
export default {
    name: "App",
    data() {
        return {
            drawer: false
        };
    },
    computed: mapState(["isLoggedIn"])
};
</script>

<style lang="sass">
#app
    background-color: #1e1e1e
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAEJklEQVRogdXaW08TQRTA8dO1u5PNviiFiIpG0CjeQdGoX6UQAiF8KhIeSF/4IBoviHdA5eI1JtLW+OBadtIxp+nQYXZntrDbdnYSbvNnApTt+dHQ3NjYGDDGGi/1ev2i4zhl3/ery8vLgGtqakrsVxzH+anpDxzHWV9YWKjath3VJxzH2dScb6dv+b5f0fQd3/d3ebegtS4AwKdarVb1PO8E7k5PTwsZRgFgTdPvA8Bj7PPz81H9DgA815xvt1di+q7nef2889/gCGNsq16v81sCe8F13XJz7zJjbEPT7zHGnvK+tLQExWJR7OOMsVXN+aje77ruboI+4LruL/wBhxlj2zzwt57nge/7Bdu2C4yxD5qON84zTT/LGHvZod5v2/aQpg9YlNI/oFiEkD5KaTm6NvowpXQrFFp9iFL6NRTS62copd9CodVPW/l8vswY6wtVgIsA8FHTb+M1r+k3AeBVSr0Qqq2+q+sW3l9KpVIll8uJX+QqDhz+QS6Xk/tDAHih6XcB4HWKvdxGL0T1PL6anJzEa7eSz+dPBEEwCADv5ZtD6KOlUumR2GZmZsSO0/iZ5nyS3hcEwYiil6O6hY7wRSkdJIT8lA8LfZQQsi7uzc7Oiv0CIWQzdDC9PtJGPzATRAdDzkkr5Nzc3Jz4GSHHpNWtXhH7scFBvCLhMgBs4IjFtbe39y8IAhzRfnPvHgA84X1xcfEfOif0cbxPas53oiMRf+M6OnjJYOeS9n7LcOeSdq2D3XQuaY9y8AZSoXKw284l7bKTEwDwBhQO9tK5NJwcxiuP78sO9tq5pH1Y52BWnFN1nBkrcucOmujcYfoYAKyqHLybYecKzceDr1TdyrhziR4PmuRcVG84p+nXkQqVg6Y5J/d95xQdB9JbUDioc8aEPiI6F9HRwRW+LztounOhx3tSRwe3xT3RwUw6Jyyk4oXKwSw6J/ZbOJCiusUPyzeH53nlWq1WMKDjN/9S0xvTVtWtGGeMd45S+j0UhG6yg205l1UH23Yurpvo4KGci+umOXho5+K6SQ4eybm4boqDR3YuCw4mcs50BxM7Z7KDqThnqoOpORfXe+Fgqs7F9W47mLpzcb2bDnbEubjeLQc75pwJDnbUuXYc/CJHvrLgXEw/hQ5WFI5kwjlNv4ZUiA6Kd9zMOKfoONDegeRgNYvORfTz4j9v03aw685J/TwhZEfcywvvc8dwAh0HgN/SebHj5VyVOndO1blTneo4rVflnpaDPXOuuYcD73VUj3OwL6b33Dk+rVUdHfwsR74IIWdjnOy5c5TSH6HQ6ifRwSpjLOpvO+6cykkjnNP0K/isSe5gVecgAMhOHnCu2ZVOdaDvO6foeLdaw3caU7RYLOIbdPB4EAT4TN9955pP8BadPOCc0COd6kA/4FxEP7c/EwDgP7aSCeGBS/bXAAAAAElFTkSuQmCC)
    background-origin: padding-box
    background-position: left top
    background-clip: border-box
    background-repeat: repeat
    background-attachment: scroll
    background-size: auto

html
    // remove scroll bar
    // overflow: hidden
    /* own scrollbar */
    /* scrollbar firefox */
    scrollbar-color: rgb(110, 110, 110) rgb(1, 1, 1)
    /* own scrollbar */
    /* Note: The -webkit-scrollbar is not supported by Firefox or IE and Edge. */
    ::-webkit-scrollbar
        /* width */
        width: 12px
    ::-webkit-scrollbar-track
        /* Track */
        box-shadow: inset 0 0 5px grey
        border-radius: 8px

    ::-webkit-scrollbar-thumb
        /* Handle */
        background: rgb(110, 110, 110)
        border-radius: 10px
    ::-webkit-scrollbar-thumb:hover
        /* Handle on hover */
        background: rgb(110, 110, 110)
    ::-webkit-scrollbar-track-piece
        /* not handle on */
        background: rgb(1, 1, 1)
    .link
        // color: rgb(250,250,250)!important
</style>
