<template>
    <div class="carousel">
        <button class="button-icon prev" @click="prev"><span class="material-icons navigate">navigate_before</span></button>
        <button class="button-icon next" @click="next"><span class="material-icons navigate">navigate_next</span></button>
        <slot></slot>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        next() {
            this.$emit('next');
        },
        prev() {
            this.$emit('prev');
        }
    }
}
</script>
<style>
</style>