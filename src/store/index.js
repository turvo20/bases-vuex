
import { createStore } from "vuex";
import CounterStore from "./counter";

export default createStore({
 modules:{
    counter: CounterStore
 }
});
