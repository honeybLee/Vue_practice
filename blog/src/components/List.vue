<template lang="english">
<div style="display: flex; align-items: center; justify-content: center;">
<div class="card" style="width: 35rem; margin: 20px">
  <div class="card-body">
    <h5 class="card-title">{{blog_data.title}}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">{{blog_data.date}}</h6>
    <p class="card-text">{{blog_data.content}}</p>
    <a href="#" class="card-link">{{blog_data.number}}_link</a>
  </div>
  </div>
</div>

</template>
<script>
export default {
  name: 'com_list',
  data() {
    return {
    }
  },
  props: {
    blog_data: Object
  },
}
</script>
<style lang="">
    
</style>