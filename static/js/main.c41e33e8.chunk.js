(this["webpackJsonphaptik-test"]=this["webpackJsonphaptik-test"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),i=n(5),s=n.n(i),c=(n(15),n(6)),o=n(7),d=n(10),l=n(9),u=(n(16),n(8)),h=n(4),f=n(1),m=function(e){var t=e.friendObject,n=e.onClickStar,r=e.onClickDelete;return Object(f.jsxs)("div",{className:"friend-wrapper",children:[Object(f.jsxs)("div",{className:"friend-name-wrapper",children:[Object(f.jsx)("div",{className:"friend-name",children:t.name}),Object(f.jsx)("div",{className:"friend-help-text",children:" is your friend"})]}),Object(f.jsxs)("div",{className:"actions",children:[t.isStarred?Object(f.jsx)(h.a,{className:"star filled",onClick:function(){n(t,"unstar")}}):Object(f.jsx)(h.b,{className:"star",onClick:function(){n(t,"star")}}),Object(f.jsx)(u.a,{className:"delete",onClick:function(){r(t)}})]})]})},j=function(e){for(var t=e.friendsListToShow,n=e.itemsPerPage,r=e.handlePageNumberClick,a=[],i=1;i<=Math.ceil(t.length/n);i++)a.push(i);return a.map((function(e){return Object(f.jsx)("div",{className:"pagination-number",id:e,onClick:r,children:e},e)}))},p=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).onChangeSearchText=function(e){var t=e.target.value;r.setState({searchText:t})},r.onClickDelete=function(e){var t=e.name;if(window.confirm("Are you sure you want to delete ".concat(t,"?"))){var n=r.state.friendsList;r.setState({friendsList:n.filter((function(e){return e.name!==t}))})}},r.onClickStar=function(e,t){var n=r.state.friendsList.map((function(n){return n.name===e.name&&(n.isStarred="star"===t),n}));r.setState({friendsList:n})},r.handlePageNumberClick=function(e){r.setState({currentPage:Number(e.target.id)})},r.onClickSort=function(){var e=r.state.friendsList.sort((function(e,t){return e.isStarred&&!t.isStarred?-1:!e.isStarred&&t.isStarred?1:0}));r.setState({friendsList:e})},r.state={friendsList:[],searchText:"",currentPage:1,itemsPerPage:4},r}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.setState({friendsList:[{name:"Janice Shepherd",isStarred:!0},{name:"Shiba Lopex",isStarred:!1},{name:"Botez Alex",isStarred:!0},{name:"John Doe",isStarred:!0},{name:"Jane Doe",isStarred:!1},{name:"Chloe Barnes",isStarred:!0},{name:"Rocket Alex",isStarred:!1},{name:"Thor",isStarred:!0},{name:"Thanos was right",isStarred:!0}]})}},{key:"render",value:function(){var e=this,t=this.state,n=t.friendsList,r=t.searchText,a=t.currentPage,i=t.itemsPerPage,s=n.filter((function(e){var t=e.name.toUpperCase(),n=r.toUpperCase();return-1!==t.indexOf(n)})),c=a*i,o=c-i,d=s.slice(o,c);return Object(f.jsxs)("div",{className:"main-content-wrapper",children:[Object(f.jsx)("div",{className:"header",children:"Friends List"}),Object(f.jsx)("div",{className:"input-wrapper",children:Object(f.jsx)("input",{type:"text",placeholder:"Enter your friend's name",value:r,onChange:this.onChangeSearchText})}),Object(f.jsxs)("div",{className:"friend-list-wrapper",children:[d.map((function(t,n){return Object(f.jsx)(m,{friendObject:t,onClickStar:e.onClickStar,onClickDelete:e.onClickDelete},n)})),Object(f.jsxs)("div",{className:"footer-wrapper",children:[Object(f.jsx)("div",{className:"pagination-wrapper",children:Object(f.jsx)(j,{friendsListToShow:s,itemsPerPage:i,handlePageNumberClick:this.handlePageNumberClick})}),Object(f.jsx)("div",{className:"sort-wrapper",children:Object(f.jsx)("input",{type:"button",value:"Sort by Favourites",onClick:this.onClickSort})})]}),0===s.length&&Object(f.jsx)("div",{children:"No friends found!"})]})]})}}]),n}(r.Component),b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),i(e),s(e)}))};s.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(p,{})}),document.getElementById("root")),b()}},[[18,1,2]]]);
//# sourceMappingURL=main.c41e33e8.chunk.js.map