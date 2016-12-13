/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './hello-world.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/debug_context';
import * as import3 from '@angular/core/src/render/api';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from './hello-world.style.css.shim';
export class Wrapper_HelloWorldComponent {
  /*private*/ _eventHandler:Function;
  context:import0.HelloWorldComponent;
  /*private*/ _changed:boolean;
  constructor() {
    this._changed = false;
    this.context = new import0.HelloWorldComponent();
  }
  ngOnDetach(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  ngDoCheck(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    return changed;
  }
  checkHost(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import1.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
const nodeDebugInfos_HelloWorldComponent_Host0:import2.StaticNodeDebugInfo[] = [new import2.StaticNodeDebugInfo([import0.HelloWorldComponent],import0.HelloWorldComponent,{})];
var renderType_HelloWorldComponent_Host:import3.RenderComponentType = import4.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_HelloWorldComponent_Host0 extends import1.DebugAppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.HelloWorldComponent>;
  _HelloWorldComponent_0_3:Wrapper_HelloWorldComponent;
  constructor(viewUtils:import4.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_HelloWorldComponent_Host0,renderType_HelloWorldComponent_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_HelloWorldComponent_Host0);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer,'hello-world-app',import4.EMPTY_INLINE_ARRAY,rootSelector,this.debug(0,0,0));
    this.compView_0 = new View_HelloWorldComponent0(this.viewUtils,this,0,this._el_0);
    this._HelloWorldComponent_0_3 = new Wrapper_HelloWorldComponent();
    this.compView_0.create(this._HelloWorldComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import8.ComponentRef_<any>(0,this,this._el_0,this._HelloWorldComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.HelloWorldComponent) && (0 === requestNodeIndex))) { return this._HelloWorldComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(0,0,0);
    this._HelloWorldComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const HelloWorldComponentNgFactory:import8.ComponentFactory<import0.HelloWorldComponent> = new import8.ComponentFactory<import0.HelloWorldComponent>('hello-world-app',View_HelloWorldComponent_Host0,import0.HelloWorldComponent);
const styles_HelloWorldComponent:any[] = [import9.styles];
const nodeDebugInfos_HelloWorldComponent0:import2.StaticNodeDebugInfo[] = [
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{})
]
;
var renderType_HelloWorldComponent:import3.RenderComponentType = import4.createRenderComponentType('/Users/isaac/Documents/Contributions/angular2-aot-webpack/src/app/components/hello-world.template.html',0,import5.ViewEncapsulation.Emulated,styles_HelloWorldComponent,{});
export class View_HelloWorldComponent0 extends import1.DebugAppView<import0.HelloWorldComponent> {
  _el_0:any;
  _text_1:any;
  _text_2:any;
  constructor(viewUtils:import4.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_HelloWorldComponent0,renderType_HelloWorldComponent,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_HelloWorldComponent0);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._el_0 = import4.createRenderElement(this.renderer,parentRenderNode,'h1',import4.EMPTY_INLINE_ARRAY,this.debug(0,0,0));
    this._text_1 = this.renderer.createText(this._el_0,'Hello World!',this.debug(1,0,4));
    this._text_2 = this.renderer.createText(parentRenderNode,'\n',this.debug(2,0,21));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._text_2
    ]
    ),(null as any));
    return (null as any);
  }
}