import { PersonDetail } from './../../../shared/interfaces/person-detail';
import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-person-info',
  templateUrl: './person-info.component.html',
  styleUrls: ['./person-info.component.scss'],
})
export class PersonInfoComponent implements OnInit {
  loading = true;
  @Input() personDetail: PersonDetail;

  imdbNameUrl = environment.imdbNameUrl;

  constructor() {}

  ngOnInit(): void {
    this.setInfo();
  }

  ngOnChanges(): void {
    this.setInfo();
  }

  private setInfo(): void {
    this.loading = false;
    console.log(this.personDetail);
  }

  public setGenderIcon(n: number): string {
    switch (n) {
      case 1: {
        return 'fa-venus';
        break;
      }
      case 2: {
        return 'fa-mars';
        break;
      }
      default: {
        return '';
      }
    }
  }

  public setGender(n: number): string {
    switch (n) {
      case 1: {
        return `Female`;
        break;
      }
      case 2: {
        return `Male`;
        break;
      }
      default: {
        return 'Undefined';
      }
    }
  }

  public setImdbUrl(): string {
    return this.personDetail.imdb_id != null
      ? `${this.imdbNameUrl}${this.personDetail.imdb_id}`
      : '';
  }
}
