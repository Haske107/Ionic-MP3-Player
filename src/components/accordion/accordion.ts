import {Component, Input, OnInit, Renderer, ViewChild} from '@angular/core';

@Component({
  selector: 'accordion',
  templateUrl: 'accordion.html'
})
export class AccordionComponent implements OnInit {


  private accordionExpanded: boolean = false;
  // @Input("data") data: any = {};
  @Input("name") name: string;
  @ViewChild("cardContent") cardContent: any;
  private accordionIcon: string = "ios-arrow-down";

  // constructor is loaded before view of application is loaded
  constructor(public renderer: Renderer ) {
    // console.log(this.name);
  }

  // executes after view is completely initialized
  ngOnInit() {
    this.renderer.setElementStyle(this.cardContent.nativeElement,
      "webkitTransition",
      "height: 500ms, padding: 500ms");
  }

  onToggleAccordion() {
    if (this.accordionExpanded) {
      this.renderer.setElementStyle(this.cardContent.nativeElement, "height", "0");
      this.renderer.setElementStyle(this.cardContent.nativeElement, "padding", "0");
    } else {
      this.renderer.setElementStyle(this.cardContent.nativeElement, "height", "auto");
      this.renderer.setElementStyle(this.cardContent.nativeElement, "padding", "16px");
    }
    this.accordionExpanded = !this.accordionExpanded;
    this.accordionIcon = (this.accordionIcon === "ios-arrow-down") ? "ios-arrow-up" : "ios-arrow-down";
  }


}
