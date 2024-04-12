<template>
  <main>
    <h1 class="text-3xl text-center">{{ article.title }}</h1>
    <nuxt-content :document="article" />
  </main>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content(params.slug).fetch();

    return {
      article,
    };
  },
};
</script>
