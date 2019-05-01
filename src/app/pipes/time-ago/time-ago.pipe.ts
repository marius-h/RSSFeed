import { Pipe, PipeTransform, NgZone, ChangeDetectorRef, OnDestroy } from '@angular/core';

@Pipe({
  name: 'timeAgo',
  pure: false
})
/**
 * @description Pipe for displaying how up-to-date an item in the feed is
 * @author AndrewPoyntz, Marius Höfler
 * @see https://github.com/AndrewPoyntz/time-ago-pipe/blob/master/time-ago.pipe.ts
 */
export class TimeAgoPipe implements PipeTransform, OnDestroy {

  private timer: number;

  constructor(private changeDetectorRef: ChangeDetectorRef, private ngZone: NgZone) {
  }

  private static getSecondsUntilUpdate(seconds: number) {
    const min = 60;
    const hr = min * 60;
    const day = hr * 24;
    if (seconds < min) { // less than 1 min, update every 2 secs
      return 2;
    } else if (seconds < hr) { // less than an hour, update every 30 secs
      return 30;
    } else if (seconds < day) { // less then a day, update every 5 mins
      return 300;
    } else { // update every hour
      return 3600;
    }
  }

  transform(value: string) {
    this.removeTimer();
    const d = new Date(value);
    const now = new Date();
    const seconds = Math.round(Math.abs((now.getTime() - d.getTime()) / 1000));
    const timeToUpdate = (Number.isNaN(seconds)) ? 1000 : TimeAgoPipe.getSecondsUntilUpdate(seconds) * 1000;
    this.timer = this.ngZone.runOutsideAngular(() => {
      if (typeof window !== 'undefined') {
        return window.setTimeout(() => {
          this.ngZone.run(() => this.changeDetectorRef.markForCheck());
        }, timeToUpdate);
      }
      return null;
    });
    const minutes = Math.round(Math.abs(seconds / 60));
    const hours = Math.round(Math.abs(minutes / 60));
    const days = Math.round(Math.abs(hours / 24));
    const months = Math.round(Math.abs(days / 30.416));
    const years = Math.round(Math.abs(days / 365));
    if (Number.isNaN(seconds)) {
      return '';
    } else if (seconds <= 45) {
      return 'Vor einigen Sekunden';
    } else if (seconds <= 90) {
      return 'Vor einer Minute';
    } else if (minutes <= 45) {
      return `Vor ${minutes} Minuten`;
    } else if (minutes <= 90) {
      return 'Vor einer Stunde';
    } else if (hours <= 22) {
      return `Vor ${hours} Stunden`;
    } else if (hours <= 36) {
      return 'Vor einem Tag';
    } else if (days <= 25) {
      return `Vor ${days} Tagen`;
    } else if (days <= 45) {
      return 'Vor einem Monat';
    } else if (days <= 345) {
      return `Vor ${months} Monaten`;
    } else if (days <= 545) {
      return 'Vor einem Jahr';
    } else { // (days > 545)
      return `Vor ${years} Jahren`;
    }
  }

  ngOnDestroy(): void {
    this.removeTimer();
  }

  private removeTimer() {
    if (this.timer) {
      window.clearTimeout(this.timer);
      this.timer = null;
    }
  }
}
