<!-- =========================== Vue =========================== -->
<template>
  <!-- Modal Begin -->
  <div class="black-bg" v-if="modal_isopen == true">
    <div  class="white-bg">
      <h4> 상세페이지임</h4>
      <p>상세페이지 내용임</p>
      <button @click="modal_isopen=false"> Close </button>
    </div>
  </div>
  <!-- Modal End -->

  <h3>원룸샵 ^ㅅ^</h3>
  <img alt="Vue logo" src="./assets/logo.png">


  <!-- Menu Bar -->
  <div class="menu">
    <a v-for="(iter, i) in menu_array" :key="i">{{ iter }}</a>
  </div>

  <!-- div 에 For문 쓰기 Begin -->
  <!-- <div class="product">
    <div v-for="i in products" :key="i">
      <h4>{{ i }}</h4>
      <p>가격: 50만원</p>
    </div>
  </div> -->
  <!-- div 에 For문 쓰기 End-->

  <!--Event Handler Begin-->
  <div>
    <img src="./assets/room0.jpg" class="room-img">
    <h4 id="product_0" @click="modal_isopen = true">{{ products[0] }}</h4>
    <p> 50만원 </p>
    <button @click="click_report[0] += 1"> 허위매물 신고 </button> <span>신고수: {{ click_report[0] }}</span>
  </div>
  <div>
    <img src="./assets/room1.jpg" class="room-img">
    <h4>{{ products[1] }}</h4>
    <p> 60만원 </p>
    <button @mouseover="click_report[1] += 10"> 허위매물 신고 </button> <span>신고수: {{ click_report[1] }}</span>
  </div>
  <div>
    <img src="./assets/room2.jpg" class="room-img">
    <h4>{{ products[2] }}</h4>
    <p> 70만원 </p>
    <button @click="click_func"> 허위매물 신고 </button> <span>신고수: {{ click_report[2] }}</span>
  </div>
  <!--Event Handler End-->
</template>


<!-- =========================== JavaScript =========================== -->
<script>
export default {
  name: 'App',
  // Data 보관함
  // UI 의 상태를 보관 (React에선s Status 라고 함)
  data() {
    return {
      products: ['역삼동 원룸', '천호동 원룸', '마포구 원룸'],
      prices: [40, 50, 60],
      menu_array: ['Home', 'Products', 'About'],
      click_report: [0, 0, 0],
      modal_isopen: false,
    }
  },

  // Function
  methods: {
    click_func() {
      this.click_report[2] += 5;
    }
  },

  //
  components: {

  }
}
</script>



<!-- =========================== CSS =========================== -->
<style>
/* modal begin */
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
/* modal end */

.room-img {
  width: 50%;
  margin-top: 40px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu {
  background: darkslategray;
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  color: white;
  padding: 30px;
}

.product {
  font-size: large;
  font-weight: 1000;
  color: brown;
}
</style>
