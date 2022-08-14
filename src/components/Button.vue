<template>
    <button @click="click ? click() : void 0" class="py-2 bg-blue-500 text-white px-5 rounded-lg focus:shadow-2xl shadow-blue-600 hover:bg-blue-600 transition duration-200">
        <slot></slot>
    </button>
</template>
<script>
    export default {
        props: [
            'click'
        ]
    }
</script>