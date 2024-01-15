<template>
  <div class="black-bg" v-if="modal_isopen == true">
    <div class="white-bg">
      <h4>{{ oneroom_data[clicked_obj].title }}</h4>
      <img :src="oneroom_data[clicked_obj].image">
      <p>{{ oneroom_data[clicked_obj].content }}</p>
      <!--긴 버전-->
      <!-- <input @input="month = $event.target.value"> -->
      <!--짧은 버전-->
      <input v-model.number="month" style="margin-right: 30px; width: 100px;">
      <input type="range" min="1" max="12" style="margin-right: 30px;">
      <select v-model.number="month">
        <option>3</option>
        <option>6</option>
        <option>12</option>
      </select>
      <p> {{ month }} 개월 선택함: {{ oneroom_data[clicked_obj].price * month }}</p>
      <COM_Discount />
      <button @click="$emit('closeModal')"> Close </button>
    </div>
  </div>
</template>

<script>
import Discount from './Discount.vue';

export default {
  name: 'ModalPopUp',
  data() {
    return {
      month: 1,
    }
  },
  watch: {
    // a = 변경 후 데이터
    // b = 변경 전 데이터
    month(a) {
      if (this.isNumeric(a) == false) {
        alert('문자열 입력하지 마세요');
        this.month = 1;
      }
    }
  },
  beforeUpdate() {
    if (this.month > 12) {
      alert ('최대 개월수는 12개월이에요.')
      this.month = 12;
    }
  },

  methods: {
    isNumeric(input) {
      var numericRegexp = /^[0-9]+$/;
      return numericRegexp.test(input);
    }
  },
  props: {
    oneroom_data: Object,
    clicked_obj: Number,
    modal_isopen: Boolean,
  },

  components: {
    COM_Discount: Discount
  }
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