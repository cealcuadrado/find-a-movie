import { PersonDetail } from './../shared/interfaces/person-detail';
import { PersonService } from './person.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  public loading: boolean = true;
  public id: string;
  public personDetail: PersonDetail;

  constructor(
    private activatedRoute: ActivatedRoute,
    private person: PersonService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params.id) {
        this.id = params.id;
        this.getDetails();
      }
    });
  }

  private getDetails(): void {
    this.person.getPersonDetail(this.id).subscribe((person) => {
      this.personDetail = person;
      this.loading = false;
    });
  }

}
