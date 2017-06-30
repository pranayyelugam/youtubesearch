import { Component, OnInit } from '@angular/core';
import {  SearchResult } from '../model/searchresult';

@Component({
  inputs: ['result'],
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.css']
})
export class SearchresultComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  result: SearchResult;
  

}
