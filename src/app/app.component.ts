import { Component,Injectable,OnInit,ElementRef,EventEmitter,Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { YoutubeserviceService } from './youtubeservice.service';
import {  SearchResult } from './model/searchresult';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[YoutubeserviceService]
})




export class AppComponent {
    
constructor(private youtubeservice:YoutubeserviceService){}

 results: SearchResult[];

  updateResults(results: SearchResult[]): void {
    this.results = results;
    // console.log("results:", this.results); // uncomment to take a look
  }


}
