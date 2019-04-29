import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


export interface NavItem {
  title: string;
  link: string;
  icon: string;
}

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches));

  general: NavItem[] = [
    {title: 'Alle Meldungen', link: '/all', icon: 'newspaper'},
    {title: 'Top-Meldungen', link: '/top', icon: 'fire'},
    {title: 'Eil-Meldungen', link: '/breaking', icon: 'clock-fast'}
  ];

  categories: NavItem[] = [
    {title: 'Politik', link: '/politics', icon: 'account-group'},
    {title: 'Wirtschaft', link: '/economy', icon: 'domain'},
    {title: 'Panorama', link: '/panorama', icon: 'panorama'},
    {title: 'Sport', link: '/sports', icon: 'basketball'},
    {title: 'Kultur', link: '/culture', icon: 'earth'},
    {title: 'Netzwelt', link: '/net', icon: 'laptop-mac'},
    {title: 'Wissenschaft', link: '/science', icon: 'test-tube'},
    {title: 'Gesundheit', link: '/health', icon: 'heart-pulse'},
    {title: 'Karriere', link: '/career', icon: 'briefcase'},
    {title: 'Reise', link: '/travel', icon: 'airplane-takeoff'},
    {title: 'Auto', link: '/cars', icon: 'car-sports'}
  ];

  constructor(private breakpointObserver: BreakpointObserver) {
  }

}
