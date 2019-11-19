(function(){(this||window).webpackJsonp.registerAbsMids({"esri/views/3d/layers/support/TileTree3DDebugger":1722,"esri/views/3d/layers/support/I3STreeDebugger":1847})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{1722:function(e,r,t){var o,i;o=[t.dj.c(e.i),r,t(1),t(2),t(97),t(16),t(13),t(9),t(0),t(231),t(294),t(295),t(190)],void 0===(i=function(e,r,t,o,i,n,s,a,l,u,c,p,f){Object.defineProperty(r,"__esModule",{value:!0});var h=[[0,179,255],[117,62,128],[0,104,255],[215,189,166],[32,0,193],[98,162,206],[102,112,129],[52,125,0],[142,118,246],[138,83,0],[92,122,255],[122,55,83],[0,142,255],[81,40,179],[0,200,244],[13,24,127],[0,170,147],[19,58,241],[22,44,35]],d=function(e){function r(r){var t=e.call(this)||this;return t.updating=!1,t.enablePolygons=!0,t._graphics=[],t._enabled=!0,t}return o(r,e),r.prototype.initialize=function(){this._symbols=h.map(function(e){return new p(new u({material:{color:[e[0],e[1],e[2],.6]},outline:{color:"black",size:1}}))})},Object.defineProperty(r.prototype,"enabled",{get:function(){return this._enabled},set:function(e){this._enabled!==e&&(this._enabled=e,this.update())},enumerable:!0,configurable:!0}),r.prototype.destroy=function(){this.view&&(this.clear(),this._set("view",null))},r.prototype._update=function(e,r,t){var o=this;if(this.clear(),this._enabled){var n,l=t.getLabel||function(e){var r=e.lij[0]+"/"+e.lij[1]+"/"+e.lij[2];return a.isSome(n)&&(r+=" ("+n+")"),r};e.forEach(function(u,p){var h=u.lij[0],d=r(u);o.enablePolygons&&o._graphics.push(new i({geometry:d,symbol:o._symbols[h%o._symbols.length]}));var v=p/(e.length-1),y=s.lerp(0,200,v),b=s.lerp(20,6,v);n=t.getLoadPriority&&t.getLoadPriority(u);var g=a.isSome(n)&&n>=e.length,m=l(u),w=new i({geometry:d.extent.center,symbol:new c({verticalOffset:{screenLength:40/.75},callout:{type:"line",color:"white",border:{color:"black"}},symbolLayers:[new f({text:m,halo:{color:"white",size:1/.75},material:{color:[y,g?0:y,g?0:y]},size:b/.75})]})});o._graphics.push(w)}),this.view.graphics.addMany(this._graphics)}},r.prototype.clear=function(){this.view.graphics.removeMany(this._graphics),this._graphics=[]},t([l.property({constructOnly:!0})],r.prototype,"view",void 0),t([l.property({readOnly:!0})],r.prototype,"updating",void 0),t([l.subclass("esri.views.3d.layers.support.TileTree3DDebugger")],r)}(l.declared(n));r.TileTree3DDebugger=d}.apply(null,o))||(e.exports=i)},1847:function(e,r,t){var o,i;o=[t.dj.c(e.i),r,t(1),t(2),t(4),t(36),t(0),t(21),t(19),t(8),t(5),t(1722),t(41)],void 0===(i=function(e,r,t,o,i,n,s,a,l,u,c,p,f){Object.defineProperty(r,"__esModule",{value:!0});var h=function(e){function r(r){return e.call(this,r)||this}return o(r,e),r.prototype.update=function(){if(this.clear(),this.enabled){var e=this.lv.getLoadedNodes(),r=this.view.renderSpatialReference,t=this.nodeSR,o=e.map(function(e){return function(e,r,t){var o=e.obb;a.mat4.fromQuat(d,o.quaternion),u.vec3.copy(v,o.center),f.bufferToBuffer(v,t,0,v,r,0,1),d[12]=v[0],d[13]=v[1],d[14]=v[2];var i=[[],[],[]];u.vec3.copy(v,o.halfSize),u.vec3.transformMat4(v,v,d),f.bufferToBuffer(v,r,0,v,t,0,1),i[0].push([v[0],v[1]]),u.vec3.copy(v,o.halfSize),v[0]=-v[0],u.vec3.transformMat4(v,v,d),f.bufferToBuffer(v,r,0,v,t,0,1),i[0].push([v[0],v[1]]),u.vec3.copy(v,o.halfSize),v[0]=-v[0],v[1]=-v[1],u.vec3.transformMat4(v,v,d),f.bufferToBuffer(v,r,0,v,t,0,1),i[0].push([v[0],v[1]]),u.vec3.copy(v,o.halfSize),v[1]=-v[1],u.vec3.transformMat4(v,v,d),f.bufferToBuffer(v,r,0,v,t,0,1),i[0].push([v[0],v[1]]),i[1].push(i[0][0]),i[1].push(i[0][1]),u.vec3.copy(v,o.halfSize),v[0]=-v[0],v[2]=-v[2],u.vec3.transformMat4(v,v,d),f.bufferToBuffer(v,r,0,v,t,0,1),i[1].push([v[0],v[1]]),u.vec3.copy(v,o.halfSize),v[2]=-v[2],u.vec3.transformMat4(v,v,d),f.bufferToBuffer(v,r,0,v,t,0,1),i[1].push([v[0],v[1]]),i[2].push(i[0][0]),i[2].push(i[0][3]),u.vec3.copy(v,o.halfSize),v[1]=-v[1],v[2]=-v[2],u.vec3.transformMat4(v,v,d),f.bufferToBuffer(v,r,0,v,t,0,1),i[2].push([v[0],v[1]]),i[2].push(i[1][3]);var s=new n.Polygon({rings:i,spatialReference:t});return{lij:[e.level,e.childCount],id:e.id,geometry:s}}(e,r,t)}).sort(function(e,r){return e.lij[0]===r.lij[0]?e.id>r.id?-1:1:e.lij[0]-r.lij[0]});this._update(o,function(e){return e.geometry},{getLabel:function(e){return e.lij[0]+"/"+e.id+"/"+e.lij[1]}})}},t([s.property({constructOnly:!0})],r.prototype,"lv",void 0),t([s.property({constructOnly:!0})],r.prototype,"nodeSR",void 0),t([s.subclass("esri.views.3d.layers.support.I3STreeDebugger")],r)}(s.declared(p.TileTree3DDebugger));r.I3STreeDebugger=h;var d=l.mat4f64.create(),v=c.vec3f64.create()}.apply(null,o))||(e.exports=i)}}]);