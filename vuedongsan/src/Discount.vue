<template>
    <div class="discount">
        <h4> 지금 결제하면 {{ discount_rate }}% 할인! </h4>
    </div>
</template>



<script>
export default {
    name: 'com_discounts',
    data() {
        return {
            discount_rate: 20,
        }
    },

    //   Lifecycle Hook
    mounted() {
        if (this.discount_rate > 0) {
            this.intervalId = setInterval(() => {
                this.discount_rate -= 1;
            }, 200);
        }
    },
    beforeUpdate() {
        if (this.discount_rate == 0) {
            clearInterval(this.intervalId)
        }
    },
}
</script>


<style>
.discount {
    background: whitesmoke;
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
}
</style>
