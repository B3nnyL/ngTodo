import { todo } from './../../model/todo';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent  {
  newTodo: todo;
  isAdding: boolean = false;
  content: string="";

  @Output()
  add: EventEmitter<todo> = new EventEmitter();
  
  toggleAddInput(){
    this.isAdding = !this.isAdding;
    this.content = "";
  }

  onAdd($event:string){
    if(this.content.length === 0){
      alert("The input field is empty");
    }else{
      console.log(event);
      this.newTodo = {content: this.content, ticked: false};
      this.add.emit(this.newTodo);
      console.log(this.newTodo);
      this.toggleAddInput();
    }
  }
}
