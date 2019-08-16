<template lang="pug">
    v-list(dense)
        template(v-for="(task, index) in tasks")
            TaskListItem(
                :courseName="task.course_name"
                :name="task.name"
                :dueTo="task.due_to"
                :type="task.type"
            )
            v-divider(v-if="index < tasks.length - 1")
</template>

<script>
import TaskListItem from "@/components/TaskListItem";

import json from "@/data/dashboard/tasks.json";

export default {
    name: "TaskList",
    data() {
        return {
            tasks: []
        };
    },
    components: {
        TaskListItem
    },
    mounted() {
        this.tasks = json.data.allTasks;
    }
};
</script>

<style lang="sass"></style>
