import { Template } from '../../template-cache.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bjs-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit {
  children:Template[] = [];
  constructor(private route: ActivatedRoute) { }
  ngOnInit() { 
    this.children = this.route.snapshot.data['template'];
  }
}
