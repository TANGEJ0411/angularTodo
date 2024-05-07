import { Component } from '@angular/core';
import { Todo } from './model/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'OneTodo';
  placeholder = 'What needs to be done????';

  toggleAllBtn = false;
  // check1 = false;
  // check2 = false;

  todoDataList = [
    {
      status: true,
      text: 'Learn Angular1',
      id: '1',
    },
    {
      status: false,
      text: 'Learn Angular2',
      id: '2',
    },
    {
      status: true,
      text: 'Learn Angular3',
      id: '3',
    },
  ];

  toggleAll() {
    this.toggleAllBtn = !this.toggleAllBtn;
    // this.check1 = this.toggleAllBtn;
    // this.check2 = this.toggleAllBtn;
    this.todoDataList.forEach((element) => {
      element.status = this.toggleAllBtn;
    });
  }

  toggleCheck(todo: Todo) {
    todo.status = !todo.status;
  }

  deleteTodoItem(todoIndex: number) {
    // this.todoDataList = this.todoDataList.filter(
    //   (_, index) => index !== todoIndex
    // );
    this.todoDataList.splice(todoIndex, 1);
  }

  addTodoItem(inputElement: HTMLInputElement) {
    this.todoDataList.push({
      status: false,
      text: inputElement.value,
      id: Date.now().toString(),
    });
    inputElement.value = '';
  }

  // toggleCheck1() {
  //   this.check1 = !this.check1;
  // }

  // toggleCheck2() {
  //   this.check2 = !this.check2;
  // }
}
