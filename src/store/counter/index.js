import state from "./state";
import * as mutations from "./mutations";
import * as actions from "./actions";

const CounterStore = {
  namespaced: true,
  state,
  mutations,
  actions,
};

export default CounterStore;
