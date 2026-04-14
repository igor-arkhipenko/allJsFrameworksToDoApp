import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})

export class App {
  protected readonly title = signal('angular');

  // state
  todos: string[] = []
  todoText: string = ''

  // lifecycle
  ngOnInit() {
    const existingTodos = localStorage.getItem('angular_todos')
    this.todos = JSON.parse(existingTodos as string) || []
    console.log('ngOnInit todos', this.todos)
  }

  // events
  addTodo() {
    console.log('addTodo')
    console.log('todos', this.todos)
    console.log('todoText', this.todoText)

    this.todos.push(this.todoText)
    localStorage.setItem('angular_todos', JSON.stringify(this.todos))
  }
}
