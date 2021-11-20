<template>
  <v-list-item three-line>
    <v-list-item-content>
      <v-list-item-title><a :href="target">{{ data.title }}</a></v-list-item-title>
      <v-list-item-subtitle>{{ summary }}...</v-list-item-subtitle>
      {{ data }}
      <v-list-item-subtitle>
        <v-chip-group>
          <v-chip v-for="tag in data.tags" :key="tag" link outlined small>
            {{ tag }}
          </v-chip>
        </v-chip-group>
      </v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'
import Article from "~/interfaces/article";
import convertToSlug from "~/utils/convertToSlug";

@Component
export default class ArticlePreview extends Vue {
  @Prop({required: true}) data!: Article

  get summary() {
    // return this.data.content.slice(0, 50)
  }

  get target() {
    return ("/article/" + convertToSlug(this.data.title))
  }
}
</script>
