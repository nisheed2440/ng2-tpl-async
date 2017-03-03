import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bjs-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit {
  pageType:string = '';
  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.data.subscribe((dataObj) => {
      this.pageType = dataObj['page'];
    });
  }

}
