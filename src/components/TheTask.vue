<template lang="pug">
    BaseDashboardItem(
        title="Tasks"
    )
        TaskList
</template>

<script>
import BaseDashboardItem from "@/components/BaseDashboardItem";
import TaskList from "@/components/TaskList";

export default {
    name: "TheTask",
    components: {
        BaseDashboardItem,
        TaskList
    }
};
</script>

<style lang="sass"></style>
