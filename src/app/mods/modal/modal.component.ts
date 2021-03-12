import { Component, OnInit, ElementRef, OnDestroy, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {
  @Output() close = new EventEmitter();
  @Input() modelData:any;
  
  constructor(private model:ElementRef) { 
    
  }

  ngOnInit(): void {
    document.body.appendChild(this.model.nativeElement);
  }

  ngOnDestroy() : void{
    this.model.nativeElement.remove();
  }

  onCloseClick = ()=>{
    this.close.emit();
  }

}
