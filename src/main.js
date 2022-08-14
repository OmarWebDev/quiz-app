import { createApp } from "vue"
import { createStore } from "vuex"
import App from "./App.vue"
import router from "./router"
import 'animate.css';
import "./assets/main.css"
import axios from "axios"
// Create a new store instance.
const store = createStore({
	state() {
		return {
			questions: [],
		}
	},
	mutations: {
		async getQuestions(state) {
			const result = await axios.get(
				`https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple`
			)
			state.questions = result.data.results
		},
		resetQuestions(state) {
			state.questions = []
		}
	},
	actions: {
		getQuestions(context) {
			context.commit("getQuestions")
		},
		resetQuestions(context) {
			context.commit("resetQuestions")
		}
	},
})

const app = createApp(App)

app.use(router)
app.use(store)

app.mount("#app")
