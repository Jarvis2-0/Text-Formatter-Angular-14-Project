import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formatters',
  templateUrl: './formatters.component.html',
  styleUrls: ['./formatters.component.css']
})
export class FormattersComponent {
  @Output() clear = new EventEmitter<void>();
  @Output() removeWhitespace = new EventEmitter<void>();
  @Output() reverseAll = new EventEmitter<void>();
  @Output() removeSpecialChar = new EventEmitter<void>();
  @Output() capitalizeWord = new EventEmitter<void>();
  @Output() boldToggle = new EventEmitter<void>();
  @Output() italicToggle = new EventEmitter<void>();
  @Output() underlineToggle = new EventEmitter<void>();
  @Output() colorChange = new EventEmitter<string>();
  @Output() fontSizeIncrease = new EventEmitter<void>();
  @Output() fontSizeDecrease = new EventEmitter<void>();
  @Output() removeStyling = new EventEmitter<void>();

  onColorChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.colorChange.emit(target.value);
  }
}