Vue.component('greeting', {
  template: '<p>Hey there, I am {{name}} <button @click="changeName">Chane name</button></p>',
  data: function() {
    return {
      name: 'Yoshi'
    }
  },
  methods: {
    changeName: function() {
      this.name = 'Mario';
    }
  }
});

var appOne = new Vue({
  el: '#vue-app-one',
  data: {

  },
  methods: {

  },
  computed: {

  }
});

var appTwo = new Vue({
  el: '#vue-app-two',
  data: {

  },
  methods: {

  },
  computed: {

  }
});