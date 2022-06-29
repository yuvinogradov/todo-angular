import { Component } from '@angular/core';
import type { Task } from './types/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo';

  filter: 'all' | 'active' | 'done' = 'all';

  allItems: Task[] = [
    {
      title: 'eat',
      description: 'eat something',
      done: true,
      dueDate: '25/07/2022',
    },
    {
      title: 'drink',
      description: 'drink something',
      done: true,
      dueDate: '25/07/2022',
    },
    {
      title: 'walk',
      description: 'make a walk',
      done: false,
      dueDate: '25/07/2022',
    },
    {
      title: 'sleep',
      description: 'sleep enough',
      done: false,
      dueDate: '25/07/2022',
    },
  ];

  get items() {
    if (this.filter === 'all') {
      return this.allItems;
    }
    return this.allItems.filter((item) =>
      this.filter === 'done' ? item.done : !item.done
    );
  }

  addItem({ title, description, dueDate }: Task) {
    this.allItems.unshift({
      title,
      dueDate,
      description,
      done: false,
    });
  }

  remove(item: Task) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }
}
