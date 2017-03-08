import { ActivatedRoute } from '@angular/router';
import { Template } from '../../../template-cache.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bjs-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  children:Template[] = [];
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.children = this.route.snapshot.data['template'];
  }

}
