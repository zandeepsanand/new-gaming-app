"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[882],{1882:(K,v,s)=>{s.r(v),s.d(v,{AdminModule:()=>W});var a=s(6895),c=s(6150),h=s(6564),d=s(8505),t=s(1571),u=s(4004),b=s(2340),Z=s(529);let p=(()=>{class i{constructor(e){this.http=e,this.host=b.N.apiUrl}getDashboardDetails(){return this.http.get(`${this.host}/admin/user-stats`).pipe((0,u.U)(e=>e.data))}getProRequestUsers(){return this.http.get(`${this.host}/admin/pro-request/users`).pipe((0,u.U)(e=>e.data.users))}activateProRequestUser(e){return this.http.patch(`${this.host}/admin/pro-request/user/${e}/activate`,{}).pipe((0,u.U)(o=>o.data))}getWithdrawRequests(){return this.http.get(`${this.host}/admin/pro-request/withdraw/requests`).pipe((0,u.U)(e=>e.data))}acceptWithdrawRequests(e){return this.http.patch(`${this.host}/admin/pro-request/withdraw/requests/${e}`,{}).pipe((0,u.U)(o=>o.data))}getSubscriberUsers(){return this.http.get(`${this.host}/admin/subscriber-list`).pipe((0,u.U)(e=>e.data))}getProUsers(){return this.http.get(`${this.host}/admin/pro-list`).pipe((0,u.U)(e=>e.data))}getProEarnings(){return this.http.get(`${this.host}/admin/earnings`)}getProfile(e){return console.log("id in service",e),this.http.get(`${this.host}/admin/pro-list/${e}`).pipe((0,u.U)(o=>o.data))}getProUser(e){return console.log("id in service",e),this.http.get(`${this.host}/admin/view-profile/${e}`)}updateProfile(e,o){return this.http.put(`${this.host}/admin/update-profile/${o}`,{profile:e,id:o})}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(Z.eN))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();function A(i,n){if(1&i&&(t.ynx(0),t.TgZ(1,"div",6)(2,"div",2)(3,"div",3)(4,"h5",4),t._uU(5,"Subscriber"),t.qZA(),t.TgZ(6,"h6",7),t._uU(7,"Number of users subscribed"),t.qZA(),t.TgZ(8,"p",5),t._uU(9),t.qZA()()(),t.TgZ(10,"div",2)(11,"div",3)(12,"h5",4),t._uU(13,"Pro Users"),t.qZA(),t.TgZ(14,"h6",7),t._uU(15,"Number of pro users"),t.qZA(),t.TgZ(16,"p",5),t._uU(17),t.qZA()()(),t.TgZ(18,"div",2)(19,"div",3)(20,"h5",4),t._uU(21,"Pro Requests"),t.qZA(),t.TgZ(22,"h6",7),t._uU(23,"Number of pro requests"),t.qZA(),t.TgZ(24,"p",5),t._uU(25),t.qZA()()()(),t.TgZ(26,"div",8)(27,"div",9),t._UZ(28,"canvas",10),t.qZA()(),t.BQk()),2&i){const e=n.ngIf,o=t.oxw();t.xp6(9),t.Oqu(e.subscriber),t.xp6(8),t.Oqu(e.proUsers),t.xp6(8),t.Oqu(e.proRequest),t.xp6(3),t.Q6J("data",o.pieChartData)("type",o.pieChartType)("options",o.pieChartOptions)("plugins",o.pieChartPlugins)}}let q=(()=>{class i{constructor(e){this.adminService=e,this.stats$=null,this.proEarning=0,this.pieChartOptions={responsive:!0,plugins:{legend:{display:!0,position:"top"}}},this.pieChartData={labels:["Subscribers","Pro Users","Pro Requests"],datasets:[{data:[0,0,0]}]},this.pieChartType="pie",this.pieChartPlugins=[]}ngOnInit(){this.stats$=this.adminService.getDashboardDetails().pipe((0,d.b)(e=>{this.pieChartData.datasets[0]={data:[e.subscriber,e.proUsers,e.proRequest]}})),this.adminService.getProEarnings().subscribe(e=>{console.log(e),this.proEarning=e.data})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(p))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-dashboard"]],viewQuery:function(e,o){if(1&e&&t.Gf(h.jh,5),2&e){let l;t.iGM(l=t.CRH())&&(o.chart=l.first)}},decls:16,vars:4,consts:[[1,"container"],[4,"ngIf"],[1,"col","m-2","card","text-bg-dark","text-center"],[1,"card-body"],[1,"card-title"],[1,"card-text"],[1,"row"],[1,"card-subtitle","mb-2","text-muted"],[1,"row","my-4"],[1,"col-12","col-lg-5","col-md-6"],["baseChart","",3,"data","type","options","plugins"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.YNc(1,A,29,7,"ng-container",1),t.ALo(2,"async"),t.TgZ(3,"div",2)(4,"div",3)(5,"h1",4),t._uU(6,"TOTAL PRO USERS EARNINGS"),t.qZA(),t.TgZ(7,"h2",5)(8,"b"),t._uU(9),t.qZA()()()(),t.TgZ(10,"div",2)(11,"div",3)(12,"h1",4),t._uU(13,"GGERA ACCOUNT BALANCE"),t.qZA(),t.TgZ(14,"h2",5),t._UZ(15,"b"),t.qZA()()()()),2&e&&(t.xp6(1),t.Q6J("ngIf",t.lcZ(2,2,o.stats$)),t.xp6(8),t.Oqu(o.proEarning))},dependencies:[a.O5,h.jh,a.Ov]}),i})();const T=function(i){return["/admin","view-profile",i]};function w(i,n){if(1&i&&(t.TgZ(0,"div",10)(1,"div",11)(2,"a",12),t._uU(3,"View Profile"),t.qZA(),t.TgZ(4,"h5",13),t._uU(5),t.qZA(),t.TgZ(6,"h6",14),t._uU(7),t.qZA(),t.TgZ(8,"p",15),t._uU(9),t.qZA(),t.TgZ(10,"p",15),t._uU(11),t.qZA(),t.TgZ(12,"p",15),t._uU(13),t.qZA()()()),2&i){const e=n.$implicit;t.xp6(2),t.Q6J("routerLink",t.VKq(6,T,e._id)),t.xp6(3),t.hij("NAME:\xa0",e.username,""),t.xp6(2),t.hij("GAMER ID:\xa0",e.gamerID,""),t.xp6(2),t.hij("KD:\xa0",e.kd,""),t.xp6(2),t.hij("KILLS:\xa0",e.kills,""),t.xp6(2),t.hij("PLATFORM:\xa0",e.platform,"")}}function C(i,n){if(1&i&&(t.ynx(0),t.TgZ(1,"div",8),t.YNc(2,w,14,8,"div",9),t.qZA(),t.BQk()),2&i){const e=n.ngIf;t.xp6(2),t.Q6J("ngForOf",e)}}let x=(()=>{class i{constructor(e){this.adminservice=e}ngOnInit(){this.proUsers$=this.adminservice.getProUsers().pipe((0,d.b)(e=>{console.log(e)}))}getProfile(e){this.adminservice.getProfile(e)}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(p))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-pro-list"]],decls:21,vars:3,consts:[[1,"container"],[4,"ngIf"],["aria-label","Page navigation example"],[1,"pagination","justify-content-center"],[1,"page-item","disabled"],["href","#","tabindex","-1",1,"page-link"],[1,"page-item"],["href","#",1,"page-link"],[1,"row","g-6"],["class","col-5 m-5 card text-bg-dark",4,"ngFor","ngForOf"],[1,"col-5","m-5","card","text-bg-dark"],[1,"card-body"],[1,"btn","btn-success","m-5",3,"routerLink"],[1,"card-title"],[1,"card-subtitle","mb-2","text-muted"],[1,"card-text"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.YNc(1,C,3,1,"ng-container",1),t.ALo(2,"async"),t.TgZ(3,"div")(4,"nav",2)(5,"ul",3)(6,"li",4)(7,"a",5),t._uU(8,"Previous"),t.qZA()(),t.TgZ(9,"li",6)(10,"a",7),t._uU(11,"1"),t.qZA()(),t.TgZ(12,"li",6)(13,"a",7),t._uU(14,"2"),t.qZA()(),t.TgZ(15,"li",6)(16,"a",7),t._uU(17,"3"),t.qZA()(),t.TgZ(18,"li",6)(19,"a",7),t._uU(20,"Next"),t.qZA()()()()()()),2&e&&(t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,o.proUsers$)))},dependencies:[a.sg,a.O5,c.yS,a.Ov]}),i})();var y=s(5226),g=s.n(y);function N(i,n){if(1&i){const e=t.EpF();t.TgZ(0,"div",4)(1,"div",5)(2,"h5",6),t._uU(3),t.qZA(),t.TgZ(4,"h6",7),t._uU(5),t.ALo(6,"titlecase"),t.qZA(),t.TgZ(7,"p",8),t._uU(8),t.qZA(),t.TgZ(9,"a",9),t.NdJ("click",function(){const m=t.CHM(e).$implicit,f=t.oxw(2);return t.KtG(f.activateUser(m._id))}),t._uU(10,"Activate"),t.qZA()()()}if(2&i){const e=n.$implicit;t.xp6(3),t.Oqu(e.username),t.xp6(2),t.Oqu(t.lcZ(6,3,e.provider)),t.xp6(3),t.Oqu(e.email)}}function P(i,n){if(1&i&&(t.ynx(0),t.TgZ(1,"div",2),t.YNc(2,N,11,5,"div",3),t.qZA(),t.BQk()),2&i){const e=n.ngIf;t.xp6(2),t.Q6J("ngForOf",e)}}let I=(()=>{class i{constructor(e){this.adminService=e}ngOnInit(){this.getUsers()}getUsers(){this.proUsers$=this.adminService.getProRequestUsers()}activateUser(e){this.adminService.activateProRequestUser(e).pipe((0,d.b)(o=>{g().fire({icon:"success",title:"Activated successfully",showConfirmButton:!1,timer:1500}).then(()=>{this.getUsers()})})).subscribe()}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(p))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-pro-request"]],decls:3,vars:3,consts:[[1,"container"],[4,"ngIf"],[1,"row","g-6"],["class","col-4 m-2 card text-bg-dark",4,"ngFor","ngForOf"],[1,"col-4","m-2","card","text-bg-dark"],[1,"card-body"],[1,"card-title"],[1,"card-subtitle","mb-2","text-muted"],[1,"card-text"],[1,"btn","btn-primary",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.YNc(1,P,3,1,"ng-container",1),t.ALo(2,"async"),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,o.proUsers$)))},dependencies:[a.sg,a.O5,a.Ov,a.rS]}),i})();function R(i,n){if(1&i){const e=t.EpF();t.ynx(0),t.TgZ(1,"button",7),t.NdJ("click",function(){t.CHM(e);const l=t.oxw().$implicit,m=t.oxw(2);return t.KtG(m.approveRequest(l._id))}),t._uU(2,"Approve"),t.qZA(),t.BQk()}}function O(i,n){1&i&&(t.TgZ(0,"small"),t._uU(1,"Approved"),t.qZA())}function F(i,n){if(1&i&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t.YNc(6,R,3,0,"ng-container",5),t.YNc(7,O,2,0,"ng-template",null,6,t.W1O),t.qZA()()),2&i){const e=n.$implicit,o=t.MAs(8);t.xp6(2),t.Oqu(e.orderNo),t.xp6(2),t.Oqu(e.amount),t.xp6(2),t.Q6J("ngIf",!e.isApproved)("ngIfElse",o)}}function S(i,n){if(1&i&&(t.ynx(0),t.TgZ(1,"div",1)(2,"div",2)(3,"h2"),t._uU(4,"Withdraw Requests"),t.qZA()()(),t.TgZ(5,"table",3)(6,"thead")(7,"th"),t._uU(8,"Request Id"),t.qZA(),t.TgZ(9,"th"),t._uU(10,"Amount"),t.qZA(),t.TgZ(11,"th"),t._uU(12,"Action"),t.qZA()(),t.TgZ(13,"tbody"),t.YNc(14,F,9,4,"tr",4),t.qZA()(),t.BQk()),2&i){const e=n.ngIf;t.xp6(14),t.Q6J("ngForOf",e)}}let D=(()=>{class i{constructor(e){this.adminService=e}ngOnInit(){this.updateRequest()}updateRequest(){this.withdrawRequest$=this.adminService.getWithdrawRequests()}approveRequest(e){this.adminService.acceptWithdrawRequests(e).pipe((0,d.b)(()=>{g().fire({icon:"success",title:"Request Accepted",showConfirmButton:!1,timer:1500}),this.updateRequest()})).subscribe()}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(p))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-pro-user-withdraw-request"]],decls:2,vars:3,consts:[[4,"ngIf"],[1,"row"],[1,"col-12"],[1,"table","table-dark","table-striped-columns"],[4,"ngFor","ngForOf"],[4,"ngIf","ngIfElse"],["approved",""],[1,"btn","btn-primary",3,"click"]],template:function(e,o){1&e&&(t.YNc(0,S,15,1,"ng-container",0),t.ALo(1,"async")),2&e&&t.Q6J("ngIf",t.lcZ(1,1,o.withdrawRequest$))},dependencies:[a.sg,a.O5,a.Ov]}),i})();const L=function(i){return["/admin","view-subscriber-profile",i]};function $(i,n){if(1&i&&(t.TgZ(0,"div",10)(1,"div",11)(2,"a",12),t._uU(3,"View Profile"),t.qZA(),t.TgZ(4,"h5",13),t._uU(5),t.qZA(),t.TgZ(6,"h6",14),t._uU(7),t.qZA(),t.TgZ(8,"p",15),t._uU(9),t.qZA(),t.TgZ(10,"p",15),t._uU(11),t.qZA(),t.TgZ(12,"p",15),t._uU(13),t.qZA()()()),2&i){const e=n.$implicit;t.xp6(2),t.Q6J("routerLink",t.VKq(6,L,e._id)),t.xp6(3),t.hij("NAME:\xa0",e.username,""),t.xp6(2),t.hij("GAMER ID:\xa0",e.gamerID,""),t.xp6(2),t.hij("KD:\xa0",e.kd,""),t.xp6(2),t.hij("KILLS:\xa0",e.kills,""),t.xp6(2),t.hij("PLATFORM:\xa0",e.platform,"")}}function k(i,n){if(1&i&&(t.ynx(0),t.TgZ(1,"div",8),t.YNc(2,$,14,8,"div",9),t.qZA(),t.BQk()),2&i){const e=n.ngIf;t.xp6(2),t.Q6J("ngForOf",e)}}let Y=(()=>{class i{constructor(e){this.adminservice=e}ngOnInit(){this.subUsers$=this.adminservice.getSubscriberUsers().pipe((0,d.b)(e=>{console.log(e)}))}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(p))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-subscriber-list"]],decls:21,vars:3,consts:[[1,"container"],[4,"ngIf"],["aria-label","Page navigation example"],[1,"pagination","justify-content-center"],[1,"page-item","disabled"],["href","#","tabindex","-1",1,"page-link"],[1,"page-item"],["href","#",1,"page-link"],[1,"row","g-6"],["class","col-5 m-5 card text-bg-dark",4,"ngFor","ngForOf"],[1,"col-5","m-5","card","text-bg-dark"],[1,"card-body"],[1,"btn","btn-success","m-5",3,"routerLink"],[1,"card-title"],[1,"card-subtitle","mb-2","text-muted"],[1,"card-text"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.YNc(1,k,3,1,"ng-container",1),t.ALo(2,"async"),t.TgZ(3,"div")(4,"nav",2)(5,"ul",3)(6,"li",4)(7,"a",5),t._uU(8,"Previous"),t.qZA()(),t.TgZ(9,"li",6)(10,"a",7),t._uU(11,"1"),t.qZA()(),t.TgZ(12,"li",6)(13,"a",7),t._uU(14,"2"),t.qZA()(),t.TgZ(15,"li",6)(16,"a",7),t._uU(17,"3"),t.qZA()(),t.TgZ(18,"li",6)(19,"a",7),t._uU(20,"Next"),t.qZA()()()()()()),2&e&&(t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,o.subUsers$)))},dependencies:[a.sg,a.O5,c.yS,a.Ov]}),i})();var r=s(4006),J=s(6454),_=s(6705),E=s(2119);function Q(i,n){if(1&i&&(t.TgZ(0,"option",46),t._uU(1),t.qZA()),2&i){const e=n.$implicit;t.s9C("value",e.name),t.xp6(1),t.hij(" ",e.name,"")}}let U=(()=>{class i{constructor(e,o,l,m,f,G){this.route=e,this.router=o,this.admin=l,this.hero=m,this.fb=f,this.uploadService=G,this.countrys=J,this.selectedFile=null,this.ProfileForm=new r.cw({username:new r.NI(""),language:new r.NI(""),country:new r.NI(""),email:new r.NI(""),gamer:new r.NI(""),gamerID:new r.NI(""),wr:new r.NI(""),discord_id:new r.NI(""),channel_name:new r.NI(""),kd:new r.NI(""),elo:new r.NI(""),winrate:new r.NI(""),kills:new r.NI(""),wins:new r.NI(""),platform:new r.NI(""),flawless:new r.NI(""),pro_cost:new r.NI(""),vip_cost:new r.NI(""),about:new r.NI("")})}ngOnInit(){this.userData(),this.getUserDATA(),console.log("user",this.user)}getUserDATA(){var e=this.route.snapshot.paramMap.get("userid");this.admin.getProUser(e).subscribe(o=>{console.log("response",o),this.ProfileForm=this.fb.group({username:o[0].username,profile_pic:o[0].profile_pic,country:o[0].country,language:o[0].language,gamer:o[0].gamer,gamerID:o[0].gamerID,email:o[0].email,wr:o[0].wr,discord_id:o[0].discord_id,channel_name:o[0].channel_name,kd:o[0].kd,elo:o[0].elo,winrate:o[0].winrate,kills:o[0].kills,wins:o[0].wins,platform:o[0].platform,flawless:o[0].flawless,pro_cost:o[0].pro_cost,vip_cost:o[0].vip_cost,about:o[0].about})})}profile(){var e=this.route.snapshot.paramMap.get("userid");this.admin.updateProfile(this.ProfileForm.value,e).subscribe({next:l=>{l&&g().fire({icon:"success",title:"Updated successfully",showConfirmButton:!1,timer:1500}).then(()=>{this.hero.isNormal(),this.router.navigate(["/admin/pro-list"])})},error:l=>{g().fire({icon:"error",title:"Network Error. Please try again",showConfirmButton:!1,timer:1500}).then(()=>{this.router.navigate(["/login"])})}})}onFileSelected(e){const o=e.target.files[0];o&&(console.log(o),this.selectedFile=o)}uploadImage(){let e=null;if(this.selectedFile){const o=new FormData;o.append("file",this.selectedFile),o.append("upload_preset","newGamingApp"),o.append("cloud_name","achums007"),this.uploadService.uploadImageToCloudinary(o).subscribe(l=>{l&&(e=l,console.log(l),this.editProfile(l))})}}editProfile(e){console.log(e.secure_url),this.ProfileForm.value.profile_pic=e.secure_url,this.profile()}userData(){if(this.hero.getEmail()){let e=this.hero.getEmail();this.hero.getUserDetail(e).subscribe(o=>{this.user=o})}}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(c.gz),t.Y36(c.F0),t.Y36(p),t.Y36(E.e),t.Y36(r.qu),t.Y36(_.C))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-viewprofile"]],features:[t._Bn([_.C])],decls:168,vars:2,consts:[[1,"checkout-area","ptb-100"],[1,"container"],[1,"user-actions"],[1,"text-center"],[1,"live-stream-tabs"],["id","myTab","role","tablist",1,"nav","nav-tabs"],["role","presentation",1,"nav-item"],["id","twitch-tab","data-bs-toggle","tab","data-bs-target","#twitch","type","button","role","tab","aria-controls","twitch","aria-selected","true",1,"nav-link","active"],["id","myTabContent",1,"tab-content"],["id","twitch","role","tabpanel",1,"tab-pane","fade","show","active"],[1,"row"],[1,"col-lg-12","col-md-12","card","bg-transparent","border"],[1,"billing-details"],[1,"row","ptb-100"],[3,"formGroup","ngSubmit"],[1,"col-lg-12","col-md-12"],[1,"form-group"],[1,"required"],["type","text","readonly","","formControlName","username",1,"form-control"],[1,"col-lg-6","col-md-6"],[1,"select-box"],["formControlName","country","disabled",""],[3,"value",4,"ngFor","ngForOf"],["formControlName","language","disabled",""],["formControlName","gamer","disabled",""],["value","Activision"],["value","Battlenet"],["type","text","formControlName","gamerID","readonly","",1,"form-control"],["type","text","formControlName","email","readonly","",1,"form-control"],["type","text","formControlName","discord_id","readonly","",1,"form-control"],["type","text","formControlName","channel_name","readonly","",1,"form-control"],["formControlName","platform","disabled",""],["value","PS"],["value","XBox"],["value","Win"],[1,"col-lg-3","col-md-3"],["type","text","formControlName","kd",1,"form-control"],["type","text","formControlName","elo",1,"form-control"],["type","text","formControlName","flawless",1,"form-control"],["type","text","formControlName","winrate",1,"form-control"],["type","text","formControlName","wins",1,"form-control"],["type","text","formControlName","kills",1,"form-control"],["type","text","formControlName","pro_cost",1,"form-control"],["type","text","formControlName","vip_cost",1,"form-control"],["name","notes","id","notes","cols","30","rows","5","formControlName","about","readonly","",1,"form-control"],["type","submit",1,"default-btn"],[3,"value"]],template:function(e,o){1&e&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"h1",3),t._uU(4,"Profile"),t.qZA()(),t.TgZ(5,"div",1)(6,"div",4)(7,"ul",5)(8,"li",6)(9,"button",7),t._uU(10,"Primary Details"),t.qZA()()(),t.TgZ(11,"div",8)(12,"div",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"div",13)(17,"form",14),t.NdJ("ngSubmit",function(){return o.profile()}),t.TgZ(18,"div",15)(19,"div",16)(20,"label"),t._uU(21," Name "),t.TgZ(22,"span",17),t._uU(23,"*"),t.qZA()(),t._UZ(24,"input",18),t.qZA()(),t.TgZ(25,"div",19)(26,"div",16)(27,"label"),t._uU(28,"Country "),t.TgZ(29,"span",17),t._uU(30,"*"),t.qZA()(),t.TgZ(31,"div",20)(32,"select",21),t.YNc(33,Q,2,2,"option",22),t.qZA()()()(),t.TgZ(34,"div",19)(35,"div",16)(36,"label"),t._uU(37,"Language "),t.TgZ(38,"span",17),t._uU(39,"*"),t.qZA()(),t.TgZ(40,"div",20)(41,"select",23)(42,"option"),t._uU(43,"English"),t.qZA(),t.TgZ(44,"option"),t._uU(45,"German"),t.qZA(),t.TgZ(46,"option"),t._uU(47,"Hebrew"),t.qZA(),t.TgZ(48,"option"),t._uU(49,"Hindi"),t.qZA()()()()(),t.TgZ(50,"div",15)(51,"div",16)(52,"label"),t._uU(53,"Gamer "),t.TgZ(54,"span",17),t._uU(55,"*"),t.qZA()(),t.TgZ(56,"div",20)(57,"select",24)(58,"option",25),t._uU(59,"Activision"),t.qZA(),t.TgZ(60,"option",26),t._uU(61,"Battlenet"),t.qZA()()()()(),t.TgZ(62,"div",19)(63,"div",16)(64,"label"),t._uU(65,"Gamer ID "),t.TgZ(66,"span",17),t._uU(67,"*"),t.qZA()(),t._UZ(68,"input",27),t.qZA()(),t.TgZ(69,"div",19)(70,"div",16)(71,"label"),t._uU(72,"Email ID "),t.TgZ(73,"span",17),t._uU(74,"*"),t.qZA()(),t._UZ(75,"input",28),t.qZA()(),t.TgZ(76,"div",19)(77,"div",16)(78,"label"),t._uU(79,"Discord"),t.qZA(),t._UZ(80,"input",29),t.qZA()(),t.TgZ(81,"div",19)(82,"div",16)(83,"label"),t._uU(84,"Twitch "),t.TgZ(85,"span",17),t._uU(86,"*"),t.qZA()(),t._UZ(87,"input",30),t.qZA()(),t.TgZ(88,"div",19)(89,"div",16)(90,"label"),t._uU(91,"Platform "),t.TgZ(92,"span",17),t._uU(93,"*"),t.qZA()(),t.TgZ(94,"div",20)(95,"select",31)(96,"option",32),t._uU(97,"Ps"),t.qZA(),t.TgZ(98,"option",33),t._uU(99,"XBox"),t.qZA(),t.TgZ(100,"option",34),t._uU(101,"Win"),t.qZA()()()()(),t.TgZ(102,"div",35)(103,"div",16)(104,"label"),t._uU(105,"KD "),t.TgZ(106,"span",17),t._uU(107,"*"),t.qZA()(),t._UZ(108,"input",36),t.qZA()(),t.TgZ(109,"div",35)(110,"div",16)(111,"label"),t._uU(112,"ELO "),t.TgZ(113,"span",17),t._uU(114,"*"),t.qZA()(),t._UZ(115,"input",37),t.qZA()(),t.TgZ(116,"div",35)(117,"div",16)(118,"label"),t._uU(119,"Flawless "),t.TgZ(120,"span",17),t._uU(121,"*"),t.qZA()(),t._UZ(122,"input",38),t.qZA()(),t.TgZ(123,"div",35)(124,"div",16)(125,"label"),t._uU(126,"W/R "),t.TgZ(127,"span",17),t._uU(128,"*"),t.qZA()(),t._UZ(129,"input",39),t.qZA()(),t.TgZ(130,"div",35)(131,"div",16)(132,"label"),t._uU(133,"Wins "),t.TgZ(134,"span",17),t._uU(135,"*"),t.qZA()(),t._UZ(136,"input",40),t.qZA()(),t.TgZ(137,"div",35)(138,"div",16)(139,"label"),t._uU(140,"Kills "),t.TgZ(141,"span",17),t._uU(142,"*"),t.qZA()(),t._UZ(143,"input",41),t.qZA()(),t.TgZ(144,"div",35)(145,"div",16)(146,"label"),t._uU(147,"Pro Cost "),t.TgZ(148,"span",17),t._uU(149,"*"),t.qZA()(),t._UZ(150,"input",42),t.qZA()(),t.TgZ(151,"div",35)(152,"div",16)(153,"label"),t._uU(154,"VIP Cost "),t.TgZ(155,"span",17),t._uU(156,"*"),t.qZA()(),t._UZ(157,"input",43),t.qZA()(),t.TgZ(158,"div",15)(159,"div",16)(160,"label"),t._uU(161,"About "),t.TgZ(162,"span",17),t._uU(163,"*"),t.qZA()(),t._UZ(164,"textarea",44),t.qZA()(),t.TgZ(165,"div",19)(166,"button",45),t._uU(167,"Update"),t.qZA()()()()()()()()()()()()()),2&e&&(t.xp6(17),t.Q6J("formGroup",o.ProfileForm),t.xp6(16),t.Q6J("ngForOf",o.countrys))},dependencies:[a.sg,r._Y,r.YN,r.Kr,r.Fj,r.EJ,r.JJ,r.JL,r.sg,r.u],styles:[".form-group[_ngcontent-%COMP%]{color:#fff}"]}),i})();const M=[{path:"dashboard",component:q},{path:"pre-request",component:I},{path:"withdraw-request",component:D},{path:"subscriber-list",component:Y},{path:"pro-list",component:x},{path:"view-profile/:userid",component:U},{path:"view-subscriber-profile/:userid",component:U},{path:"",pathMatch:"full",redirectTo:"dashboard"}];let B=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[c.Bz.forChild(M),c.Bz]}),i})();var j=s(9532);let W=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({providers:[{provide:Z.TP,useClass:j.z,multi:!0},p],imports:[a.ez,h.vQ,Z.JF,B,r.u5,r.UX]}),i})()}}]);