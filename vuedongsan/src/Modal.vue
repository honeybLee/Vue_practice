<template>
      <div class="black-bg" v-if="modal_isopen == true">
    <div class="white-bg">
      <h4>{{ oneroom_data[clicked_obj].title }}</h4>
      <img :src="oneroom_data[clicked_obj].image">
      <p>{{ oneroom_data[clicked_obj].content }}</p>
      <p>Price: {{ oneroom_data[clicked_obj].price }}</p>
      <discount/>
      <!-- <button @click="modal_isopen = false"> Close </button> -->
    </div>
  </div>
</template>

<script>
export default {
    name: 'ModalPopUp',
    props: {
        oneroom_data : Object,
        clicked_obj: Number,
        modal_isopen: Boolean,
    },
}
</script>

<style>
body {
  margin: 0
}

div {
  box-sizing: border-box;
}

.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}

.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}

</style>