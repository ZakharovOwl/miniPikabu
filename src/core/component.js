export class Component{
    constructor(id){
        this.$el = document.getElementById(id) //для скорости использовал getElementById
        this.init()
    }

    init(){}

    hide(){
        this.$el.classList.add('hide')
    }

    show(){
        this.$el.classList.remove('hide')
    }

}


