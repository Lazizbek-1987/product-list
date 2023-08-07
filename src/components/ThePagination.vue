<template>
    <div class="flex items-center justify-center mt-4">
        <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
            <a
                v-if="currentPage > 1"
                @click="changePage(currentPage - 1)"
                class="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-gray-200 border
                border-gray-300 cursor-pointer hover:bg-gray-50"
            >
                Previous
            </a>
            <a
                v-for="page in totalPages"
                :key="page"
                @click.prevent="changePage(page)"
                :class="page === currentPage ? 'bg-blue-700 text-white' : 'text-gray-700 hover:bg-gray-50'"
                class="relative inline-flex items-center px-4 py-2 text-sm font-medium bg-white border border-gray-300
                cursor-pointer"
            >
                {{ page }}
            </a>
            <a
                v-if="currentPage < totalPages"
                @click="changePage(currentPage + 1)"
                class="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-gray-200 border
                border-gray-300 cursor-pointer hover:bg-gray-50"
            >
                Next
            </a>
        </nav>
    </div>
</template>

<script>
export default {
    name: "ThePagination",
    props: {
        currentPage: Number,
        totalPages: Number,
    },
    methods: {
        changePage(newPage) {
            this.$emit('page-change', newPage);
        },
    },
}
</script>

<style scoped>

</style>