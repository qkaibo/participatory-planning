(function(){(this||window).webpackJsonp.registerAbsMids({"esri/views/layers/LayerView":1633,"esri/views/3d/layers/LayerView3D":1640,"esri/views/3d/layers/support/projectExtentUtils":1664,"esri/views/3d/layers/DynamicLayerView3D":1748,"esri/views/3d/layers/support/overlayImageUtils":1749,"esri/views/layers/WMSLayerView":1845,"esri/views/3d/layers/WMSLayerView3D":2577})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{1633:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r(2),r(1),r(16),r(49),r(282),r(284),r(6),r(225),r(7),r(0)],void 0===(n=function(e,t,r,i,n,a,o,s,l,u,d,p){return function(e){function t(t){var r=e.call(this)||this;return r.layer=null,r.parent=null,r}return r(t,e),t.prototype.initialize=function(){var e=this;this.addResolvingPromise(this.layer),this.when().catch(function(t){if("layerview:create-error"!==t.name){var r=e.layer&&e.layer.id||"no id",i=e.layer&&e.layer.title||"no title";return l.getLogger(e.declaredClass).error("#resolve()","Failed to resolve layer view (layer title: '"+i+"', id: '"+r+"')",t),d.reject(t)}})},t.prototype.destroy=function(){this.layer=this.parent=null},Object.defineProperty(t.prototype,"fullOpacity",{get:function(){var e=function(e){return null==e?1:e};return e(this.get("layer.opacity"))*e(this.get("parent.fullOpacity"))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"suspended",{get:function(){return!this.canResume()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"updating",{get:function(){return!!(this.updatingHandles&&this.updatingHandles.updating||this.isUpdating())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"visible",{get:function(){return!0===this.get("layer.visible")},set:function(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")},enumerable:!0,configurable:!0}),t.prototype.canResume=function(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1},t.prototype.isUpdating=function(){return!1},i([p.property({dependsOn:["layer.opacity","parent.fullOpacity"]})],t.prototype,"fullOpacity",null),i([p.property()],t.prototype,"layer",void 0),i([p.property()],t.prototype,"parent",void 0),i([p.property({readOnly:!0,dependsOn:["visible","layer.loaded","parent.suspended"]})],t.prototype,"suspended",null),i([p.property({type:Boolean,dependsOn:["updatingHandles.updating"],readOnly:!0})],t.prototype,"updating",null),i([p.property({dependsOn:["layer.visible"]})],t.prototype,"visible",null),i([p.subclass("esri.views.layers.LayerView")],t)}(p.declared(o.HandleOwnerMixin(s.IdentifiableMixin(u.EsriPromiseMixin(a.EventedMixin(n))))))}.apply(null,i))||(e.exports=n)},1640:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r(2),r(1),r(7),r(25),r(0),r(408)],void 0===(n=function(e,t,r,i,n,a,o,s){Object.defineProperty(t,"__esModule",{value:!0}),t.LayerView3D=function(e){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.slicePlaneEnabled=!1,t.supportsHeightUnitConversion=!1,t}return r(t,e),t.prototype.destroy=function(){this.view=null},t.prototype.postscript=function(e){this.inherited(arguments),s.mayHaveHeightModelInfo(this.layer)&&this.addResolvingPromise(this._validateHeightModelInfo())},t.prototype._validateHeightModelInfo=function(){var e=this;return n.create(function(t,r){a.whenFalseOnce(e.view.defaultsFromMap,"isHeightModelInfoSearching",function(){var i=s.rejectLayerError(e.layer,e.view.heightModelInfo,e.supportsHeightUnitConversion);i?r(i):t()})})},i([o.property()],t.prototype,"view",void 0),i([o.property()],t.prototype,"slicePlaneEnabled",void 0),i([o.subclass("esri.views.3d.layers.LayerView3D")],t)}(o.declared(e))}}.apply(null,i))||(e.exports=n)},1664:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r(58),r(7),r(63),r(412)],void 0===(n=function(e,t,r,i,n,a){Object.defineProperty(t,"__esModule",{value:!0}),t.toViewIfLocal=function(e){var t=e.view.spatialReference,o=e.layer.fullExtent,s=o&&o.spatialReference;return s?s.equals(t)?i.resolve(o.clone()):n.canProject(s,t)?i.resolve(n.project(o,t)):e.view.state.isLocal?r.safeCast(a.projectGeometry(o,t,e.layer.portalItem).then(function(t){return!e.destroyed&&t?t:void 0}).catch(function(){return null})):i.resolve(null):i.resolve(null)}}.apply(null,i))||(e.exports=n)},1748:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r(2),r(1),r(4),r(10),r(11),r(58),r(6),r(7),r(25),r(0),r(19),r(37),r(33),r(1640),r(1749),r(1664),r(76),r(194),r(148),r(149),r(1633),r(640)],void 0===(n=function(e,t,r,i,n,a,o,s,l,u,d,p,h,c,y,f,g,m,v,w,x,b,_,S){var O=l.getLogger("esri.views.3d.layers.DynamicLayerView3D"),R=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.supportsDraping=!0,t.hasDraped=!0,t.fullExtentInLocalViewSpatialReference=null,t.overlayUpdating=!1,t.maximumDataResolution=null,t._images=[],t._extents=[],t.updateWhenStationary=!0,t}return r(t,e),Object.defineProperty(t.prototype,"drawingOrder",{get:function(){return this._get("drawingOrder")},set:function(e){if(e!==this._get("drawingOrder")){this._set("drawingOrder",e);var t=new Set;this._images.forEach(function(r){r&&r.material&&(r.material.renderPriority=e,t.add(r.material.id))}),t.size>0&&(this.view._stage.renderView.getDrapedRenderer().updateRenderOrder(t),this.emit("draped-data-change"))}},enumerable:!0,configurable:!0}),t.prototype.initialize=function(){var e=this;this.drawingOrder=this.view.getDrawingOrder(this.layer.uid),this.addResolvingPromise(m.toViewIfLocal(this).then(function(t){return e._set("fullExtentInLocalViewSpatialReference",t)})),this.updatingHandles.add(this,"suspended",function(){return e._suspendedChangeHandler()}),this.handles.add(this.view.resourceController.scheduler.registerIdleStateCallbacks(function(){e._isScaleRangeActive()&&e.notifyChange("suspended")},function(){})),this._isScaleRangeLayer()&&this.updatingHandles.add(this.layer,"scaleRangeId",function(){return e.notifyChange("suspended")}),this.updatingHandles.add(this,"fullOpacity",function(t){return e._opacityChangeHandler(t)})},t.prototype.destroy=function(){this.clear()},t.prototype.setDrapingExtent=function(e,t,r,i,n,a){var o=this._clippedExtent(t,M),s=g.computeImageExportSize(t,o,i);if(a*=this.view.pixelRatio,"imageMaxWidth"in this.layer||"imageMaxHeight"in this.layer){var l=this.layer.imageMaxWidth,u=this.layer.imageMaxHeight;if(s.width>l){var d=l/s.width;s.height=Math.floor(s.height*d),s.width=l,a*=d}if(s.height>u){d=u/s.height;s.width=Math.floor(s.width*d),s.height=u,a*=d}}var p=this._extents[e];p&&y.equals(p.extent,o)&&!this._imageSizeDiffers(o,r,p.imageSize,s)||(this._extents[e]={extent:y.create(o),spatialReference:r,imageSize:s,renderLocalOrigin:n,pixelRatio:a},this.suspended||this._fetch(e))},t.prototype.getGraphicFromGraphicUid=function(e){return null},t.prototype.clear=function(){for(var e=0;e<this._images.length;e++)this._clearImage(e)},t.prototype.doRefresh=function(e){return o(this,void 0,void 0,function(){var t,r;return a(this,function(i){switch(i.label){case 0:if(this.suspended)return[2];for(t=[],r=0;r<this._extents.length;r++)this._extents[r]&&t.push(this._fetch(r,e));return[4,u.eachAlways(t)];case 1:return i.sent(),[2]}})})},t.prototype.canResume=function(){if(!this.inherited(arguments))return!1;if(this._isScaleRangeLayer()){var e=this.layer,t=e.minScale,r=e.maxScale;if(t>0||r>0){var i=this.view.scale;if(i<r||t>0&&i>t)return!1}}return!0},t.prototype.isUpdating=function(){if(this.overlayUpdating)return!0;for(var e=0,t=this._images;e<t.length;e++)if(t[e].loadingPromise)return!0;return!1},t.prototype.processResult=function(e,t,r){return o(this,void 0,void 0,function(){return a(this,function(r){return(t instanceof HTMLImageElement||t instanceof HTMLCanvasElement)&&(e.image=t),[2]})})},t.prototype.findExtentInfoAt=function(e){for(var t=0,r=this._extents;t<r.length;t++){var i=r[t],n=i.extent;if(new c(n[0],n[1],n[2],n[3],i.spatialReference).contains(e))return i}return null},t.prototype.getFetchOptions=function(){},t.prototype.redraw=function(e,t){return o(this,void 0,void 0,function(){var r=this;return a(this,function(i){switch(i.label){case 0:return[4,s.forEach(this._images,function(i,n){return o(r,void 0,void 0,function(){return a(this,function(r){switch(r.label){case 0:return i?[4,e(i,t)]:[2];case 1:return r.sent(),this._createStageObjects(n,i.image),this.emit("draped-data-change"),[2]}})})})];case 1:return i.sent(),[2]}})})},t.prototype._imageSizeDiffers=function(e,t,r,i){if(!this.maximumDataResolution)return!0;if(v.TESTS_DISABLE_UPDATE_THRESHOLDS)return!0;var n=y.width(e)/this.maximumDataResolution.x,a=y.height(e)/this.maximumDataResolution.y,o=n/r.width,s=a/r.height,l=n/i.width,u=a/i.height,d=Math.abs(o-l),p=Math.abs(s-u);return d>1.5||p>1.5},t.prototype._fetch=function(e,t){return o(this,void 0,void 0,function(){var r,i,o,l,d,p,h,f,g=this;return a(this,function(a){switch(a.label){case 0:return this.suspended?[2]:(r=this._extents[e],i=r.extent,o=new c(i[0],i[1],i[2],i[3],r.spatialReference),this._images[e]||(this._images[e]={texture:null,material:null,rendergeometry:null,loadingPromise:null,loadingAbortController:null,image:null,pixelData:null,renderExtent:y.create(i)}),(l=this._images[e]).loadingAbortController&&(l.loadingAbortController.abort(),l.loadingAbortController=null),0===o.width||0===o.height?(this._clearImage(e),[2]):(d=u.createAbortController(),l.loadingAbortController=d,u.onAbort(t,function(){return d.abort()}),p=d.signal,h=s.safeCast(this._waitFetchReady(p)).then(function(){var e=n({requestAsImageElement:!0,pixelRatio:r.pixelRatio},g.getFetchOptions(),{signal:p});return g.layer.fetchImage(o,r.imageSize.width,r.imageSize.height,e)}).then(function(e){return g.processResult(l,e,p)}),l.loadingPromise=h,u.always(h,function(){h===l.loadingPromise&&(l.loadingPromise=null,l.loadingAbortController=null)}),f=h.then(function(){y.set(l.renderExtent,i),g._createStageObjects(e,l.image),0===e&&g._images[1]&&g._images[1].rendergeometry&&g._createStageObjects(1,null),g.notifyChange("updating"),g.emit("draped-data-change")}).catch(function(e){throw e&&!u.isAbortError(e)&&O.error(e),g.notifyChange("updating"),e}),this.notifyChange("updating"),[4,f]));case 1:return a.sent(),[2]}})})},t.prototype._clearImage=function(e){var t=this._images[e],r=this.view._stage;t&&(t.rendergeometry&&(r.renderView.getDrapedRenderer().removeRenderGeometries([t.rendergeometry]),t.rendergeometry=null),t.texture&&(r.remove(4,t.texture.id),t.texture=null),t.material&&(r.remove(3,t.material.id),t.material=null),t.loadingAbortController&&(t.loadingAbortController.abort(),t.loadingAbortController=null),t.loadingPromise=null,t.image=null,t.pixelData=null)},t.prototype._createStageObjects=function(e,t){var r=this.view._stage,i=this._images[e];i.texture&&(r.remove(4,i.texture.id),i.texture=null),t?(i.texture=new x(t,"dynamicLayer",{width:t.width,height:t.height,wrap:{s:33071,t:33071}}),r.add(4,i.texture)):i.material&&(r.remove(3,i.material.id),i.material=null),!i.material&&i.texture?(i.material=new b({ambient:[1,1,1],diffuse:[0,0,0],transparent:!0,opacity:this.fullOpacity,textureId:i.texture.id,receiveSSAO:!1},"dynamicLayer"),i.material.renderPriority=this.drawingOrder,r.add(3,i.material)):i.material&&t&&i.material.setParameterValues({textureId:i.texture.id});var n=r.renderView.getDrapedRenderer();if(i.material){var a=void 0,o=this._extents[e].renderLocalOrigin;if(0===e)a=g.createGeometryForExtent(i.renderExtent,-1);else{if(1!==e)return void console.error("DynamicLayerView3D._createStageObjects: Invalid extent idx");var s=this._images[0].renderExtent;if(!s)return;a=g.createOuterImageGeometry(s,i.renderExtent,-1)}var l=new w(a);l.material=i.material,l.origin=o,l.transformation=h.mat4f64.create(),l.name="dynamicLayer",l.uniqueName="dynamicLayer#"+a.id,n.addRenderGeometries([l]),i.rendergeometry&&n.removeRenderGeometries([i.rendergeometry]),i.rendergeometry=l}else i.rendergeometry&&(n.removeRenderGeometries([i.rendergeometry]),i.rendergeometry=null)},t.prototype._isScaleRangeLayer=function(){return"minScale"in this.layer&&"maxScale"in this.layer},t.prototype._isScaleRangeActive=function(){return!!this._isScaleRangeLayer()&&(this.layer.minScale>0||this.layer.maxScale>0)},t.prototype._clippedExtent=function(e,t){if("local"!==this.view.viewingMode)return y.set(t,e);var r=this.view.basemapTerrain,i=r.extent;return r.ready&&i?y.intersection(e,i,t):y.set(t,e)},t.prototype._opacityChangeHandler=function(e){for(var t=0,r=this._images;t<r.length;t++){var i=r[t];i&&i.material&&i.material.setParameterValues({opacity:e})}this.emit("draped-data-change")},t.prototype._suspendedChangeHandler=function(){this.suspended?(this.clear(),this.emit("draped-data-change")):this.refresh()},t.prototype._waitFetchReady=function(e){return o(this,void 0,void 0,function(){return a(this,function(t){switch(t.label){case 0:return this.updateWhenStationary?[4,d.whenOnce(this.view,"stationary",e)]:[3,2];case 1:t.sent(),t.label=2;case 2:return[2]}})})},i([p.property()],t.prototype,"layer",void 0),i([p.property({dependsOn:["view.scale","layer.minScale","layer.maxScale"]})],t.prototype,"suspended",void 0),i([p.property({type:Boolean})],t.prototype,"supportsDraping",void 0),i([p.property({type:Boolean})],t.prototype,"hasDraped",void 0),i([p.property({value:0,type:Number})],t.prototype,"drawingOrder",null),i([p.property({readOnly:!0})],t.prototype,"fullExtentInLocalViewSpatialReference",void 0),i([p.property()],t.prototype,"overlayUpdating",void 0),i([p.property({dependsOn:["overlayUpdating"]})],t.prototype,"updating",void 0),i([p.subclass("esri.views.3d.layers.DynamicLayerView3D")],t)}(p.declared(S.RefreshableLayerView(f.LayerView3D(_)))),M=y.create();return R}.apply(null,i))||(e.exports=n)},1749:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r(33),r(99),r(188),r(20)],void 0===(n=function(e,t,r,i,n,a){function o(e,t){var r=[[e[0],e[1],t],[e[2],e[1],t],[e[2],e[3],t],[e[0],e[3],t]];return n.createSquareGeometry(r)}Object.defineProperty(t,"__esModule",{value:!0}),t.computeImageExportSize=function(e,t,i){var n=r.width(e)/r.height(e),a={width:i,height:i};return n>1.0001?a.height=i/n:n<.9999&&(a.width=i*n),a.width=Math.round(a.width/(r.width(e)/r.width(t))),a.height=Math.round(a.height/(r.height(e)/r.height(t))),a},t.createGeometryForExtent=o,t.createOuterImageGeometry=function(e,t,n){if(!r.intersects(e,t))return o(t,n);for(var l=[e[1]-t[1],Math.min(e[3],t[3])-Math.max(e[1],t[1]),t[3]-e[3],123456],u=[e[0]-t[0],Math.min(e[2],t[2])-Math.max(e[0],t[0]),t[2]-e[2],123456],d=t[2]-t[0],p=t[3]-t[1],h=u[0]>0&&u[2]>0?3:2,c=l[0]>0&&l[2]>0?3:2,y=(c+1)*(h+1),f=new Float32Array(3*y),g=new Float32Array(2*y),m=new Uint32Array(6*(c*h-1)),v=0,w=0,x=0,b=0,_=0,S=0;S<4;S++){var O=l[S];if(!(O<=0)){for(var R=0,M=0;M<4;M++){var L=u[M];L<=0||(f[w++]=t[0]+R,f[w++]=t[1]+v,f[w++]=n,g[x++]=R/d,g[x++]=v/p,M<3&&S<3&&(1!==M||1!==S)&&(m[_++]=b,m[_++]=b+1,m[_++]=b+h+1,m[_++]=b+1,m[_++]=b+h+2,m[_++]=b+h+1),b++,R+=L)}v+=O}}var P={};P[a.VertexAttrConstants.POSITION]={size:3,data:f},P[a.VertexAttrConstants.NORMAL]={size:3,data:s},P[a.VertexAttrConstants.UV0]={size:2,data:g};for(var I={},E=new Uint32Array(m.length),D=0;D<E.length;D++)E[D]=0;return I[a.VertexAttrConstants.POSITION]=m,I[a.VertexAttrConstants.NORMAL]=E,I[a.VertexAttrConstants.UV0]=m,new i.GeometryData(P,I)};var s=new Float32Array([0,0,1])}.apply(null,i))||(e.exports=n)},1845:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r(2),r(1),r(10),r(11),r(14),r(7),r(0)],void 0===(n=function(e,t,r,i,n,a,o,s,l){Object.defineProperty(t,"__esModule",{value:!0}),t.WMSLayerView=function(e){return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.prototype.fetchPopupFeatures=function(e){return a(this,void 0,void 0,function(){var t,r,i,a,l,u,d,p,h;return n(this,function(n){if(t=this.layer,!e)return[2,s.reject(new o("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:t}))];if(!(r=t.popupEnabled))return[2,s.reject(new o("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:r}))];if(i=this.createFetchPopupFeaturesQuery(e),a=i.extent,l=i.width,u=i.height,d=i.x,p=i.y,!(a&&l&&u))throw new o("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:a,width:l,height:u});return[2,(h=t.fetchFeatureInfo(a,l,u,d,p))?h.then(function(e){return[e]}):s.resolve([])]})})},i([l.property()],t.prototype,"layer",void 0),i([l.subclass("esri.layers.mixins.WMSLayerView")],t)}(l.declared(e))}}.apply(null,i))||(e.exports=n)},2577:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r(2),r(1),r(14),r(7),r(0),r(37),r(1824),r(1748),r(1845)],void 0===(n=function(e,t,r,i,n,a,o,s,l,u,d){return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.prototype.initialize=function(){var e=this;this.layer.supportsSpatialReference(this.view.spatialReference)||this.addResolvingPromise(a.reject(new n("layerview:spatial-reference-incompatible","The spatial references supported by this WMS layer are incompatible with the spatial reference of the view"))),this._exportWMSImageParameters=new l({layer:this.layer}),this.updatingHandles.add(this._exportWMSImageParameters,"version",function(t){e.updatingHandles.addPromise(e.refreshDebounced())})},t.prototype.destroy=function(){this._exportWMSImageParameters&&(this._exportWMSImageParameters.layer=null,this._exportWMSImageParameters.destroy(),this._exportWMSImageParameters=null)},t.prototype.createFetchPopupFeaturesQuery=function(e){var t=this.findExtentInfoAt(e),r=t.extent,i=new s(r[0],r[1],r[2],r[3],t.spatialReference),n=t.imageSize,a=n.width,o=n.height,l=i.width/a;return{extent:i,width:a,height:o,x:Math.round((e.x-i.xmin)/l),y:Math.round((i.ymax-e.y)/l)}},i([o.property({dependsOn:["view.spatialReference","layer.spatialReferences"]})],t.prototype,"suspended",void 0),i([o.subclass("esri.views.3d.layers.WMSLayerView3D")],t)}(o.declared(d.WMSLayerView(u)))}.apply(null,i))||(e.exports=n)}}]);