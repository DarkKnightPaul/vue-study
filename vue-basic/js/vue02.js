//var bus = new Vue();

Vue.component('comp1', {
  template: '<h1>{{compmessage}}-{{compdata}}<button @click="clickMe">事件处理</button></h1>',
  props: ['compmessage'],
  data: function() {
    return {
      compdata: 0
    }
  },
  methods: {
    clickMe: function() {
      this.compdata++;
      this.$emit('comp-click-me', this.compdata);
    },
    setCompdata: function(compdata) {
      this.compdata = compdata;
    }
  }
});

var app = new Vue({
  el: '#app',
  data: {
    message: 'Vue你好！'
  },
  methods: {
    appClickMe: function(data) {
      alert('组件事件广播' + data);
    },
    changeCompData: function() {
      this.$refs.c1.setCompdata(100);
    }
  }
});