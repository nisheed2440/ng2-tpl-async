import { Component, Input, OnInit, ElementRef, Renderer } from '@angular/core';

interface ColumnData {
  columnClasses:string[] | string,
  children:any[]
}

@Component({
  selector: 'bjs-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements OnInit {
  defaultColumnClass:string = 'columns';
  mergedColumnClasses:string = '';
  @Input() data?:ColumnData = {
    columnClasses:'',
    children:[]
  };
  constructor(
    private element: ElementRef, 
    private renderer: Renderer
  ) { }

  ngOnInit() {
    let classesArray:string[] = [];
    if(typeof this.data.columnClasses === 'string'){
      classesArray = this.data.columnClasses.split(' ');
    } else {
      classesArray = this.data.columnClasses;
    }
    this.mergedColumnClasses = this.defaultColumnClass.split(' ').concat(classesArray).join(' ');
    this.renderer.setElementProperty(this.element.nativeElement, 'className', this.mergedColumnClasses);
  }

}
