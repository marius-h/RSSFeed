/**
 * RSS <channel> element
 * @see https://www.w3schools.com/XML/xml_rss.asp
 */
import { FeedItem } from './feed-item.model';

export class FeedChannel {

  constructor(
    description: string,
    link: string,
    title: string,
    item: FeedItem[],
    category: string,
    cloud: string,
    copyright: string,
    docs: string,
    generator: string,
    image: string,
    language: string,
    lastBuildDate: string,
    managingEditor: string,
    pubDate: string,
    rating: string,
    skipDays: string,
    skipHours: string,
    textInput: string,
    ttl: string,
    webMaster: string
  ) {
    this.description = description;
    this.link = link;
    this.title = title;
    this.item = item;
    this.category = category;
    this.cloud = cloud;
    this.copyright = copyright;
    this.docs = docs;
    this.generator = generator;
    this.image = image;
    this.language = language;
    this.lastBuildDate = lastBuildDate;
    this.managingEditor = managingEditor;
    this.pubDate = pubDate;
    this.rating = rating;
    this.skipDays = skipDays;
    this.skipHours = skipHours;
    this.textInput = textInput;
    this.ttl = ttl;
    this.webMaster = webMaster;
  }

  /*
   Required parameters
   */
  description: string;
  link: string;
  title: string;
  item: FeedItem[];

  /*
   Optional parameters
   */
  category: string;
  cloud: string;
  copyright: string;
  docs: string;
  generator: string;
  image: string;
  language: string;
  lastBuildDate: string;
  managingEditor: string;
  pubDate: string;
  rating: string;
  skipDays: string;
  skipHours: string;
  textInput: string;
  ttl: string;
  webMaster: string;
}
