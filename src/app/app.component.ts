import { Component,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  host: {
		"[class.work-management]": "( theme === 'WMgt' )",
		"[class.qpp]": "( theme === 'Qpp' )"
	},
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'themepoc';
  theme:string;

  @ViewChild('addtheme') containerdiv:ElementRef;

  addWMtheme(){
    
    this.theme="WMgt";
  }
  addQPPtheme(){
    
    this.theme="Qpp";
  }
}
