import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  searchForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      searchQuery: new FormControl('')
    });
  }

  onSubmit(): void {
    let value = this.searchForm.value.searchQuery;
    this.router.navigate(['/search', value]);
  }
}
