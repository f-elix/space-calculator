import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    calcActive: false,
    currentOperand: "0",
    previousOperand: null,
    operator: "",
    eqDisplay: null,
    result: null
  },
  getters: {
    currentOperand() {}
  },
  mutations: {
    toggleActivate(state) {
      state.calcActive = !state.calcActive;
      state.currentOperand = "0";
      state.eqDisplay = null;
      state.previousOperand = null;
      state.operator = null;
      state.result = null;
    },
    updateEq(state, value) {
      state.previousOperand = state.result
        ? state.result
        : state.currentOperand;
      state.eqDisplay = `${state.previousOperand} ${state.operator}`;
      state.currentOperand = "0";
    },
    formatDisplay(state) {},
    updateOperator(state, value) {
      state.operator = value;
    },
    updateCurrentOperand(state, value) {
      if (state.currentOperand === "0") {
        state.currentOperand = value;
      } else {
        state.currentOperand += value;
      }
    },
    clearDisplay(state) {
      state.currentOperand = "0";
      state.eqDisplay = null;
      state.previousOperand = null;
      state.operator = null;
      state.result = null;
    },
    clearCUrrentOperand(state) {
      state.currentOperand = "0";
    },
    deleteOne(state) {
      const len = state.currentOperand.length;
      state.currentOperand =
        len > 1 ? state.currentOperand.substring(0, len - 1) : "0";
    },
    evaluate(state) {
      switch (state.operator) {
        case "-":
          state.result =
            Number(state.previousOperand) - Number(state.currentOperand);
          break;
        case "*":
          state.result =
            Number(state.previousOperand) * Number(state.currentOperand);
          break;
        case "/":
          state.result =
            Number(state.previousOperand) / Number(state.currentOperand);
          break;
        default:
          state.result =
            Number(state.previousOperand) + Number(state.currentOperand);
      }
    },
    toggleNegative(state) {
      state.currentOperand =
        state.currentOperand < 0
          ? Math.abs(state.currentOperand)
          : 0 - state.currentOperand;
    }
  }
});
