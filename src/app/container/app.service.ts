import { Todo } from './../model/todo';
import { AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { reject } from 'q';

const API:string = 'todo';
@Injectable()
export class appService {
  constructor(private firestore: AngularFirestore) {
  }

  getTodos(): Observable<Todo[]> {
    return this.firestore.collection('Todos').snapshotChanges().map(changes => {
      return changes.map( a => {
        const data = a.payload.doc.data() as Todo;
        const id = a.payload.doc.id;
        return {id, ...data};
      });
    });
  }

  updateTodos(todo: Todo) {
    console.log(todo);
    this.firestore.collection('todos').doc(`/${todo.id}`).update(todo);
  }

  addTodo(todo: Todo) {
    console.log(todo);
    this.firestore.collection('todos').add(todo);
  }

  deleteTodo(todo: Todo) {
    this.firestore.collection('todos').doc(`/${todo.id}`).delete();
  }
}
