import { Injectable } from '@angular/core';

Injectable()
export class LocalStorageService {
    storage = window.localStorage;

    constructor(){ }
    
    /**
     * get() method:
     * 
     * get the list from the local storage
     * @return {Object}
     */
    get(type){
        let list = this.storage.getItem(type);
        return JSON.parse(list);
    }

    /**
     * set() method:
     * 
     * save updated list to local storage
     * @param {Object} newList 
     */
    set(type, newList){
        let stringifiedList = JSON.stringify(newList);
        this.storage.setItem(type, stringifiedList);
    }
}