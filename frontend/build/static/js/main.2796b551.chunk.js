(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{151:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(26),c=a.n(r),i=a(4),o=a(5),s=a(9),u=a(8),m=a(10),d=(a(54),a(153)),h=a(155),E=a(154),p=a(44),f=a.n(p),b=a(46),v=a.n(b),g=a(152),y=(a(56),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={headerShow:!1},a.handleScroll=function(){window.scrollY>0?a.setState({headerShow:!0}):a.setState({headerShow:!1})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){return l.a.createElement(f.a,{position:"fixed",style:{backgroundColor:(this.state.headerShow,"black"),boxShadow:"none"}},l.a.createElement(v.a,null,l.a.createElement("div",{id:"header-id"},l.a.createElement(g.a,{to:"/articles/"},l.a.createElement("img",{src:"https://svgshare.com/i/9sY.svg",id:"header-id",alt:"header logo"}))),l.a.createElement("ul",null,l.a.createElement("li",{className:"navLink"},l.a.createElement(g.a,{to:"/articles/favourites"},l.a.createElement("img",{src:"https://i.ibb.co/3Rhj76y/book.png",id:"bookmark"}))),l.a.createElement("li",{className:"navLink"},l.a.createElement(g.a,{to:"/articles/new"},l.a.createElement("img",{src:"https://i.ibb.co/0mYsY0d/admin.png",id:"admin",alt:"admin area"}))))))}}]),t}(n.Component)),k=function(e){return l.a.createElement("header",{id:"navbar"},l.a.createElement("ul",{className:"nav-ul"},l.a.createElement("li",{className:"navLink"},l.a.createElement(g.a,{to:"/articles"},"HOME")),l.a.createElement("li",{className:"navLink"},l.a.createElement(g.a,{to:"/categories/1"},"POLITICS")),l.a.createElement("li",{className:"navLink"},l.a.createElement(g.a,{to:"/categories/2"},"SCIENCE")),l.a.createElement("li",{className:"navLink"},l.a.createElement(g.a,{to:"/categories/3"},"TECHNOLOGY")),l.a.createElement("li",{className:"navLink"},l.a.createElement(g.a,{to:"/categories/4"},"BUSINESS")),l.a.createElement("li",{className:"navLink"},l.a.createElement(g.a,{to:"/categories/5"},"HUMAN INTEREST"))))},O=function(){function e(){Object(i.a)(this,e)}return Object(o.a)(e,[{key:"get",value:function(e){return fetch(e).then(function(e){return e.json()})}},{key:"delete",value:function(e){return fetch(e,{method:"DELETE",headers:{"Content-Type":"application/json"}})}},{key:"post",value:function(e,t){return fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})}},{key:"put",value:function(e,t){return fetch(e,{method:"PUT",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}})}},{key:"patch",value:function(e,t){return fetch(e,{method:"PATCH",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}})}}]),e}(),j=function(e){var t=e.articleThumb,a=t.title,n=t.media,r=t.summary,c=t.id;return l.a.createElement("div",{"class-name":"article-thumb"},l.a.createElement(g.a,{to:"/articles/"+c,className:"headline"},l.a.createElement("img",{src:n,alt:a}),l.a.createElement("h4",null,a)),l.a.createElement("p",null,r),l.a.createElement("h5",null,l.a.createElement("img",{src:"https://i.ibb.co/nPWqWc9/timer.png",alt:"timer icon",id:"timer"}),function(){var t=e.articleThumb.fullText.split(" ").length;return Math.ceil(t/250)}()," min read "))},N=function(e){var t=e.articles.filter(function(e){return"Politics"===e.category.label}).map(function(e){return l.a.createElement("li",{key:e.id,className:"article-thumb"},l.a.createElement(j,{articleThumb:e}))}),a=e.articles.filter(function(e){return"Science"===e.category.label}).map(function(e){return l.a.createElement("li",{key:e.id,className:"article-thumb"},l.a.createElement(j,{articleThumb:e}))}),n=e.articles.filter(function(e){return"Technology"===e.category.label}).map(function(e){return l.a.createElement("li",{key:e.id,className:"article-thumb"},l.a.createElement(j,{articleThumb:e}))}),r=e.articles.filter(function(e){return"Business"===e.category.label}).map(function(e){return l.a.createElement("li",{key:e.id,className:"article-thumb"},l.a.createElement(j,{articleThumb:e}))}),c=e.articles.filter(function(e){return"Human Interest"===e.category.label}).map(function(e){return l.a.createElement("li",{key:e.id,className:"article-thumb"},l.a.createElement(j,{articleThumb:e}))});return l.a.createElement("div",{className:"home-article-sections"},l.a.createElement("div",{className:"politics-label"},l.a.createElement("h3",null,"Politics"),l.a.createElement("ul",{className:"home-politics"},t)),l.a.createElement("div",{className:"science-label"},l.a.createElement("h3",null,"Science"),l.a.createElement("ul",{className:"home-science"},a)),l.a.createElement("div",{className:"technology-label"},l.a.createElement("h3",null,"Technology"),l.a.createElement("ul",{className:"home-technology"},n)),l.a.createElement("div",{className:"business-label"},l.a.createElement("h3",null,"Business"),l.a.createElement("ul",{className:"home-business"},r)),l.a.createElement("div",{className:"human-label"},l.a.createElement("h3",null,"Human Interest"),l.a.createElement("ul",{className:"home-human"},c)))},w=a(47),T=a.n(w),A=function(e){var t=e.articles.map(function(e){return l.a.createElement("div",{className:"feature-text",key:e.id},l.a.createElement(g.a,{to:"/articles/"+e.id},l.a.createElement("img",{src:e.media,alt:e.title}),l.a.createElement("h2",null,e.title),l.a.createElement("p",null,e.summary)))});return l.a.createElement("div",{className:"slider_wrapper",style:{position:"relative",overflow:"hidden",width:"700px",height:"500px"}},l.a.createElement(T.a,{dots:!0,infinite:!0,autoplay:!0,speed:4e3,slide:!0},l.a.createElement("div",null,t[0]),l.a.createElement("div",null,t[5]),l.a.createElement("div",null,t[10]),l.a.createElement("div",null,t[15]),l.a.createElement("div",null,t[20])))},S=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={articles:[]},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;(new O).get("/api/articles?size=50").then(function(t){e.setState({articles:t._embedded.articles})})}},{key:"componentDidUpdate",value:function(){var e=this;(new O).get("/api/articles?size=50").then(function(t){e.state.articles.length!==t._embedded.articles.length&&e.setState({articles:t._embedded.articles})})}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(A,{articles:this.state.articles}),l.a.createElement(N,{articles:this.state.articles}))}}]),t}(n.Component),x=a(7),C=function(e){var t=e.categories.map(function(e){return l.a.createElement("option",{key:e.id,value:e._links.self.href},e.label)}),a=e.authors.map(function(e){return l.a.createElement("option",{key:e.id,value:e._links.self.href},e.name)});return l.a.createElement("form",{onSubmit:function(t){t.preventDefault();var a={title:t.target.title.value,summary:t.target.summary.value,fullText:t.target.fullText.value,category:t.target.category.value,author:t.target.author.value,date:t.target.date.value,media:t.target.media.value};e.handleArticlePost(a)},className:"form"},l.a.createElement("h2",null,"ADD NEW ARTICLE"),l.a.createElement("input",{type:"text",placeholder:"Title",name:"title",className:"title"}),l.a.createElement("textarea",{rows:"2",cols:"20",wrap:"hard",placeholder:"Summary",name:"summary",className:"summary"}),l.a.createElement("textarea",{rows:"2",cols:"20",wrap:"hard",type:"text",placeholder:"Article Text",name:"fullText",className:"full-text"}),l.a.createElement("select",{name:"category",className:"category"},t),l.a.createElement("select",{name:"author",className:"author"},a),l.a.createElement("input",{type:"date",placeholder:"Date",name:"date",className:"date"}),l.a.createElement("input",{type:"text",placeholder:"Media",name:"media",className:"media"}),l.a.createElement("button",{type:"submit"},"SAVE"))},D=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={categories:[],authors:[]},a.handleArticlePost=a.handleArticlePost.bind(Object(x.a)(Object(x.a)(a))),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=new O;t.get("/api/categories").then(function(t){e.setState({categories:t._embedded.categories})}),t.get("/api/authors").then(function(t){e.setState({authors:t._embedded.authors})})}},{key:"handleArticlePost",value:function(e){(new O).post("/api/articles",e).then(function(){window.location="/articles"})}},{key:"render",value:function(){return l.a.createElement(C,{categories:this.state.categories,authors:this.state.authors,handleArticlePost:this.handleArticlePost})}}]),t}(n.Component),L=function(e){if(!e.article)return null;return l.a.createElement("div",{className:"FullSingleArticle"},l.a.createElement("h1",null,e.article.title),l.a.createElement("img",{src:e.article.media,alt:e.article.title}),l.a.createElement("h4",null,e.article.author.name),l.a.createElement(g.a,{to:"/articles/favourites"},l.a.createElement("img",{src:"https://i.ibb.co/vzG3qnF/bookmark.png",onClick:function(){e.handleBookmarkClick({bookmarked:!0})},id:"article-bookmark"})),l.a.createElement("p",null,e.article.summary),l.a.createElement("p",null,e.article.fullText),l.a.createElement(g.a,{className:"edit-article",to:"/articles/update/"+e.article.id},l.a.createElement("button",null,"EDIT ARTICLE")),l.a.createElement("button",{onClick:function(){e.handleDelete(e.article.id)}},"DELETE ARTICLE"))},I=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={article:null},a.handleDelete=a.handleDelete.bind(Object(x.a)(Object(x.a)(a))),a.handleBookmark=a.handleBookmark.bind(Object(x.a)(Object(x.a)(a))),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=new O,a="/api/articles/"+this.props.id+"?projection=embedForArticle";t.get(a).then(function(t){e.setState({article:t})})}},{key:"handleDelete",value:function(e){var t="/api/articles/"+e;(new O).delete(t).then(function(){window.location="/articles"})}},{key:"handleBookmark",value:function(e){var t="/api/articles/"+this.state.article.id;(new O).patch(t,e).then(function(e){window.location="/articles/favourites"})}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(L,{article:this.state.article,handleBookmarkClick:this.handleBookmark,handleDelete:this.handleDelete}))}}]),t}(n.Component),M=function(e){var t=e.articles.map(function(e){return l.a.createElement("li",{key:e.title,className:"article-thumb"},l.a.createElement(j,{articleThumb:e}))});return l.a.createElement("ul",null,t)},P=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={articles:[]},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=new O,a="/api/categories/"+this.props.id;t.get(a).then(function(t){e.setState({articles:t._embedded.articles})})}},{key:"componentDidUpdate",value:function(e){var t=this;if(this.props.id!==e.id){var a=new O,n="/api/categories/"+this.props.id;a.get(n).then(function(e){t.setState({articles:e._embedded.articles})})}}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(M,{articles:this.state.articles}))}}]),t}(n.Component),U=function(e){if(!e.article)return null;var t=e.categories.map(function(e){return l.a.createElement("option",{key:e.id,value:e._links.self.href},e.label)});return l.a.createElement("form",{onSubmit:function(t){t.preventDefault();var a={id:e.article.id,title:t.target.title.value,summary:t.target.summary.value,fullText:t.target.fullText.value,category:t.target.category.value,author:t.target.author.value,date:t.target.date.value,media:t.target.media.value};e.handleArticleUpdate(a)},className:"form"},l.a.createElement("h2",null,"TITLE"),l.a.createElement("input",{type:"text",placeholder:"Title",name:"title",defaultValue:e.article.title,className:"title"}),l.a.createElement("h2",null,"ARTICLE SUMMARY"),l.a.createElement("textarea",{rows:"2",cols:"20",wrap:"hard",placeholder:"Summary",name:"summary",defaultValue:e.article.summary,className:"summary"}),l.a.createElement("h2",null,"ARTICLE TEXT"),l.a.createElement("textarea",{rows:"2",cols:"20",wrap:"hard",placeholder:"Article Text",name:"fullText",defaultValue:e.article.fullText,className:"full-text"}),l.a.createElement("h2",null,"CATEGORY"),l.a.createElement("select",{name:"category",className:"category"},t),l.a.createElement("h2",null,"AUTHOR"),l.a.createElement("input",{type:"text",placeholder:"Author",name:"author",defaultValue:e.article.author.name,className:"author"}),l.a.createElement("h2",null,"PUBLICATION DATE"),l.a.createElement("input",{type:"date",placeholder:"Date",name:"date",defaultValue:e.article.date,className:"date"}),l.a.createElement("h2",null,"MEDIA"),l.a.createElement("input",{type:"text",placeholder:"Media",name:"media",defaultValue:e.article.media,className:"media"}),l.a.createElement("button",{type:"submit"},"SAVE"))},_=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={categories:[],article:null},a.getCategories=a.getCategories.bind(Object(x.a)(Object(x.a)(a))),a.getArticle=a.getArticle.bind(Object(x.a)(Object(x.a)(a))),a.handleArticleUpdate=a.handleArticleUpdate.bind(Object(x.a)(Object(x.a)(a))),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getCategories(),this.getArticle()}},{key:"getCategories",value:function(){var e=this;(new O).get("/api/categories").then(function(t){e.setState({categories:t._embedded.categories})})}},{key:"getArticle",value:function(){var e=this,t=new O,a="/api/articles/"+this.props.id+"?projection=embedForArticle";t.get(a).then(function(t){e.setState({article:t})})}},{key:"handleArticleUpdate",value:function(e){var t="/api/articles/"+e.id;(new O).put(t,e).then(function(e){window.location="/articles"})}},{key:"render",value:function(){return l.a.createElement(U,{categories:this.state.categories,handleArticleUpdate:this.handleArticleUpdate,article:this.state.article})}}]),t}(n.Component),B=function(e){var t=e.articles.filter(function(e){return!0===e.bookmarked}).map(function(e){return l.a.createElement("li",{key:e.id,className:"article-thumb"},l.a.createElement(j,{articleThumb:e}))});return l.a.createElement("div",{className:"bookmarked-section"},l.a.createElement("h3",null,"To Read: "),l.a.createElement("ul",null,t))},R=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={articles:[]},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;(new O).get("/api/articles?size=50").then(function(t){e.setState({articles:t._embedded.articles})})}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(B,{articles:this.state.articles}))}}]),t}(n.Component),F=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"app",style:{background:"white"}},l.a.createElement(d.a,null,l.a.createElement(l.a.Fragment,null,l.a.createElement(y,null),l.a.createElement(k,null),l.a.createElement(h.a,null,l.a.createElement(E.a,{exact:!0,path:"/articles",component:S}),l.a.createElement(E.a,{exact:!0,path:"/articles/new",component:D}),l.a.createElement(E.a,{exact:!0,path:"/articles/favourites",component:R}),l.a.createElement(E.a,{exact:!0,path:"/articles/update/:id",render:function(e){var t=e.match.params.id;return l.a.createElement(_,{id:t})}}),l.a.createElement(E.a,{exact:!0,path:"/articles/:id",render:function(e){var t=e.match.params.id;return l.a.createElement(I,{id:t})}}),l.a.createElement(E.a,{exact:!0,path:"/categories/:id",render:function(e){var t=e.match.params.id;return l.a.createElement(P,{id:t})}})))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},49:function(e,t,a){e.exports=a(151)},54:function(e,t,a){},56:function(e,t,a){}},[[49,2,1]]]);
//# sourceMappingURL=main.2796b551.chunk.js.map