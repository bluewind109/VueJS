new Vue({
  el: '#vue-app',
  data: {
    age: 20,
    a: 0,
    b: 0
  },
  methods: {
    // addtoA: function() {
    //   console.log('addToA');
    //   return this.a + this.age;
    // },
    // addtoB: function() {
    //   console.log('addToB');
    //   return this.b + this.age;
    // }
  },
  computed: {
    addtoA: function() {
      console.log('addToA');
      return this.a + this.age;
    },
    addtoB: function() {
      console.log('addToB');
      return this.b + this.age;
    }
  }
});
