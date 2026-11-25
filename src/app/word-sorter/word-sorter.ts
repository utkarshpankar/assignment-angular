import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Word, WordKind } from '../models/word.model';

@Component({
  selector: 'app-word-sorter',
  imports: [FormsModule],
  templateUrl: './word-sorter.html',
  styleUrl: './word-sorter.css'
})
export class WordSorter {

  word: string = '';

  oddWords: Word[] = [];
  evenWords: Word[] = [];

  errorMessage: string = '';

  add(): void {

    let text = this.word.trim();

    if (text.length === 0) {
      return;
    }

    let duplicate = false;

    for (let item of this.oddWords) {
      if (item.text.toLowerCase() === text.toLowerCase()) {
        duplicate = true;
      }
    }

    for (let item of this.evenWords) {
      if (item.text.toLowerCase() === text.toLowerCase()) {
        duplicate = true;
      }
    }

    if (duplicate) {
      this.errorMessage = 'Word already exists!';
      return;
    }

    let length = text.length;

    let kind: WordKind;

    if (length % 2 !== 0) {
      kind = 'odd';
    } else {
      kind = 'even';
    }

    let newWord: Word = {
      text: text,
      length: length,
      kind: kind
    };

    if (kind === 'odd') {
      this.oddWords.push(newWord);
    } else {
      this.evenWords.push(newWord);
    }

    this.word = '';
    this.errorMessage = '';
  }

  removeWord(word: Word): void {

    if (word.kind === 'odd') {
      this.oddWords = this.oddWords.filter(item => item !== word);
    } else {
      this.evenWords = this.evenWords.filter(item => item !== word);
    }

  }

}