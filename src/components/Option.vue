<template>
    <button :class="`${active ? 'bg-blue-500' : 'bg-transparent'} transition duration-300 border border-blue-500 rounded-xl dark:text-white p-2`" @click="setAnswer(answer)" v-html="answer">
    </button>
</template>

<script>
export default {
    props: [
        'active',
        'setAnswer',
        'answer'
    ],
}
</script>