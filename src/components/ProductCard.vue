<template>
    <main
        class="flex justify-center gap-3"
    >
        <div
            v-for="product in products" :key="product.id"
            class="p-8 md:p-20 bg-gray-200 border-2 border-gray-400"
        >
            {{ product.title }}
        </div>
    </main>
</template>

<script>
export default {
    name: "ProductCard",
    data() {
        return {
            products: [
                {id: 1, title: 'Olma', price: 10},
                {id: 2, title: 'Anor', price: 17},
                {id: 3, title: 'Shaftoli', price: 22},
                {id: 4, title: 'Gilos', price: 15}
            ]
        }
    }
}
</script>

<style scoped>

</style>