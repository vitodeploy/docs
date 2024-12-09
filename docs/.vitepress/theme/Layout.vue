<script setup>
import DefaultTheme from 'vitepress/theme'

const {Layout} = DefaultTheme
</script>

<template>
  <Layout>
    <template #layout-top>
      <div style="height: 30px; display: flex; align-items: center; justify-content: center; background: #4E44E6; width: 100%; text-align: center; position: fixed; top: 0; left: 0; right: 0; z-index: 100; color: white !important;">
        VitoDeploy v2 is out! 🎉 <a href="https://vitodeploy.com" style="text-decoration: underline;">Check Here</a>
      </div>
    </template>
  </Layout>
</template>