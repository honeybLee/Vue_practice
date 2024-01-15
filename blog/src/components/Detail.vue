<template>
    <p> 선택된 detail idx:{{ $route.params.idx }} </p>
    <div>
        <h3 class="container mt-4">Detail Page</h3>
        <h5>{{blog_data[$route.params.idx].title}}</h5>
        <p>{{blog_data[$route.params.idx].content}}</p>
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