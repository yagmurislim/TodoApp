import { Component } from '@angular/core';
import  { Model } from '../model';
import { TodoItem } from '../todoitem';


@Component({
  selector: 'todo',
  templateUrl:'./todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent  {

  constructor() {
    this.model.items = this.getItemsFromLS();
   }

   model = new Model();

message:string ="";
inputText:string = "";

displayAll: boolean =false;

  getName(){
    return this.model.name;
  }

  getItems(){
if(this.displayAll){
  return this.model.items;
}
return this.model.items.filter(item => !item.action );
  }

displayCount(){
 return  this.model.items.filter(i=>i.action).length;
}


//   addItem(input : any){
// console.log(input.value);
  //}
addItem(){
  //console.log(value);
  if(this.inputText!=""){
    let data = {description: this.inputText, action:false}
    this.model.items.push(data);
    let items = this.getItemsFromLS();
    items.push(data);
    localStorage.setItem("items", JSON.stringify(items));
    this.inputText = " ";

  }else{
    alert("bilgi giriniz");
  }
  }
getItemsFromLS(){

  let items: TodoItem[] = [];
 let value =  localStorage.getItem("items");
 if(value != null){
  items = JSON.parse(value);
 }

  return items;

}

onActionChanged(item : TodoItem){

  let items = this.getItemsFromLS();
  localStorage.clear();
  items.forEach(i => {
    if(i.description == item.description){
      i.action = item.action;
    }
  });
  
  localStorage.setItem("items", JSON.stringify(items));

}
  }

// private name="islim";
// // items=[
// //   "item 1","item 2","item 3"
// // ];
// items : TodoItem[] = [
//  { description: "kahvaltı", action:"yes"},
//  {description: "spor", action:"yes"},
//  {description: "udemmy", action:"yes"}
//  //interfacede bu şekilde .agrılır

// //  new TodoItem("kahvaltı","yes"),
// //  new TodoItem("spor","yes"),
// //  new TodoItem("udemmy","yes"),
// //  new TodoItem("ingilizce","yes")
// //nesne yi new le oluşturuurz

// ];




