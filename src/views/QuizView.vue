<script setup>
import Options from '@/components/Options.vue'
import Button from '@/components/Button.vue'
import { RouterLink } from 'vue-router'
</script>
<template>
    <div>
        <div v-if="questions.length > 0" class="flex flex-col p-20 gap-12">
            <div v-for="question in questions" class="flex flex-col gap-3">
                <h1 class="dark:text-white text-2xl text-gray-800" v-html="question.question"></h1>
                <Options :question="question.question" :setGlobalAnswer="setAnswer"
                    :answers="shuffle([...question.incorrect_answers, question.correct_answer])"></Options>
            </div>
        </div>
        <div v-if="questions.length > 0" class="grid place-items-center pb-8">
            <Button :click="checkResult" v-if="!showResult">See Result</Button>
            <p class="text-xl dark:text-white text-gray-800" v-if="showResult">
                You have scored
                {{ result }}
                out of 10, {{ result <= 5 ? 'Good luck next time' : 'Congratulations' }}. <RouterLink to="/" class="underline text-blue-500">Try Again
                    </RouterLink>
            </p>
        </div>
        <div v-if="questions.length === 0" id="loader" class="text-white grid h-screen place-items-center">
            <div class="container">
                <div class="h1Container">
                    <div class="cube h1 w1 l1">
                        <div class="face top"></div>
                        <div class="face left"></div>
                        <div class="face right"></div>
                    </div>

                    <div class="cube h1 w1 l2">
                        <div class="face top"></div>
                        <div class="face left"></div>
                        <div class="face right"></div>
                    </div>

                    <div class="cube h1 w1 l3">
                        <div class="face top"></div>
                        <div class="face left"></div>
                        <div class="face right"></div>
                    </div>

                    <div class="cube h1 w2 l1">
                        <div class="face top"></div>
                        <div class="face left"></div>
                        <div class="face right"></div>
                    </div>

                    <div class="cube h1 w2 l2">
                        <div class="face top"></div>
                        <div class="face left"></div>
                        <div class="face right"></div>
                    </div>

                    <div class="cube h1 w2 l3">
                        <div class="face top"></div>
                        <div class="face left"></div>
                        <div class="face right"></div>
                    </div>

                    <div class="cube h1 w3 l1">
                        <div class="face top"></div>
                        <div class="face left"></div>
                        <div class="face right"></div>
                    </div>

                    <div class="cube h1 w3 l2">
                        <div class="face top"></div>
                        <div class="face left"></div>
                        <div class="face right"></div>
                    </div>

                    <div class="cube h1 w3 l3">
                        <div class="face top"></div>
                        <div class="face left"></div>
                        <div class="face right"></div>
                    </div>
                </div>

                <div class="h2Container">
                    <div class="cube h2 w1 l1">
                        <div class="face top"></div>
                        <div class="face left"></div>
                        <div class="face right"></div>
                    </div>

                    <div class="cube h2 w1 l2">
                        <div class="face top"></div>
                        <div class="face left"></div>
                        <div class="face right"></div>
                    </div>

                    <div class="cube h2 w1 l3">
                        <div class="face top"></div>
                        <div class="face left"></div>
                        <div class="face right"></div>
                    </div>

                    <div class="cube h2 w2 l1">
                        <div class="face top"></div>
                        <div class="face left"></div>
                        <div class="face right"></div>
                    </div>

                    <div class="cube h2 w2 l2">
                        <div class="face top"></div>
                        <div class="face left"></div>
                        <div class="face right"></div>
                    </div>

                    <div class="cube h2 w2 l3">
                        <div class="face top"></div>
                        <div class="face left"></div>
                        <div class="face right"></div>
                    </div>

                    <div class="cube h2 w3 l1">
                        <div class="face top"></div>
                        <div class="face left"></div>
                        <div class="face right"></div>
                    </div>

                    <div class="cube h2 w3 l2">
                        <div class="face top"></div>
                        <div class="face left"></div>
                        <div class="face right"></div>
                    </div>

                    <div class="cube h2 w3 l3">
                        <div class="face top"></div>
                        <div class="face left"></div>
                        <div class="face right"></div>
                    </div>
                </div>

                <div class="h3Container">
                    <div class="cube h3 w1 l1">
                        <div class="face top"></div>
                        <div class="face left"></div>
                        <div class="face right"></div>
                    </div>

                    <div class="cube h3 w1 l2">
                        <div class="face top"></div>
                        <div class="face left"></div>
                        <div class="face right"></div>
                    </div>

                    <div class="cube h3 w1 l3">
                        <div class="face top"></div>
                        <div class="face left"></div>
                        <div class="face right"></div>
                    </div>

                    <div class="cube h3 w2 l1">
                        <div class="face top"></div>
                        <div class="face left"></div>
                        <div class="face right"></div>
                    </div>

                    <div class="cube h3 w2 l2">
                        <div class="face top"></div>
                        <div class="face left"></div>
                        <div class="face right"></div>
                    </div>

                    <div class="cube h3 w2 l3">
                        <div class="face top"></div>
                        <div class="face left"></div>
                        <div class="face right"></div>
                    </div>

                    <div class="cube h3 w3 l1">
                        <div class="face top"></div>
                        <div class="face left"></div>
                        <div class="face right"></div>
                    </div>

                    <div class="cube h3 w3 l2">
                        <div class="face top"></div>
                        <div class="face left"></div>
                        <div class="face right"></div>
                    </div>

                    <div class="cube h3 w3 l3">
                        <div class="face top"></div>
                        <div class="face left"></div>
                        <div class="face right"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
$background: #222;
$leftFace: #d53a33;
$rightFace: #e79c10;
$topFace: #1d9099;
$scale: 1;
$duration: 3s;
$timingFunction: ease;

#loader {
    .container {
        position: relative;
        height: 100px;
        width: 86px;
        transform: scale(#{$scale * 0.5});
    }

    .cube {
        position: absolute;
        width: 86px;
        height: 100px;
    }

    .right {
        background: $rightFace;
        transform: rotate(-30deg) skewX(-30deg) translate(49px, 65px) scaleY(0.86);
    }

    .left {
        background: $leftFace;
        transform: rotate(90deg) skewX(-30deg) scaleY(0.86) translate(25px, -50px);
    }

    .top {
        background: $topFace;
        transform: rotate(210deg) skew(-30deg) translate(-75px, -22px) scaleY(0.86);
        z-index: 2;
    }

    .face {
        height: 50px;
        width: 50px;
        position: absolute;
        transform-origin: 0 0;
    }
}

@mixin slice($h, $w, $l) {
    .h#{$h}.w#{$w}.l#{$l} {
        z-index: (-#{$h});
        animation-name: h#{$h}w#{$w}l#{$l};
        animation-timing-function: $timingFunction;
        animation-duration: $duration;
        animation-iteration-count: infinite;
    }

    @keyframes h#{$h}w#{$w}l#{$l} {
        0% {
            transform: translate(($w * -50% - 50%) + ($l * 50% + 50%),
                    ($h * 50 - 200%) + ($w * 25% - 25%) + ($l * 25 + 25%));
        }

        14% {
            transform: translate(($w * -50% - 50%) + ($l * 100% - 50%),
                    ($h * 50 - 200%) + ($w * 25% - 25%) + ($l * 50 - 25%));
        }

        28% {
            transform: translate(($w * -100% + 50%) + ($l * 100% - 50%),
                    ($h * 50 - 200%) + ($w * 50% - 75%) + ($l * 50 - 25%));
        }

        43% {
            transform: translate(($w * -100% - 100%) + ($l * 100% + 100%),
                    ($h * 100 - 400%) + ($w * 50% - 50%) + ($l * 50 + 50%));
        }

        57% {
            transform: translate(($w * -100% - 100%) + ($l * 50% + 200%),
                    ($h * 100 - 400%) + ($w * 50% - 50%) + ($l * 25 + 100%));
        }

        71% {
            transform: translate(($w * -50% - 200%) + ($l * 50% + 200%),
                    ($h * 100 - 375%) + ($w * 25% - 25%) + ($l * 25 + 100%));
        }

        85% {
            transform: translate(($w * -50% - 50%) + ($l * 50% + 50%),
                    ($h * 50 - 200%) + ($w * 25% - 25%) + ($l * 25 + 25%));
        }

        100% {
            transform: translate(($w * -50% - 50%) + ($l * 50% + 50%),
                    ($h * 50 - 200%) + ($w * 25% - 25%) + ($l * 25 + 25%));
        }
    }
}

@mixin generateSlice() {
    @for $i from 1 to 4 {
        @for $j from 1 to 4 {
            @for $k from 1 to 4 {
                @include slice($i, $j, $k);
            }
        }
    }
}

@include generateSlice();
</style>
<script>
export default {
    mounted() {
        this.getQuestions()
    },
    unmounted() {
        this.$store.dispatch("resetQuestions")
    },
    data() {
        return {
            answers: {},
            showResult: false,
            result: 0,
        }
    },
    computed: {
        questions() {
            return this.$store.state.questions
        },
    },
    methods: {
        getQuestions() {
            this.$store.dispatch("getQuestions")
        },
        setAnswer(question, answer) {
            this.answers[question] = answer
        },
        shuffle(array) {
            let currentIndex = array.length, randomIndex;

            // While there remain elements to shuffle.
            while (currentIndex != 0) {

                // Pick a remaining element.
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;

                // And swap it with the current element.
                [array[currentIndex], array[randomIndex]] = [
                    array[randomIndex], array[currentIndex]];
            }

            return array;
        },
        checkResult() {
            let rightAnswers = 0;
            Object.keys(this.answers).forEach(ele => {
                if (this.answers[ele] === this.questions.find(q => q.question === ele).correct_answer) {
                    rightAnswers++;
                }
            });
            this.result = rightAnswers;
            this.showResult = true
        }
    },
}
</script>
