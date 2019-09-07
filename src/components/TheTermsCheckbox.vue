<template lang="pug">
//- append-icon="mdi-draw"  
v-checkbox(
    color="success"
    @change="$emit('change',$event)"  
)
    template(v-slot:label)
        div(@click.stop="")
            | Do you accept the 
            a(href="javascript:;") terms
            |  and 
            a(href="javascript:;") conditions
            | ?
</template>

<script>
export default {
    name: "TheTermsCheckbox",
    model: {
        prop: "checked",
        event: "change"
    },
    props: {
        checked: {
            type: Boolean,
            default: false
        }
    }
};
</script>

<style lang="sass"></style>
