<template>
  <div>
    <div v-for="n in post" :key="n._path">
      <nuxt-link :to="n._path">{{ n.title }} {{ n.date }}</nuxt-link>
    </div>
  </div>
</template>

<script setup>
const { data: post } = await useAsyncData("post", () =>
  queryContent("post").find()
)
useHead({
  title: "News",
})
</script>