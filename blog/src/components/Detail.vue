<template>
    <div>
        <h3 class="container mt-4">Detail Page</h3>
        <p> 선택된 detail idx:{{ $route.params.idx }} </p>
        <h4>{{ blog_data[$route.params.idx].title }}</h4>
        <h5>{{ blog_data[$route.params.idx].content }}</h5>
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
        blog_data: Array,
    },
}
</script>

<style></style>