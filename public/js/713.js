(self.webpackChunk=self.webpackChunk||[]).push([[713],{739:(t,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>i});const e={data:function(){return{page:1}},computed:{list:function(){return this.$store.getters["bookmark/list"]},listMeta:function(){return this.$store.getters["bookmark/listMeta"]}},methods:{getListByPage:function(t){var a=this,s={page:t};this.$store.dispatch("bookmark/index",s).then((function(){a.page=t}))},getList:function(){this.$store.dispatch("bookmark/index",{page:this.page})}},mounted:function(){this.getList()}};const i=(0,s(900).Z)(e,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(a){return t.$router.push("create-bookmark")}}},[t._v("Add bookmark")])])]),t._v(" "),s("div",{staticClass:"row",staticStyle:{"margin-top":"15px"}},[s("div",{staticClass:"col-md-12"},[s("table",{staticClass:"table"},[t._m(0),t._v(" "),s("tbody",t._l(t.list,(function(a){return s("tr",{key:a.id,staticStyle:{cursor:"pointer"},on:{click:function(s){return t.$router.push({name:"bookmark",params:{id:a.id,load:!0}})}}},[s("th",[t._v(t._s(a.created_at))]),t._v(" "),s("td",[s("img",{staticStyle:{width:"16px"},attrs:{src:a.favicon_url,alt:"favicon"}})]),t._v(" "),s("td",[t._v(t._s(a.url))]),t._v(" "),s("td",[t._v(t._s(a.title))])])})),0)])])]),t._v(" "),s("div",{staticClass:"row",staticStyle:{"margin-top":"15px"}},[s("div",{staticClass:"col-md-12"},[s("nav",{attrs:{"aria-label":"Page navigation example"}},[s("ul",{staticClass:"pagination"},t._l(t.listMeta.links,(function(a){return s("li",{key:a.label,staticClass:"page-item",class:{active:a.active}},[s("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),t.getListByPage(a.label)}}},[t._v(t._s(a.label))])])})),0)])])])])}),[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("thead",[s("tr",[s("th",{attrs:{scope:"col"}},[t._v("Created at")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Favicon")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Url")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Title")])])])}],!1,null,null,null).exports}}]);