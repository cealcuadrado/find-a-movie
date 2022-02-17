import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { GALLERY_CONF, GALLERY_IMAGE, NgxImageGalleryComponent } from 'ngx-image-gallery';
import { MovieDetail } from 'src/app/shared/interfaces/movie-detail';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header-poster',
  templateUrl: './header-poster.component.html',
  styleUrls: ['./header-poster.component.scss']
})
export class HeaderPosterComponent implements OnInit {

  @Input() movieDetail: MovieDetail;
  private posterUrl: string = environment.posterUrl;
  private backdropUrl: string = environment.backdropUrl;

  @ViewChild(NgxImageGalleryComponent) imageGallery: NgxImageGalleryComponent;

  galleryConfig: GALLERY_CONF = {
    imageOffset: '1rem',
    imageBorderRadius: '0px',
    showDeleteControl: false,
    showImageTitle: true,
    reactToRightClick: true,
    backdropColor: 'rgba(51,51,51,0.9)'
  };

  images: GALLERY_IMAGE[] = [];

  constructor() { }

  ngOnInit(): void {
    // this.setImageGallery();
  }

  public isPosterUrl(posterPath: string | null) {
    return posterPath;
  }

  public setPosterUrl(posterPath: string | null) {
    return {
      backgroundImage: posterPath
        ? `url(${this.posterUrl}${posterPath})`
        : null,
    };
  }

  private setBackdropUrl(backdropPath: string | null): string {
    return !backdropPath
      ? 'https://via.placeholder.com/600x450?text=No+image+available'
      : `${this.backdropUrl}${backdropPath}`;
  }

  private setLocalOrForeignTitle(detail: MovieDetail): string {
    return !detail.original_language.match('en') &&
      !detail.original_title.match(detail.title)
      ? `${detail.title} (${detail.original_title})`
      : detail.title;
  }

  private setImageGallery(): void {
    let title = `${this.setLocalOrForeignTitle(this.movieDetail)}`;
    let year = `${!this.isDateEmpty(this.movieDetail.release_date) ? new Date(this.movieDetail.release_date).getFullYear() : 'No Release Date'}`;

    let posterTitle = `${title} (${year}) Poster`;
    // let headerBgTitle =  `${title} (${year}) Header Background`;

    if(this.isPosterUrl(this.movieDetail.poster_path)) {
      this.pushImageGallery(`${this.posterUrl}${this.movieDetail.poster_path}`,posterTitle,posterTitle);
    }
    /*
    if(this.movieDetail.backdrop_path) {
      this.pushImageGallery(`${this.setBackdropUrl(this.movieDetail.backdrop_path)}`,headerBgTitle, headerBgTitle);
    }
    */

    this.newImage(0);
  }

  private pushImageGallery(url: string, altText: string, title: string): void {
    this.images.push({
      url: url,
      altText: altText,
      title: title,
      thumbnailUrl: url
    });
  }

  private resetImageGallery(): void {
    this.images = [];
  }

  public isDateEmpty(dateStr: string): boolean {
    return dateStr.length == 0;
  }

  public openGallery(index: number = 0): void {
    this.imageGallery.open(0);
  }

  public closeGallery(): void {
    this.imageGallery.close();
  }

  public newImage(index: number = 0): void {
    this.imageGallery.setActiveImage(index);
  }

  public nextImage(index: number = 0): void {
    this.imageGallery.next();
  }

  public prevImage(index: number = 0): void {
    this.imageGallery.prev()
  }

  public galleryOpened(index: number) {
    console.info(`Gallery opened as ${index}`);
  }

  public galleryClosed(): void {
    console.info('Gallery closed');
  }

  public galleryImageChanged(index: number) {
    console.info(`Gallery image changed at index ${index}`);
  }

  public galleryImageClicked(index: number): void {
    console.info(`Gallery image clicked with index ${index}`);
  }

  public deleteImage(index: number): void {
    console.log(`Delete image at index ${index}`);
  }

}
