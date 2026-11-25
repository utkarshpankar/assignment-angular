import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WordSorter } from './word-sorter/word-sorter';

@Component({
  imports: [RouterOutlet, WordSorter],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('odd-even-words');
}
