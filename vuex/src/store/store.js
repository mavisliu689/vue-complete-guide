import Vue from 'vue'
import Vuex from 'vuex'
import counter from './modules/counter';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        value: 0
    },
    getters,

        // doubleCounter: state => {
        //     return state.counter * 2;
        // },
        // stringCounter: state => {
        //     return state.counter + 'Clicks';
        // }
    mutations,
        // increment: (state, payload) => {
        //     state.counter += payload;
        // },
        // decrement: (state, payload) => {
        //     state.counter -= payload;
        // },
        // asynIncrement: (state, payload) => {
        //     state.counter += payload;
        // },
        // asynDecrement: (state, payload) => {
        //     state.counter -= payload;
        // }


    actions,      
        // increment: ({ commit }, payload) => {
        //     commit('increment', payload);
        // },
        // decrement: ({ commit }, payload) => {
        //     commit('decrement', payload);
        // },
        // asynIncrement: ({ commit }, payload) => {
        //     setTimeout(() => {
        //         commit('asynIncrement', payload.by);
        //     }, payload.duration)
        // },
        // asynDecrement: ({ commit }, payload) => {
        //     setTimeout(() => {
        //         commit('asynDecrement', payload.by);
        //     }, payload.duration)
        // }
    modules: {
        counter
    }
})