import { ConfigurationService } from './../../shared/services/configuration.service';
import { LocalStorageService } from './../../shared/services/local-storage.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { filter, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-basic-layout',
  templateUrl: './basic-layout.component.html',
  styleUrls: ['./basic-layout.component.scss']
})
export class BasicLayoutComponent implements OnInit {

  private langSubscription: Subscription;
  private configurationInfoSubscription: Subscription;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private configuration: ConfigurationService,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.setTitleByRoute();
    this.setLanguages();
    this.setConfigurationInfo();
  }

  ngOnDestroy(): void {
    this.langSubscription.unsubscribe();
    this.configurationInfoSubscription.unsubscribe();
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
    this.langSubscription = this.configuration.getLanguages().subscribe(languages => {
      this.localStorageService.set('languages', languages);
    });
  }

  private setConfigurationInfo(): void {
    this.configurationInfoSubscription = this.configuration.getConfiguration().subscribe(info => {
      let logoArray = info.images.logo_sizes;
      let posterArray = info.images.poster_sizes;
      let backdropArray = info.images.backdrop_sizes;
      let profileArray = info.images.profile_sizes;
      let stillArray = info.images.still_sizes;

      this.localStorageService.set('configInfo', info);
      this.localStorageService.set('baseUrl', info.images.secure_base_url);
      this.localStorageService.set('posterSize', posterArray[2]);
      this.localStorageService.set('originalPosterSize', posterArray[posterArray.length - 1]);
      this.localStorageService.set('backdropSize', backdropArray[backdropArray.length - 1]);
      this.localStorageService.set('profileSize', profileArray[profileArray.length - 1]);
    });
  }
}
