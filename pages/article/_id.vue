<template>
  <v-container>
    <ArticleFull :data="
$store.getters['article/articles'].find((x) => convertToSlug(x.title) == $route.params.id)"></ArticleFull>
  </v-container>
</template>

<script>
import convertToSlug from "~/utils/convertToSlug";

export default {
  methods: {
    convertToSlug: convertToSlug
  }
}
</script>
