System.registerDynamic("app/environment.js",[],!0,function(a,b,c){"use strict";return b.environment={production:!0},c.exports}),System.registerDynamic("app/+home/shared/services/questions.service.js",["@angular/core","@angular/http"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=a("@angular/http"),h=function(){function a(a){this._http=a}return a.prototype.postQuestion=function(a){return this._http.post("http://piotr.codes/submit-question",JSON.stringify({question:a}))},a=d([f.Injectable(),e("design:paramtypes",[g.Http])],a)}();return b.QuestionService=h,c.exports}),System.registerDynamic("app/+home/home.component.js",["@angular/core","angularfire2","@angular/common","@angular/http","./shared/services/questions.service"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=a("angularfire2"),h=a("@angular/common"),i=a("@angular/http"),j=a("./shared/services/questions.service"),k=function(){function a(a,b,c){this.af=a,this.fb=b,this._questionService=c,this.isLoading=!0,this.hidden=!0,this.showSuccess=!0,this.showError=!0,this.createForm()}return a.prototype.ngOnInit=function(){var a=this;this.questions$=this.af.database.list("/questions"),this.questions$.subscribe(function(b){a.isLoading=!1})},a.prototype.createForm=function(){this.form=this.fb.group({newQuestion:["",h.Validators.compose([h.Validators.required,h.Validators.minLength(10)])]})},a.prototype.submitQuestion=function(){var a=this,b=this.form.controls.newQuestion;this._questionService.postQuestion(b.value).subscribe(function(a){return console.log(a)},function(b){console.log(b),a.showError=!1,setTimeout(function(){return a.showError=!0},2e3)},function(){a.hidden=!a.hidden,a.createForm(),a.showSuccess=!1,setTimeout(function(){return a.showSuccess=!0},2e3)}),console.log(b.value)},a.prototype.toggle=function(){this.hidden=!this.hidden},a=d([f.Component({moduleId:c.id,selector:"app-home",templateUrl:"home.component.html",providers:[i.HTTP_PROVIDERS,j.QuestionService],styleUrls:["home.component.css"]}),e("design:paramtypes",[g.AngularFire,h.FormBuilder,j.QuestionService])],a)}();return b.HomeComponent=k,c.exports}),System.registerDynamic("app/+home/index.js",["./home.component"],!0,function(a,b,c){"use strict";var d=a("./home.component");return b.HomeComponent=d.HomeComponent,c.exports}),System.registerDynamic("app/+about/about.component.js",["@angular/core"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=function(){function a(){}return a.prototype.ngOnInit=function(){},a=d([f.Component({moduleId:c.id,selector:"app-about",templateUrl:"about.component.html",styleUrls:["about.component.css"]}),e("design:paramtypes",[])],a)}();return b.AboutComponent=g,c.exports}),System.registerDynamic("app/+about/index.js",["./about.component"],!0,function(a,b,c){"use strict";var d=a("./about.component");return b.AboutComponent=d.AboutComponent,c.exports}),System.registerDynamic("app/ask-me-anything.component.js",["@angular/core","./+home","@angular/router","./+about"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=a("./+home"),h=a("@angular/router"),i=a("./+about"),j=function(){function a(a){this.router=a}return a.prototype.isActive=function(a){return location.pathname===a},a=d([f.Component({moduleId:c.id,selector:"ask-me-anything-app",templateUrl:"ask-me-anything.component.html",styleUrls:["ask-me-anything.component.css"],directives:[h.ROUTER_DIRECTIVES],providers:[h.ROUTER_PROVIDERS]}),h.Routes([{path:"/ask-me-anything",component:g.HomeComponent},{path:"/ask-me-anything/about",component:i.AboutComponent}]),e("design:paramtypes",[h.Router])],a)}();return b.AskMeAnythingAppComponent=j,c.exports}),System.registerDynamic("app/index.js",["./environment","./ask-me-anything.component"],!0,function(a,b,c){"use strict";var d=a("./environment");b.environment=d.environment;var e=a("./ask-me-anything.component");return b.AskMeAnythingAppComponent=e.AskMeAnythingAppComponent,c.exports});