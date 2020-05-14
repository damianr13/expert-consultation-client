import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-document-viewer-editor',
  templateUrl: './document-viewer-editor.component.html',
  styleUrls: ['./document-viewer-editor.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DocumentViewerEditorComponent),
    multi: true
  }]
})
export class DocumentViewerEditorComponent implements OnInit, ControlValueAccessor {

  @Input() label: string;
  internalValue = '';

  constructor() { }

  ngOnInit() {
  }

  get value(): string {
    return this.internalValue;
  }

  set value(v: string) {
    this.internalValue = v;
    this.onChange(v);
  }

  writeValue(value: any) {
    this.internalValue = value;
    this.onChange(value);
  }

  onChange = (_) => {};
  onTouched = () => {};
  registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }
}
