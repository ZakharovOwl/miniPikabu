import { Component } from "../core/component";

import {Component} from '../core/component'

export class NavigationComponent extends Component {
    constructor(){
        super(id)
    }

    init(){
        this.$el.addEventListener('click', tabClickHandler.bind(this))
    }
}

function tabClickHandler(event){
    event.preventDefault()
    if(event.target.classList.contains('tab')){
        
    } 
}