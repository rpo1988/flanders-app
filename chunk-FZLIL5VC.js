import{$ as C,A as f,C as s,D as a,G as g,K as r,M as y,O as v,T as b,X as x,_,c as m,g as d,l as u,s as c,t as n,u as h,y as p}from"./chunk-GCIRGAPT.js";var H=(()=>{let i=class i{constructor(o,e,t){this._cd=o,this._router=e,this._authService=t,this.hostClasses="mx-auto max-w-xl flex flex-col w-full h-full p-5 gap-5 items-center justify-center text-gray-900",this.isLoading=!1,this._hostDestroyed$=new m}ngOnDestroy(){this._hostDestroyed$.next(),this._hostDestroyed$.complete()}onClicked(){this.isLoading=!0,this._cd.markForCheck(),this._authService.logout().pipe(d(this._hostDestroyed$)).subscribe(()=>{this._router.navigate([C.LOGIN])})}};i.\u0275fac=function(e){return new(e||i)(n(h),n(x),n(_))},i.\u0275cmp=u({type:i,selectors:[["app-home"]],hostVars:2,hostBindings:function(e,t){e&2&&f(t.hostClasses)},standalone:!0,features:[v],decls:6,vars:2,consts:[[1,"text-center","text-3xl","font-bold"],[1,"text-center"],["type","button",1,"font-semibold","text-blue-600","hover:text-blue-500","disabled:text-blue-400",3,"disabled","click"]],template:function(e,t){e&1&&(s(0,"h1",0),r(1,"Welcome back!"),a(),s(2,"p",1),r(3,` I acknowledge that the current design is undeniably unattractive. However, by welcoming me into your company, we have the potential to collaboratively create far more impressive and aesthetically pleasing outcomes.
`),a(),s(4,"button",2),g("click",function(){return t.onClicked()}),r(5),a()),e&2&&(c(4),p("disabled",t.isLoading),c(1),y(" ",t.isLoading?"Logging out...":"Please log me out immediately!",`
`))},dependencies:[b],encapsulation:2,changeDetection:0});let l=i;return l})();export{H as HomeComponent};