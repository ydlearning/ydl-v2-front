<template lang="pug">
v-dialog(v-model="showDialog" :max-width="maxWidth" max-height="430" min-height="400")
        template(v-slot:activator="{ on }")
            v-btn(icon small v-on="on")
                v-icon mdi-pencil
        v-card
            v-card-title
                span Edit
                v-spacer
                v-card-actions
                    v-checkbox(v-model="isSelectAllSelected" @change="checkboxChanged" :label="isSelectAllSelected ? 'Deselect All' : 'Select All'")
            v-divider
            v-card-action
                v-btn.warning(outlined) Delete
</template>

<script>
export default {};
</script>
