import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-up-icon',
  templateUrl: './up-icon.component.html',
  styleUrls: ['./up-icon.component.scss'],
})
export class UpIconComponent implements OnInit {
  showUpIcon: boolean;

  constructor(
    private window: Window,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.checkScroll();
  }

  checkScroll(): void {
    console.log('checkScroll()');
    console.log(this.window.scrollY);
    this.showUpIcon = this.window.scrollY > 50 ? true : false;
  }

  @HostListener('window:scroll', []) onScroll() {
    this.showUpIcon = (document.documentElement.scrollTop > 50) ? true : false;
  }

  scrollToTop(): void {
    this.window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
