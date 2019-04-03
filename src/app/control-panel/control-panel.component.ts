import { ChangeDetectionStrategy, Component, ViewChild, ElementRef } from '@angular/core';
import { SynServiceService } from '../syn-service/syn-service.service';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControlPanelComponent {

  @ViewChild ("myColor", {read: ElementRef }) myColor: ElementRef;

  showSyn: boolean = false;
  synonyms: any;
  selected: string;

  constructor(private service: SynServiceService){}

  setFormat(value: string){
    let range: any;
    let selection = document.getSelection();
    this.service.selected = selection.toString();
    this.selected = selection.toString();
    selection.rangeCount && selection.getRangeAt ? range = selection.getRangeAt(0) : false ;
    document.designMode = "on";
    if (range) {
      selection.removeAllRanges();
      selection.addRange(range);
    }
    this.checkTheValue(value);
    document.designMode = "off";
  }

  getSyns(){
    this.service.getApiEndpoint().subscribe((data) => this.synonyms = data);
  }

  checkTheValue(type: string){
    if (type == 'b') {
      document.execCommand('bold');
    } else if (type == 'u') {
      document.execCommand('underline')
    } else if (type == 'i') {
      document.execCommand('italic');
    } else if (type == 's') {
      this.getSyns();
      this.showSyn = true;
    } else if (type == 'color') {
      document.execCommand('foreColor', false, this.myColor.nativeElement.value); 
    }
  }


}
