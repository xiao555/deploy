(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2b780448","chunk-8d9fa146"],{"1fce":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"account-settings-info-view"},[a("a-row",{attrs:{gutter:16,type:"flex",justify:"center"}},[a("a-col",{attrs:{order:t.isMobile?2:1,md:24,lg:16}},[a("a-form",{attrs:{layout:"vertical"}},[a("a-form-item",{attrs:{label:t.$t("account.settings.basic.nickname")}},[a("a-input",{attrs:{placeholder:t.$t("account.settings.basic.nickname-message")}})],1),a("a-form-item",{attrs:{label:t.$t("account.settings.basic.profile")}},[a("a-textarea",{attrs:{rows:"4",placeholder:t.$t("account.settings.basic.profile-message")}})],1),a("a-form-item",{attrs:{label:t.$t("account.settings.basic.email"),required:!1}},[a("a-input",{attrs:{placeholder:"example@ant.design"}})],1),a("a-form-item",[a("a-button",{attrs:{type:"primary"}},[t._v(t._s(t.$t("account.settings.basic.update")))])],1)],1)],1),a("a-col",{style:{minHeight:"180px"},attrs:{order:1,md:24,lg:8}},[a("div",{staticClass:"ant-upload-preview",on:{click:function(e){return t.$refs.modal.edit(1)}}},[a("a-icon",{staticClass:"upload-icon",attrs:{type:"cloud-upload-o"}}),a("div",{staticClass:"mask"},[a("a-icon",{attrs:{type:"plus"}})],1),a("img",{attrs:{src:t.option.img}})],1)])],1),a("avatar-modal",{ref:"modal",on:{ok:t.setavatar}})],1)},i=[],n=a("8d90"),r=a("432b"),s={mixins:[r["a"]],components:{AvatarModal:n["default"]},data:function(){return{preview:{},option:{img:"/avatar2.jpg",info:!0,size:1,outputType:"jpeg",canScale:!1,autoCrop:!0,autoCropWidth:180,autoCropHeight:180,fixedBox:!0,fixed:!0,fixedNumber:[1,1]}}},methods:{setavatar:function(t){this.option.img=t}}},c=s,u=(a("6ad0"),a("2877")),l=Object(u["a"])(c,o,i,!1,null,"7b41badc",null);e["default"]=l.exports},"2bcf":function(t,e,a){"use strict";a("9a79")},"432b":function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));var o=a("5530"),i=a("5880"),n={computed:Object(o["a"])(Object(o["a"])({},Object(i["mapState"])({layout:function(t){return t.app.layout},navTheme:function(t){return t.app.theme},primaryColor:function(t){return t.app.color},colorWeak:function(t){return t.app.weak},fixedHeader:function(t){return t.app.fixedHeader},fixedSidebar:function(t){return t.app.fixedSidebar},contentWidth:function(t){return t.app.contentWidth},autoHideHeader:function(t){return t.app.autoHideHeader},isMobile:function(t){return t.app.isMobile},sideCollapsed:function(t){return t.app.sideCollapsed},multiTab:function(t){return t.app.multiTab}})),{},{isTopMenu:function(){return"topmenu"===this.layout}}),methods:{isSideMenu:function(){return!this.isTopMenu}}}},"6ad0":function(t,e,a){"use strict";a("77d3")},"77d3":function(t,e,a){},"8d90":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{title:"修改头像",visible:t.visible,maskClosable:!1,confirmLoading:t.confirmLoading,width:800,footer:null},on:{cancel:t.cancelHandel}},[a("a-row",[a("a-col",{style:{height:"350px"},attrs:{xs:24,md:12}},[a("vue-cropper",{ref:"cropper",attrs:{img:t.options.img,info:!0,autoCrop:t.options.autoCrop,autoCropWidth:t.options.autoCropWidth,autoCropHeight:t.options.autoCropHeight,fixedBox:t.options.fixedBox},on:{realTime:t.realTime}})],1),a("a-col",{style:{height:"350px"},attrs:{xs:24,md:12}},[a("div",{staticClass:"avatar-upload-preview"},[a("img",{style:t.previews.img,attrs:{src:t.previews.url}})])])],1),a("br"),a("a-row",[a("a-col",{attrs:{lg:2,md:2}},[a("a-upload",{attrs:{name:"file",beforeUpload:t.beforeUpload,showUploadList:!1}},[a("a-button",{attrs:{icon:"upload"}},[t._v("选择图片")])],1)],1),a("a-col",{attrs:{lg:{span:1,offset:2},md:2}},[a("a-button",{attrs:{icon:"plus"},on:{click:function(e){return t.changeScale(1)}}})],1),a("a-col",{attrs:{lg:{span:1,offset:1},md:2}},[a("a-button",{attrs:{icon:"minus"},on:{click:function(e){return t.changeScale(-1)}}})],1),a("a-col",{attrs:{lg:{span:1,offset:1},md:2}},[a("a-button",{attrs:{icon:"undo"},on:{click:t.rotateLeft}})],1),a("a-col",{attrs:{lg:{span:1,offset:1},md:2}},[a("a-button",{attrs:{icon:"redo"},on:{click:t.rotateRight}})],1),a("a-col",{attrs:{lg:{span:2,offset:6},md:2}},[a("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.finish("blob")}}},[t._v("保存")])],1)],1)],1)},i=[],n=(a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),a("4795"),{data:function(){return{visible:!1,id:null,confirmLoading:!1,fileList:[],uploading:!1,options:{img:"",autoCrop:!0,autoCropWidth:200,autoCropHeight:200,fixedBox:!0},previews:{}}},methods:{edit:function(t){this.visible=!0,this.id=t},close:function(){this.id=null,this.visible=!1},cancelHandel:function(){this.close()},changeScale:function(t){t=t||1,this.$refs.cropper.changeScale(t)},rotateLeft:function(){this.$refs.cropper.rotateLeft()},rotateRight:function(){this.$refs.cropper.rotateRight()},beforeUpload:function(t){var e=this,a=new FileReader;return a.readAsDataURL(t),a.onload=function(){e.options.img=a.result},!1},finish:function(t){var e=this,a=this,o=new FormData;"blob"===t?this.$refs.cropper.getCropBlob((function(t){var i=window.URL.createObjectURL(t);e.model=!0,e.modelSrc=i,o.append("file",t,e.fileName),e.$http.post("https://www.mocky.io/v2/5cc8019d300000980a055e76",o,{contentType:!1,processData:!1,headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((function(t){a.$message.success("上传成功"),a.$emit("ok",t.url),a.visible=!1}))})):this.$refs.cropper.getCropData((function(t){e.model=!0,e.modelSrc=t}))},okHandel:function(){var t=this;t.confirmLoading=!0,setTimeout((function(){t.confirmLoading=!1,t.close(),t.$message.success("上传头像成功")}),2e3)},realTime:function(t){this.previews=t}}}),r=n,s=(a("2bcf"),a("2877")),c=Object(s["a"])(r,o,i,!1,null,"04bacecc",null);e["default"]=c.exports},"9a79":function(t,e,a){}}]);