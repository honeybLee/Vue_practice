<template>
    <div class="product">
        <div v-for="(a, i) in oneroom_data" :key="i">
            <img :src=a.image class="room-img" @click="modal_isopen">
            <!-- <img :src=a.image class="room-img">  -->
            <h4 id="product_0">{{ a.title }}</h4>
            <p> Price: {{ a.price }} Won </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'com_card',
    props: {
        oneroom_data: Object,
        modal_isopen: Boolean,
    }
}


</script>

<style></style>