(self.webpackChunk=self.webpackChunk||[]).push([[550],{550:(t,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>r});const e={data:function(){return{id:0,showPasswordInput:!1,password:"",showErrorMessage:!1}},computed:{item:function(){return this.$store.getters["bookmark/item"]}},methods:{destroy:function(){var t=this;if(this.showPasswordInput){var s={id:this.id,password:this.password};this.$store.dispatch("bookmark/delete",s).then((function(){t.$router.push({name:"list"})})).catch((function(s){401===s.response.status&&(t.showErrorMessage=!0)}))}else this.showPasswordInput=!0}},created:function(){this.id=this.$route.params.id,this.$route.params.load&&this.$store.dispatch("bookmark/show",{id:this.id})}};const r=(0,a(900).Z)(e,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"container"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[t._v("\n                    Bookmark info\n                ")]),t._v(" "),a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v("Created at:")]),t._v(" "),a("p",{staticClass:"card-text"},[t._v(t._s(t.item.created_at))]),t._v(" "),a("h5",{staticClass:"card-title"},[t._v("Favicon:")]),t._v(" "),a("p",{staticClass:"card-text"},[a("img",{staticStyle:{width:"16px"},attrs:{src:t.item.favicon_url,alt:"favicon"}})]),t._v(" "),a("h5",{staticClass:"card-title"},[t._v("Url:")]),t._v(" "),a("p",{staticClass:"card-text"},[t._v(t._s(t.item.url))]),t._v(" "),a("h5",{staticClass:"card-title"},[t._v("Title:")]),t._v(" "),a("p",{staticClass:"card-text"},[t._v(t._s(t.item.title))]),t._v(" "),a("h5",{staticClass:"card-title"},[t._v("Meta keywords:")]),t._v(" "),a("p",{staticClass:"card-text"},[t._v(t._s(t.item.meta_keywords))]),t._v(" "),a("h5",{staticClass:"card-title"},[t._v("Meta description:")]),t._v(" "),a("p",{staticClass:"card-text"},[t._v(t._s(t.item.meta_description))]),t._v(" "),a("form",{on:{submit:function(s){return s.preventDefault(),t.destroy(s)}}},[t.showPasswordInput?a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"inputPassword"}},[t._v("Password")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"inputPassword",placeholder:"Enter password"},domProps:{value:t.password},on:{input:function(s){s.target.composing||(t.password=s.target.value)}}}),t._v(" "),t.showErrorMessage?a("small",{staticClass:"form-text text-muted",staticStyle:{color:"red!important"}},[t._v("Invalid password.")]):t._e()]):t._e(),t._v(" "),a("button",{staticClass:"btn btn-danger",attrs:{type:"submit"}},[t._v("Delete")])])])])])])])}),[],!1,null,null,null).exports}}]);