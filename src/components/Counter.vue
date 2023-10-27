<template>
  <div>
    <h1>Counter - Vuex</h1>
    <h2>Diirect Access: {{ $store.state.counter.count }}</h2>
    <h2>Computed: {{ countComputed }}</h2>

    <button class="activo" @click="increment">+1</button>
    <button class="activo" @click="incrementBy">+5</button>
    <button
      :class="isLoading ? 'desactivado' : 'activo'"
      @click="incrementRandomInt"
      :disabled="isLoading"
    >
      RAMDOM
    </button>

    <h1>MapState</h1>
    <h2>IsLoading: {{ isLoading }}</h2>

    <h2>mapState: {{ count }}</h2>
    <h2>lasMutation: {{ lastMutation }}</h2>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  // computed: mapState(['count'])

  computed: {
    countComputed() {
      return this.$store.state.counter.count;
    },
    ...mapState('counter',["count", "lastMutation", "isLoading"]),
  },
  methods: {
    increment() {
      this.$store.commit("counter/increment");
    },
    incrementBy() {
      this.$store.commit("counter/incrementBy", 5);
    },
    // incrementRondomInt(){
    //     this.$store.dispatch('incrementRandomInt')
    // }
    ...mapActions('counter',["incrementRandomInt"]),
  },
};
</script>

<style scoped>
button {
  padding: 12px;
  margin: 4px;
  border-radius: 4px;
}
.activo {
  background-color: darkgreen;
  color: white;
  font-weight: bold;
}
.desactivado {
  background-color: rgb(161, 161, 161);
  color: black;
  font-weight: bold;
}
button:hover {
  background-color: rgb(3, 138, 3);
  transition: 0.5s;
}
</style>