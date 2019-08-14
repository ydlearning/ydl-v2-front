<template lang="pug">
    v-layout(align-center justify-center)
        v-card(flat color="rgb(110, 110, 110, 0)")
            v-container
                v-flex
                    h3.text-center.display-2.text-center.font-weight-regular News
                v-flex
                    TheNews
</template>

<script>
import TheNews from "@/components/TheNews";

export default {
    components: { TheNews }
};
</script>
