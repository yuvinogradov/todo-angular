import { Component, Input, Output, EventEmitter } from '@angular/core';
// import { Item } from '../item';
import type { Task } from '../Task'; //?!!!

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent {
  editable = false;

  @Input() item: Task = {
    title: '',
    description: '',
    dueDate: '',
    done: false,
  };
  @Input() newItem: string = '';
  @Output() remove = new EventEmitter<Task>();

  saveItem(title:string, description: string, dueDate: string) {
    if (!description) return;
    this.editable = false;
    this.item.description = description;
  }
}
