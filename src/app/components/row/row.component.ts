import { Component, ElementRef, Input, OnInit, Renderer } from '@angular/core';

interface RowData {
  rowClasses:string[] | string,
  children:any[]
}

@Component({
  selector: 'bjs-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class RowComponent implements OnInit {
  defaultRowClass:string = 'row';
  mergedRowClasses:string = '';
  @Input() data?:RowData = {
    rowClasses: '',
    children:[]
  };
  constructor(
    private element: ElementRef, 
    private renderer: Renderer
    ) { }

  ngOnInit() {
    let classesArray:string[] = [];
    if(typeof this.data.rowClasses === 'string'){
      classesArray = this.data.rowClasses.split(' ');
    } else {
      classesArray = this.data.rowClasses;
    }
    this.mergedRowClasses = classesArray.concat(this.defaultRowClass).join(' ');
    this.renderer.setElementProperty(this.element.nativeElement, 'className', this.mergedRowClasses);
  }

}
