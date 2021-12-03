import { SearchService } from 'src/app/search/search.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { PersonListResult } from 'src/app/shared/interfaces/person-list-result';

@Component({
  selector: 'app-bar-people',
  templateUrl: './bar-people.component.html',
  styleUrls: ['./bar-people.component.scss']
})
export class BarPeopleComponent implements OnInit {

  public searchPeopleForm: FormGroup;

  public movieResults: PersonListResult[] = [];
  public currentResult: number = 0;

  public personSearchSubscription: Subscription;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private search: SearchService
  ) { }

  ngOnInit(): void {
    this.searchPeopleForm = this.fb.group({
      personQuery: new FormControl('')
    });
  }

  onSubmitPeopleForm(): void {
    console.log(this.searchPeopleForm.value);
  }

  ngOnDestroy() {

  }

}
