<template lang="pug">
    v-card.ma-4(style="position: fixed; right:0; bottom:0")
        v-list(dense)
            v-subheader API Server Status
            v-list-item(v-if="!fetching")
                v-list-item-icon.mr-2
                    v-icon(:class="ping_result ? 'green--text' : 'error--text'") mdi-checkbox-blank-circle
                v-list-item-content Online
            v-list-item(v-else)
                v-progress-circular(
                    indeterminate
                    color="primary"
                )
            template(v-if="!fetching")
                v-subheader Use API requests
                v-list-item
                    v-btn Activate
</template>

<script>
import { setTimeout } from "timers";
export default {
    name: "TheDebug",
    data() {
        return {
            ping_result: false,
            fetching: true
        };
    },
    mounted() {
        setTimeout(this.ping, 2000);
    },
    methods: {
        ping() {
            var url = process.env.VUE_APP_API_URL;

            fetch(url, { mode: "no-cors" })
                .then(response => {
                    console.log(response);
                    if (response.status !== 200) {
                        this.ping_result = false;
                    }

                    this.ping_result = true;
                    this.fetching = false;
                })
                .catch(() => {
                    this.fetching = false;
                });
        }
    }
};
</script>
