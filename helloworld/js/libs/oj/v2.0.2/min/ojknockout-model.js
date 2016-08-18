/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","knockout","ojs/ojmodel"],function(a,f){a.Ha=function(){};o_("KnockoutUtils",a.Ha,a);a.Ha.eO="oj._internalObj";a.Ha.rh="oj._underUpdate";a.Ha.zu="oj.collectionUpdating";a.Ha.nP="oj.collectionSubscription";a.Ha.vP="oj.collectionUpdatingFunc";a.Ha.map=function(b,d,c){function e(c){return function(d){g[a.Ha.rh]||b.set(c,d)}}var g,h,k,l;if(b instanceof a.j){h=Array(b.fe());g=c?f.observableArray(h):h;a.Ha.Z0(g,b);if(c)for(h=0;h<b.Xb.length;h++)k=b.Xb[h],g()[k]=a.Ha.map(b.Hl(k,null,
!0,!1),d);else for(h=0;h<b.Xb.length;h++)k=b.Xb[h],g[k]=a.Ha.map(b.Hl(k,null,!0,!1),d);h=function(c){var d;try{if(!g[a.Ha.rh]){g[a.Ha.zu]=!0;for(d=0;d<c.length;d++){var e=c[d].index,f=a.Ha.Pb(c[d].value),h=c[d].status;"added"===h?e>=b.length-1?b.add(f):b.add(f,{at:e}):"deleted"===h&&b.Qq(f,e)}b.comparator&&(g[a.Ha.rh]=!0,g.sort(function(c,d){return a.Ha.OT(c,d,b.comparator,b,this)}),g[a.Ha.rh]=!1)}}catch(k){throw k;}finally{g[a.Ha.zu]=!1}};c&&g.subscribe&&(g[a.Ha.vP]=h,g[a.Ha.nP]=g.subscribe(h,null,
"arrayChange"));c=function(b,c,d){var e;try{!g[a.Ha.zu]&&c instanceof a.j&&(g[a.Ha.rh]=!0,e=d.index,g.splice(e,1))}catch(f){throw f;}finally{g[a.Ha.rh]=!1}};h=function(b,c,e){var f,h;try{if(!g[a.Ha.zu]&&c instanceof a.j&&(g[a.Ha.rh]=!0,f=c.hia(b),void 0!==f&&-1<f))if(h=a.Ha.map(b,d),e.fillIn){for(var k=Array.isArray(g)?g.length:g().length;k<f;k++)g.splice(k,0,a.Ha.map(c.Hl(k,null,!0,!1),d));g.splice(f,1,h)}else g.splice(f,0,h)}catch(l){throw l;}finally{g[a.Ha.rh]=!1}};k=function(b){try{!g[a.Ha.zu]&&
b instanceof a.j&&(g[a.Ha.rh]=!0,f.isObservable(g)?(g[a.Ha.nP]&&g[a.Ha.nP].dispose(),g.removeAll(),g[a.Ha.vP]&&g.subscribe(g[a.Ha.vP],null,"arrayChange")):g=[])}catch(c){throw c;}finally{g[a.Ha.rh]=!1}};l=function(c){try{!g[a.Ha.zu]&&c instanceof a.j&&(g[a.Ha.rh]=!0,g.sort(function(d,e){return a.Ha.OT(d,e,b.comparator,c,this)}))}catch(d){throw d;}finally{g[a.Ha.rh]=!1}};b.vl(a.Y.D.ADD,h,void 0,void 0,!0);b.vl(a.Y.D.REMOVE,c,void 0,void 0,!0);b.vl(a.Y.D.RESET,k,void 0,void 0,!0);b.vl(a.Y.D.SORT,l,
void 0,void 0,!0)}else{if(void 0===b)return;g={};c=b.attributes;h=null;for(h in c)c.hasOwnProperty(h)&&(k=f.observable(b.get(h)),g[h]=k,l=e(h),l.rsa=h,k.subscribe&&k.subscribe(l));c=function(b){var c,d;try{for(d in g[a.Ha.rh]=!0,c=b.gN(),c)if(c.hasOwnProperty(d))g[d](b.get(d))}catch(e){throw e;}finally{g[a.Ha.rh]=!1}};b.vl(a.Y.D.CHANGE,c,void 0,void 0,!0);a.Ha.Z0(g,b);d&&d(g)}return g};o_("KnockoutUtils.map",a.Ha.map,a);a.Ha.Pb=function(b){return b instanceof a.t?b:b.hasOwnProperty(a.Ha.eO)?b[a.Ha.eO]:
b};a.Ha.OT=function(b,d,c,e,f){return a.j.DQ(a.Ha.Pb(b),a.Ha.Pb(d),c,e,f)};a.Ha.Z0=function(b,d){Object.defineProperty(b,a.Ha.eO,{value:d,enumerable:!1})}});