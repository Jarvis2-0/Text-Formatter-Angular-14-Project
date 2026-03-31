import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'removeSpecialChar' })
export class RemoveSpecialCharPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';
    // Keep only letters, numbers, and spaces
    return value.replace(/[^a-zA-Z0-9\s]/g, '');
  }
}