import { Component, OnInit, EventEmitter, ElementRef } from '@angular/core';
import {  SearchResult } from '../model/searchresult';
import { YoutubeserviceService } from '../youtubeservice.service';
import { Observable } from 'rxjs';

@Component({
  outputs: ['results','loading'],
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css'],
  providers:[YoutubeserviceService]
})
export class SearchboxComponent implements OnInit {


  constructor( public youtubeservice:YoutubeserviceService ,private el:ElementRef ) { }
  loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  results : EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();

  ngOnInit() {
    Observable.fromEvent(this.el.nativeElement, 'keyup')
    .map((e:any) => e.target.value)
    .filter((text:string) => text.length > 1)
    .debounceTime(250)
    .do(() => this.loading.next(true))
    .map((query: string) => this.youtubeservice.search(query))
    .switch()
    .subscribe(
        (results: SearchResult[]) => { 
          this.results.next(results);
          this.loading.next(false)
        },
        (err: any) => {
          console.log(err);
          this.loading.next(false)
        },
        () => { // on completion
          this.loading.next(false);
        }
    )
  }

}
