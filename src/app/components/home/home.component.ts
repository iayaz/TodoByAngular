import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  notesArr: {
    id: number;
    text: string;
  }[];

  innerText: string;
  private id: number = 0;
  searchBar: string;
  constructor() {
    this.notesArr = [];
    this.innerText = '';
    this.searchBar = '';
  }
  addDetails() {
    this.id++;
    this.notesArr.push({ id: this.id, text: this.innerText });
    this.innerText = '';
  }

  searchArray() {
    if (!this.notesArr.length) {
      alert('No data to search from');
      return;
    }

    const foundNotes = this.notesArr.filter((note) => {
      return note.text.includes(this.searchBar);
    });

    if (foundNotes.length === 0) {
      alert('Not found');
    } else {
      foundNotes.forEach((note) => {
        alert(note.text);
      });
    }

    this.searchBar = '';
  }
}
