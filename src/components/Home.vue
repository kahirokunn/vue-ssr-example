<template>
  <div id="app">
    <div>{{ n }}を超えないと表示されません。</div>
    <div v-if="count > n">Counter: {{ count }}</div>
    <button @click="inc()">+10</button>
    <button @click="dec()">-10</button>
  </div>
</template>

<script>
function rand() {
  const num = Number.parseInt(Math.random() * 100);
  console.log("rand func return", num);
  return num;
}

function wait(ms) {
  return new Promise((resolve, reject) => setTimeout(resolve, 100, true));
}

export default {
  watch: {
    count: {
      handler() {
        console.log("watch count", this.count);
      },
      immediate: true
    }
  },
  computed: {
    n: () => 70,
    count() {
      return this.$store.state.count;
    }
  },
  methods: {
    inc() {
      this.$store.commit("inc");
    },
    dec() {
      this.$store.commit("dec");
    }
  },
  serverPrefetch() {
    return wait(100).then(() => {
      console.log("in server");
      this.$store.commit("set", rand());
    });
  }
};
</script>

<style scoped>
* {
  font-size: 50px;
}

button {
  width: 200px;
  height: 65px;
  margin-right: 10px;
}
</style>
