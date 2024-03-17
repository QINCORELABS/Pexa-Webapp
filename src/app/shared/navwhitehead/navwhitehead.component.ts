import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navwhitehead',
  templateUrl: './navwhitehead.component.html',
  styleUrls: ['./navwhitehead.component.css']
})
export class NavwhiteheadComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  searchQuery: string = '';
  showList: boolean = false;
  showSearch: boolean = true;


  toggleList(): void {
    this.showList = !this.showList;
    this.showSearch = true;
  }


  toggleSearch(): void {
    this.showSearch = false;
  }



}