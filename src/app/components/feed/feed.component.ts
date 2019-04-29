import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { parseString } from 'xml2js';
import { FeedChannel } from './feed-channel.model';
import { FeedItem } from './feed-item.model';
import { FeedService } from './feed.service';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})

export class FeedComponent implements OnInit {
  public feed: FeedChannel;

  constructor(private feedService: FeedService, private router: Router) {
  }

  ngOnInit() {
    console.log(`Current Route: ${this.router.url}`);
    this.updateFeed(this.router.url);
  }

  updateFeed(path: string) {
    // this.feedService.getFeed(path).subscribe(
    //   response => {
    //     this.feed = response.feed;
    //     this.feed.items = response.items;
    //     // console.log(`Response: ${this.feed.items[1].pubDate}`);
    //   },
    //   error => console.error(error)
    // );

    this.feedService.getFeed(path).subscribe(value => {
      parseString(value, {trim: true, explicitArray: false, mergeAttrs: true}, (err, result) => {
        this.feed = result.rss.channel;
      });
    });
  }
}
