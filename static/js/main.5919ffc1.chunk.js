(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(2),o=a.n(c),r=(a(12),a(3)),i=a(4),l=a(6),u=a(5),m=(a(13),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).isWinner=function(e,t){for(var a=t[e],s=0;s<8;s++){var c=n.winner_lines[s];t[c[0]]===a&&t[c[1]]===a&&t[c[2]]===a&&setTimeout((function(){n.gameMessageAdd("".concat(a," win!!! Try Once Again! ")),setTimeout((function(){n.setState({square:Array(9).fill(null),counter:0}),n.gameMessageRemove(),document.querySelectorAll(".item-value").forEach((function(e){e.classList.contains("opacity-enabled")&&e.classList.remove("opacity-enabled")}))}),5e3)}),500)}},n.gameMessageAdd=function(e){n.setState({message:e}),document.querySelector(".notification").classList.add("opacity-enabled")},n.gameMessageRemove=function(){n.setState({message:""}),document.querySelector(".notification").classList.remove("opacity-enabled")},n.checkEmptyFields=function(e){var t=0,a=document.querySelector(".notification");console.log(!a);for(var s=0;s<e.length;s++)null===e[s]&&t++;8!==n.state.counter||0!==t||a||setTimeout((function(){n.gameMessageAdd("DRAW !!! Try Once Again"),setTimeout((function(){n.setState({square:Array(9).fill(null),counter:0}),n.gameMessageRemove()}),5e3)}),500)},n.clickHandler=function(e){var t=e.target.getAttribute("data"),a=n.state.square;a[t]?alert("You're wrong! Please, fill another field"):(n.state.counter%2===0?(e.target.querySelector(".item-value").classList+=" opacity-enabled",a[t]="X"):(e.target.querySelector(".item-value").classList+=" opacity-enabled",a[t]="O"),n.setState({counter:n.state.counter+1}),n.setState({square:a})),n.isWinner(t,a),n.checkEmptyFields(a)},n.state={square:Array(9).fill(null),counter:0,message:""},n.winner_lines=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"App"},s.a.createElement("header",{className:"App-header"},s.a.createElement("div",{className:"app-square",id:"app-square"},this.state.square.map((function(t,a){return s.a.createElement("span",{onClick:e.clickHandler,data:a,className:"app-square__item",key:"item".concat(a)},s.a.createElement("span",{className:"item-value"},t))}))),s.a.createElement("span",{className:"notification"},this.state.message)))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.5919ffc1.chunk.js.map