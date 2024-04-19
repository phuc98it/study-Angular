import { Component, ContentChild, Input, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { TabGroupComponent } from '../tab-group/tab-group.component';
import { TabPanelContentDirective } from './tab-panel.directive';

@Component({
  selector: 'app-tab-panel',
  templateUrl: './tab-panel.component.html',
  styleUrl: './tab-panel.component.css'
})
export class TabPanelComponent implements OnInit, OnDestroy {
  @Input() title: string;
  @ViewChild(TemplateRef, { static: true }) implicitBody: TemplateRef<unknown>;

  @ContentChild(TabPanelContentDirective , { static: true , read: TemplateRef}) explicitBody: TemplateRef<unknown>;
  
  constructor(private tabGroup: TabGroupComponent) {}

  get panelBody(): TemplateRef<unknown> {
    return this.explicitBody || this.implicitBody;
  }

  ngOnInit() {
    this.tabGroup.addTabPanel(this);
  }

  ngOnDestroy() {
    this.tabGroup.removeTabPanel(this);
  }
}
