import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DisplayModeElement } from 'src/app/shared/interfaces/display-mode-element';

@Component({
  selector: 'app-display-mode',
  templateUrl: './display-mode.component.html',
  styleUrls: ['./display-mode.component.scss']
})
export class DisplayModeComponent implements OnInit {

  displayModes: DisplayModeElement[] = [
    {name: 'Grid', mode: 'grid', icon: 'fa-th'},
    {name: 'List', mode: 'list', icon: 'fa-list'}
  ];

  @Input() displayMode: string = 'grid';
  @Output() changeDisplayMode = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  public isDisplayMode(str: string): string {
    return this.displayMode.includes(str) ? 'active' : '';
  }

  public changeModeTo(str: string): void {
    this.displayMode = str;
    this.changeDisplayMode.emit(str);
  }

  public setTitle(str: string): string {
    return `Change to ${str} mode`;
  }
}
