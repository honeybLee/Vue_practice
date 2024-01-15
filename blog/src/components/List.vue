<template lang="english">
<div style="display: flex; align-items: center; justify-content: center; flex-direction: column;">
  <div v-for="(data, i) in blog_data" :key="data" class="card-body">
    <div class="card" style="width: 35rem; margin: 20px">
    <h5 class="card-title">{{data.title}}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">{{data.date}}</h6>
    <!-- <router-link to='/detail'>
      <router-view></router-view>
      <router-view :detail_data="blog_data"></router-view>
      <a class="card-link">{{data.number}}_detail</a>
    </router-link> -->
  </div>
  </div>
</div>
</template>


<script>
export default {
  name: 'com_list',
  data() {
    return {
      selected_idx: 0,
    }
  },

  props: {
    blog_data: Array
  },
}
</script>
<style lang="">
    
</style>