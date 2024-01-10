<template>
    <div class="product">
        <img :src=oneroom_data.image class="room-img">
        <h4 @click="$emit('openModal', oneroom_data.id)">{{ oneroom_data.title}}</h4>
        <p> Price: {{ oneroom_data.price }} Won </p>
    </div>
</template>

<script>
export default {
    name: 'com_card',
    props: {
        oneroom_data: Object,
    }
}


</script>

<style></style>