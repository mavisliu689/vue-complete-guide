var data = {
  title: 'The VueJS Instance',
  showParagraph: false
}

Vue.component('www',{
  template: '<h2>this is www section!</h2>'
})
var vm1 = new Vue({
  data: {
    title: 'The VueJS Instance',
    showParagraph: false
  },
  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Updated)');
      this.$refs.myButton.innerText = 'Text'
    },
    updateTitle: function(title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle: function() {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function(value) {
      alert('Title changed, new value: ' + value);
    }
  }
});

vm1.$mount("#app1")

console.log(vm1.$data === data);
vm1.$refs.heading.innerText = "Somethings else";
//太吵了先關掉
// setTimeout(function(){
//   vm1.title = 'changed by timer';
// }, 3000)
var vm2 = new Vue({
  el: '#app2',
  data: {
    title: 'The app2'
  },
  methods: {
    onChange: function(){
      vm1.title = 'change'
    }
  }
})


var vm3 = new Vue({
  el: '.hello',
  template: '<h1>Hello!</h1>'
})

var vm4 = new Vue({
  el: '#app5',
  data: {
    title: 'The VueJS Instance'
  },
  beforeCreate: function() {
     console.log('beforeCreate()')
  },
  created: function(){
    console.log('created()')
  },
  beforeMount: function() {
    console.log('beforeMount()')
  },
  beforeUpdate: function() {
    console.log('beforeUpdate()')
  },
  updated: function(){
    console.log('updated()')
  },
  beforeDestory: function(){
    console.log('beforeDestory()')
  },
  destroyed: function(){
    console.log('destroyed()')
  },
  methods: {
  	destroy: function() {
    	this.$destroy();
    }
  }
})
// vm3.$mount();
// document.getElementById('app3').appendChild(vm3.$el);