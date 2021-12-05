import { SearchService } from 'src/app/search/search.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { PersonListResult } from 'src/app/shared/interfaces/person-list-result';

@Component({
  selector: 'app-bar-people',
  templateUrl: './bar-people.component.html',
  styleUrls: ['./bar-people.component.scss'],
})
export class BarPeopleComponent implements OnInit {
  public searchPeopleForm: FormGroup;

  public personBarResults: PersonListResult[] = [];
  public currentResult: number = 0;

  public personSearchSubscription: Subscription;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private search: SearchService
  ) {}

  ngOnInit(): void {
    this.searchPeopleForm = this.fb.group({
      personQuery: new FormControl(''),
    });
  }

  public onSearchInput(): void {
    let query = this.searchPeopleForm.value.personQuery;

    if (query.length < 2) {
      this.personBarResults = [];
      return;
    }

    this.personSearchSubscription = this.search
      .searchPeople(query, 1)
      .subscribe((queryPersonResult) => {
        if (queryPersonResult.results) {
          this.personBarResults = queryPersonResult.results.slice(0, 5);
          this.resetCurrentResult();
        }
      });
  }

  public onSubmitPeopleForm(event: any): void {
    if (this.currentResult != 0) {
      event.preventDefault();
      this.goToPerson(this.personBarResults[this.currentResult - 1].id);
    } else {
      let value = this.searchPeopleForm.value.personQuery;
      this.router.navigate(['/search/person', value]).then((result) => {
        this.personBarResults = [];
      });
    }
  }

  public goToPerson(id: number): void {
    this.router.navigate(['/person', id]).then((result) => {
      this.personBarResults = [];
    });
  }

  public onSearchKeyDown(event: any): void {
    if (this.personBarResults.length > 0) {
      if (event.keyCode == 40) {
        this.setCurrentResult('subtract');
      } else if (event.keyCode == 38) {
        this.setCurrentResult('add');
      }
    }
  }

  public onMouseOver(event: any, index: number): void {
    this.currentResult = index + 1;
  }

  public setCurrentResult(op: string): void {
    if (op == 'add') {
      this.currentResult =
        this.currentResult - 1 < 0
          ? this.personBarResults.length
          : this.currentResult - 1;
    } else if (op == 'subtract') {
      this.currentResult =
        this.currentResult + 1 > this.personBarResults.length
          ? 0
          : this.currentResult + 1;
    }
  }

  public resetCurrentResult(): void {
    this.currentResult = 0;
  }

  ngOnDestroy() {}
}
