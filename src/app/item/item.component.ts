import { Component, Input, Output, EventEmitter } from '@angular/core';
// import { Item } from '../item';
import type { Task } from '../types/task'; //?!!!

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

  // saveItem(title:string, description: string, dueDate: string) {
  saveItem({ title, description, dueDate }: Task) {
    if (!title) return;
    this.editable = false;
    this.item.title = title;
    this.item.description = description;
    this.item.dueDate = dueDate;
  }
}
