<template>
  <div>
    <div v-for="(article, index) of articles" :key="article.slug"
         class="flex flex-col py-10 border-b-2 text-gray-800"
         :class="(index + 1) === articles.length ? 'border-none' : ''">
      <div class="text-xs mb-2">
        <p>{{ $dayjs(article.updatedAt).format('YYYY-MM-DD') }}</p>
      </div>
      <NuxtLink :to="{ name: 'article-slug', params: { slug: article.slug }}" class="inline-block">
        <p class="text-2xl font-light leading-none">{{ article.title }}</p>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // 記事一覧を受け取る
    articles: {
      type: Array,
      required: true
    }
  }
}
</script>