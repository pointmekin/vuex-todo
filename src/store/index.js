import Vuex from 'vuex'
import Vue from 'vue'
import todos from './modules/todos'

// new Vuex 4 syntax for creating a store for Vue
import { createStore } from "vuex" 

const store = createStore({
   modules: {
     todos
   }
})

export default store