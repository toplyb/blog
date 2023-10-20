<template>
  <div>
article
  </div>
</template>

<script setup lang='ts'>
import { onBeforeRouteUpdate } from 'vue-router'
import { ref, watch } from 'vue'
import { TArticleType } from '@/types'

const articleType = ref<TArticleType>('CODE')

onBeforeRouteUpdate((to, from) => {
  articleType.value = to['query']['type'] as TArticleType
})
watch(articleType, (value, oldValue) => {
  console.log(value, 'value')
  console.log(oldValue, 'oldValue')
  // 根据 articleType 来请求不同类型的文章列表
}, {
  immediate: true
})
</script>

<style scoped lang='scss'>

</style>
