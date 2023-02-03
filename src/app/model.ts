import { TodoItem } from "./todoitem";



export class Model{
    name: string;
    items: TodoItem[];


    constructor(){
        this.name = "islim";
        this.items = [
 { description: "kahvaltı", action:true},
 {description: "spor", action:true},
 {description: "udemmy", action:false}
        ];
    }
}
