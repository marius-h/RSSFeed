import { Component, Input, OnInit } from '@angular/core';
import { Enclosure, FeedItem } from '../feed/feed-item.model';

@Component({
  selector: 'app-feed-item',
  templateUrl: './feed-item.component.html',
  styleUrls: ['./feed-item.component.scss']
})

export class FeedItemComponent implements OnInit, FeedItem {
  @Input() author: string;
  @Input() category: string;
  @Input() comments: string;
  @Input() description: string;
  @Input() enclosure: Enclosure;
  @Input() guid: string;
  @Input() link: string;
  @Input() pubDate: string;
  @Input() source: string;
  @Input() title: string;
  date: Date;

  constructor() {
  }

  ngOnInit() {
    this.date = new Date(Date.parse(this.pubDate));
  }
}
