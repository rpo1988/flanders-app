import{$ as je,A as x,B as T,C as d,D as c,E as le,F as we,G as C,H as ue,I as Fe,J as Ie,K as V,L as de,M as Se,N as P,O as F,P as Oe,Q as Ne,R as ce,S as U,T as H,U as xe,X as Te,Z as Pe,_ as ke,a as m,b as M,c as De,d as be,e as Me,f as Ae,g as re,h as S,i as B,j as O,k as _,l as A,m as N,n as f,o as R,p as Ee,q as oe,r as se,s as l,t as s,u as E,v as w,w as v,x as p,y as u,z as ae}from"./chunk-GCIRGAPT.js";var $e=(()=>{let e=class e{constructor(i,r){this._renderer=i,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(i,r){this._renderer.setProperty(this._elementRef.nativeElement,i,r)}registerOnTouched(i){this.onTouched=i}registerOnChange(i){this.onChange=i}setDisabledState(i){this.setProperty("disabled",i)}};e.\u0275fac=function(r){return new(r||e)(s(se),s(oe))},e.\u0275dir=f({type:e});let t=e;return t})(),Ct=(()=>{let e=class e extends $e{};e.\u0275fac=(()=>{let i;return function(o){return(i||(i=Ee(e)))(o||e)}})(),e.\u0275dir=f({type:e,features:[v]});let t=e;return t})(),ge=new _("NgValueAccessor");var Vt={provide:ge,useExisting:S(()=>K),multi:!0};function Dt(){let t=ce()?ce().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var bt=new _("CompositionEventMode"),K=(()=>{let e=class e extends $e{constructor(i,r,o){super(i,r),this._compositionMode=o,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!Dt())}writeValue(i){let r=i??"";this.setProperty("value",r)}_handleInput(i){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(i)}_compositionStart(){this._composing=!0}_compositionEnd(i){this._composing=!1,this._compositionMode&&this.onChange(i)}};e.\u0275fac=function(r){return new(r||e)(s(se),s(oe),s(bt,8))},e.\u0275dir=f({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,o){r&1&&C("input",function(h){return o._handleInput(h.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(h){return o._compositionEnd(h.target.value)})},features:[P([Vt]),v]});let t=e;return t})();function y(t){return t==null||(typeof t=="string"||Array.isArray(t))&&t.length===0}function We(t){return t!=null&&typeof t.length=="number"}var me=new _("NgValidators"),ve=new _("NgAsyncValidators"),Mt=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,D=class{static min(e){return At(e)}static max(e){return Et(e)}static required(e){return wt(e)}static requiredTrue(e){return Ft(e)}static email(e){return It(e)}static minLength(e){return St(e)}static maxLength(e){return Ot(e)}static pattern(e){return Nt(e)}static nullValidator(e){return ze(e)}static compose(e){return Qe(e)}static composeAsync(e){return tt(e)}};function At(t){return e=>{if(y(e.value)||y(t))return null;let n=parseFloat(e.value);return!isNaN(n)&&n<t?{min:{min:t,actual:e.value}}:null}}function Et(t){return e=>{if(y(e.value)||y(t))return null;let n=parseFloat(e.value);return!isNaN(n)&&n>t?{max:{max:t,actual:e.value}}:null}}function wt(t){return y(t.value)?{required:!0}:null}function Ft(t){return t.value===!0?null:{required:!0}}function It(t){return y(t.value)||Mt.test(t.value)?null:{email:!0}}function St(t){return e=>y(e.value)||!We(e.value)?null:e.value.length<t?{minlength:{requiredLength:t,actualLength:e.value.length}}:null}function Ot(t){return e=>We(e.value)&&e.value.length>t?{maxlength:{requiredLength:t,actualLength:e.value.length}}:null}function Nt(t){if(!t)return ze;let e,n;return typeof t=="string"?(n="",t.charAt(0)!=="^"&&(n+="^"),n+=t,t.charAt(t.length-1)!=="$"&&(n+="$"),e=new RegExp(n)):(n=t.toString(),e=t),i=>{if(y(i.value))return null;let r=i.value;return e.test(r)?null:{pattern:{requiredPattern:n,actualValue:r}}}}function ze(t){return null}function Ze(t){return t!=null}function Xe(t){return we(t)?be(t):t}function Ye(t){let e={};return t.forEach(n=>{e=n!=null?m(m({},e),n):e}),Object.keys(e).length===0?null:e}function Ke(t,e){return e.map(n=>n(t))}function xt(t){return!t.validate}function Je(t){return t.map(e=>xt(e)?e:n=>e.validate(n))}function Qe(t){if(!t)return null;let e=t.filter(Ze);return e.length==0?null:function(n){return Ye(Ke(n,e))}}function et(t){return t!=null?Qe(Je(t)):null}function tt(t){if(!t)return null;let e=t.filter(Ze);return e.length==0?null:function(n){let i=Ke(n,e).map(Xe);return Ae(i).pipe(Me(Ye))}}function it(t){return t!=null?tt(Je(t)):null}function Ge(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function nt(t){return t._rawValidators}function rt(t){return t._rawAsyncValidators}function he(t){return t?Array.isArray(t)?t:[t]:[]}function L(t,e){return Array.isArray(t)?t.includes(e):t===e}function Be(t,e){let n=he(e);return he(t).forEach(r=>{L(n,r)||n.push(r)}),n}function Re(t,e){return he(e).filter(n=>!L(t,n))}var $=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=et(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=it(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,n){return this.control?this.control.hasError(e,n):!1}getError(e,n){return this.control?this.control.getError(e,n):null}},b=class extends ${get formDirective(){return null}get path(){return null}},g=class extends ${constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},W=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},Tt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Mi=M(m({},Tt),{"[class.ng-submitted]":"isSubmitted"}),J=(()=>{let e=class e extends W{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(s(g,2))},e.\u0275dir=f({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,o){r&2&&ae("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[v]});let t=e;return t})(),ot=(()=>{let e=class e extends W{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(s(b,10))},e.\u0275dir=f({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,o){r&2&&ae("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},features:[v]});let t=e;return t})();var k="VALID",q="INVALID",I="PENDING",j="DISABLED";function st(t){return(Q(t)?t.validators:t)||null}function Pt(t){return Array.isArray(t)?et(t):t||null}function at(t,e){return(Q(e)?e.asyncValidators:t)||null}function kt(t){return Array.isArray(t)?it(t):t||null}function Q(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function jt(t,e,n){let i=t.controls;if(!(e?Object.keys(i):i).length)throw new B(1e3,"");if(!i[n])throw new B(1001,"")}function Gt(t,e,n){t._forEachChild((i,r)=>{if(n[r]===void 0)throw new B(1002,"")})}var z=class{constructor(e,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===k}get invalid(){return this.status===q}get pending(){return this.status==I}get disabled(){return this.status===j}get enabled(){return this.status!==j}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Be(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Be(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Re(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Re(e,this._rawAsyncValidators))}hasValidator(e){return L(this._rawValidators,e)}hasAsyncValidator(e){return L(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(n=>{n.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=I,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=j,this.errors=null,this._forEachChild(i=>{i.disable(M(m({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(M(m({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!0))}enable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=k,this._forEachChild(i=>{i.enable(M(m({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(M(m({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===k||this.status===I)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?j:k}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=I,this._hasOwnPendingAsyncValidator=!0;let n=Xe(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(i=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(i,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,n={}){this.errors=e,this._updateControlsErrors(n.emitEvent!==!1)}get(e){let n=e;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((i,r)=>i&&i._find(r),this)}getError(e,n){let i=n?this.get(n):this;return i&&i.errors?i.errors[e]:null}hasError(e,n){return!!this.getError(e,n)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new w,this.statusChanges=new w}_calculateStatus(){return this._allControlsDisabled()?j:this.errors?q:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(I)?I:this._anyControlsHaveStatus(q)?q:k}_anyControlsHaveStatus(e){return this._anyControls(n=>n.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){Q(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let n=this._parent&&this._parent.dirty;return!e&&!!n&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=Pt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=kt(this._rawAsyncValidators)}},Z=class extends z{constructor(e,n,i){super(st(n),at(i,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,n){return this.controls[e]?this.controls[e]:(this.controls[e]=n,n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange),n)}addControl(e,n,i={}){this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(e,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}setControl(e,n,i={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],n&&this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,n={}){Gt(this,!0,e),Object.keys(e).forEach(i=>{jt(this,!0,i),this.controls[i].setValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(Object.keys(e).forEach(i=>{let r=this.controls[i];r&&r.patchValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e={},n={}){this._forEachChild((i,r)=>{i.reset(e?e[r]:null,{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n),this._updateTouched(n),this.updateValueAndValidity(n)}getRawValue(){return this._reduceChildren({},(e,n,i)=>(e[i]=n.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(n,i)=>i._syncPendingControls()?!0:n);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(n=>{let i=this.controls[n];i&&e(i,n)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[n,i]of Object.entries(this.controls))if(this.contains(n)&&e(i))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(n,i,r)=>((i.enabled||this.disabled)&&(n[r]=i.value),n))}_reduceChildren(e,n){let i=e;return this._forEachChild((r,o)=>{i=n(i,r,o)}),i}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var ee=new _("CallSetDisabledState",{providedIn:"root",factory:()=>te}),te="always";function lt(t,e){return[...e.path,t]}function fe(t,e,n=te){ye(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||n==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),Rt(t,e),Ht(t,e),Ut(t,e),Bt(t,e)}function Ue(t,e,n=!0){let i=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(i),e.valueAccessor.registerOnTouched(i)),Y(t,e),t&&(e._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function X(t,e){t.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(e)})}function Bt(t,e){if(e.valueAccessor.setDisabledState){let n=i=>{e.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(n),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(n)})}}function ye(t,e){let n=nt(t);e.validator!==null?t.setValidators(Ge(n,e.validator)):typeof n=="function"&&t.setValidators([n]);let i=rt(t);e.asyncValidator!==null?t.setAsyncValidators(Ge(i,e.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();X(e._rawValidators,r),X(e._rawAsyncValidators,r)}function Y(t,e){let n=!1;if(t!==null){if(e.validator!==null){let r=nt(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==e.validator);o.length!==r.length&&(n=!0,t.setValidators(o))}}if(e.asyncValidator!==null){let r=rt(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==e.asyncValidator);o.length!==r.length&&(n=!0,t.setAsyncValidators(o))}}}let i=()=>{};return X(e._rawValidators,i),X(e._rawAsyncValidators,i),n}function Rt(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&ut(t,e)})}function Ut(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&ut(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function ut(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Ht(t,e){let n=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};t.registerOnChange(n),e._registerOnDestroy(()=>{t._unregisterOnChange(n)})}function qt(t,e){t==null,ye(t,e)}function Lt(t,e){return Y(t,e)}function dt(t,e){if(!t.hasOwnProperty("model"))return!1;let n=t.model;return n.isFirstChange()?!0:!Object.is(e,n.currentValue)}function $t(t){return Object.getPrototypeOf(t.constructor)===Ct}function Wt(t,e){t._syncPendingControls(),e.forEach(n=>{let i=n.control;i.updateOn==="submit"&&i._pendingChange&&(n.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function ct(t,e){if(!e)return null;Array.isArray(e);let n,i,r;return e.forEach(o=>{o.constructor===K?n=o:$t(o)?i=o:r=o}),r||i||n||null}function zt(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function He(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function qe(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var G=class extends z{constructor(e=null,n,i){super(st(n),at(i,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Q(n)&&(n.nonNullable||n.initialValueIsDefault)&&(qe(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,n={}){this.value=this._pendingValue=e,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(e,n={}){this.setValue(e,n)}reset(e=this.defaultValue,n={}){this._applyFormState(e),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){He(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){He(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){qe(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Zt=t=>t instanceof G;var Xt={provide:g,useExisting:S(()=>_e)},Le=(()=>Promise.resolve())(),_e=(()=>{let e=class e extends g{constructor(i,r,o,a,h,_t){super(),this._changeDetectorRef=h,this.callSetDisabledState=_t,this.control=new G,this._registered=!1,this.name="",this.update=new w,this._parent=i,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=ct(this,a)}ngOnChanges(i){if(this._checkForErrors(),!this._registered||"name"in i){if(this._registered&&(this._checkName(),this.formDirective)){let r=i.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in i&&this._updateDisabled(i),dt(i,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){fe(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(i){Le.then(()=>{this.control.setValue(i,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(i){let r=i.isDisabled.currentValue,o=r!==0&&Ne(r);Le.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(i){return this._parent?lt(i,this._parent):[i]}};e.\u0275fac=function(r){return new(r||e)(s(b,9),s(me,10),s(ve,10),s(ge,10),s(E,8),s(ee,8))},e.\u0275dir=f({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:["disabled","isDisabled"],model:["ngModel","model"],options:["ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[P([Xt]),v,R]});let t=e;return t})(),ht=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=f({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let t=e;return t})();var Yt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=N({type:e}),e.\u0275inj=O({});let t=e;return t})();var ft=new _("NgModelWithFormControlWarning");var Kt={provide:b,useExisting:S(()=>Ce)},Ce=(()=>{let e=class e extends b{constructor(i,r,o){super(),this.callSetDisabledState=o,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new w,this._setValidators(i),this._setAsyncValidators(r)}ngOnChanges(i){this._checkFormPresent(),i.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(Y(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(i){let r=this.form.get(i.path);return fe(r,i,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(i),r}getControl(i){return this.form.get(i.path)}removeControl(i){Ue(i.control||null,i,!1),zt(this.directives,i)}addFormGroup(i){this._setUpFormContainer(i)}removeFormGroup(i){this._cleanUpFormContainer(i)}getFormGroup(i){return this.form.get(i.path)}addFormArray(i){this._setUpFormContainer(i)}removeFormArray(i){this._cleanUpFormContainer(i)}getFormArray(i){return this.form.get(i.path)}updateModel(i,r){this.form.get(i.path).setValue(r)}onSubmit(i){return this.submitted=!0,Wt(this.form,this.directives),this.ngSubmit.emit(i),i?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(i=void 0){this.form.reset(i),this.submitted=!1}_updateDomValue(){this.directives.forEach(i=>{let r=i.control,o=this.form.get(i.path);r!==o&&(Ue(r||null,i),Zt(o)&&(fe(o,i,this.callSetDisabledState),i.control=o))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(i){let r=this.form.get(i.path);qt(r,i),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(i){if(this.form){let r=this.form.get(i.path);r&&Lt(r,i)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){ye(this.form,this),this._oldForm&&Y(this._oldForm,this)}_checkFormPresent(){this.form}};e.\u0275fac=function(r){return new(r||e)(s(me,10),s(ve,10),s(ee,8))},e.\u0275dir=f({type:e,selectors:[["","formGroup",""]],hostBindings:function(r,o){r&1&&C("submit",function(h){return o.onSubmit(h)})("reset",function(){return o.onReset()})},inputs:{form:["formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[P([Kt]),v,R]});let t=e;return t})();var Jt={provide:g,useExisting:S(()=>Ve)},Ve=(()=>{let e=class e extends g{set isDisabled(i){}constructor(i,r,o,a,h){super(),this._ngModelWarningConfig=h,this._added=!1,this.name=null,this.update=new w,this._ngModelWarningSent=!1,this._parent=i,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=ct(this,a)}ngOnChanges(i){this._added||this._setUpControl(),dt(i,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}get path(){return lt(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}};e._ngModelWarningSentOnce=!1,e.\u0275fac=function(r){return new(r||e)(s(b,13),s(me,10),s(ve,10),s(ge,10),s(ft,8))},e.\u0275dir=f({type:e,selectors:[["","formControlName",""]],inputs:{name:["formControlName","name"],isDisabled:["disabled","isDisabled"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},features:[P([Jt]),v,R]});let t=e;return t})();var pt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=N({type:e}),e.\u0275inj=O({imports:[Yt]});let t=e;return t})();var gt=(()=>{let e=class e{static withConfig(i){return{ngModule:e,providers:[{provide:ee,useValue:i.callSetDisabledState??te}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=N({type:e}),e.\u0275inj=O({imports:[pt]});let t=e;return t})(),mt=(()=>{let e=class e{static withConfig(i){return{ngModule:e,providers:[{provide:ft,useValue:i.warnOnNgModelWithFormControl??"always"},{provide:ee,useValue:i.callSetDisabledState??te}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=N({type:e}),e.\u0275inj=O({imports:[pt]});let t=e;return t})();var Qt=["*"],ie=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=A({type:e,selectors:[["app-error-msg"]],inputs:{qaTag:"qaTag"},standalone:!0,features:[F],ngContentSelectors:Qt,decls:2,vars:1,consts:[[1,"flex","text-xs","text-red-500"]],template:function(r,o){r&1&&(Fe(),d(0,"span",0),Ie(1),c()),r&2&&p("data-qa-tag",o.qaTag)},encapsulation:2,changeDetection:0});let t=e;return t})();function ti(t,e){if(t&1&&(d(0,"label",3),V(1),c()),t&2){let n=ue();u("for",n.id),p("data-qa-tag",n.qaTagLabel),l(1),de(n.label)}}function ii(t,e){if(t&1&&(d(0,"app-error-msg",4),V(1),c()),t&2){let n=ue();u("qaTag",n.qaTagError),l(1),de(n.errorMsg)}}var ni=(t,e)=>[t,e],yt=(()=>{let e=class e{constructor(i,r){this._cd=i,this.control=r,this.type="text",this.disabled=!1,this.hostClasses="flex flex-col justify-start gap-1  items-start",this.value="",this.isHover=!1,this.isFocus=!1,this.onChange=()=>{},this.onTouched=()=>{},this.control&&(this.control.valueAccessor=this)}get qaTagLabel(){return this.qaTag?`${this.qaTag}-label`:"label"}get qaTagInput(){return this.qaTag?`${this.qaTag}-value`:"value"}get qaTagError(){let i=Object.keys(this.control?.errors||{})[0];return this.qaTag?`${this.qaTag}${i?"-"+i:""}-error`:"error"}get isInvalid(){return!!this.control?.invalid}get isTouched(){return!!this.control?.touched}get errorMsg(){return!this.isInvalid||!this.control?"":this.control.errors?.required?"This field is required":this.control.errors?.minlength?`The field min length is: ${this.control.errors?.minlength.requiredLength}`:this.control.errors?.maxlength?`The field max length is: ${this.control.errors?.maxlength.requiredLength}`:"Invalid value"}onControlChange(i){this.value=i,this.onChange(this.value),this._cd.markForCheck()}onControlHover(i){this.isHover=!this.disabled&&i,this._cd.markForCheck()}onControlFocus(){this.isFocus=!this.disabled,this._cd.markForCheck()}onControlBlur(){this.disabled||(this.isFocus=!1,this.onTouched(),this._cd.markForCheck())}writeValue(i){this.value=i,this._cd.markForCheck()}registerOnChange(i){this.onChange=i}registerOnTouched(i){this.onTouched=i}setDisabledState(i){this.disabled=i,this._cd.markForCheck()}};e.\u0275fac=function(r){return new(r||e)(s(E),s(g,10))},e.\u0275cmp=A({type:e,selectors:[["app-input"]],hostVars:2,hostBindings:function(r,o){r&2&&x(o.hostClasses)},inputs:{id:"id",label:"label",type:"type",disabled:"disabled",qaTag:"qaTag"},standalone:!0,features:[F],decls:3,vars:12,consts:[["class","text-sm",3,"for",4,"ngIf"],[1,"inline-flex","h-9","w-full","rounded-lg","border","border-solid","px-3","py-1.5","text-sm","text-gray-900","placeholder-gray-500","outline-none",3,"id","type","disabled","ngModel","focus","blur","mouseenter","mouseleave","ngModelChange"],["class","mt-0.5",3,"qaTag",4,"ngIf"],[1,"text-sm",3,"for"],[1,"mt-0.5",3,"qaTag"]],template:function(r,o){r&1&&(T(0,ti,2,3,"label",0),d(1,"input",1),C("focus",function(){return o.onControlFocus()})("blur",function(){return o.onControlBlur()})("mouseenter",function(){return o.onControlHover(!0)})("mouseleave",function(){return o.onControlHover(!1)})("ngModelChange",function(h){return o.onControlChange(h)}),c(),T(2,ii,2,2,"app-error-msg",2)),r&2&&(u("ngIf",o.label),l(1),x(Oe(9,ni,o.disabled?"border-gray-100":o.isInvalid&&o.isTouched?"border-red-500":o.isHover||o.isFocus?"border-primary-700":"border-gray-300",o.disabled?"":o.isInvalid&&o.isTouched?"shadow-[0_0_0_4px_rgba(239,68,68,0.3)]":o.isFocus?"shadow-[0_0_0_4px_rgba(170,201,231,0.5)]":"")),u("id",o.id)("type",o.type)("disabled",o.disabled)("ngModel",o.value),p("data-qa-tag",o.qaTagInput),l(1),u("ngIf",o.isInvalid&&o.isTouched))},dependencies:[H,U,gt,K,J,_e,ie],encapsulation:2,changeDetection:0});let t=e;return t})();function ri(t,e){t&1&&(d(0,"app-error-msg",10),V(1," Invalid username or password "),c()),t&2&&u("qaTag","username-or-password-error")}var ne=function(t){return t.USERNAME="username",t.PASSWORD="password",t}(ne||{}),Ui=(()=>{let e=class e{constructor(i,r,o){this._cd=i,this._router=r,this._authService=o,this.controlName=ne,this.loading=!1,this.showError=!1,this.hostClasses="flex flex-col w-full h-full items-center justify-center text-gray-900 lg:flex-row",this._hostDestroyed$=new De,this.form=this._buildForm()}ngOnDestroy(){this._hostDestroyed$.next(),this._hostDestroyed$.complete()}onSubmit(){this.showError=!1,this.loading=!0,this._cd.markForCheck(),this._authService.login({username:this.form.value[ne.USERNAME],password:this.form.value[ne.PASSWORD]}).pipe(re(this._hostDestroyed$)).subscribe(i=>{if(!i){this.loading=!1,this.showError=!0,this._cd.markForCheck();return}this._router.navigate([je.HOME])})}_buildForm(){let i=new Z({username:new G("",[D.required,D.minLength(4)]),password:new G("",[D.required,D.minLength(4)])});return i.valueChanges.pipe(re(this._hostDestroyed$)).subscribe(()=>{this.showError=!1,this._cd.markForCheck()}),i}};e.\u0275fac=function(r){return new(r||e)(s(E),s(Te),s(ke))},e.\u0275cmp=A({type:e,selectors:[["app-login"]],hostVars:2,hostBindings:function(r,o){r&2&&x(o.hostClasses)},standalone:!0,features:[F],decls:12,vars:13,consts:[[1,"lg:shadow-right-lg","relative","h-[50vh]","w-full","overflow-hidden","shadow-lg","lg:h-screen","lg:w-[50vw]"],["alt","A worker stands beside two massive trucks, ready for a day of heavy-duty tasks","fill","","priority","",1,"object-cover","object-[30%_70%]",3,"ngSrc"],[1,"flex","w-full","flex-grow","items-center","justify-center","p-5","lg:w-[50vw]"],[1,"flex","w-full","max-w-xs","flex-col","items-center","justify-center"],[1,"mb-8","text-center","text-3xl","font-bold"],[1,"flex","w-full","flex-col","gap-5",3,"formGroup","ngSubmit"],["label","Username","type","text",3,"id","qaTag","formControlName"],["label","Password","type","password",3,"id","qaTag","formControlName"],["type","submit",1,"bg-primary-700","hover:bg-primary-600","disabled:bg-primary-500","mt-3","inline-flex","h-9","items-center","justify-center","rounded-lg","px-4","text-white","outline-none","focus:shadow-[0_0_0_4px_rgba(170,201,231,0.5)]",3,"disabled"],["class","mt-4",3,"qaTag",4,"ngIf"],[1,"mt-4",3,"qaTag"]],template:function(r,o){r&1&&(d(0,"div",0),le(1,"img",1),c(),d(2,"div",2)(3,"div",3)(4,"h1",4),V(5,"Log in to your account"),c(),d(6,"form",5),C("ngSubmit",function(){return o.onSubmit()}),le(7,"app-input",6)(8,"app-input",7),d(9,"button",8),V(10),c()(),T(11,ri,2,1,"app-error-msg",9),c()()),r&2&&(l(1),u("ngSrc","assets/img/worker-stands-beside-two-massive-trucks.jpeg"),l(3),p("data-qa-tag","title"),l(2),u("formGroup",o.form),l(1),u("id",o.controlName.USERNAME)("qaTag",o.controlName.USERNAME)("formControlName",o.controlName.USERNAME),l(1),u("id",o.controlName.PASSWORD)("qaTag",o.controlName.PASSWORD)("formControlName",o.controlName.PASSWORD),l(1),u("disabled",o.loading||o.form.invalid),p("data-qa-tag","login"),l(1),Se(" ",o.loading?"Logging in...":"Log in"," "),l(1),u("ngIf",!o.loading&&o.showError))},dependencies:[H,U,mt,ht,J,ot,Ce,Ve,yt,Pe,ie,xe],encapsulation:2,changeDetection:0});let t=e;return t})();export{Ui as LoginComponent};