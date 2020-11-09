const app = Vue.createApp({
  data() {
    return {
      name: "Jason",
      age: 25,
      imageUrl: "https://v3.vuejs.org/logo.png",
    };
  },
  methods: {
    calculateAge() {
        return this.age + 5;
    },
    outputRandomNumber() {
      return Math.random();
    },
  },
});
app.mount("#info");
