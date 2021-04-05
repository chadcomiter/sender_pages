(this.webpackJsonpsenderoo=this.webpackJsonpsenderoo||[]).push([[0],{33:function(e,t,c){},38:function(e,t,c){},40:function(e,t,c){},42:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(15),i=c.n(r),s=(c(31),c(32),c(33),c(17)),o=c(3),l=c(12),d=c(9),u=(c(38),c(10)),j={areas:[]},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FIND_ALL_AREAS":return Object(u.a)(Object(u.a)({},e),{},{areas:t.areas});default:return e}},m={weatherForCity:{coord:{lon:-122.08,lat:37.39},weather:[{id:800,main:"Clear",description:"clear sky",icon:"01d"}],base:"stations",main:{temp:282.55,feels_like:281.86,temp_min:280.37,temp_max:284.26,pressure:1023,humidity:100},visibility:16093,wind:{speed:1.5,deg:350},clouds:{all:1},dt:1560350645,sys:{type:1,id:5122,message:.0139,country:"US",sunrise:1560343627,sunset:1560396563},timezone:-25200,id:420006353,name:"Mountain View",cod:200}},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FIND_WEATHER_FOR_CITY":return Object(u.a)(Object(u.a)({},e),{},{weatherForCity:t.weather});default:return e}},b={findAllAreas:function(){return fetch("https://skimap.org/SkiAreas/index.json",{mode:"no-cors",method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()}))}},p=c(1),x=(Object(d.b)((function(e){return{areas:e.areaReducer.areas}}),(function(e){return{findAllAreas:function(){b.findAllAreas().then((function(t){return e({type:"FIND_ALL_AREAS",areas:t})}))}}}))((function(e){var t=e.areas,c=void 0===t?[]:t,a=e.findAllAreas;return Object(n.useEffect)((function(){a()}),[]),Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("ul",{className:"list-group",children:[c&&Object(p.jsx)("h1",{children:"AREAS"}),!c&&Object(p.jsx)("h1",{children:"NO AREAS :/"})]})})})),c(26)),O=c(14),g={findWeatherForCity:function(e){return fetch("https://cors-anywhere.herokuapp.com/corsdemo/http://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&appid=01911f7b486c0e1468d2f43de9366608")).then((function(e){return e.json()}))}},w=(c(40),function(e){var t=e.city,c=Object(n.useState)(!1),a=Object(O.a)(c,2),r=a[0],i=a[1];return Object(p.jsxs)(p.Fragment,{children:[!r&&Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:"col-xl-3 col-lg-4 col-sm-6 col-xs-12",children:Object(p.jsx)("div",{className:"card",children:Object(p.jsxs)("div",{className:"card-body",children:[Object(p.jsx)("div",{className:"title-container",children:Object(p.jsx)("h5",{className:"card-title",children:t.name})}),Object(p.jsx)("i",{onClick:function(){i(!0),console.log("Clicked")},className:"fas fa-plus fa-2x float-right"}),Object(p.jsx)("img",{src:"https://images.unsplash.com/photo-1532124957326-34c5605398?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",className:"card-img-top",alt:"..."})]})})})}),r&&Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:"col-xl-3 col-lg-4 col-sm-6 col-xs-12",children:Object(p.jsx)("div",{className:"card",children:Object(p.jsxs)("div",{className:"card-body",children:[Object(p.jsx)("div",{className:"title-container",children:Object(p.jsx)("h5",{className:"card-title",children:t.name})}),Object(p.jsx)("i",{onClick:function(){i(!1)},className:"fas fa-minus fa-2x float-right"}),Object(p.jsx)("img",{src:"https://images.unsplash.com/photo-1532124957326-34c5605398?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",className:"card-img-top",alt:"..."}),Object(p.jsxs)("ul",{className:"list-group",children:[Object(p.jsxs)("li",{className:"list-group-item",children:["Temperature: ",Math.round(t.main.temp-273.15)," \xb0C"]}),Object(p.jsxs)("li",{className:"list-group-item",children:["Feels Like: ",Math.round(t.main.feels_like-275.15)," \xb0C"]}),Object(p.jsxs)("li",{className:"list-group-item",children:["Low: ",Math.round(t.main.temp_min-275.15)," \xb0C"]}),Object(p.jsxs)("li",{className:"list-group-item",children:["Height: ",Math.round(t.main.temp_max-275.15)," \xb0C"]})]})]})})})})]})}),N=Object(d.b)((function(e){return{weatherForCity:e.weatherReducer.weatherForCity}}),(function(e){return{findWeatherForCity:function(t){g.findWeatherForCity(t).then((function(t){return e({type:"FIND_WEATHER_FOR_CITY",weather:t})}))}}}))((function(e){var t=e.weatherForCity,c=e.findWeatherForCity,a=e.item,r=void 0===a?"denver":a,i=Object(n.useState)(r),s=Object(O.a)(i,2),o=s[0],l=s[1],d=Object(n.useState)([t]),u=Object(O.a)(d,2),j=u[0],h=u[1];return Object(n.useEffect)((function(){c(o)}),[o]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"input-group rounded",children:[Object(p.jsx)("input",{className:"form-control rounded",type:"text",placeholder:"Add Location",onChange:function(e){return l(e.target.value)}}),Object(p.jsx)("span",{className:"input-group-text border-0",id:"search-addon",children:Object(p.jsx)("i",{className:"fas fa-check fa-2x",onClick:function(){h((function(e){return[].concat(Object(x.a)(e),[t])}))}})})]}),Object(p.jsx)("div",{className:"row",children:j.map((function(e){return Object(p.jsx)(w,{city:e})}))})]})})),y=Object(l.b)({areaReducer:h,weatherReducer:f}),v=Object(l.c)(y);var C=function(){return Object(p.jsx)(s.a,{children:Object(p.jsx)(d.a,{store:v,children:Object(p.jsx)("div",{className:"container-fluid",style:{backgroundColor:"#7CB9E8",height:"100vh"},children:Object(p.jsx)(o.a,{path:"/sender_pages",exact:!0,component:N})})})})},F=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,43)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),r(e),i(e)}))};i.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(C,{})}),document.getElementById("root")),F()}},[[42,1,2]]]);
//# sourceMappingURL=main.a32f8dec.chunk.js.map