<template>
    <div class="product">
        <img :src=oneroom_data.image class="room-img">
        <h4 @click=sendOpenModal>{{ oneroom_data.title}}</h4>
        <p> Price: {{ oneroom_data.price }} Won </p>
    </div>
</template>

<script>
export default {
    name: 'com_card',
    props: {
        oneroom_data: Object,
    },

    methods : {
        sendOpenModal() {
            this.$emit('openModal', this.oneroom_data.id)
        }
    }
}


</script>

<style></style>