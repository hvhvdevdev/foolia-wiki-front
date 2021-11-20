<template>
  <v-container>
    <v-row>
      <v-col>
        <h2>Articles</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-list v-for="article in $store.getters['article/articles']" :key="article.title">
          <ArticlePreview :data="article"></ArticlePreview>
        </v-list>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h2>Tags</h2>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('article/updateArticles')
  }
}
</script>
