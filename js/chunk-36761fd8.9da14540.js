(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-36761fd8","chunk-dfee3274"],{"0b53":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=this,n=t.$createElement,a=t._self._c||n;return a("page-header-wrapper",[a("a-card",{attrs:{bordered:!1}},[a("div",{staticClass:"table-page-search-wrapper"},[a("a-form",{attrs:{layout:"inline"}},[a("a-row",{attrs:{gutter:48}},[a("a-col",{attrs:{md:12,sm:24}},[a("a-form-item",{attrs:{label:"单据时间"}},[a("a-date-picker",{attrs:{placeholder:"开始时间"}}),t._v("     至     "),a("a-date-picker",{attrs:{placeholder:"结束时间"}})],1)],1),a("a-col",{attrs:{md:6,sm:24}},[a("a-form-item",{attrs:{label:"业务编号"}},[a("a-input",{attrs:{placeholder:"请输入"},model:{value:t.queryParam.OrderReceivingCode,callback:function(e){t.$set(t.queryParam,"OrderReceivingCode",e)},expression:"queryParam.OrderReceivingCode"}})],1)],1),a("a-col",{attrs:{md:6,sm:24}},[a("a-form-item",{attrs:{label:"业务类型"}},[a("a-select",{staticStyle:{width:"120px"},model:{value:t.queryParam.BasicBusinessTypeId,callback:function(e){t.$set(t.queryParam,"BasicBusinessTypeId",e)},expression:"queryParam.BasicBusinessTypeId"}},t._l(t.businessTypes,(function(e,n){return a("a-select-option",{key:n,attrs:{value:e.id}},[t._v(" "+t._s(e.name)+" ")])})),1)],1)],1),a("a-col",{attrs:{md:6,sm:24}},[a("a-form-item",{attrs:{label:"委托单位"}},[a("a-select",{staticStyle:{width:"120px"},model:{value:t.queryParam.CustomerBusinessUnitId,callback:function(e){t.$set(t.queryParam,"CustomerBusinessUnitId",e)},expression:"queryParam.CustomerBusinessUnitId"}},t._l(t.customerList,(function(e,n){return a("a-select-option",{key:n,attrs:{value:e.id}},[t._v(" "+t._s(e.name)+" ")])})),1)],1)],1),a("a-col",{attrs:{md:6,sm:24}},[a("a-form-item",{attrs:{label:"客户委托号"}},[a("a-input",{attrs:{placeholder:"请输入"},model:{value:t.queryParam.CustomerentrustmentNumber,callback:function(e){t.$set(t.queryParam,"CustomerentrustmentNumber",e)},expression:"queryParam.CustomerentrustmentNumber"}})],1)],1),a("a-col",{attrs:{md:6,sm:24}},[a("a-form-item",{attrs:{label:"ORDER NO"}},[a("a-input",{attrs:{placeholder:"请输入"},model:{value:t.queryParam.OrderNo,callback:function(e){t.$set(t.queryParam,"OrderNo",e)},expression:"queryParam.OrderNo"}})],1)],1),a("a-col",{attrs:{md:6,sm:24}},[a("a-form-item",{attrs:{label:"提单号码"}},[a("a-input",{attrs:{placeholder:"请输入"},model:{value:t.queryParam.BillOfLadingNumber,callback:function(e){t.$set(t.queryParam,"BillOfLadingNumber",e)},expression:"queryParam.BillOfLadingNumber"}})],1)],1),a("a-col",{attrs:{md:8,sm:24}},[a("span",{staticClass:"table-page-search-submitButtons"},[a("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.$refs.table.refresh(!0)}}},[t._v("查询")]),a("a-button",{staticStyle:{"margin-left":"8px"},on:{click:function(){return e.queryParam={}}}},[t._v("重置")])],1)])],1)],1)],1),a("div",{staticClass:"table-operator"},[a("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:t.handleAdd}},[t._v("新建")]),t.selectedRowKeys.length>0?a("a-dropdown",{directives:[{name:"action",rawName:"v-action:edit",arg:"edit"}]},[a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",{key:"1"},[a("a-icon",{attrs:{type:"modify"}}),t._v("修改")],1),a("a-menu-item",{key:"2"},[a("a-icon",{attrs:{type:"delete"}}),t._v("删除")],1)],1)],1):t._e()],1),a("s-table",{ref:"table",attrs:{size:"default",rowKey:"id",scroll:{x:1500,y:300},columns:t.columns,data:t.loadData,alert:!0,rowSelection:t.rowSelection,showPagination:"auto"},scopedSlots:t._u([{key:"serial",fn:function(e,n,r){return a("span",{},[t._v(" "+t._s(r+1)+" ")])}},{key:"action",fn:function(e,n){return a("span",{},[[a("a",{on:{click:function(e){return t.handleEdit(n)}}},[t._v("查看")]),a("a-divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(e){return t.handleEdit(n,!0)}}},[t._v("修改")]),a("a-divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(e){return t.handleDelete(n)}}},[t._v("删除")]),a("a-divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(e){return t.handleStatusChange(n,"confirm")}}},[t._v("确认")]),a("a-divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(e){return t.handleStatusChange(n,"cancel")}}},[t._v("取消确认")]),a("a-divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(e){return t.handleStatusChange(n,"verify")}}},[t._v("审核")])]],2)}}])}),a("create-form",{ref:"createModal",attrs:{visible:t.visible,loading:t.confirmLoading,model:t.mdl},on:{cancel:t.handleCancel,ok:t.handleOk}})],1)],1)},r=[],i=n("5530"),o=(n("cd17"),n("ed3b")),s=(n("0d03"),n("c1df")),l=n.n(s),c=n("2af9"),u=n("84ea"),d=n("fac7"),m=n("3326"),f=n("5dea"),p={confirm:"200",verify:"300",cancel:"100"},h=[{title:"序号",fixed:"left",width:80,ellipsis:!0,scopedSlots:{customRender:"serial"}},{title:"日期",width:200,ellipsis:!0,dataIndex:"documentDate"},{title:"业务编号",width:100,ellipsis:!0,dataIndex:"name"},{title:"业务类型",width:150,ellipsis:!0,dataIndex:"basicBusinessTypeId"},{title:"委托单位(客户)",width:150,ellipsis:!0,dataIndex:"name"},{title:"客户委托号",width:150,ellipsis:!0,dataIndex:"customerentrustmentNumber"},{title:"ORDER NO",width:150,dataIndex:"orderNo",ellipsis:!0},{title:"提单号码",width:150,dataIndex:"billOfLadingNumber",ellipsis:!0},{title:"分运单号码",width:150,dataIndex:"waybillNumber",ellipsis:!0},{title:"报关单号",width:150,dataIndex:"customsDeclarationNumber",ellipsis:!0},{title:"船名",width:150,dataIndex:"name",ellipsis:!0},{title:"航次",width:150,dataIndex:"name",ellipsis:!0},{title:"启运国",width:150,dataIndex:"shippingCountryId",ellipsis:!0},{title:"目的国",width:150,dataIndex:"destinationCountryId",ellipsis:!0},{title:"件数",width:150,dataIndex:"numberOfPieces",ellipsis:!0},{title:"毛重",width:150,dataIndex:"grossWeight",ellipsis:!0},{title:"净重",width:150,dataIndex:"netWeight",ellipsis:!0},{title:"体积",width:150,dataIndex:"volume",ellipsis:!0},{title:"操作",dataIndex:"action",width:"320px",scopedSlots:{customRender:"action"}}],b={name:"GoodType",components:{STable:c["m"],Ellipsis:c["e"],CreateForm:m["default"]},data:function(){var e=this;return this.columns=h,{visible:!1,confirmLoading:!1,mdl:null,advanced:!1,queryParam:{},loadData:function(t){var n=Object.assign({},t,e.queryParam);return Object(u["e"])(n).then((function(e){return e.data}))},selectedRowKeys:[],selectedRows:[],businessTypes:[],customerList:[]}},computed:{rowSelection:function(){return{selectedRowKeys:this.selectedRowKeys,onChange:this.onSelectChange}}},created:function(){var e=this;Object(d["a"])({}).then((function(t){e.businessTypes=t.data})),Object(f["d"])({}).then((function(t){e.customerList=t.data}))},methods:{handleAdd:function(){this.$router.push({path:"/business/addMaritimeImport",query:{type:"add"}})},handleEdit:function(e,t){this.$router.push({path:"/business/addAirExport",query:{type:t?"edit":"check",id:e.id}})},handleStatusChange:function(e,t){var n=this;o["a"].confirm({title:"提示",content:"确定要变更状态吗？",onOk:function(){Object(u["d"])(Object(i["a"])(Object(i["a"])({},e),{},{status:p[t]})).then((function(e){n.$refs.table.refresh(),n.$message.info("状态改变成功")}))},onCancel:function(){}})},handleOk:function(){var e=this,t=this.$refs.createModal.form;this.confirmLoading=!0,t.validateFields((function(n,a){n?e.confirmLoading=!1:(a=Object.assign({},e.$refs.createModal.model,a),a.id>0?Object(u["d"])(a).then((function(n){e.visible=!1,e.confirmLoading=!1,t.resetFields(),e.$refs.table.refresh(),e.$message.info("修改成功")})):Object(u["a"])(a).then((function(n){e.visible=!1,e.confirmLoading=!1,t.resetFields(),e.$refs.table.refresh(),e.$message.info("新增成功")})))}))},handleCancel:function(){this.visible=!1;var e=this.$refs.createModal.form;e.resetFields()},handleDelete:function(e){var t=this;o["a"].confirm({title:"提示",content:"确定要删除这条单据吗？",onOk:function(){Object(u["b"])({id:e.id}).then((function(e){t.$refs.table.refresh(),t.$message.info("删除成功")}))},onCancel:function(){}})},handleSub:function(e){0!==e.status?this.$message.info("".concat(e.no," 订阅成功")):this.$message.error("".concat(e.no," 订阅失败，规则已关闭"))},onSelectChange:function(e,t){this.selectedRowKeys=e,this.selectedRows=t},toggleAdvanced:function(){this.advanced=!this.advanced},resetSearchForm:function(){this.queryParam={date:l()(new Date)}}}},y=b,v=n("2877"),g=Object(v["a"])(y,a,r,!1,null,null,null);t["default"]=g.exports},3326:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-modal",{attrs:{title:"国家",width:640,visible:e.visible,confirmLoading:e.loading},on:{ok:function(){e.$emit("ok")},cancel:function(){e.$emit("cancel")}}},[n("a-spin",{attrs:{spinning:e.loading}},[n("a-form",e._b({attrs:{form:e.form}},"a-form",e.formLayout,!1),[n("a-form-item",{attrs:{label:"编码"}},[n("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["code"],expression:"['code']"}]})],1),n("a-form-item",{attrs:{label:"名称"}},[n("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name"],expression:"['name']"}]})],1)],1)],1)],1)},r=[],i=(n("4160"),n("88bc")),o=n.n(i),s=["code","name"],l={props:{visible:{type:Boolean,required:!0},loading:{type:Boolean,default:function(){return!1}},model:{type:Object,default:function(){return null}}},data:function(){return this.formLayout={labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}}},{form:this.$form.createForm(this)}},created:function(){var e=this;s.forEach((function(t){return e.form.getFieldDecorator(t)})),this.$watch("model",(function(){e.model&&e.form.setFieldsValue(o()(e.model,s))}))}},c=l,u=n("2877"),d=Object(u["a"])(c,a,r,!1,null,null,null);t["default"]=d.exports},"5dea":function(e,t,n){"use strict";n.d(t,"e",(function(){return o})),n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return u}));var a=n("b775"),r="/BasicCustomer",i={Query:"".concat(r,"/page"),Add:"".concat(r,"/add"),Delete:"".concat(r,"/delete"),Edit:"".concat(r,"/edit"),Detail:"".concat(r,"/detail"),List:"".concat(r,"/list"),PullDown:"".concat(r,"/PullDown")};function o(e){return Object(a["b"])({url:i.Query,method:"get",params:e})}function s(e){return Object(a["b"])({url:i.Add,method:"post",data:e})}function l(e){return Object(a["b"])({url:i.Delete,method:"post",data:e})}function c(e){return Object(a["b"])({url:i.Edit,method:"post",data:e})}function u(e){return Object(a["b"])({url:i.PullDown,method:"post",data:e})}},"84ea":function(e,t,n){"use strict";n.d(t,"e",(function(){return o})),n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return l})),n.d(t,"d",(function(){return c})),n.d(t,"c",(function(){return u}));var a=n("b775"),r="/BusinessMaritimeImportDeclaration",i={Query:"".concat(r,"/page"),Add:"".concat(r,"/add"),Delete:"".concat(r,"/delete"),Edit:"".concat(r,"/edit"),Detail:"".concat(r,"/detail"),List:"".concat(r,"/list")};function o(e){return Object(a["b"])({url:i.Query,method:"get",params:e})}function s(e){return Object(a["b"])({url:i.Add,method:"post",data:e})}function l(e){return Object(a["b"])({url:i.Delete,method:"post",data:e})}function c(e){return Object(a["b"])({url:i.Edit,method:"post",data:e})}function u(e){return Object(a["b"])({url:i.Detail,method:"get",params:e})}},"88bc":function(e,t,n){(function(t){var n=1/0,a=9007199254740991,r="[object Arguments]",i="[object Function]",o="[object GeneratorFunction]",s="[object Symbol]",l="object"==typeof t&&t&&t.Object===Object&&t,c="object"==typeof self&&self&&self.Object===Object&&self,u=l||c||Function("return this")();function d(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}function m(e,t){var n=-1,a=e?e.length:0,r=Array(a);while(++n<a)r[n]=t(e[n],n,e);return r}function f(e,t){var n=-1,a=t.length,r=e.length;while(++n<a)e[r+n]=t[n];return e}var p=Object.prototype,h=p.hasOwnProperty,b=p.toString,y=u.Symbol,v=p.propertyIsEnumerable,g=y?y.isConcatSpreadable:void 0,w=Math.max;function O(e,t,n,a,r){var i=-1,o=e.length;n||(n=C),r||(r=[]);while(++i<o){var s=e[i];t>0&&n(s)?t>1?O(s,t-1,n,a,r):f(r,s):a||(r[r.length]=s)}return r}function j(e,t){return e=Object(e),x(e,t,(function(t,n){return n in e}))}function x(e,t,n){var a=-1,r=t.length,i={};while(++a<r){var o=t[a],s=e[o];n(s,o)&&(i[o]=s)}return i}function k(e,t){return t=w(void 0===t?e.length-1:t,0),function(){var n=arguments,a=-1,r=w(n.length-t,0),i=Array(r);while(++a<r)i[a]=n[t+a];a=-1;var o=Array(t+1);while(++a<t)o[a]=n[a];return o[t]=i,d(e,this,o)}}function C(e){return $(e)||P(e)||!!(g&&e&&e[g])}function I(e){if("string"==typeof e||L(e))return e;var t=e+"";return"0"==t&&1/e==-n?"-0":t}function P(e){return q(e)&&h.call(e,"callee")&&(!v.call(e,"callee")||b.call(e)==r)}var $=Array.isArray;function _(e){return null!=e&&S(e.length)&&!D(e)}function q(e){return N(e)&&_(e)}function D(e){var t=B(e)?b.call(e):"";return t==i||t==o}function S(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=a}function B(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function N(e){return!!e&&"object"==typeof e}function L(e){return"symbol"==typeof e||N(e)&&b.call(e)==s}var R=k((function(e,t){return null==e?{}:j(e,m(O(t,1),I))}));e.exports=R}).call(this,n("c8ba"))},fac7:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n("b775"),r="/BasicBusinessType",i={Query:"".concat(r,"/pullDown")};function o(e){return Object(a["b"])({url:i.Query,method:"post",data:e})}}}]);