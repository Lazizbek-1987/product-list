<template>
    <div class="w-full min-h-screen overflow-hidden">
        <the-header />
        <div class="px-6 md:px-10">
            <product-card />
        </div>
        <the-footer />
    </div>
</template>

<script>
import {defineComponent} from "vue";
import TheHeader from "@/components/TheHeader.vue";
import {MagnifyingGlassIcon} from '@heroicons/vue/24/outline'
import ProductCard from "@/components/ProductCard.vue";
import TheFooter from "@/components/TheFooter.vue";

export default defineComponent({
    components: {TheFooter, ProductCard, TheHeader, MagnifyingGlassIcon}
})
</script>

<style>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}
</style>
