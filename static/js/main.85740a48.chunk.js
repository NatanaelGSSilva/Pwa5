(this.webpackJsonpexemplo2=this.webpackJsonpexemplo2||[]).push([[0],{20:function(e,t,n){e.exports=n(44)},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(17),c=n.n(r),i=n(2),s=n(3),l=n(5),u=n(4),d=n(6),f=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"container-fluid bg-primary text-white py-3"},o.a.createElement("div",{className:"container"},o.a.createElement("h2",null,"Revenda de Ve\xedculos Avenida"),o.a.createElement("h3",null,"Ofertas de Black Fridey")))}}]),t}(a.Component),m=n(7),h=n.n(m),p=n(18),v=n(19),g=n.n(v).a.create({baseURL:"https://api.sheety.co/"}),b=function(e){return o.a.createElement("div",{className:"card col-sm-3 col-6 mt-2"},o.a.createElement("img",{src:e.foto,alt:"foto",className:"card-img-top"}),o.a.createElement("div",{className:"card-body"},o.a.createElement("h4",{className:"card-title"},e.marca," ",e.modelo," Ano: ",e.ano),o.a.createElement("h5",{className:"card-text"}," Pre\xe7o",Number(e.preco).toLocaleString("pt-br",{style:"currency",currency:"BRL"}))))},w=(n(43),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={ofertas:[]},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(p.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!navigator.onLine){e.next=8;break}return e.next=3,g.get("2fbc5a9e-29fd-4013-b29d-fb1bc2028c1e");case 3:t=e.sent,this.setState({ofertas:t.data}),localStorage.setItem("super_noite",JSON.stringify(t.data)),e.next=12;break;case 8:return e.next=10,JSON.parse(localStorage.getItem("super_noite"));case 10:n=e.sent,this.setState({ofertas:n});case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return o.a.createElement("div",{className:"container mt-2"},o.a.createElement("div",{className:"row"},this.state.ofertas.map((function(e){return o.a.createElement(b,{key:e.marca,marca:e.marca,modelo:e.modelo,preco:e.preco,ano:e.ano,foto:e.foto})}))))}}]),t}(a.Component));var y=function(){return o.a.createElement("div",null,o.a.createElement(f,null),o.a.createElement(w,null))},E=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(o.a.createElement(y,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/NatanaelGSSilva/Pwa5.git",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/NatanaelGSSilva/Pwa5.git","/custom-service-worker.js");E?(!function(e,t){fetch(e).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):k(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):k(t,e)}))}}()}},[[20,1,2]]]);
//# sourceMappingURL=main.85740a48.chunk.js.map