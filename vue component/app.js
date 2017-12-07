var data = {status: 'critical'}
// = Vue.component('my-cmp',{
const myCmp = {
    data: function() {
        return data;
    },
    template: '<p> server status {{ status }}  \
                (<button @click="changeStatus">changeStatus</button>)</p>',
    methods:  {
        changeStatus: function() {
            this.status = "Normal"
        }
    }
}

new Vue({
    el: "#app",
    components: {
        myCmp
    }
})

new Vue({
    //無法使用區域的myCmp
    el: '#app2'
})