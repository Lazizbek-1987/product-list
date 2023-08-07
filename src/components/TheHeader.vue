<template>
    <header class="flex justify-between px-6 md:px-10 py-4 items-center bg-gray-200">
        <h1 class="items-center text-lg md:text-xl font-bold tracking-widest uppercase">
            texnomart
        </h1>
        <ul class="flex items-center space-x-3 md:space-x-8 text-lg text-blue-700 font-bold">
            <li v-for="link in links" class="hover:text-blue-500 duration-300">
                <a :href="link.to">{{ link.title }}</a>
            </li>
        </ul>
    </header>
</template>

<script>
export default {
    name: "TheHeader",
    data() {
        return {
            links: [
                {title: 'About', to: '#'},
                {title: 'Contact', to: '#'},
                {title: 'Products', to: '#'}
            ]
        }
    }
}
</script>

<style scoped>

</style>