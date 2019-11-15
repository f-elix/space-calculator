<template>
  <div class="ctn" :class="{'active': isActive}">
    <div class="btn" @click="clearDisplay">CE</div>
    <div class="btn" @click="clearCUrrentOperand">C</div>
    <div class="btn" @click="deleteOne">DEL</div>
    <div class="btn" @click="updateEq($event)">+</div>
    <div class="btn btn_num" @click="updateCurrentOperand($event)">1</div>
    <div class="btn btn_num" @click="updateCurrentOperand($event)">2</div>
    <div class="btn btn_num" @click="updateCurrentOperand($event)">3</div>
    <div class="btn" @click="updateEq($event)">-</div>
    <div class="btn btn_num" @click="updateCurrentOperand($event)">4</div>
    <div class="btn btn_num" @click="updateCurrentOperand($event)">5</div>
    <div class="btn btn_num" @click="updateCurrentOperand($event)">6</div>
    <div class="btn" @click="updateEq($event)">*</div>
    <div class="btn btn_num" @click="updateCurrentOperand($event)">7</div>
    <div class="btn btn_num" @click="updateCurrentOperand($event)">8</div>
    <div class="btn btn_num" @click="updateCurrentOperand($event)">9</div>
    <div class="btn" @click="updateEq($event)">/</div>
    <div class="btn" @click="toggleNegative">+/-</div>
    <div class="btn btn_num" @click="updateCurrentOperand($event)">0</div>
    <div class="btn" @click="updateCurrentOperand($event)">.</div>
    <div class="btn" @click="evaluate">=</div>
  </div>
</template>

<script>
export default {
  computed: {
    isActive() {
      return this.$store.state.calcActive;
    }
  },
  methods: {
    updateCurrentOperand(e) {
      this.$store.commit("updateCurrentOperand", e.target.textContent);
    },
    updateEq(e) {
      this.$store.commit("evaluate");
      this.$store.commit("updateOperator", e.target.textContent);
      this.$store.commit("updateEq");
    },
    evaluate() {
      this.$store.commit("evaluate");
      this.$store.commit("updateOperator", "");
      this.$store.commit("updateEq");
    },
    clearDisplay() {
      this.$store.commit("clearDisplay");
    },
    clearCUrrentOperand() {
      this.$store.commit("clearCUrrentOperand");
    },
    deleteOne() {
      this.$store.commit("deleteOne");
    },
    toggleNegative() {
      this.$store.commit("toggleNegative");
    }
  }
};
</script>


<style scoped>
.ctn {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 0.25rem;
}

.btn {
  --active-color: #6cb931;
  --inactive-color: #444;
  background-color: #222;
  color: var(--inactive-color);
  font-size: 2.25rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.72;
}

.btn_num {
  background-color: #555;
}

.active .btn {
  --transition-time: 0.5s;
  animation: activate 1s linear forwards;
  text-shadow: 0 0 6px;
  transition: box-shadow
    var(--transition-time) ease, opacity var(--transition-time) ease;
  cursor: pointer;
}

.active .btn:hover {
  opacity: 1;
  box-shadow: inset 0 0 10px 50px #00000080;
}

@keyframes activate {
  5% {
    color: var(--active-color);
  }
  10% {
    color: var(--inactive-color);
  }
  25% {
    color: var(--active-color);
  }
  35% {
    color: var(--inactive-color);
  }
  40% {
    color: var(--active-color);
  }
  50% {
    color: var(--inactive-color);
  }
  55% {
    color: var(--active-color);
  }
  80% {
    color: var(--inactive-color);
  }
  85% {
    color: var(--active-color);
  }
  100% {
    color: var(--active-color);
  }
}
</style>
