import {
  Component,
  OnInit
} from '@angular/core';
import {
  todo
} from '../../model/todo';
import {
  appService
} from '../app.service';

@Component({
  selector: 'todos-container',
  templateUrl: './todos-container.component.html',
  styleUrls: ['./todos-container.component.css']
})
export class TodosContainerComponent implements OnInit {
  list: todo[];
  title = 'app';
  constructor(private service: appService) {}
  ngOnInit() {
    this.service.getTodos().subscribe((data: todo[]) => this.list = data)
  }
  onHandleTick(event: todo){
    console.log(event);
    this.service.updateTodos(event);
  }
  onHandleUpdate(event: todo){
    console.log(event);
    this.service.updateTodos(event);
  }
  onHandleAdd(event: todo){
    console.log('event' + event);
    this.service.addTodo(event);
  }
  onHandleDelete(event: todo){
    console.log('delete' + event);
    this.service.deleteTodo(event);
  }
}
