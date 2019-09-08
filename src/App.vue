<template lang="pug">
	v-app
		v-app-bar(app text color="primary" dense clipped-left)
			v-app-bar-nav-icon(@click.stop="drawer = !drawer")
			v-toolbar-title.headline
				span Y&D
				span.font-weight-light Learning
			v-spacer
			v-toolbar-items
				v-btn(text to="/").tile Home 
				v-btn(text to="/news").tile News
				v-btn(text to="/about") About

				//- v-menu LOGIN / SIGN UP
				v-menu(bottom offset-y)
					template(v-slot:activator='{ on: menu }' v-if="!isLoggedIn")
						v-btn(
							color='primary' 
							depressed v-on='{ ...menu }' 
							@click.stop="menuClick = !menuClick"
						) Login / Sign up
							v-icon(v-if="!menuClick") mdi-menu-up 
							v-icon(v-if="menuClick") mdi-menu-down 
							v-list-item(left)
								v-icon(right large) mdi-account-circle-outline
					template(v-slot:activator='{ on: menu }' v-else)
						v-btn(
							color='primary' 
							depressed v-on='{ ...menu }' 
							@click.stop="menuClick = !menuClick"
						) Hi {{ user.username }}
							v-icon(v-if="!menuClick") mdi-menu-up 
							v-icon(v-if="menuClick") mdi-menu-down 
							v-list-item(left)
								v-icon(right large) mdi-account-circle-outline
					v-list
						//- [if not logged in]
						template(v-if="!isLoggedIn")

							//- Login
							v-list-item(to="/login")
								v-list-item-icon
									v-icon mdi-login-variant
								v-list-item-title Login

							//- Sign up
							v-list-item(to="/signup") 
								v-list-item-icon
									v-icon mdi-pencil-plus-outline
								v-list-item-title Sign up

						//- [if logged in]
						template(v-if="isLoggedIn")

							//- My dashboard
							v-list-item(to="/dashboard")
								v-list-item-icon
									v-icon mdi-home
								v-list-item-title [My dashboard]

							//- My profile
							v-list-item(to="/profile")
								v-list-item-icon
									v-icon mdi-account-circle-outline
								v-list-item-title [My profile]

							//- Settings
							v-list-item(to="/settings")
								v-list-item-icon
									v-icon mdi-settings-outline
								v-list-item-title [Settings]

						//- Logout
						//- [if logged in]
						v-list-item(
							@click="logout()" 
							v-if="isLoggedIn")
							v-list-item-icon.rotate-180
								v-icon mdi-logout-variant
							v-list-item-title [Logout]
		v-navigation-drawer(v-model="drawer" app clipped color="#131313")
			TheDashboardList
		v-content
			router-view
		TheDebug(v-show="show_debug_ui")
</template>

<script>
import { mapState } from "vuex";
import TheDashboardList from "@/components/TheDashboardList";
import TheDebug from "@/components/TheDebug";
export default {
    name: "App",
    data() {
        return {
            drawer: false,
            menuClick: false
        };
    },
    components: {
        TheDashboardList,
        TheDebug
    },
    methods: {
        logout() {
            this.$store.dispatch("logout");
        }
    },
    mounted() {
        console.log(process.env.NODE_ENV);
        console.log(process.env.VUE_APP_API_SHOW_UI);
    },
    computed: {
        ...mapState(["isLoggedIn", "user"]),
        show_debug_ui() {
            return process.env.VUE_APP_API_SHOW_UI == "true";
        }
    }
};
</script>

<style lang="sass">
#app
	//background-color: #1e1e1e
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
.rotate-180
	-webkit-transform: rotate(180deg)
	-moz-transform: rotate(180deg)
	-ms-transform: rotate(180deg)
	-o-transform: rotate(180deg)
	transform: rotate(180deg)
</style>
