<template lang="pug">
    v-container.remove-top-padding
        v-row.remove-top-padding(v-for="p_news in news" :key="p_news.title")
            v-col(max-width=800)
                NewsListItem(
                    :title="p_news.title"
                    :content="p_news.content"
                    :author="p_news.User.username"
                    :date="p_news.date")
</template>

<script>
import NewsListItem from "@/components/NewsListItem";

import json from "@/data/news.json";

export default {
    name: "NewsList",
    components: {
        NewsListItem
    },
    data() {
        return {
            news: []
        };
    },
    mounted() {
        this.news = json.data.allNews.news;
    }
};
</script>

<style lang="sass">
.remove-top-padding
    padding-top: 0
</style>
