import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TextService } from '../services/text.service';

@Component({
  selector: 'app-text-display',
  templateUrl: './text-display.component.html',
  styleUrls: ['./text-display.component.css']
})
export class TextDisplayComponent {
  @Input() rawText = '';
  @Input() isBold = false;
  @Input() isItalic = false;
  @Input() isUnderline = false;
  @Input() textColor = '#000000';
  @Input() fontSize = 16;

  @Output() textChange = new EventEmitter<string>();

  wordCount$ = this.textService.getWordCount();
  charCount$ = this.textService.getCharCount();

  constructor(private textService: TextService) {}

  onInputChange(event: Event): void {
    const newText = (event.target as HTMLInputElement).value;
    this.textChange.emit(newText);
  }

  getOutputStyles(): any {
    return {
      'font-weight': this.isBold ? 'bold' : 'normal',
      'font-style': this.isItalic ? 'italic' : 'normal',
      'text-decoration': this.isUnderline ? 'underline' : 'none',
      'color': this.textColor,
      'font-size': this.fontSize + 'px'
    };
  }
}