const state = {
    val1: null,
    val2 = null;
}

const mutations = {
	REMEMBER_ELEMENT(state, {val1, val2}) {
        state.val1 = val1;
        state.val2 = val2;
    }
}

const actions = {
    example({state, commit}, {arg1, arg2}) {
        commit('EXAMPLE', {arg1, arg2});
    }
}

export default {
    namespaced: true,
    state,
	mutations,
    actions
}