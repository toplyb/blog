<template>
  <div class="header">
    <div class="header-left" @click="handlerGotoDetailPage('/')">
      <img src="@/assets/images/logo.png" alt="">
    </div>
    <div class="header-right">
      <span @click="handlerGotoDetailPage('/article?type=CODE')">文章</span>
      <span @click="handlerGotoDetailPage('/article?type=LIFE')">生活</span>
      <span @click="handlerGotoDetailPage('/about')">关于</span>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { useRouter } from 'vue-router'

const router = useRouter()

const handlerGotoDetailPage = (route: string) => {
  router.push(route)
}

</script>

<style scoped lang="scss">
.header {
  height: 10vh;
  box-shadow: 0 0 3px 3px #ccc;
  margin: 10px;
  border-radius: 10px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &-left {
    width: 50px;
    height: 50px;
    cursor: pointer;
    overflow: hidden;
    border-radius: 50%;

    img {
      width: 100%;
      transform: scale(5);
    }
  }

  &-right {
    span {
      cursor: pointer;
      margin-left: 20px;
      padding: 10px 15px;
      border-radius: 10px;
      transition: all 0.5s;

      &:hover {
        font-size: 18px;
        background-color: #cccccc;
        color: #000000;
      }
    }
  }
}
</style>
