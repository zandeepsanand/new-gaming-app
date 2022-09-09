"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[518],{2518:(y,d,n)=>{n.r(d),n.d(d,{AdminModule:()=>T});var o=n(6895),p=n(1306),t=n(1571),a=n(4004),l=n(2340),c=n(529);let u=(()=>{class e{constructor(r){this.http=r,this.host=l.N.apiUrl}getDashboardDetails(){return this.http.get(`${this.host}/admin/user-stats`).pipe((0,a.U)(r=>r.data))}getProRequestUsers(){return this.http.get(`${this.host}/admin/pro-request/users`).pipe((0,a.U)(r=>r.data.users))}activateProRequestUser(r){return this.http.patch(`${this.host}/admin/pro-request/user/${r}/activate`,{}).pipe((0,a.U)(i=>i.data))}}return e.\u0275fac=function(r){return new(r||e)(t.LFG(c.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function m(e,s){if(1&e&&(t.ynx(0),t.TgZ(1,"div",2)(2,"div",3)(3,"div",4)(4,"h5",5),t._uU(5,"Subscriber"),t.qZA(),t.TgZ(6,"h6",6),t._uU(7,"Number of users subscribed"),t.qZA(),t.TgZ(8,"p",7),t._uU(9),t.qZA()()(),t.TgZ(10,"div",3)(11,"div",4)(12,"h5",5),t._uU(13,"Pro Users"),t.qZA(),t.TgZ(14,"h6",6),t._uU(15,"Number of pro users"),t.qZA(),t.TgZ(16,"p",7),t._uU(17),t.qZA()()(),t.TgZ(18,"div",3)(19,"div",4)(20,"h5",5),t._uU(21,"Pro Requests"),t.qZA(),t.TgZ(22,"h6",6),t._uU(23,"Number of pro requests"),t.qZA(),t.TgZ(24,"p",7),t._uU(25),t.qZA()()()(),t.BQk()),2&e){const r=s.ngIf;t.xp6(9),t.Oqu(r.subscriber),t.xp6(8),t.Oqu(r.proUsers),t.xp6(8),t.Oqu(r.proRequest)}}let h=(()=>{class e{constructor(r){this.adminService=r,this.stats$=null}ngOnInit(){this.stats$=this.adminService.getDashboardDetails()}}return e.\u0275fac=function(r){return new(r||e)(t.Y36(u))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-dashboard"]],decls:3,vars:3,consts:[[1,"container"],[4,"ngIf"],[1,"row"],[1,"col","m-2","card","text-bg-dark","text-center"],[1,"card-body"],[1,"card-title"],[1,"card-subtitle","mb-2","text-muted"],[1,"card-text"]],template:function(r,i){1&r&&(t.TgZ(0,"div",0),t.YNc(1,m,26,3,"ng-container",1),t.ALo(2,"async"),t.qZA()),2&r&&(t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,i.stats$)))},dependencies:[o.O5,o.Ov]}),e})();var g=n(8505),v=n(5226),f=n.n(v);function Z(e,s){if(1&e){const r=t.EpF();t.TgZ(0,"div",4)(1,"div",5)(2,"h5",6),t._uU(3),t.qZA(),t.TgZ(4,"h6",7),t._uU(5),t.ALo(6,"titlecase"),t.qZA(),t.TgZ(7,"p",8),t._uU(8),t.qZA(),t.TgZ(9,"a",9),t.NdJ("click",function(){const x=t.CHM(r).$implicit,C=t.oxw(2);return t.KtG(C.activateUser(x._id))}),t._uU(10,"Activate"),t.qZA()()()}if(2&e){const r=s.$implicit;t.xp6(3),t.Oqu(r.username),t.xp6(2),t.Oqu(t.lcZ(6,3,r.provider)),t.xp6(3),t.Oqu(r.email)}}function A(e,s){if(1&e&&(t.ynx(0),t.TgZ(1,"div",2),t.YNc(2,Z,11,5,"div",3),t.qZA(),t.BQk()),2&e){const r=s.ngIf;t.xp6(2),t.Q6J("ngForOf",r)}}const U=[{path:"dashboard",component:h},{path:"pre-request",component:(()=>{class e{constructor(r){this.adminService=r}ngOnInit(){this.getUsers()}getUsers(){this.proUsers$=this.adminService.getProRequestUsers()}activateUser(r){this.adminService.activateProRequestUser(r).pipe((0,g.b)(i=>{f().fire({icon:"success",title:"Activated successfully",showConfirmButton:!1,timer:1500}).then(()=>{this.getUsers()})})).subscribe()}}return e.\u0275fac=function(r){return new(r||e)(t.Y36(u))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-pro-request"]],decls:3,vars:3,consts:[[1,"container"],[4,"ngIf"],[1,"row","g-6"],["class","col-4 m-2 card text-bg-dark",4,"ngFor","ngForOf"],[1,"col-4","m-2","card","text-bg-dark"],[1,"card-body"],[1,"card-title"],[1,"card-subtitle","mb-2","text-muted"],[1,"card-text"],[1,"btn","btn-primary",3,"click"]],template:function(r,i){1&r&&(t.TgZ(0,"div",0),t.YNc(1,A,3,1,"ng-container",1),t.ALo(2,"async"),t.qZA()),2&r&&(t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,i.proUsers$)))},dependencies:[o.sg,o.O5,o.Ov,o.rS]}),e})()},{path:"",pathMatch:"full",redirectTo:"dashboard"}];let q=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[p.Bz.forChild(U),p.Bz]}),e})();var b=n(9532);let T=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({providers:[{provide:c.TP,useClass:b.z,multi:!0},u],imports:[o.ez,c.JF,q]}),e})()}}]);