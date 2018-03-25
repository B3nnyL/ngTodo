import {
  Component,
  OnInit
} from '@angular/core';
import {
  Todo
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
  list: Todo[];
  title = 'app';
  constructor(private service: appService) {}
  ngOnInit() {
    this.service.getTodos().subscribe((data: Todo[]) => this.list = data);
  }
  onHandleTick(event: Todo) {
    console.log(event);
    this.service.updateTodos(event);
  }
  onHandleUpdate(event: Todo) {
    console.log(event);
    this.service.updateTodos(event);
  }
  onHandleAdd(event: Todo) {
    console.log('event' + event);
    this.service.addTodo(event);
  }
  onHandleDelete(event: Todo) {
    console.log('delete' + event);
    this.service.deleteTodo(event);
  }
}
