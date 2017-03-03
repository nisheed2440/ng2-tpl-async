import { Component, Input, OnInit } from '@angular/core';

interface HeaderData {
  headerTitle:string,
  children:any[]
}

@Component({
  selector: 'bjs-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() data?:HeaderData = {
    headerTitle:'',
    children:[]
  }
  constructor() { }

  ngOnInit() {}

}
