import { SearchService } from 'src/app/search/search.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
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

  public showAutocompleteResults: boolean = true;

  public personSearchSubscription: Subscription;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private search: SearchService,
    private eRef: ElementRef,
    private window: Window
  ) {}

  ngOnInit(): void {
    this.searchPeopleForm = this.fb.group({
      personQuery: new FormControl(''),
    });
  }

  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    this.showAutocompleteResults = this.eRef.nativeElement.contains(event.target);

    if (this.showAutocompleteResults) {
      this.onSearchInput(event);
    }
  }

  public onSearchInput(event: any): void {
    let query = this.searchPeopleForm.value.personQuery;

    if (!query || query.length < 2) {
      this.resetAutocomplete();
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

  public onSearch(event: any): void {
    this.window.setTimeout(() => {
      this.searchPeopleForm.reset();
      this.onSearchInput(event);
    }, 250);
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
    this.showAutocompleteResults = true;
    this.currentResult = 0;
  }

  public resetAutocomplete(): void {
    this.showAutocompleteResults = false;
    this.personBarResults = [];
    this.currentResult = 0;
  }
}
