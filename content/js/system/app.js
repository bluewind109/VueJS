new Vue({
  el: '.vue-app',
  data: {
    name: 'FlyK',
    job: 'Web Developer',
    age: 25,
    website: 'http://www.google.com.vn/',
    websiteTag: '<a href="http://www.google.com.vn/">Google</a>',
    x: 0,
    y: 0
  },
  methods: {
    greet: function(time) {
      return 'Good ' + time + ' ' + this.name;
    },
    add: function(number) {
      this.age += number;
    },
    subtract: function(number) {
      if (this.age - number >= 0) {
        this.age -= number;
      }
    },
    updateXY: function(event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    click: function() {
      alert('Clicked');
    }
  }
});
