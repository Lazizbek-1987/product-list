<template>
    <div class="mx-auto py-2 md:py-4">
        <input
            :type="type"
            :placeholder="placeholder"
            class="w-full outline-none md:px-9 md:py-4 rounded bg-gray-100 border-2 border-gray-200 focus:border-blue-500
            focus:bg-white duration-300"
        >
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "AppInput",
    props: {
        type: {type: String, default: 'text'},
        placeholder: {type: String}
    }
}
</script>

<style scoped>

</style>