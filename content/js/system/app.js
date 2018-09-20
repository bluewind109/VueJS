var appOne = new Vue({
  el: '#vue-app-one',
  data: {
    title: 'Vue App One'
  },
  methods: {

  },
  computed: {
    greet: function() {
      return 'Hello from app one'
    }
  }
});

var appTwo = new Vue({
  el: '#vue-app-two',
  data: {
    title: 'Vue App Two'
  },
  methods: {
    changeTitle: function() {
      appOne.title = 'Title App One Changed';
    }
  },
  computed: {
    greet: function() {
      return 'Greetings from app two'
    }
  }
});

appTwo.title = 'Outside change';