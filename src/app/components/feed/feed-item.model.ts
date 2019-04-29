/**
 * RSS <item> element
 * @see https://www.w3schools.com/XML/xml_rss.asp
 */

export class FeedItem {

  constructor(
    description: string,
    link: string,
    title: string,
    author: string,
    category: string,
    comments: string,
    guid: string,
    pubDate: string,
    source: string,
    enclosure?: Enclosure
  ) {
    this.description = description;
    this.link = link;
    this.title = title;
    this.author = author;
    this.category = category;
    this.comments = comments;
    this.enclosure = enclosure;
    this.guid = guid;
    this.pubDate = pubDate;
    this.source = source;
  }

  /*
   Required parameters
   */
  description: string;
  link: string;
  title: string;

  /*
   Optional parameters
   */
  author: string;
  category: string;
  comments: string;
  enclosure?: Enclosure;
  guid: string;
  pubDate: string;
  source: string;
}

export interface Enclosure {

  url: string;
}
