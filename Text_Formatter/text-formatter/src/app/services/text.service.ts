import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TextService {
  private wordCountSubject = new BehaviorSubject<number>(0);
  private charCountSubject = new BehaviorSubject<number>(0);

  getWordCount(): Observable<number> {
    return this.wordCountSubject.asObservable();
  }

  getCharCount(): Observable<number> {
    return this.charCountSubject.asObservable();
  }

  updateCounts(text: string): void {
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    const chars = text.length;
    this.wordCountSubject.next(words);
    this.charCountSubject.next(chars);
  }
}