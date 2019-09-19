<template lang="pug">
	//- :dark="setTheme"
	//- v-app#app--light
	//- v-app(v-bind:id="[this.$vuetify.theme.dark ? 'app--dark' : 'app--light']")
	v-app(v-bind:id="this.$vuetify.theme.dark ? 'app--dark' : 'app--light'")
		TheToolbar
		//- v-app-bar(
			app 
			text 
			color="primary" 
			dense 
			clipped-left)
			v-app-bar-nav-icon(@click.stop="drawer = !drawer")

			v-toolbar-title.headline
				span Y&D
				span.font-weight-light Learning
			//- v-spacer
			.flex-grow-1
			

			v-toolbar-items
				//- .hidden-sm-and-down
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
			//- v-menu.hidden-md-and-up
			//- 	span khjk
			//- 	v-icon mdi-cookie
			//- 	v-list
			//- 		v-list-tile
			//- 			v-list-tile-content
			//- 				v-list-tile-title Titel

		//- v-toolbar(
			color="primary" 
			dark 
			fixed 
			top)
			v-toolbar-title Toolbar Mobile Menu
			v-spacer
			v-toolbar-items.hidden-sm-and-down
				v-btn( 
					text)
					| Item 1
				v-btn( 
					text)
					| Item 2
			v-app-bar-nav-icon.hidden-md-and-down(v-slot:activator="{ on }")
			v-menu.hidden-md-and-down
				//- v-btn(icon v-slot:activator="{ on }")
				//- 	v-icon mdi-dots-vertical
				v-app-bar-nav-icon(v-slot:activator="{ on }")
				v-menu(bottom offset-y)
					template(v-slot:activator='{ on: menu }')
				//- v-toolbar-side-icon(slot="activator")
				v-list
					v-list-tile
						v-list-tile-content
					v-list-tile-title Title

		//- v-toolbar(
				color="primary" 
				dark 
				fixed 
				top)
			v-toolbar-title Toolbar Mobile Menu
			v-spacer
			v-toolbar-items.hidden-sm-and-down
				v-btn(v-for="item in menu" :key="item.icon" :to="item.link" text) {{ item.title }}
			v-app-bar-nav-icon.hidden-md-and-down(v-slot:activator="{ on }")
			v-menu.hidden-md-and-up
				v-toolbar-side-icon(slot="activator")
				v-list
					v-list-tile(v-for="item in menu" :key="item.icon")
						v-list-tile-content
							v-list-tile-title {{ item.title }}

		v-content
			//- v-switch(
				:label="`Dark Theme`" 
				v-model="darkTheme")
			router-view
		
			vue-cookie-accept-decline.cookie(
				:ref="'cookiePanel'" 
				:elementId="'cookiePanel'" 
				:position="'bottom-left'" 
				:type="'floating'" 
				:transitionName="'slideFromBottom'" 
				:debug="false" 
				:disableDecline="true" 
				:showPostponeButton="false"
				@status="cookieStatus" 
				@clicked-accept="cookieClickedAccept" 
				@clicked-decline="cookieClickedDecline"
				@clicked-postpone="cookieClickedPostpone" 
				@removed-cookie="cookieRemovedCookie")

				// Optional
				div(slot="message")
					| We use cookies to ensure you get the best experience on our website. 
					router-link(to="/privacy_policy" target="_blank") Learn More...
				// Optional
				div(slot="declineContent")
					| OPT OUT
				// Optional
				div(slot="acceptContent")
					| GOT IT!
				// Optional
				div(slot="postponeContent")
					| &times;
		Footer
		TheDebug(v-show="show_debug_ui")
</template>

<script>
import { mapState } from "vuex";
import TheDashboardList from "@/components/TheDashboardList";
import TheDebug from "@/components/TheDebug";
import Footer from "@/components/Footer";
import TheToolbar from "@/components/TheToolbar";
export default {
    name: "App",
    data() {
        return {
            drawer: false,
            menuClick: false,
            status: null,
            // darkTheme: true,
            menu: [
                { icon: "home", title: "Link A" },
                { icon: "info", title: "Link B" },
                { icon: "warning", title: "Link C" }
            ]
        };
    },
    components: {
        TheDashboardList,
        TheDebug,
        Footer,
        TheToolbar
    },
    methods: {
        logout() {
            this.$store.dispatch("logout");
        },
        cookieStatus(status) {
            console.log("cookie status: " + status);
            this.status = status;
        },
        cookieClickedAccept() {
            console.log("here in accept");
            this.status = "accept";
        },
        cookieClickedDecline() {
            console.log("here in decline");
            this.status = "decline";
        },
        cookieClickedPostpone() {
            console.log("here in postpone");
            this.status = "postpone";
        },
        cookieRemovedCookie() {
            console.log("here in cookieRemoved");
            this.status = null;
            this.$refs.cookiePanel.init();
        },
        removeCookie() {
            console.log("Cookie removed");
            this.$refs.cookiePanel.removeCookie();
        },
        menuItems() {
            return this.menu;
        }
    },
    mounted() {
        console.log(process.env.NODE_ENV);
        console.log("show UI: " + process.env.VUE_APP_API_SHOW_UI);
    },
    computed: {
        ...mapState(["isLoggedIn", "user", "darkTheme"]),
        show_debug_ui() {
            return process.env.VUE_APP_API_SHOW_UI == "true";
        },
        statusText() {
            return this.getLocalStorage || "No cookie set";
        },
        getLocalStorage() {
            return localStorage.getItem("vue-cookie-accept-decline-cookiePanel");
        }
        // ,
        // setTheme() {
        //     if (this.darkTheme == true) {
        //         return (this.$vuetify.theme.dark = true);
        //     } else {
        //         return (this.$vuetify.theme.dark = false);
        //     }
        // }
    }
};
</script>

<style lang="sass">
#app--dark
	background-color: #1e1e1e
	background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAEJklEQVRogdXaW08TQRTA8dO1u5PNviiFiIpG0CjeQdGoX6UQAiF8KhIeSF/4IBoviHdA5eI1JtLW+OBadtIxp+nQYXZntrDbdnYSbvNnApTt+dHQ3NjYGDDGGi/1ev2i4zhl3/ery8vLgGtqakrsVxzH+anpDxzHWV9YWKjath3VJxzH2dScb6dv+b5f0fQd3/d3ebegtS4AwKdarVb1PO8E7k5PTwsZRgFgTdPvA8Bj7PPz81H9DgA815xvt1di+q7nef2889/gCGNsq16v81sCe8F13XJz7zJjbEPT7zHGnvK+tLQExWJR7OOMsVXN+aje77ruboI+4LruL/wBhxlj2zzwt57nge/7Bdu2C4yxD5qON84zTT/LGHvZod5v2/aQpg9YlNI/oFiEkD5KaTm6NvowpXQrFFp9iFL6NRTS62copd9CodVPW/l8vswY6wtVgIsA8FHTb+M1r+k3AeBVSr0Qqq2+q+sW3l9KpVIll8uJX+QqDhz+QS6Xk/tDAHih6XcB4HWKvdxGL0T1PL6anJzEa7eSz+dPBEEwCADv5ZtD6KOlUumR2GZmZsSO0/iZ5nyS3hcEwYiil6O6hY7wRSkdJIT8lA8LfZQQsi7uzc7Oiv0CIWQzdDC9PtJGPzATRAdDzkkr5Nzc3Jz4GSHHpNWtXhH7scFBvCLhMgBs4IjFtbe39y8IAhzRfnPvHgA84X1xcfEfOif0cbxPas53oiMRf+M6OnjJYOeS9n7LcOeSdq2D3XQuaY9y8AZSoXKw284l7bKTEwDwBhQO9tK5NJwcxiuP78sO9tq5pH1Y52BWnFN1nBkrcucOmujcYfoYAKyqHLybYecKzceDr1TdyrhziR4PmuRcVG84p+nXkQqVg6Y5J/d95xQdB9JbUDioc8aEPiI6F9HRwRW+LztounOhx3tSRwe3xT3RwUw6Jyyk4oXKwSw6J/ZbOJCiusUPyzeH53nlWq1WMKDjN/9S0xvTVtWtGGeMd45S+j0UhG6yg205l1UH23Yurpvo4KGci+umOXho5+K6SQ4eybm4boqDR3YuCw4mcs50BxM7Z7KDqThnqoOpORfXe+Fgqs7F9W47mLpzcb2bDnbEubjeLQc75pwJDnbUuXYc/CJHvrLgXEw/hQ5WFI5kwjlNv4ZUiA6Kd9zMOKfoONDegeRgNYvORfTz4j9v03aw685J/TwhZEfcywvvc8dwAh0HgN/SebHj5VyVOndO1blTneo4rVflnpaDPXOuuYcD73VUj3OwL6b33Dk+rVUdHfwsR74IIWdjnOy5c5TSH6HQ6ifRwSpjLOpvO+6cykkjnNP0K/isSe5gVecgAMhOHnCu2ZVOdaDvO6foeLdaw3caU7RYLOIbdPB4EAT4TN9955pP8BadPOCc0COd6kA/4FxEP7c/EwDgP7aSCeGBS/bXAAAAAElFTkSuQmCC)
	background-origin: padding-box
	background-position: left top
	background-clip: border-box
	background-repeat: repeat
	background-attachment: scroll
	background-size: auto
#app--light
	// background-color: #e6e6e6
	background-color: #d4d4d4
	// background-color: var(--v-primary-base)
	// background-color: #424242
	// color for grey
	background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAADM0lEQVRogdXa7U7qMBjA8ecUyBpOETc99+OlYDRqjJdj/GTUD96dCqg7C7HZ40mRHkrbteheaJuYyP7WyNruZ4y/jo6O4PPzExBRfIySJPlbFAU+Pj6CGKenp2ofJ0ny7uiHSZJMb25usN/v2/pBkiQzx/wm+rwoilJ2AusxAoD3xWKBjLHl9bOzMyXDHgC8OvohADyLfnV1ZesZALw45jfVS8ZYT3a5ggwRc3EX5N0AgN5wOCxX1/YQ8c3RDxDxRfa7uzuYTCZqzxBx6pjfWhd3ggFADtpgjJWLxYKsVu7N0Q/EnVPbZDJRewoAU8f8Or3n64RzXuhRDkrpb8658eaVnnLOZ0ZY9zHn/NUIzfU9zrlx89VOBoMBIiIx6upMOvpyzzu6uLOzDnrp6uT29hbu7++REKJ+0Vi8OfmCEKL3P+q2sHSxbWch9OWz/OTkRBxMHAwG5OPjQ6ycsS2Unj08PDyp7fz8XO2pfia1+Z12IhyRg3M+opS+6z+c0jNK6caBvri4UHtKKa08k7vo6rIazmnDcO7y8lL9CsMxbeyky082KMjzHPM87ymTxZ5+li+ur69ROKd986lj/s566M7VdpIE7lzd7nQwFOd+2vddDkbjnKPPocLBqJyz9H2Xg9E5p/V9SulcvaYua5TOaX1a5WC0zq1GWtVjd052Y9vKTiJ3rpaDUTjn6fMqB6NxrqJnsi8vqg7aziQozgTQsy36+pcUzcHonPN1fVmjc04Zqa331cnyonBE/l0xkG44Z+kzW4/euW0cdDkSvHMxO7iVczE7uJVzvh6ig99yztdDc9BwrG4PzUHDMWVYnfP1UBz8sXO+Hr1zsTvodS5kBxtxLmQHG3HO13fhYKPO+XrXDhpOtd27dtBwShlWx+r2rhxszTlfj9650B2s7dwuHezEOUcft+1gJ845+nJl23CwU+csPW3TQcOhjvuYUrpxJpt20HBIGVanGu6z7zhIhsMhOnoQzvm6sWflYIxhDM7Jp3VVb9vB1p3z/L/oqI6DQTjn6a9bOSiewpY+d/Ssg66urN7F4qwdPD4+rnSuLL/OcZVzFf3/mW2hbzwTKvrX4gDAP+QtOL+aMRJmAAAAAElFTkSuQmCC)
html
	// remove scroll bar
	// overflow: hidden
	/* own scrollbar */
	/* scrollbar firefox */
	scrollbar-color: rgb(110, 110, 110) rgb(1, 1, 1)
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
	// .link
		// color: rgb(250,250,250)!important
.rotate-180
	-webkit-transform: rotate(180deg)
	-moz-transform: rotate(180deg)
	-ms-transform: rotate(180deg)
	-o-transform: rotate(180deg)
	transform: rotate(180deg)
#cookiePanel
	// margin-bottom: 120px
	background-color: #424242
	// &__buttons
	// 	&__button
	// 		&--accept
	// 			background-color: red
	// cookie__floating__buttons__button cookie__floating__buttons__button--accept
.cookie__floating__buttons
	button
		color: #ffffff
		background-color: #4caf50
</style>
