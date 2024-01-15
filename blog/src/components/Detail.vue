<template>
    <div>
        <h3>Detail Page</h3>
        <h5>Detail Title</h5>
        <p>{{ detail_content }}</p>
    </div>
</template>

<script>
export default {
    name: 'com_detail',
    data() {
        return {

        }
    },
    props: {
        detail_content: String,
    },
}
</script>

<style></style>