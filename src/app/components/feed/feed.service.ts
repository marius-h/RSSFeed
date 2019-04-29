import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class FeedService {

  baseUrl = 'https://www.spiegel.de/';

  constructor(private http: HttpClient) {
  }

  static getPathByRoute(route: string): string {
    switch (route.replace('/', '')) {
      case 'all':
        return 'schlagzeilen/index.rss';
      case 'top':
        return 'schlagzeilen/tops/index.rss';
      case 'breaking':
        return 'schlagzeilen/eilmeldungen/index.rss';
      case 'politics':
        return 'politik/index.rss';
      case 'economy':
        return 'wirtschaft/index.rss';
      case 'panorama':
        return 'panorama/index.rss';
      case 'sports':
        return 'sport/index.rss';
      case 'culture':
        return 'kultur/index.rss';
      case 'net':
        return 'netzwelt/index.rss';
      case 'science':
        return 'wissenschaft/index.rss';
      case 'health':
        return 'gesundheit/index.rss';
      case 'career':
        return 'karriere/index.rss';
      case 'travel':
        return 'reise/index.rss';
      case 'cars':
        return 'auto/index.rss';
    }
    return '';
  }

  getFeed(route: string): Observable<string> {

    const feedUrl = encodeURI(this.baseUrl + FeedService.getPathByRoute(route));
    return this.http.get(feedUrl, {responseType: 'text'});
  }
}
