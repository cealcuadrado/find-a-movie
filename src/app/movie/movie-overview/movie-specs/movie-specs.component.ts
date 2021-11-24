import { Language } from './../../../shared/interfaces/language';
import { LocalStorageService } from './../../../shared/services/local-storage.service';
import { MovieDetail } from '../../../shared/interfaces/movie-detail';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-specs',
  templateUrl: './movie-specs.component.html',
  styleUrls: ['./movie-specs.component.scss']
})
export class MovieSpecsComponent implements OnInit {

  public loading: boolean = true;
  public originalLanguage: Language;

  @Input() movieDetail: MovieDetail;

  constructor(
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.loading = false;
    console.log(this.movieDetail);
    this.setOriginalLanguage();
  }

  ngOnChanges() {
    this.loading = false;
    this.setOriginalLanguage();
  }

  private setOriginalLanguage(): void {
    const languages = this.localStorageService.get('languages');
    this.originalLanguage = languages.filter((language: Language) => {
      return language.iso_639_1 === this.movieDetail.original_language
    })[0];
  }

  public setBoxOfficeMojoLink(): string {
    return `https://www.boxofficemojo.com/title/${this.movieDetail.imdb_id}/`;
  }
}
