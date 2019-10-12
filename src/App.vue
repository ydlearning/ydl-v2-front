<template lang="pug">
	v-app(v-bind:id="this.$vuetify.theme.dark ? 'app--dark' : 'app--light'")
		v-navigation-drawer(v-model="drawer" app clipped color="#131313")
			TheDashboardList
		TheAppbar
		v-content
			v-sheet.pa-4(style="position: fixed; right:0; bottom:0" color="transparent")
				v-hover( v-slot:default="{ hover }")
					v-btn.mr-2(fab small @click="switchTheme()")
						v-icon(v-if="$vuetify.theme.dark" small :color="!hover ? 'white' : 'yellow'") mdi-lightbulb-on
				v-icon(v-else small) mdi-lightbulb
				v-btn.ml-2(fab small)
					cf-country-flag(country="en" size="small")

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
import TheAppbar from "@/components/TheAppbar";
import CountryFlag from "vue-country-flag";

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
		TheAppbar,
		// somehow indicate that this is a third party component (cf-)
		"cf-country-flag": CountryFlag
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
		},
		switchTheme() {
			this.$vuetify.theme.dark = !this.$vuetify.theme.dark
			// update localStorage
			localStorage.setItem("isLightTheme", !this.$vuetify.theme.dark);
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
	background-color: #424242
.cookie__floating__buttons
	button
		color: #ffffff
		background-color: #4caf50
</style>
