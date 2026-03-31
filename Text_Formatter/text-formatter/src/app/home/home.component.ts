import { Component } from '@angular/core';
import { TextService } from '../services/text.service';
import { RemoveSpecialCharPipe } from '../pipes/remove-special-char.pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  rawText = '';
  isBold = false;
  isItalic = false;
  isUnderline = false;
  textColor = '#000000';
  fontSize = 16;

  constructor(private textService: TextService) {}

  onTextChange(newText: string): void {
    this.rawText = newText;
    this.textService.updateCounts(this.rawText);
  }

  clearText(): void {
    this.rawText = '';
    this.textService.updateCounts(this.rawText);
  }

  removeExtraSpaces(): void {
    this.rawText = this.rawText.replace(/\s+/g, ' ').trim();
    this.textService.updateCounts(this.rawText);
  }

  reverseSentence(): void {
    this.rawText = this.rawText.split('').reverse().join('');
    this.textService.updateCounts(this.rawText);
  }

  removeSpecialChars(): void {
    const pipe = new RemoveSpecialCharPipe();
    this.rawText = pipe.transform(this.rawText);
    this.textService.updateCounts(this.rawText);
  }

  capitalizeWords(): void {
    this.rawText = this.rawText.split(/\s+/).map(word =>
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ).join(' ');
    this.textService.updateCounts(this.rawText);
  }

  toggleBold(): void {
    this.isBold = !this.isBold;
  }

  toggleItalic(): void {
    this.isItalic = !this.isItalic;
  }

  toggleUnderline(): void {
    this.isUnderline = !this.isUnderline;
  }

  changeColor(color: string): void {
    this.textColor = color;
  }

  increaseFontSize(): void {
    this.fontSize = Math.min(this.fontSize + 1, 50);
  }

  decreaseFontSize(): void {
    this.fontSize = Math.max(this.fontSize - 1, 8);
  }

  removeStyling(): void {
    this.isBold = false;
    this.isItalic = false;
    this.isUnderline = false;
    this.textColor = '#000000';
    this.fontSize = 16;
  }
}