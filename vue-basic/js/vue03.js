var bus = new Vue();

Vue.directive('focus', {
  inserted: function(el) {
    el.focus();
  }
});

Vue.directive('cfocus', {
  update: function(el, binding) {
    console.log(binding);
    if (binding.arg == binding.value) {
      el.focus();
      bus.$emit('businfo', '通讯消息' + binding.value);
    }
  }
});

var index = 0;

var app = new Vue({
  el: '#app',
  data: {
    message: 'Vue你好！',
    cfocus: '',
    businfo: ''
  },
  methods: {
    changeCfocus: function() {
      app.cfocus = 'c' + index;
      index = (++index) % 3;
    }
  }
});

bus.$on('businfo', function(data) {
  app.businfo = data;
});