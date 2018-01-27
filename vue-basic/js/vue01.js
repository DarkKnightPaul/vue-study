var app = new Vue({
  el: '#app',
  data: {
    message: 'Vue你好！',
    htmldata: '<h1>html数据</h1>',
    c1: false,
    c2: false,
    list: [{
      id: 100,
      name: "张三"
    }, {
      id: 101,
      name: "李四"
    }, {
      id: 102,
      name: "王五"
    }],
    n1: 1,
    n2: 1
  },
  methods: {
    showAlert: function(c) {
      alert(c + "," + new Date().getTime());
    }
  },
  computed: {
    twoNumbs: function() {
      if (isNaN(this.n1) || isNaN(this.n2)) {
        return "必须是数!";
      }
      if (this.n2 == 0) {
        return "除数不能是0";
      }
      return this.n1 / this.n1;
    }
  }
});