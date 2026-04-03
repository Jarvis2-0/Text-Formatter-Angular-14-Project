import { Component } from '@angular/core';
import { TextService } from '../services/text.service';
import { RemoveSpecialCharPipe } from '../pipes/remove-special-char.pipe';
// DO NOT import Event from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  inputText = '';
  outputText = '';

  isBold = false;
  isItalic = false;
  isUnderline = false;
  textColor = '#080808';
  fontSize = 16;

  wordCount$ = this.textService.getWordCount();
  charCount$ = this.textService.getCharCount();

  constructor(private textService: TextService) {}

  get outputStyles() {
    return {
      'font-weight': this.isBold ? 'bold' : 'normal',
      'font-style': this.isItalic ? 'italic' : 'normal',
      'text-decoration': this.isUnderline ? 'underline' : 'none',
      'color': this.textColor,
      'font-size': this.fontSize + 'px'
    };
  }

  private updateCounts() {
    this.textService.updateCounts(this.outputText);
  }

  onTextChange(event: Event) {
    this.inputText = (event.target as HTMLTextAreaElement).value;
    this.outputText = this.inputText;
    this.updateCounts();
  }

  clearText() {
    this.inputText = '';
    this.outputText = '';
    this.updateCounts();
  }

  removeWhiteSpace() {
    this.outputText = this.outputText.replace(/\s+/g, ' ').trim();
    this.updateCounts();
  }

  reverseAll() {
    this.outputText = this.outputText.split('').reverse().join('');
    this.updateCounts();
  }

  removeSpecialChar() {
    const pipe = new RemoveSpecialCharPipe();
    this.outputText = pipe.transform(this.outputText);
    this.updateCounts();
  }

  capitalizeWord() {
    this.outputText = this.outputText.toUpperCase();
    this.updateCounts();
  }

  removeStyling() {
    this.isBold = false;
    this.isItalic = false;
    this.isUnderline = false;
    this.textColor = '#000000';
    this.fontSize = 16;
  }

  toggleBold() { this.isBold = !this.isBold; }
  toggleItalic() { this.isItalic = !this.isItalic; }
  toggleUnderline() { this.isUnderline = !this.isUnderline; }
  
  changeColor(color: string): void {
    this.textColor = color;
  }

  onColorChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.changeColor(target.value);
  }
  
  increaseFontSize() { this.fontSize = Math.min(this.fontSize + 1, 50); }
  decreaseFontSize() { this.fontSize = Math.max(this.fontSize - 1, 8); }
}