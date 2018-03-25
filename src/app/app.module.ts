
import { appService } from './container/app.service';
import { environment } from './../environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';


import { AppComponent } from './app.component';
import { TodosContainerComponent } from './container/todos-container/todos-container.component';
import { AppNavComponent } from './container/app-nav/app-nav.component';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { SingleTodoComponent } from './component/single-todo/single-todo.component';
import { AddTodoComponent } from './component/add-todo/add-todo.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    TodosContainerComponent,
    AppNavComponent,
    SingleTodoComponent,
    AddTodoComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    NgbModule.forRoot(),
    FormsModule
  ],
  providers: [appService],
  bootstrap: [AppComponent]
})
export class AppModule { }
