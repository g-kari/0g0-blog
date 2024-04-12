<template>
  <main>
    <article-list :articles="articles" />
  </main>
</template>

<script>
export default {
  name: 'IndexPage',
  async asyncData({ $content }) {
    const articles = await $content()
      // sortByを指定し、updatedAt（更新日）の降順にソート
      .sortBy('updatedAt', 'desc')
      // limitを指定し、10件のみ取得
      .limit(10)
      .fetch()

    return {
      articles
    }
  }
}
</script>

<style>
*,
.font-mplus1p {
  font-family: 'M PLUS 1p', sans-serif;
}
.font-quicksand {
  font-family: 'Quicksand', sans-serif;
}
</style>