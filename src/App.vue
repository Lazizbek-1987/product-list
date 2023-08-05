<template>
    <div class="w-full min-h-screen overflow-hidden">
        <the-header />
        <app-input
            :placeholder="'Search...'"
            class="w-1/2 relative"
        >
            <magnifying-glass-icon class="absolute top-[35px] left-3 w-6 h-6 text-gray-300 focus:text-blue-500"/>
        </app-input>

        <product-card />
    </div>
</template>

<script>
import {defineComponent} from "vue";
import TheHeader from "@/components/TheHeader.vue";
import AppInput from "@/components/AppInput.vue";
import {MagnifyingGlassIcon} from '@heroicons/vue/24/outline'
import ProductCard from "@/components/ProductCard.vue";

export default defineComponent({
    components: {ProductCard, AppInput, TheHeader, MagnifyingGlassIcon}
})
</script>

<style scoped>
</style>
