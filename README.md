# Text Formatter – Angular 14 Project Summary

## Project Overview
Developed a "Text Formatter" Angular application that allows users to input text, view word/character counts, and apply various text transformations and styling.

## Key Features Implemented
1. **Parent-Child Architecture**
   - Home component (parent) manages state.
   - TextDisplay (left) shows input, output, and counts.
   - Formatters (right) contains all action buttons.

2. **Real-time Counts**
   - Word and character count update on every keystroke.
   - Implemented using a shared service with BehaviorSubject and Observable.

3. **Text Transformations**
   - Clear All, Remove extra spaces, Reverse sentence, Remove special characters (custom pipe), Capitalize words, Remove styling.

4. **Text Styling**
   - Bold, Italic, Underline, Color picker, Font size increase/decrease.

5. **Routing**
   - Default route redirects to Home page.

6. **Communication**
   - Child → Parent via @Output EventEmitter.
   - Parent → Child via @Input property binding.

## Technical Stack
- Angular 14
- TypeScript
- CSS for styling
- RxJS (BehaviorSubject, Observable)

## How to Run
```bash
npm install
ng serve
