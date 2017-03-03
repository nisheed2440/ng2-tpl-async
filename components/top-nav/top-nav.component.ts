import { Component, Input, OnInit } from '@angular/core';

interface TopNav {
  label:string,
  link:string,
  children?:TopNav[]
}

interface NavData {
  navItems:TopNav[],
  children:any[]
}

@Component({
  selector: 'bjs-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  @Input() data?:NavData = {
    navItems:[],
    children:[]
  };
  constructor() { }

  ngOnInit() {}

}
