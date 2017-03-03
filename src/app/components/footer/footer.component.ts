import { Component, Input, OnInit } from '@angular/core';

interface FooterData {
  children:any[]
}

@Component({
  selector: 'bjs-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() data?:FooterData = {
    children:[]
  }
  constructor() { }

  ngOnInit() {
  }

}
