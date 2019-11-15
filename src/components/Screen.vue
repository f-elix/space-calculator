<template>
  <div class="ctn" :class="{'active': isActive}">
    <div class="screen screen-eq">{{ eqDisplay }}</div>
    <div class="screen">{{ currentOperand }}</div>
  </div>
</template>

<script>
export default {
  computed: {
    isActive() {
      return this.$store.state.calcActive;
    },
    currentOperand() {
      return this.$store.state.currentOperand;
    },
    eqDisplay() {
      return this.$store.state.eqDisplay;
    }
  }
};
</script>


<style scoped>
.ctn {
  height: 9rem;
}

.screen {
  --active-color: #f9f9f9;
  --inactive-color: #f9f9f900;
  padding: 0.5rem 0.75rem;
  max-width: 100%;
  height: 70%;
  font-size: 3rem;
  font-weight: bold;
  color: transparent;
  background-color: var(--inactive-color);
  text-shadow: 0 0 2px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  box-shadow: 0 0 3px 2px #444;
  overflow: hidden;
}

.screen-eq {
  margin-bottom: 0.75rem;
  height: 30%;
  font-size: 1.5rem;
  justify-content: flex-start;
}

.active .screen {
  animation: activate 1s linear forwards;
  box-shadow: 0 0 10px var(--active-color);
}

@keyframes activate {
  5% {
    background-color: var(--active-color);
    color: #222;
  }
  10% {
    background-color: var(--inactive-color);
    color: transparent;
  }
  25% {
    background-color: var(--active-color);
    color: #222;
  }
  35% {
    background-color: var(--inactive-color);
    color: transparent;
  }
  40% {
    background-color: var(--active-color);
    color: #222;
  }
  50% {
    background-color: var(--inactive-color);
    color: transparent;
  }
  55% {
    background-color: var(--active-color);
    color: #222;
  }
  80% {
    background-color: var(--inactive-color);
    color: transparent;
  }
  85% {
    background-color: var(--active-color);
    color: #222;
  }
  100% {
    background-color: var(--active-color);
    color: #222;
  }
}
</style>
