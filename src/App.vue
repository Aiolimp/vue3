<template>
  <!-- 和 vue-router3 一样，展示路由的组件的地方 -->
  <router-view />
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  name: 'App',
  setup() {
    const router = useRouter()
    const goToHome = () => router.push('Home')
    return { goToHome }
  }
}
</script>

<style>
</style>
