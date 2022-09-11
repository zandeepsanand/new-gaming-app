"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[518],{2518:(P,l,o)=>{o.r(l),o.d(l,{AdminModule:()=>y});var i=o(6895),h=o(1306),a=o(6564),m=o(8505),t=o(1571),c=o(4004),g=o(2340),u=o(529);let p=(()=>{class s{constructor(e){this.http=e,this.host=g.N.apiUrl}getDashboardDetails(){return this.http.get(`${this.host}/admin/user-stats`).pipe((0,c.U)(e=>e.data))}getProRequestUsers(){return this.http.get(`${this.host}/admin/pro-request/users`).pipe((0,c.U)(e=>e.data.users))}activateProRequestUser(e){return this.http.patch(`${this.host}/admin/pro-request/user/${e}/activate`,{}).pipe((0,c.U)(n=>n.data))}}return s.\u0275fac=function(e){return new(e||s)(t.LFG(u.eN))},s.\u0275prov=t.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})();function v(s,r){if(1&s&&(t.ynx(0),t.TgZ(1,"div",2)(2,"div",3)(3,"div",4)(4,"h5",5),t._uU(5,"Subscriber"),t.qZA(),t.TgZ(6,"h6",6),t._uU(7,"Number of users subscribed"),t.qZA(),t.TgZ(8,"p",7),t._uU(9),t.qZA()()(),t.TgZ(10,"div",3)(11,"div",4)(12,"h5",5),t._uU(13,"Pro Users"),t.qZA(),t.TgZ(14,"h6",6),t._uU(15,"Number of pro users"),t.qZA(),t.TgZ(16,"p",7),t._uU(17),t.qZA()()(),t.TgZ(18,"div",3)(19,"div",4)(20,"h5",5),t._uU(21,"Pro Requests"),t.qZA(),t.TgZ(22,"h6",6),t._uU(23,"Number of pro requests"),t.qZA(),t.TgZ(24,"p",7),t._uU(25),t.qZA()()()(),t.TgZ(26,"div",8)(27,"div",9),t._UZ(28,"canvas",10),t.qZA()(),t.BQk()),2&s){const e=r.ngIf,n=t.oxw();t.xp6(9),t.Oqu(e.subscriber),t.xp6(8),t.Oqu(e.proUsers),t.xp6(8),t.Oqu(e.proRequest),t.xp6(3),t.Q6J("data",n.pieChartData)("type",n.pieChartType)("options",n.pieChartOptions)("plugins",n.pieChartPlugins)}}let f=(()=>{class s{constructor(e){this.adminService=e,this.stats$=null,this.pieChartOptions={responsive:!0,plugins:{legend:{display:!0,position:"top"}}},this.pieChartData={labels:["Subscribers","Pro Users","Pro Requests"],datasets:[{data:[0,0,0]}]},this.pieChartType="pie",this.pieChartPlugins=[]}ngOnInit(){this.stats$=this.adminService.getDashboardDetails().pipe((0,m.b)(e=>{this.pieChartData.datasets[0]={data:[e.subscriber,e.proUsers,e.proRequest]}}))}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(p))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-dashboard"]],viewQuery:function(e,n){if(1&e&&t.Gf(a.jh,5),2&e){let d;t.iGM(d=t.CRH())&&(n.chart=d.first)}},decls:3,vars:3,consts:[[1,"container"],[4,"ngIf"],[1,"row"],[1,"col","m-2","card","text-bg-dark","text-center"],[1,"card-body"],[1,"card-title"],[1,"card-subtitle","mb-2","text-muted"],[1,"card-text"],[1,"row","my-4"],[1,"col-12","col-lg-6","col-md-6"],["baseChart","",3,"data","type","options","plugins"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.YNc(1,v,29,7,"ng-container",1),t.ALo(2,"async"),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,n.stats$)))},dependencies:[i.O5,a.jh,i.Ov]}),s})();var Z=o(5226),A=o.n(Z);function U(s,r){if(1&s){const e=t.EpF();t.TgZ(0,"div",4)(1,"div",5)(2,"h5",6),t._uU(3),t.qZA(),t.TgZ(4,"h6",7),t._uU(5),t.ALo(6,"titlecase"),t.qZA(),t.TgZ(7,"p",8),t._uU(8),t.qZA(),t.TgZ(9,"a",9),t.NdJ("click",function(){const x=t.CHM(e).$implicit,R=t.oxw(2);return t.KtG(R.activateUser(x._id))}),t._uU(10,"Activate"),t.qZA()()()}if(2&s){const e=r.$implicit;t.xp6(3),t.Oqu(e.username),t.xp6(2),t.Oqu(t.lcZ(6,3,e.provider)),t.xp6(3),t.Oqu(e.email)}}function C(s,r){if(1&s&&(t.ynx(0),t.TgZ(1,"div",2),t.YNc(2,U,11,5,"div",3),t.qZA(),t.BQk()),2&s){const e=r.ngIf;t.xp6(2),t.Q6J("ngForOf",e)}}const q=[{path:"dashboard",component:f},{path:"pre-request",component:(()=>{class s{constructor(e){this.adminService=e}ngOnInit(){this.getUsers()}getUsers(){this.proUsers$=this.adminService.getProRequestUsers()}activateUser(e){this.adminService.activateProRequestUser(e).pipe((0,m.b)(n=>{A().fire({icon:"success",title:"Activated successfully",showConfirmButton:!1,timer:1500}).then(()=>{this.getUsers()})})).subscribe()}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(p))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-pro-request"]],decls:3,vars:3,consts:[[1,"container"],[4,"ngIf"],[1,"row","g-6"],["class","col-4 m-2 card text-bg-dark",4,"ngFor","ngForOf"],[1,"col-4","m-2","card","text-bg-dark"],[1,"card-body"],[1,"card-title"],[1,"card-subtitle","mb-2","text-muted"],[1,"card-text"],[1,"btn","btn-primary",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.YNc(1,C,3,1,"ng-container",1),t.ALo(2,"async"),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,n.proUsers$)))},dependencies:[i.sg,i.O5,i.Ov,i.rS]}),s})()},{path:"",pathMatch:"full",redirectTo:"dashboard"}];let b=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[h.Bz.forChild(q),h.Bz]}),s})();var T=o(9532);let y=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({providers:[{provide:u.TP,useClass:T.z,multi:!0},p],imports:[i.ez,a.vQ,u.JF,b]}),s})()}}]);