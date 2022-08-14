<script setup>
    import Option from '@/components/Option.vue'
</script>
<template>
    <div class="grid md:grid-cols-2 w-max lg:grid-cols-4 gap-2">
        <Option v-for="opt in answers" :setAnswer="setLocalAnswer" :answer="opt" :active="answer === opt">{{ opt }}</Option>
    </div>
</template>

<script>
    export default {
        props: [
            'answers',
            'setGlobalAnswer',
            'question'
        ],
        data() {
            return {
                answer: ''
            }
        },
        methods: {
            setLocalAnswer(answer) {
                this.answer = answer
                this.setGlobalAnswer(this.question, answer)
            }
        }
    }
</script>
