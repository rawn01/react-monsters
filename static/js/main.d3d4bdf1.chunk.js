(this.webpackJsonpmonsters=this.webpackJsonpmonsters||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(1),s=n.n(r),c=n(7),a=n.n(c),o=(n(12),n(2)),i=n(3),h=n(5),u=n(4),l=(n(13),n(0)),j=function(e){return Object(l.jsxs)("div",{className:"card-container",children:[Object(l.jsx)("img",{src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180"),alt:"monster"}),Object(l.jsx)("h2",{children:e.monster.name}),Object(l.jsx)("p",{children:e.monster.email})]})},d=(n(15),function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(l.jsx)("div",{className:"card-list",children:this.props.monsters.map((function(e){return Object(l.jsx)(j,{monster:e},e.id)}))})}}]),n}(s.a.Component)),m=d,p=(n(16),n(17),function(e){return Object(l.jsx)("input",{type:"search",value:e.searchString,onChange:e.handleOnChange,className:"search",placeholder:e.placeholder})}),O=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).handleOnChange=function(t){var n=t.target.value;e.setState({searchString:n})},e.state={searchString:"",monsters:[]},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this,t=this.state.monsters.filter((function(t){return t.name.toLowerCase().includes(e.state.searchString)}));return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"Monstars"}),Object(l.jsx)(p,{searchString:this.state.searchString,handleOnChange:this.handleOnChange,placeholder:"Search monsters"}),Object(l.jsx)(m,{monsters:t})]})}}]),n}(s.a.Component);a.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(O,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.d3d4bdf1.chunk.js.map