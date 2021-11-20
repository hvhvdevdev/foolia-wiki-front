<template>
  <v-app dark>
    <v-app-bar app color="primary" dark dense flat>
      <h1 class="title" @click="$router.push('/')">Foolia Personal Wiki</h1>
    </v-app-bar>
    <v-main>
      <Nuxt/>
    </v-main>
  </v-app>
</template>
