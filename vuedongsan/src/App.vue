<!-- =========================== Vue =========================== -->
<template>
  <!-- Modal Begin -->
  <!-- <div class="black-bg" v-if="modal_isopen == true">
    <div class="white-bg">
      <h4>{{ oneroom_data[clicked_obj].title }}</h4>
      <img :src="oneroom_data[clicked_obj].image">
      <p>{{ oneroom_data[clicked_obj].content }}</p>
      <p>Price: {{ oneroom_data[clicked_obj].price }}</p>
      <discount/>
      <button @click="modal_isopen = false"> Close </button>
    </div>
  </div> -->
  <!-- Modal End -->

  <!-- Component Usage -->
  <!-- <div class="start" :class="{ end: modal_isopen }">
    <COM_Modal @closeModal="modal_isopen = false;" :oneroom_data="oneroom_data" :clicked_obj="clicked_obj"
      :modal_isopen="modal_isopen" />
  </div> -->

  <Transition name="fade">
    <COM_Modal @closeModal="modal_isopen = false;" :oneroom_data="oneroom_data" :clicked_obj="clicked_obj"
      :modal_isopen="modal_isopen" />
  </Transition>

  <h3>원룸샵 ^ㅅ^</h3>
  <img alt="Vue logo" src="./assets/logo.png">


  <!-- Menu Bar -->
  <div class="menu">
    <a v-for="(iter, i) in menu_array" :key="i">{{ iter }}</a>
  </div>


  <!--Component--->
  <COM_Discount />
  <!--Component--->

  <button @click="priceSort"> 가격순정렬 </button>
  <button @click="restore"> 되돌리기 </button>


  <!--v-if 문 사용 방법-->
  <!-- <div v-if="clicked_obj == 0">
    0번 눌렀어요
  </div>
  <div v-else-if="clicked_obj == 1">
    1번 눌렀어요
  </div>
  <div v-else>
    0번과 1번 외에 눌렀어요
  </div> -->


  <!-- Method 3: Component 사용 -->
  <!-- <div v-for="(oneroom, i) in oneroom_data" :key="i">
    <COM_Card :oneroom_data="oneroom" :modal_isopen="modal_isopen"></COM_Card>
  </div> -->

  <!--이렇게도 가능-->
  <COM_Card @openModal="modal_isopen = true; clicked_obj = $event" :oneroom_data="oneroom_data[i]"
    v-for="(oneroom, i) in oneroom_data" :key="oneroom" />


  <!-- Method 2: div 에 For문 쓰기 Begin -->
  <!-- <div class="product">
    <div v-for="(a, i) in oneroom_data" :key="i">
      <img :src=a.image class="room-img" @click="modal_isopen = true; clicked_obj = i">
      <h4 id="product_0">{{ a.title }}</h4>
      <p> Price: {{ a.price }} Won </p>
    </div>
  </div> -->
  <!-- div 에 For문 쓰기 End-->

  <!--Method 1: Event Handler Begin-->
  <!-- <div>
    <img :src=oneroom_data[0].image class="room-img">
    <h4 id="product_0" @click="modal_isopen = true">{{ oneroom_data[0].title }}</h4>
    <p> Price: {{ oneroom_data[0].price }} Won </p>
    <button @click="click_report[0] += 1"> 허위매물 신고 </button> <span>신고수: {{ click_report[0] }}</span>
  </div>
  <div>
    <img :src=oneroom_data[1].image class="room-img">
    <h4 id="product_1" @click="modal_isopen = true">{{ oneroom_data[1].title }}</h4>
    <p> Price: {{ oneroom_data[1].price }} Won </p>
    <button @mouseover="click_report[1] += 10"> 허위매물 신고 </button> <span>신고수: {{ click_report[1] }}</span>
  </div>
  <div>
    <img :src=oneroom_data[2].image class="room-img">
    <h4 id="product_1" @click="modal_isopen = true">{{ oneroom_data[2].title }}</h4>
    <p> Price: {{ oneroom_data[2].price }} Won </p>
    <button @click="click_func"> 허위매물 신고 </button> <span>신고수: {{ click_report[2] }}</span>
  </div> -->
  <!--Event Handler End-->

  <!--Event Handler Iteration Begin-->
  <!-- <data_div v-for="(iter, i) in oneroom_data" :key="i">
    <div>
      <img :src=i.img class="room-img">
      <h4 @click="modal_isopen = true">{{ i.title }}</h4>
      <p> Price: {{ iter[0].price }} Won </p>
      <button @click="click_report[0] += 1"> 허위매물 신고 </button> <span>신고수: {{ click_report[0] }}</span>
    </div>
  </data_div> -->
  <!--Event Handler Iteration End-->
</template>


<!-- =========================== JavaScript =========================== -->
<script>

// import 한 변수는 어디선가는 사용해줘야 오류가 안남
import { oneroom_array } from './assets/oneroom.js';
import Discount from './Discount.vue';
import Modal from './Modal.vue';
import Card from './Card.vue';

export default {
  name: 'App',
  // Data 보관함
  // UI 의 상태를 보관 (React에선 Status 라고 함)
  data() {
    return {
      products: ['역삼동 원룸', '천호동 원룸', '마포구 원룸'],
      prices: [40, 50, 60],
      menu_array: ['Home', 'Products', 'About'],
      click_report: [0, 0, 0],
      modal_isopen: false,
      oneroom_data: oneroom_array,
      oneroom_origin: [...oneroom_array], // Shallow Copy
      clicked_obj: 0,
      오브젝트: { name: 'Kim', age: 20 },
    }
  },

  // Function
  methods: {
    click_func() {
      this.click_report[2] += 5;
    },
    priceSort(){
      this.oneroom_data.sort(function(a, b) {
        return a.price - b.price
      })
    },
    restore(){
      this.oneroom_data = [...this.oneroom_origin];
    }
  },

  // Components
  components: {
    COM_Discount: Discount,
    COM_Modal: Modal,
    COM_Card: Card,
  }
}
</script>



<!-- =========================== CSS =========================== -->
<style>
/* vue animation begin */
/* 시작 */
.fade-enter-from {
  opacity: 0;
}

/* 애니메이션 */
.fade-enter-active {
  transition: all 1s;
}

/* 끝 */
.fade_enter-to {
  opacity: 1;
}

/* vue animation end */

/* modal animation begin */
.start {
  opacity: 0;
  transition: all 1s;
}

.end {
  opacity: 1;
}

/* modal animation end */


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
