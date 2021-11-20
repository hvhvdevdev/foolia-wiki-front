<template>
  <v-sheet class="pa-5" elevation="2">
    <h2>{{ data.title }}</h2>
    <p>
      {{ data.content }}
    </p>
    <p>
      <strong>Tags: </strong>
      <v-chip-group>
        <v-chip v-for="tag in data.tags" :key="tag" outlined small>{{ tag }}</v-chip>
      </v-chip-group>
    </p>
  </v-sheet>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'
import Article from "~/interfaces/article";

@Component
export default class ArticleFull extends Vue {
  @Prop({required: true}) data!: Article;
}
</script>
