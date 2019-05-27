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
  console.log("num", num);
  return num;
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
  data() {
    return {
      count: 0
    };
  },
  computed: {
    n: () => 70
  },
  methods: {
    inc() {
      this.count += 10;
    },
    dec() {
      this.count -= 10;
    }
  },
  created() {
    console.log("created", this.count);
    this.count = rand();
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
