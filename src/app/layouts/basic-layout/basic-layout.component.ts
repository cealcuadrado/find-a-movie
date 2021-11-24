import { LocalStorageService } from './../../shared/services/local-storage.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { filter, map } from 'rxjs/operators';
import { LanguageService } from 'src/app/shared/services/language.service';

@Component({
  selector: 'app-basic-layout',
  templateUrl: './basic-layout.component.html',
  styleUrls: ['./basic-layout.component.scss']
})
export class BasicLayoutComponent implements OnInit {


  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private language: LanguageService,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.setTitleByRoute();
    this.setLanguages();
  }

  private setTitleByRoute(): void {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          let child = this.activatedRoute.firstChild;
          while (child) {
            if (child.firstChild) {
              child = child.firstChild;
            } else if (child.snapshot.data && child.snapshot.data['title']) {
              return child.snapshot.data['title'];
            } else {
              return 'Find a Movie';
            }
          }
        })
      )
      .subscribe((data) => {
        this.titleService.setTitle(`${data} | Find a Movie`);
      });
  }

  private setLanguages(): void {
    this.language.getLanguages().subscribe((languages) => {
      console.log(languages);
      this.localStorageService.set('languages', languages);
    });
  }
}
