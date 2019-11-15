<template>
  <div class="wrapper">
    <div class="ctn" @click="toggle" :class="{'active': isActive}">
      <div class="circle"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    isActive() {
      return this.$store.state.calcActive;
    }
  },
  methods: {
    toggle() {
      this.$store.commit("toggleActivate");
    }
  }
};
</script>


<style scoped>
.wrapper {
  width: 12rem;
  height: 6rem;
  background-color: #444;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* transform: rotate(-90deg); */
}

.ctn {
  --transition-time: 0.4s;
  /* position: fixed; */

  height: 3rem;
  width: 6rem;
  padding: 3px;
  background-color: #222;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color var(--transition-time) ease;
}

.circle {
  width: 50%;
  height: 100%;
  background-color: #555;
  border-radius: 50%;
  transition: transform var(--transition-time) ease;
}

.active {
  background-color: #6cb931;
  box-shadow: 0 0 8px #6cb931;
}

.active > .circle {
  transform: translateX(100%);
}
</style>

