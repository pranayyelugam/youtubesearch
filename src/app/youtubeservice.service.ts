import { Component,OnInit,ElementRef,EventEmitter,Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import {  SearchResult } from './model/searchresult';
import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable()
export class YoutubeserviceService {

youtube_api_key: string = 'AIzaSyDNL7hzOutErOiGwXx6y_-ZhMbQQUzbVJo';
youtube_api_url: string = 'https://www.googleapis.com/youtube/v3/search';
  constructor(private http: Http){}
    search(query : string): Observable<SearchResult[]>
    {
        let params = [
            `q=${query}`,
      `key=${this.youtube_api_key}`,
      `part=snippet`,
      `type=video`,
      `maxResults=10`
        ].join('&');
        let queryUrl = `${this.youtube_api_url}?${params}`;
        return this.http.get(queryUrl)
         .map((response : Response) => {
          return (<any>response.json()).items.map(item =>
          {
            console.log("raw item", item);
            return new SearchResult(
              {
                id: item.id.videoId,
                title: item.snippet.title,
                description: item.snippet.description,
                thumbnail: item.snippet.thumbnails.high.url
               }
             )
           })
         })
    }

}
