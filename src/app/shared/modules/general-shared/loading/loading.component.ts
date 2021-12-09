import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  @Input() center: boolean = false;

  centerProps = 'd-flex justify-content-center align-items-center';

  constructor() { }

  ngOnInit(): void {
  }

}
