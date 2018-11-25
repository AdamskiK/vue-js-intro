new Vue({
    el: '#app',
    data: {
        title: 'Becoming a ninja!',
        coords: {
            x: 0,
            y: 0
        },
        name: 'kamil',
        showName: false,
        showAge: true,
        items: ['orange', 'banaba', 'onion']
    },
    methods: {
        logEvent(e){
            console.log(e)
            },
        logCoords(e)   {
            this.coords.x = e.offsetX
            this.coords.y = e.offsetY
        },
        updateName(e){
            this.name = e.target.value
        },
        eventMessage(){
            console.log("hello")
        },
        toggleName(){
            this.showName = !this.showName
        },
        toggleAge(){
            this.showAge = !this.showAge
        }
    }
})