<template lang="pug">
v-container.container-padding(fluid)
    v-row(align='center' justify='center')
        v-card.elevation-12(width="85%")
            //- Toolbar / App Title
            v-toolbar(color='primary' flat)
                v-icon.pr-1 {{ icon }}
                v-toolbar-title {{ this.$route.name }}
                div.flex-grow-1
            v-card-text.body-1
                slot
  
</template>

<script>
export default {
    name: "BaseFooterItem",
    props: {
        icon: {
            type: String,
            default: null
        }
    }
};
</script>
