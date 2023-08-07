<template>
    <div class="w-2/3 relative mx-auto py-2 md:py-4 my-5 md:my-6">
        <input
            type="search"
            placeholder="Search..."
            class="w-full outline-none px-9 py-4 rounded-full bg-gray-100 border-2
            border-gray-200 focus:border-blue-500 focus:bg-white duration-300"
            v-model="value"
            @keyup.enter="search(value)"
        >
        <magnifying-glass-icon
            class="absolute top-7 left-3 md:top-[35px] md:left-[10px] w-5 h-5  md:w-6 md:h-6 text-gray-300
            focus:text-blue-500"
        />
    </div>

    <div class="text-center my-6 text-2xl font-bold tracking-widest">
        Umumiy mahsulotlar soni {{ getLimitProductsList.total }} ta
    </div>
    <main class="flex justify-center flex-wrap gap-6 mb-8 md:mb-12">
        <div
            v-for="product in getLimitProductsList.products"
            :key="product.id"
            class="w-[300px] h-min-[400px] mx-auto bg-white rounded-md overflow-hidden shadow-lg hover:scale-105
            hover:shadow-blue-300 duration-300"
        >
            <div class="p-4 h-56 lg:h-80 overflow-hidden">
                <img class="object-cover w-full h-full" :src="product.thumbnail" alt="Product Image">
            </div>

            <div class="p-4">
                <h2 class="text-xl font-semibold mb-2">
                    {{ product.title.slice(0, 22) }} {{ product.title.length > 22 ? '...' : '' }}
                </h2>

                <p class="text-gray-600 mb-4">Price ${{ product.price }}</p>

                <div class="flex justify-end space-x-3">
                    <chat-bubble-left-ellipsis-icon
                        class="w-6 h-6 text-blue-500 hover:text-blue-400 hover:cursor-pointer"/>
                    <heart-icon class="w-6 h-6 text-red-500 hover:text-red-400 hover:cursor-pointer"/>
                </div>
            </div>

        </div>
    </main>

    <the-pagination
        :current-page="currentPage"
        :total-pages="totalPages"
        @page-change="onPageChange"
    />

</template>

<script>
import {mapActions, mapGetters} from "vuex";
import {ChatBubbleLeftEllipsisIcon, HeartIcon, MagnifyingGlassIcon} from "@heroicons/vue/24/outline"
import ThePagination from "@/components/ThePagination.vue";

export default {
    name: "ProductCard",
    components: {ThePagination, ChatBubbleLeftEllipsisIcon, HeartIcon, MagnifyingGlassIcon},
    data() {
        return {
            value: '',
            currentPage: 1,
            totalProducts: 0,
        }
    },
    watch: {
        'getLimitProductsList.total'(newTotal) {
            this.totalProducts = newTotal;
        }
    },
    computed: {
        ...mapGetters(['getLimitProductsList', 'getSearchProductsList', 'getTotalProductsCount']),
        totalPages() {
            return Math.ceil(this.totalProducts / 12);
        }
    },
    methods: {
        ...mapActions(['fetchLimitProducts', 'searchProducts']),
        getProducts(skip) {
            this.fetchLimitProducts({
                limit: 12,
                select: 'title,price,thumbnail',
                skip
            })
        },
        onPageChange(newPage) {
            this.currentPage = newPage;
            const pageSize = 12;
            const start = (newPage - 1) * pageSize;
            this.getProducts(start)
        },
        search(data) {
            this.searchProducts(data)
            this.getLimitProductsList.products = this.getSearchProductsList.products
            this.value = ''
        }
    },
    mounted() {
        this.getProducts(0)
        this.value.length ? this.searchProducts(this.value) : ''
    }
}
</script>

<style scoped>

</style>