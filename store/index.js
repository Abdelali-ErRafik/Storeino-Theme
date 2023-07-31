import vuex from 'vuex'
import state from'../template-core/store/state'

const createStore = () => {
    return new vuex.Store({
        state: () =>{
            return{
                ...state
            }
        },
        actions: ()=>{},
        mutations:()=>{},
        getters:()=>{},
    })
}
export default createStore
