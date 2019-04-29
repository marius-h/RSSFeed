import { Component, Input, OnInit } from '@angular/core';
import { Enclosure, FeedItem } from '../feed/feed-item.model';

@Component({
  selector: 'app-newscard',
  templateUrl: './newscard.component.html',
  styleUrls: ['./newscard.component.scss']
})

export class NewscardComponent implements OnInit, FeedItem {
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
