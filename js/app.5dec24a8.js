(function(e){function t(t){for(var l,s,o=t[0],n=t[1],c=t[2],m=0,v=[];m<o.length;m++)s=o[m],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&v.push(r[s][0]),r[s]=0;for(l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l]);d&&d(t);while(v.length)v.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],l=!0,o=1;o<a.length;o++){var n=a[o];0!==r[n]&&(l=!1)}l&&(i.splice(t--,1),e=s(s.s=a[0]))}return e}var l={},r={app:0},i=[];function s(t){if(l[t])return l[t].exports;var a=l[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=l,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)s.d(a,l,function(t){return e[t]}.bind(null,l));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/dice-roller/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],n=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var d=n;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var l=a("8a23"),r=a.n(l);r.a},"56d7":function(e,t,a){"use strict";a.r(t);var l=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-toolbar",{attrs:{dense:""}},[a("v-toolbar-title",[e._v(" Time "+e._s(e.chronometer||"")+" ")]),a("v-spacer"),a("PlayerModal"),a("SettingsModal")],1),a("v-simple-table",{staticStyle:{position:"absolute",top:"75px",left:"35px","max-width":"135px","margin-left":"auto"},attrs:{dense:""},scopedSlots:e._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",{staticClass:"subtitle-1 text-center"},[e._v("Die")]),a("th",{staticClass:"subtitle-1 text-center"},[e._v("Count")])])]),a("tbody",e._l(e.tableData,(function(t){return a("tr",{key:"die-table"+t},[a("td",{staticClass:"subtitle-2 text-center"},[e._v(e._s(t))]),a("td",{staticClass:"subtitle-2 text-center"},[e._v(e._s(e.getDieCount(t)))])])})),0)]},proxy:!0}])}),a("v-card",{staticClass:"main-container elevation-5",attrs:{dark:"",flat:"",tile:""}},[a("v-snackbar",{attrs:{color:e.snackbarColor,top:""},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v(" "+e._s(e.snackbarText)+" ")]),e.currentPlayer?a("div",{staticClass:"d-flex justify-space-around mt-8 mb-5"},[e._l(e.players,(function(t,l){return a("v-btn",{key:t.id,class:0===l?"mx-auto":"mx-auto filter-opacity",attrs:{color:t.color,fab:""},on:{click:function(a){return e.onRoll(t)}}},[a("span",{staticClass:"display-1"},[e._v(e._s(t.name[0]))])])})),a("div",{staticClass:"pa-3 mr-5",on:{click:function(t){return e.onRevertRoll()}}},[a("v-icon",[e._v("mdi-restore")])],1)],2):e._e(),a("Dice"),a("v-list",{staticClass:"mt-10 ml-5 mr-5",staticStyle:{"max-height":"calc(100vh - 525px)","overflow-y":"hidden"}},[a("transition-group",{attrs:{name:"list-complete",tag:"div"}},e._l(e.diceLog.slice(1,e.players.length+1),(function(t){return a("v-list-item",{key:t.timestamp,staticClass:"list-complete-item headline"},[a("v-list-item-avatar",{staticClass:"ml-10"},[a("v-avatar",{attrs:{color:t.player.color,size:"40"}},[a("span",[e._v(e._s(t.player.name[0]))])])],1),a("v-list-item-content",[a("div",{staticClass:"d-flex justify-space-around align-content-center"},[e.twelveSidedDieEnabled?a("div",{staticClass:"grey--text headline"},[e._v(e._s(t.dice[2]))]):e._e(),a("div",{staticClass:"grey--text display-1"},[e._v(e._s(t.dice[0]+t.dice[1]))])])])],1)})),1)],1)],1)],1)},i=[],s=a("2f62"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.diceLog[0]&&e.currentDice.length?a("div",{staticClass:"mt-10 mb-8"},[a("transition",{attrs:{name:"fade"}},[e.twelveSidedDieEnabled&&!e.rollDisabled?a("div",{staticClass:"twelve-sided-die d-flex justify-center",on:{click:e.onRoll}},[a("span",{staticClass:"display-2 font-weight-bold"},[e._v(e._s(e.currentDice[2]))]),a("svg",{staticStyle:{"enable-background":"new 0 0 511.995 511.995"},attrs:{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 511.995 511.995","xml:space":"preserve"}},[a("g",[a("g",[a("path",{attrs:{d:"M507.807,200.272L262.474,12.859c-3.819-2.923-9.109-2.923-12.949,0L4.191,200.272c-3.627,2.773-5.077,7.509-3.648,11.84 l93.717,281.92c1.451,4.352,5.547,7.296,10.133,7.296h303.253c4.608,0,8.683-2.944,10.091-7.296l93.717-281.92 C512.885,207.803,511.413,203.046,507.807,200.272z M399.946,479.995H112.095L23.221,212.582L256.031,34.747l232.811,177.856 L399.946,479.995z"}})])]),e._v(" "),a("g"),e._v(" "),a("g"),e._v(" "),a("g"),e._v(" "),a("g"),e._v(" "),a("g"),e._v(" "),a("g"),e._v(" "),a("g"),e._v(" "),a("g"),e._v(" "),a("g"),e._v(" "),a("g"),e._v(" "),a("g"),e._v(" "),a("g"),e._v(" "),a("g"),e._v(" "),a("g"),e._v(" "),a("g")])]):e._e()]),a("div",{staticClass:"mt-8",staticStyle:{"min-height":"150px"}},[a("transition",{attrs:{name:"fade"}},[e.rollDisabled?e._e():a("div",{staticClass:"d-flex justify-space-around align-center",on:{click:e.onRoll}},[a("v-avatar",{staticStyle:{display:"none"},attrs:{color:e.diceLog[0].player.color,size:"50"}},[a("span",{staticClass:"display-1"},[e._v(e._s(e.diceLog[0].player.name[0]))])]),a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",width:"150",height:"150",viewBox:"0 0 24 24"}},[a("rect",{attrs:{fill:"white",x:"15%",y:"15%",width:"70%",height:"70%"}}),a("path",{attrs:{fill:e.diceLog[0].player.color,d:e.dice[e.currentDice[0]-1]}})]),a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",width:"150",height:"150",viewBox:"0 0 24 24"}},[a("rect",{attrs:{fill:"white",x:"15%",y:"15%",width:"70%",height:"70%"}}),a("path",{attrs:{fill:e.diceLog[0].player.color,d:e.dice[e.currentDice[1]-1]}})]),a("div",{staticClass:"display-3"},[e._v(" = ")]),a("div",{staticClass:"display-3 font-weight-bold",staticStyle:{width:"150px","text-align":"center"}},[e._v(" "+e._s(e.currentDice[0]+e.currentDice[1])+" ")])],1)])],1)],1):e._e()},n=[],c={name:"Dice",data:()=>({dice:["M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10Z","M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M7,5A2,2 0 0,0 5,7A2,2 0 0,0 7,9A2,2 0 0,0 9,7A2,2 0 0,0 7,5M17,15A2,2 0 0,0 15,17A2,2 0 0,0 17,19A2,2 0 0,0 19,17A2,2 0 0,0 17,15Z","M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10M7,5A2,2 0 0,0 5,7A2,2 0 0,0 7,9A2,2 0 0,0 9,7A2,2 0 0,0 7,5M17,15A2,2 0 0,0 15,17A2,2 0 0,0 17,19A2,2 0 0,0 19,17A2,2 0 0,0 17,15Z","M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M7,5A2,2 0 0,0 5,7A2,2 0 0,0 7,9A2,2 0 0,0 9,7A2,2 0 0,0 7,5M17,15A2,2 0 0,0 15,17A2,2 0 0,0 17,19A2,2 0 0,0 19,17A2,2 0 0,0 17,15M17,5A2,2 0 0,0 15,7A2,2 0 0,0 17,9A2,2 0 0,0 19,7A2,2 0 0,0 17,5M7,15A2,2 0 0,0 5,17A2,2 0 0,0 7,19A2,2 0 0,0 9,17A2,2 0 0,0 7,15Z","M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M7,5A2,2 0 0,0 5,7A2,2 0 0,0 7,9A2,2 0 0,0 9,7A2,2 0 0,0 7,5M17,15A2,2 0 0,0 15,17A2,2 0 0,0 17,19A2,2 0 0,0 19,17A2,2 0 0,0 17,15M17,5A2,2 0 0,0 15,7A2,2 0 0,0 17,9A2,2 0 0,0 19,7A2,2 0 0,0 17,5M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10M7,15A2,2 0 0,0 5,17A2,2 0 0,0 7,19A2,2 0 0,0 9,17A2,2 0 0,0 7,15Z","M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M7,5A2,2 0 0,0 5,7A2,2 0 0,0 7,9A2,2 0 0,0 9,7A2,2 0 0,0 7,5M17,15A2,2 0 0,0 15,17A2,2 0 0,0 17,19A2,2 0 0,0 19,17A2,2 0 0,0 17,15M17,10A2,2 0 0,0 15,12A2,2 0 0,0 17,14A2,2 0 0,0 19,12A2,2 0 0,0 17,10M17,5A2,2 0 0,0 15,7A2,2 0 0,0 17,9A2,2 0 0,0 19,7A2,2 0 0,0 17,5M7,10A2,2 0 0,0 5,12A2,2 0 0,0 7,14A2,2 0 0,0 9,12A2,2 0 0,0 7,10M7,15A2,2 0 0,0 5,17A2,2 0 0,0 7,19A2,2 0 0,0 9,17A2,2 0 0,0 7,15Z"]}),computed:{...Object(s["c"])({players:"players",currentDice:"dice",diceLog:"diceLog",rollDisabled:"rollDisabled",twelveSidedDieEnabled:"twelveSidedDieEnabled"}),player(){return this.players[this.players.length-1]}},methods:{...Object(s["b"])({rollDice:"rollDice"}),onRoll(){this.rollDice()}}},d=c,m=(a("d1d5"),a("2877")),v=a("6544"),p=a.n(v),u=a("8212"),g=Object(m["a"])(d,o,n,!1,null,null,null),b=g.exports;p()(g,{VAvatar:u["a"]});var h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-btn",{attrs:{icon:""},on:{click:function(t){e.dialog=!0}}},[a("v-icon",[e._v("mdi-account-group")])],1),a("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-snackbar",{attrs:{color:e.snackbarColor,top:""},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v(" "+e._s(e.snackbarText)+" ")]),a("v-card-title",[a("span",{staticClass:"headline mx-auto"},[e._v("Players")])]),e.players.length?e._l(e.players,(function(t){return a("v-list-item",{key:t.id},[a("div",{staticClass:"mr-5"},[a("v-btn",{staticClass:"mx-auto",attrs:{color:t.color,fab:"",small:""},on:{click:function(a){return e.onUpdatePlayer(t)}}},[a("span",{staticClass:"headline"},[e._v(e._s(t.name[0]))])])],1),a("v-list-item-content",[a("v-list-item-title",{domProps:{textContent:e._s(t.name)}})],1),a("v-btn",{attrs:{text:"",icon:"",color:"white"},on:{click:function(a){return e.onDeletePlayer(t)}}},[a("v-icon",[e._v("mdi-delete")])],1)],1)})):e._e(),a("v-card-title",[a("span",{staticClass:"headline mx-auto"},[e._v("New player")])]),a("v-card-text",[a("v-container",[a("form",{on:{submit:[function(e){e.preventDefault()},e.onAddPlayer]}},[a("v-text-field",{attrs:{label:"Name",required:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),a("v-row",e._l(e.colors,(function(t){return a("v-col",{key:t,attrs:{sm:"3",xs:"4"}},[a("div",{style:e.selectedColor===t?{height:"56px",width:"56px",border:"solid white 4px","border-radius":"100%"}:{}},[a("v-avatar",{attrs:{color:t},on:{click:function(a){e.selectedColor=t}}})],1)])})),1)],1),a("v-card-actions",[a("v-btn",{staticClass:"mx-auto mt-5",attrs:{color:"primary"},on:{click:e.onAddPlayer}},[e._v("Add player")])],1),a("v-card-actions",[a("v-btn",{staticClass:"ml-auto",attrs:{color:"primary"},on:{click:function(t){e.dialog=!1}}},[e._v("Close")])],1)],1)],1)],2)],1)],1)},y=[],f={name:"PlayerModal",data:()=>({dialog:!1,snackbar:!1,snackbarColor:"",snackbarText:"",name:"",selectedColor:""}),computed:{...Object(s["c"])({players:"players",colors:"colors"})},methods:{...Object(s["d"])({addPlayer:"addPlayer",deletePlayer:"deletePlayer",updatePlayer:"updatePlayer"}),onAddPlayer(){const e=this.name&&this.name[0].toUpperCase()+this.name.slice(1,100),t=this.selectedColor;let a="";if(e||(a+=" - name"),t||(a+=" - color"),this.players.find(t=>t.name===e)&&(a+=" - Name already taken"),a)return this.snackbar=!0,this.snackbarText="Error "+a,void(this.snackbarColor="error");this.addPlayer({name:e,color:t}),this.name="",this.selectedColor=""},onUpdatePlayer(e){const t=this.selectedColor;t&&(e=Object.assign({},e),e.color=t,this.updatePlayer(e)),this.selectedColor=""},onDeletePlayer(e){this.deletePlayer(e)}}},A=f,w=a("8336"),x=a("b0af"),_=a("99d9"),k=a("62ad"),C=a("a523"),D=a("169a"),V=a("132d"),M=a("da13"),S=a("5d23"),P=a("0fd9"),L=a("2db4"),j=a("8654"),E=Object(m["a"])(A,h,y,!1,null,null,null),R=E.exports;p()(E,{VAvatar:u["a"],VBtn:w["a"],VCard:x["a"],VCardActions:_["a"],VCardText:_["b"],VCardTitle:_["c"],VCol:k["a"],VContainer:C["a"],VDialog:D["a"],VIcon:V["a"],VListItem:M["a"],VListItemContent:S["a"],VListItemTitle:S["b"],VRow:P["a"],VSnackbar:L["a"],VTextField:j["a"]});var T=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-btn",{attrs:{icon:""},on:{click:function(t){e.dialog=!0}}},[a("v-icon",[e._v("mdi-settings")])],1),a("v-dialog",{attrs:{"max-width":"750px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[e._v("Settings")])]),a("v-list",{staticClass:"mx-auto",attrs:{width:"80%"}},[a("v-list-item",[a("v-switch",{attrs:{label:"Twelve sided die"},model:{value:e.twelveSidedDieEnabled,callback:function(t){e.twelveSidedDieEnabled=t},expression:"twelveSidedDieEnabled"}})],1),a("v-list-item",[a("v-btn",{staticClass:"mx-auto",attrs:{color:"primary",block:""},on:{click:e.onStartGame}},[e._v("Start New Game")])],1),a("v-list-item",[a("v-btn",{staticClass:"mx-auto",attrs:{color:"primary",block:""},on:{click:e.onResetGame}},[e._v("Reset Game")])],1),a("v-list-item",[a("v-btn",{staticClass:"mx-auto",attrs:{color:"primary",block:""},on:{click:e.onResetAll}},[e._v("Reset All")])],1)],1),a("v-card-title",[a("span",{staticClass:"headline"},[e._v("Drag player to order list")])]),a("div",{staticClass:"mx-auto",staticStyle:{width:"80%"}},[a("grid",{attrs:{items:e.players,draggable:!0,sortable:!0},scopedSlots:e._u([{key:"cell",fn:function(t){return[a("v-list-item",{on:{change:function(a){return e.setPlayer(t)}}},[a("v-btn",{staticClass:"mx-auto",attrs:{color:t.item.color,fab:"",small:""}},[a("span",{staticClass:"headline"},[e._v(e._s(t.item.name[0]))])])],1)]}}])})],1),a("v-card-actions",[a("v-btn",{staticClass:"mx-auto mb-5",attrs:{color:"primary"},on:{click:function(t){e.dialog=!1}}},[e._v("Close")])],1)],1)],1)],1)},O=[],H={name:"SettingsModal",data:()=>({dialog:!1}),computed:{players:{get(){return this.getPlayers()}},twelveSidedDieEnabled:{get(){return this.getTwelveSidedDieEnabled()},set(e){this.setTwelveSidedDieEnabled(e)}}},methods:{...Object(s["c"])({getPlayers:"players",getTwelveSidedDieEnabled:"twelveSidedDieEnabled"}),...Object(s["d"])({startGame:"startGame",resetAll:"resetAll",updatePlayers:"updatePlayers",setTwelveSidedDieEnabled:"setTwelveSidedDieEnabled"}),onStartGame(){this.startGame()},onResetGame(){this.startGame()},onResetAll(){this.resetAll(),window.location.reload()},setPlayer(e){const t=this.getPlayers().slice(),a=t.splice(e.index,1)[0];t.splice(e.sort,0,a),this.updatePlayers(t)}}},B=H,G=a("8860"),I=a("b73d"),N=Object(m["a"])(B,T,O,!1,null,null,null),Z=N.exports;p()(N,{VBtn:w["a"],VCard:x["a"],VCardActions:_["a"],VCardTitle:_["c"],VDialog:D["a"],VIcon:V["a"],VList:G["a"],VListItem:M["a"],VSwitch:I["a"]});var $={name:"App",components:{Dice:b,PlayerModal:R,SettingsModal:Z},data:()=>({snackbar:!1,snackbarText:"",snackbarColor:"success",tableData:[2,3,4,5,6,7,8,9,10,11,12]}),computed:{...Object(s["c"])({players:"players",colors:"colors",diceLog:"diceLog",startedAt:"startedAt",chronometer:"chronometer",twelveSidedDieEnabled:"twelveSidedDieEnabled"}),currentPlayer(){return this.players[0]}},mounted(){window.clock=setInterval(function(){this.updateChronometer()}.bind(this),1e4),document.addEventListener("keyup",e=>{"Space"===e.code?this.onRoll():"Backspace"===e.code?this.onRevertRoll():"ArrowLeft"===e.code?this.playerNext():"ArrowRight"===e.code&&this.playerBack()})},methods:{...Object(s["b"])({rollDice:"rollDice",revertRoll:"revertRoll"}),...Object(s["d"])({updateChronometer:"updateChronometer",playerNext:"playerNext",playerBack:"playerBack"}),getDieCount(e){return this.diceLog.map(t=>t.dice[0]+t.dice[1]===e).filter(e=>!!e).length},onRoll(e){this.rollDice(Object.assign({},e||this.players[0]))},onRevertRoll(){this.revertRoll()}}},z=$,U=(a("034f"),a("7496")),J=a("8270"),q=a("1f4f"),F=a("2fa4"),X=a("71d9"),K=a("2a7f"),Q=Object(m["a"])(z,r,i,!1,null,null,null),W=Q.exports;p()(Q,{VApp:U["a"],VAvatar:u["a"],VBtn:w["a"],VCard:x["a"],VIcon:V["a"],VList:G["a"],VListItem:M["a"],VListItemAvatar:J["a"],VListItemContent:S["a"],VSimpleTable:q["a"],VSnackbar:L["a"],VSpacer:F["a"],VToolbar:X["a"],VToolbarTitle:K["a"]});var Y=a("f309");a("5363");a("d4b8"),l["a"].use(Y["a"]);var ee=new Y["a"]({theme:{dark:!0}}),te=a("d277"),ae=a.n(te),le=a("bfa9");const re=!1;l["a"].config.devtools=!0,l["a"].use(s["a"]);const ie=()=>Math.floor(Math.random()*Date.now()),se=new le["a"]({storage:window.sessionStorage}),oe=new s["a"].Store({state:{config:{colors:["#ffa31a","#002080","#b32400","#000000","#004d4d","#4d3319","#bbbbbb"]},game:{players:[{id:ie(),name:"Tom",color:"#ffa31a"},{id:ie(),name:"Jinyu",color:"#002080"},{id:ie(),name:"Phil",color:"#b32400"},{id:ie(),name:"Andreas",color:"#000000"}],startedAt:0,chronometer:0,dice:[],diceLog:[],rollDisabled:!1,twelveSidedDieEnabled:!0}},getters:{colors:e=>e.config.colors.slice(),startedAt:e=>e.game.startedAt,chronometer:e=>e.game.chronometer,players:e=>e.game.players.slice(),dice:e=>e.game.dice.slice(),diceLog:e=>e.game.diceLog.slice(),rollDisabled:e=>e.game.rollDisabled,twelveSidedDieEnabled:e=>e.game.twelveSidedDieEnabled},mutations:{addPlayer(e,{name:t="",color:a=""}){e.game.players.push({id:ie(),name:t,color:a})},deletePlayer(e,t={}){e.game.players.length>1&&(e.game.players=e.game.players.filter(e=>e.id!==t.id))},playerNext(e){const t=e.game.players.shift();e.game.players.push(t)},playerBack(e){const t=e.game.players.pop();e.game.players.unshift(t)},setDice(e,t){const a=ie(),l=Date.now(),r=1+Math.floor(6*Math.random()),i=1+Math.floor(6*Math.random()),s=1+Math.floor(12*Math.random()),o=[r,i,s];e.game.dice=o.slice(),e.game.diceLog.unshift({id:a,timestamp:l,player:t,dice:o})},updateChronometer(e){if(!e.game.startedAt)return;const t=Math.floor((Date.now()-e.game.startedAt)/1e3);if(t<Number.MAX_VALUE){let a=Math.floor(t/3600),l=Math.floor((t-3600*a)/60);a&&l<10&&(l="0"+l),e.game.chronometer=a>0?a+":"+l:""+l}else e.game.chronometer=0},revertDice(e){e.game.diceLog.shift(),e.game.diceLog.length&&(e.game.dice=e.game.diceLog[0].dice)},updatePlayer(e,t={}){e.game.players.forEach(e=>{e.id===t.id&&Object.assign(e,t)})},updatePlayers(e,t=[]){e.game.players=t},setTwelveSidedDieEnabled(e,t){e.game.twelveSidedDieEnabled=!!t},setRollDisabled(e,t){e.game.rollDisabled=t},startGame(e){e.game.startedAt=Date.now(),e.game.chronometer=0,e.game.dice=[],e.game.diceLog=[],e.game.rollDisabled=!1},resetAll(e){e.game.startedAt=0,e.game.chronometer=0,e.game.dice=[],e.game.diceLog=[],e.game.rollDisabled=!1,e.game.players=[]}},actions:{rollDice({commit:e,state:t},a){t.game.diceLog.length||e("startGame"),t.game.rollDisabled||(e("setRollDisabled",!0),setTimeout(()=>{e("setRollDisabled",!1)},500),e("setDice",a),e("playerNext"))},revertRoll({commit:e,state:t}){t.game.rollDisabled||(e("setRollDisabled",!0),setTimeout(()=>{e("setRollDisabled",!1)},1e3),e("revertDice"),e("playerBack"))}},strict:re,plugins:[se.plugin]});var ne=oe;l["a"].use(ae.a),l["a"].config.productionTip=!1,new l["a"]({vuetify:ee,store:ne,render:e=>e(W)}).$mount("#app")},"8a23":function(e,t,a){},d1d5:function(e,t,a){"use strict";var l=a("d687"),r=a.n(l);r.a},d687:function(e,t,a){}});
//# sourceMappingURL=app.5dec24a8.js.map