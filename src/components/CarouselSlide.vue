<template>
    <div v-show="visibleSlides === index" class="carousel-slide">
        <slot></slot>
    </div>
</template>
<script>
export default {
    props:['visibleSlides', 'index'],
    data() {
        return {

        }
    }
}
</script>
<style>

</style>