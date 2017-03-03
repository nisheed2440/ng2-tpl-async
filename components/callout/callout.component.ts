import { Component, Input, OnInit } from '@angular/core';

interface CalloutData {
  calloutClasses: string[] | string,
  calloutTitle: string,
  children: any[]
}

@Component({
  selector: 'bjs-callout',
  templateUrl: './callout.component.html',
  styleUrls: ['./callout.component.scss']
})
export class CalloutComponent implements OnInit {
  @Input() data?: CalloutData = {
    calloutClasses:'',
    calloutTitle:'',
    children:[]
  };
  calloutClasses:string = 'callout';
  constructor() { }

  ngOnInit() {
    this.calloutClasses = (typeof this.data.calloutClasses === 'string') ? 
    this.data.calloutClasses.split(' ').concat(this.calloutClasses).join( ' ') : 
    (Array.isArray(this.data.calloutClasses)) ? this.data.calloutClasses.concat(this.calloutClasses).join(' ') :
    this.calloutClasses;
  }

}
