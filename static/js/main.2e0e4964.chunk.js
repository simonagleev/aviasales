(this.webpackJsonpaviasales=this.webpackJsonpaviasales||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var i=n(1),s=n(6),r=n.n(s),a=(n(17),n(18),n(4)),c=(n(19),n(20),n.p+"static/media/Form.ad129cbf.svg"),o=n.p+"static/media/Checkbox.0fa36354.svg",u=n(2),d=n(5),h="all",j="nope",l="one",m="two",f="nope",b="cheapest",O="fastest",k=Object(d.b)({name:"transfer",initialState:{options:[{id:1,name:"\u0412\u0441\u0435",isChecked:!0,enumStatus:h},{id:2,name:"\u0411\u0435\u0437 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a",isChecked:!1,enumStatus:j},{id:3,name:"1 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0430",isChecked:!1,enumStatus:l},{id:4,name:"2 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438",isChecked:!1,enumStatus:m},{id:5,name:"3 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438",isChecked:!1,enumStatus:h}],rates:[{id:1,name:"\u0421\u0430\u043c\u044b\u0439 \u0434\u0435\u0448\u0435\u0432\u044b\u0439",isChecked:!1,enumStatus:b},{id:2,name:"\u0421\u0430\u043c\u044b\u0439 \u0431\u044b\u0441\u0442\u0440\u044b\u0439",isChecked:!1,enumStatus:O}],testFetch:[]},reducers:{changingIsClicked:function(e,t){var n=t.payload.id,i=e.options.find((function(e){return e.id===n})),s=e.options.map((function(e){return e.isChecked}));i.isChecked=!i.isChecked;for(var r=0;r<s.length;r++)!0===s[r]&&(e.options[r].isChecked=!1)},getCheapest:function(e,t){var n=t.payload.id,i=e.rates.find((function(e){return e.id===n})),s=e.rates.map((function(e){return e.isChecked}));i.isChecked=!i.isChecked;for(var r=0;r<s.length;r++)!0===s[r]&&(e.rates[r].isChecked=!1)}}}),v=k.actions,x=v.changingIsClicked,g=v.getCheapest,p=function(e){return e.transfer.options},A=function(e){return e.transfer.rates},V=k.reducer,N=n(0),y=function(e){var t=e.id,n=e.isChecked,i=e.name,s=Object(u.b)();return Object(N.jsxs)("div",{className:"checkbox-item",onClick:function(){return function(e){s(x({id:e}))}(t)},children:[Object(N.jsx)("div",{className:"box",children:n?Object(N.jsx)("img",{src:o,alt:""}):Object(N.jsx)("img",{src:c,alt:""})}),Object(N.jsx)("div",{className:"box-text",children:i})]})},W=function(e){Object(a.a)(e);var t=Object(u.c)(p);return Object(N.jsxs)("div",{className:"left-pannel",children:[Object(N.jsx)("h1",{className:"options-header",children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a"}),Object(N.jsx)("div",{className:"transfers",children:t.map((function(e){return Object(N.jsx)(y,{id:e.id,isChecked:e.isChecked,name:e.name})}))})]})},q=(n(28),n(29),n(30),function(e){var t=e.id,n=e.name,i=e.isChecked,s=Object(u.b)();return Object(N.jsx)("div",{className:i?"rate-options-item blue-background":"rate-options-item",onClick:function(){return function(e){s(g({id:e}))}(t)},children:n})}),M=function(e){Object(a.a)(e);var t=Object(u.c)(A);return Object(N.jsx)("div",{className:"rate-options",children:t.map((function(e){return Object(N.jsx)(q,{id:e.id,name:e.name,isChecked:e.isChecked})}))})},G=(n(31),n(12)),T=n(9),w=(n(32),function e(t,n){Object(T.a)(this,e),this.hours=t,this.minutes=n}),C=function(){function e(t,n){Object(T.a)(this,e),this.from=this.parseTimeStamp(t),this.duration=this.parseMinutes(n),this.calcTo()}return Object(G.a)(e,[{key:"parseTimeStamp",value:function(e){var t=new Date(e),n=t.getMinutes(),i=t.getHours();return new w(i,n)}},{key:"parseMinutes",value:function(e){var t=Math.floor(e/60);return new w(t,e%60)}},{key:"addZero",value:function(e){return e<10?"0"+e:e}},{key:"getFrom",value:function(){var e=this.addZero(this.from.hours),t=this.addZero(this.from.minutes);return"".concat(e,":").concat(t)}},{key:"calcTo",value:function(){var e=this.from.hours+this.duration.hours;e>=24&&(e-=24);var t=this.from.minutes+this.duration.minutes;t>=60&&(e+=1,t%=60),this.to=new w(e,t)}},{key:"getTo",value:function(){var e=this.addZero(this.to.hours),t=this.addZero(this.to.minutes);return"".concat(e,":").concat(t)}},{key:"getDuration",value:function(){var e=this.addZero(this.duration.hours),t=this.addZero(this.duration.minutes);return"".concat(e,"h ").concat(t,"m")}}]),e}(),S=function(e){var t=e.price,n=e.carrier,i=e.segments,s="https://pics.avs.io/99/36/"+n+".png",r=function(e){switch(e){case 0:return"\u0411\u0435\u0437 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a";case 1:return"1 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0430";default:return e+" \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438"}};return Object(N.jsxs)("div",{className:"ticket-item",children:[Object(N.jsxs)("div",{className:"top-container",children:[Object(N.jsx)("div",{className:"price",children:t+" \u20bd"}),Object(N.jsx)("div",{className:"carrier",children:Object(N.jsx)("img",{src:s,alt:"img"})})]}),Object(N.jsx)("div",{className:"flight-description",children:i.map((function(e){var t=new C(e.date,e.duration),n=e.stops.length;return Object(N.jsxs)("div",{className:"way-line",children:[Object(N.jsxs)("div",{className:"left-part",children:[Object(N.jsx)("div",{className:"origin-destination grey12",children:Object(N.jsxs)("div",{children:[e.origin+" - ",e.destination]})}),Object(N.jsxs)("div",{children:[t.getFrom()+" -"," "+t.getTo()]})]}),Object(N.jsxs)("div",{className:"middle-part",children:[Object(N.jsx)("div",{className:"grey12",children:"\u0412 \u043f\u0443\u0442\u0438"}),Object(N.jsx)("div",{className:"flight-duration",children:t.getDuration()})]}),Object(N.jsxs)("div",{className:"right-part",children:[Object(N.jsx)("div",{className:"grey12",children:r(n)}),e.stops.join(", ")]})]})}))})]})},I=n(10),Q=Object(d.b)({name:"tickets-slice",initialState:{ticketsArr:[],filteredTickets:[],viewCount:5},reducers:{setTickets:function(e,t){e.ticketsArr=t.payload.tickets},loadNextPageTickets:function(e){e.viewCount+=5}}}),X=Q.actions,D=X.setTickets,F=X.loadNextPageTickets,L=function(e){var t=e.tickets.ticketsArr;if(t.length<1)return[];var n=function(e){return e.transfer.options.find((function(e){return e.isChecked})).enumStatus}(e),i=[];switch(n){case h:i=e.tickets.ticketsArr;break;case j:t.forEach((function(e,t){(function(e,t){return 0===e&&0===t})(e.segments[0].stops.length,e.segments[1].stops.length)&&i.push(e)}));break;case l:t.forEach((function(e,t){(function(e,t){return e<2&&t<2&&e>=0&&t>=0})(e.segments[0].stops.length,e.segments[1].stops.length)&&i.push(e)}));break;case m:t.forEach((function(e,t){(function(e,t){return e<3&&t<3&&e>=0&&t>=0})(e.segments[0].stops.length,e.segments[1].stops.length)&&i.push(e)}))}var s=function(e){var t=e.transfer.rates.find((function(e){return e.isChecked}));return void 0!==t?t.enumStatus:f}(e);switch(s){case b:var r=Object(I.a)(i);return[(i=function(e){for(var t=e.length,n=0;n<t;n++)for(var i=0;i<t-n-1;i++)if(e[i].price-0>e[i+1].price-0){var s=e[i];e[i]=e[i+1],e[i+1]=s}return e}(r))[0]];case O:var a=Object(I.a)(i);return[(i=function(e){for(var t=e.length,n=0;n<t;n++)for(var i=0;i<t-n-1;i++){if(e[i].segments[0].duration-0+(e[i].segments[1].duration-0)>e[i+1].segments[0].duration-0+(e[i+1].segments[1].duration-0)){var s=e[i];e[i]=e[i+1],e[i+1]=s}}return e}(a))[0]]}return i.slice(0,e.tickets.viewCount)},z=Q.reducer,Z=function(e){Object(a.a)(e);var t=Object(u.b)();Object(i.useEffect)((function(){fetch("https://front-test.beta.aviasales.ru/search").then((function(e){return e.json()})).then((function(e){var n="https://front-test.beta.aviasales.ru/tickets?searchId="+e.searchId;fetch(n).then((function(e){return e.json()})).then((function(e){var n=e.tickets;t(D({tickets:n}))}))}))}),[]);var n=Object(u.c)(L);return Object(N.jsxs)("div",{className:"tickets",children:[n.map((function(e){return Object(N.jsx)(S,{price:e.price,carrier:e.carrier,segments:e.segments})})),Object(N.jsx)("div",{className:"more-btn",children:Object(N.jsx)("button",{className:"btn",onClick:function(){t(F())},children:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0435\u0449\u0435 5 \u0431\u0438\u043b\u0435\u0442\u043e\u0432"})})]})},R=function(e){return Object(a.a)(e),Object(N.jsxs)("div",{className:"right-pannel",children:[Object(N.jsx)(M,{}),Object(N.jsx)(Z,{})]})},H=function(){return Object(N.jsxs)("div",{className:"app",children:[Object(N.jsx)("div",{className:"header",children:Object(N.jsx)("img",{src:"data:image/png;base64,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",alt:"plane",className:"logo-img"})}),Object(N.jsxs)("div",{className:"body",children:[Object(N.jsx)(W,{}),Object(N.jsx)(R,{})]})]})},J=n(3),K=Object(J.b)({transfer:V,tickets:z}),P=Object(d.a)({reducer:K,middleware:[]});r.a.render(Object(N.jsx)(u.a,{store:P,children:Object(N.jsx)(H,{})}),document.getElementById("root"))}],[[33,1,2]]]);
//# sourceMappingURL=main.2e0e4964.chunk.js.map