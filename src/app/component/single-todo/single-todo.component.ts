import { todo } from './../../model/todo';
import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'single-todo',
  templateUrl: './single-todo.component.html',
  styleUrls: ['./single-todo.component.css']
})
export class SingleTodoComponent {
  @Input()
  item: todo;

  @Output()
  tick: EventEmitter<todo> = new EventEmitter();

  @Output()
  update: EventEmitter<todo> = new EventEmitter();

  @Output()
  delete: EventEmitter<todo> = new EventEmitter();

  isEditting:boolean = false;
  constructor() { }

  onTick(item: todo){
    this.item.ticked = !this.item.ticked;
    this.tick.emit(this.item);
  }

  onUpdate(){
    if(this.item.content.length === 0){
      alert("The input field is empty");
    } else{
      this.update.emit(this.item);
    }
  }

  onDelete(){
    this.delete.emit(this.item);
  }

  toggleInput(){
    this.isEditting = !this.isEditting;
  }

  editContent(content: string){
    this.item.content = content;
  }
}
