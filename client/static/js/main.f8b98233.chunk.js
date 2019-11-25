(window.webpackJsonpclient_src=window.webpackJsonpclient_src||[]).push([[0],{35:function(e,t,a){},50:function(e,t,a){e.exports=a(77)},77:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(28),c=a.n(r),i=a(11),s=(a(35),a(3)),o=a(4),m=a(6),d=a(5),u=a(12),h=a(7),p=a(8),E=a(9),g=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={actionsActive:"",homeActive:"currently-active",demandsActive:""},a.handleActionsClick=a.handleActionsClick.bind(Object(u.a)(a)),a.handleHomeClick=a.handleHomeClick.bind(Object(u.a)(a)),a.handleDemandsClick=a.handleDemandsClick.bind(Object(u.a)(a)),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"footer-nav"},l.a.createElement("div",{className:"icon-nav ".concat(this.state.demandsActive),onClick:this.handleDemandsClick},l.a.createElement(i.b,{to:"/suggested"},l.a.createElement(p.a,{icon:E.g})),l.a.createElement("h6",null,"Suggestions")),l.a.createElement("div",{className:"icon-nav ".concat(this.state.homeActive),onClick:this.handleHomeClick},l.a.createElement(i.b,{to:"/"},l.a.createElement(p.a,{icon:E.l})),l.a.createElement("h6",null,"What's up")),l.a.createElement("div",{className:"icon-nav ".concat(this.state.actionsActive),onClick:this.handleActionsClick},l.a.createElement(i.b,{to:"/demands"},l.a.createElement(p.a,{icon:E.f})),l.a.createElement("h6",null,"Demands"))),l.a.createElement("div",{className:"add-nav"},l.a.createElement(i.b,{to:"/add-demand"},l.a.createElement(p.a,{icon:E.k}))))}},{key:"handleActionsClick",value:function(){this.setState({actionsActive:"currently-active",homeActive:"",demandsActive:""})}},{key:"handleHomeClick",value:function(){this.setState({actionsActive:"",homeActive:"currently-active",demandsActive:""})}},{key:"handleDemandsClick",value:function(){this.setState({actionsActive:"",homeActive:"",demandsActive:"currently-active"})}}]),t}(n.Component),v=a(13),b=a.n(v),f=a(24),y=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={isLoading:!0,img:""},a.getImage=a.getImage.bind(Object(u.a)(a)),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getImage(this.props.city)}},{key:"getImage",value:function(e){var t=this;b.a.get("https://api.unsplash.com/search/photos",{params:{query:e},page:1,per_page:1,headers:{Authorization:"Client-ID cb32c91579c47c9f70fd331095157ba5134b18d039ce6980b4403f3d8a9b6000"}}).then((function(e){t.setState({img:e.data.results[0].urls.small,isLoading:!1})}))}},{key:"render",value:function(){return console.log("this.props.passToParent from child:",this.props.passToParent),l.a.createElement("div",{className:"story",onClick:this.props.passToParent},l.a.createElement("div",{className:"mask"},l.a.createElement("img",{src:this.state.img?this.state.img:"https://images.unsplash.com/photo-1571238052771-c6e35627d337?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=190&q=80",alt:"img"})),l.a.createElement("h5",null,this.props.city),l.a.createElement("h5",null,this.props.country))}}]),t}(n.Component),N=a(26),k=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(m.a)(this,Object(d.a)(t).call(this))).state={isLoading:!0,currentTwitterHandle:"https://twitter.com/XR_Belgium",stories:[],search:""},e}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getStories()}},{key:"getStories",value:function(){var e=this;b.a.get("http://localhost:3001/api/stories").then((function(t){e.setState({stories:t.data,isLoading:!1})})).catch((function(e){return console.log("error in Stories.js:getStories()",e)}))}},{key:"passTwitterHandleFromChild",value:function(e){console.log("handle passed to passTwitterHandleFromChild:",e),this.setState({currentTwitterHandle:e})}},{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"story-section stories-background-color"},l.a.createElement("h2",null,"RECENT ACTIONS"),l.a.createElement("div",{className:"stories"},l.a.createElement(i.b,{to:"/add-story"},l.a.createElement("div",{className:"add-button"},l.a.createElement(p.a,{icon:E.k}))),this.state.stories.map((function(t){return l.a.createElement(y,{key:t.id,passToParent:e.passTwitterHandleFromChild.bind(e,t.twitterHandle),city:t.city,country:t.country})})))),l.a.createElement("div",{className:"centerContent"},l.a.createElement("div",{className:"selfCenter standardWidth"},l.a.createElement(N.b,{sourceType:"url",url:"https://twitter.com/".concat(this.state.currentTwitterHandle),options:{height:600}}))))}}]),t}(n.Component),j=a(22),C=a(14),O=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={score:a.props.votes},a.increment=a.increment.bind(Object(u.a)(a)),a.decrement=a.decrement.bind(Object(u.a)(a)),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"voting-section"},this.props.showAsRebel?l.a.createElement("div",{className:"icon-section"},l.a.createElement("button",{className:"fa-icons",onClick:this.increment},l.a.createElement("h6",null,this.state.score),l.a.createElement(p.a,{className:"btn-icon",icon:E.f}))):this.props.isSent?l.a.createElement("div",{className:"icon-section"},l.a.createElement("h6",null,this.state.score),l.a.createElement(p.a,{className:"btn-icon",icon:E.j,onClick:this.increment})):l.a.createElement("div",{className:"icon-section"},l.a.createElement(p.a,{className:"btn-icon",icon:E.d,onClick:this.increment}),l.a.createElement("h6",null,this.state.score),l.a.createElement(p.a,{className:"btn-icon",icon:E.c,onClick:this.decrement})))}},{key:"increment",value:function(){this.setState({score:this.state.score+1})}},{key:"decrement",value:function(){this.setState({score:this.state.score-1})}}]),t}(l.a.Component),w=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={card:e.card},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state.card,t=e.isBeingDefined,a=t?"suggested":"sent";return l.a.createElement("div",{className:"card-wrapper ".concat(a),key:e.id},l.a.createElement(O,{votes:e.votes,isSent:e.isSent}),l.a.createElement(C.a,null,l.a.createElement(i.b,{to:"/demands/".concat(e.id)},l.a.createElement("div",{className:"demand-header"},!t&&e.status?l.a.createElement("p",{className:"pill ".concat(e.isRebel?"red":"darkblue")},e.status):null,l.a.createElement("h6",null,e.city,", ",l.a.createElement("span",{className:"bold"},e.country)),l.a.createElement("h5",null,e.title),l.a.createElement("h6",null,e.summary)),l.a.createElement("div",{className:"separator"}),l.a.createElement("div",{className:"card-stats-section flex-spread"},l.a.createElement("div",{as:C.a.Header,className:"icon-section"},e.isSent?l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,{icon:E.a}),l.a.createElement(p.a,{icon:E.e,className:"green-color icon-margin-left"})):l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,{icon:E.b}),l.a.createElement(p.a,{icon:E.m,className:"icon-margin-left"}))),l.a.createElement("div",{as:C.a.Header,className:"icon-section"},l.a.createElement(p.a,{icon:E.h})),l.a.createElement("div",{as:C.a.Header,className:"icon-section"},l.a.createElement("h6",null,this.state.actions?this.state.actions.length:0),l.a.createElement(p.a,{icon:E.f}))))))}}]),t}(n.Component),S=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.header,a=e.subheader,n=e.backgroundColor,r=e.demands,c=e.isSent,i=e.isSuggested;return l.a.createElement("div",{className:"demand-section"},l.a.createElement(C.a,null,l.a.createElement("div",{className:"demand-section-header ".concat(n)},l.a.createElement("h2",null,t," (",r.length||0,")"),l.a.createElement("div",{className:"tight-header no-margin"},l.a.createElement("p",null,a))),l.a.createElement(C.a.Body,null,l.a.createElement(j.a,null,r.length?null:l.a.createElement("div",{className:"tight-header"},l.a.createElement("p",{className:"text-center"},"(Nothing here yet.)")),r.map((function(e){return l.a.createElement(w,{key:e.id,card:e,isSent:c,isSuggested:i})}))))))}}]),t}(n.Component),x=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"addStory",value:function(e){var t=this;b.a.request({method:"post",url:"http://localhost:3001/api/stories",data:e}).then((function(e){t.props.history.push("/"),console.log(e)})).catch((function(e){return console.log("Error from StoriesAdd.js:addStory",e)}))}},{key:"onSubmit",value:function(e){var t={city:this.refs.city.value,country:this.refs.country.value,twitterHandle:this.refs.twitter.value};this.addStory(t),e.preventDefault()}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.b,{className:"btn grey",to:"/"},"Back"),l.a.createElement(C.a,{className:"add-story"},l.a.createElement("h6",null,"Add a new XR faction."),l.a.createElement("form",{onSubmit:this.onSubmit.bind(this)},l.a.createElement("div",{className:"flex-spread"},l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{className:"form-input",type:"text",name:"city",ref:"city",placeholder:"City"}),l.a.createElement("label",{htmlFor:"city"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",name:"country",ref:"country",placeholder:"Country"}),l.a.createElement("label",{htmlFor:"country"}))),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",name:"twitter",ref:"twitter",placeholder:"Twitter Handle"}),l.a.createElement("label",{htmlFor:"twitter"})),l.a.createElement("input",{className:"form-input tweak-background-color btn float-right",type:"submit",value:"Add new XR faction"})),l.a.createElement("br",null)))}}]),t}(n.Component),D=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"addDemand",value:function(e){var t=this;b.a.request({method:"post",url:"http://localhost:3001/api/demands",data:e}).then((function(e){t.props.history.push("/"),console.log(e)})).catch((function(e){return console.log("Error from AddDemand.js:addDemand",e)}))}},{key:"onSubmit",value:function(e){var t={isBeingDefined:!0,title:this.refs.title.value,city:this.refs.city.value,country:this.refs.country.value,summary:this.refs.summary.value,background:this.refs.background.value,indicators:this.refs.indicators.value,representative:this.refs.representative.value,representativeEmail:this.refs.representativeEmail.value};this.addDemand(t),e.preventDefault()}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.b,{className:"btn grey",to:"/"},"Back"),l.a.createElement(C.a,{className:"add-demand"},l.a.createElement("h6",null,"Start a new demand. It does not have to be perfect, we can make it great together afterwards."),l.a.createElement("form",{onSubmit:this.onSubmit.bind(this)},l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{className:"form-input",type:"text",name:"title",ref:"title",placeholder:"Title"}),l.a.createElement("label",{htmlFor:"title"})),l.a.createElement("div",{className:"flex-spread"},l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{className:"form-input",type:"text",name:"city",ref:"city",placeholder:"City"}),l.a.createElement("label",{htmlFor:"city"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",name:"country",ref:"country",placeholder:"Country"}),l.a.createElement("label",{htmlFor:"country"}))),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",name:"summary",ref:"summary",placeholder:"Summary"}),l.a.createElement("label",{htmlFor:"summary"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",name:"background",ref:"background",placeholder:"Background"}),l.a.createElement("label",{htmlFor:"background"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",name:"indicators",ref:"indicators",placeholder:"Indicators"}),l.a.createElement("label",{htmlFor:"indicators"})),l.a.createElement("br",null),l.a.createElement("h6",null,l.a.createElement("span",{className:"bold"},"Representative")," to send the demand to once it has been defined and accepted by the group. This should be the person who has the authority to raise this issue in parliament. If you don't know who, leave it blank for now."),l.a.createElement("div",{className:"flex-spread"},l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",name:"representative",ref:"representative",placeholder:"Rep name"}),l.a.createElement("label",{htmlFor:"representative"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",name:"representativeEmail",ref:"representativeEmail",placeholder:"Email"}),l.a.createElement("label",{htmlFor:"representativeEmail"}))),l.a.createElement("br",null),l.a.createElement("h6",null,"One time linking setup:"),l.a.createElement("div",{className:"list-group-item"},l.a.createElement("input",{type:"checkbox",ref:"createdTwitter",style:{height:16,width:16}}),l.a.createElement("span",null,"Create a new account on Twitter called"," ",l.a.createElement("span",{className:"bold"},"@xr110references"),", after this initial setup you will not need to touch it again.")),l.a.createElement("div",{className:"list-group-item"},l.a.createElement("input",{type:"checkbox",ref:"createdIFTTT",style:{height:16,width:16}}),l.a.createElement("span",null,"Create an account at"," ",l.a.createElement("a",{className:"bold",href:"https://iftt.com"},"IFTTT"))),l.a.createElement("div",{className:"list-group-item"},l.a.createElement("input",{type:"checkbox",ref:"createdScript",style:{height:16,width:16}}),l.a.createElement("span",null,"Setup autotweeting all Tweets with #xr110 through this"," ",l.a.createElement("a",{className:"bold",href:"https://ifttt.com/applets/SMvaxczG-if-hashtag-then-retweet-it"},"IFTTT recipe."))),l.a.createElement("p",null,"Hurray! Now all Tweets anyone does with #xr110 gets automatically pulled into the # section of your new petition. You won't have to do anything."),l.a.createElement("input",{className:"form-input tweak-background-color btn float-right",type:"submit",value:"Add new demand"})),l.a.createElement("br",null),l.a.createElement("br",null)))}}]),t}(n.Component),F=a(49),T=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={isBeingDefined:!0,title:"",city:"",country:"",summary:"",background:"",indicators:"",representative:"",representativeEmail:""},a.handleInputChange=a.handleInputChange.bind(Object(u.a)(a)),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){this.getDemandDetails()}},{key:"getDemandDetails",value:function(){var e=this,t=this.props.match.params.id;b.a.get("http://localhost:3001/api/demands/".concat(t)).then((function(t){e.setState({id:t.data.id,title:t.data.title,city:t.data.city,country:t.data.country,summary:t.data.summary,background:t.data.background,indicators:t.data.indicators,representative:t.data.representative,representativeEmail:t.data.representativeEmail})})).catch((function(e){return console.log("Error from EditDemand.js:getDemandDetails",e)}))}},{key:"editDemand",value:function(e){var t=this;b.a.request({method:"put",url:"http://localhost:3001/api/demands/".concat(this.state.id),data:e}).then((function(e){alert("Saved"),t.props.history.push("/"),console.log(e)})).catch((function(e){return console.log("Error from EditDemand.js:editDemand",e)}))}},{key:"onSubmit",value:function(e){var t={isBeingDefined:!0,title:this.refs.title.value,city:this.refs.city.value,country:this.refs.country.value,summary:this.refs.summary.value,background:this.refs.background.value,indicators:this.refs.indicators.value,representative:this.refs.representative.value,representativeEmail:this.refs.representativeEmail.value};this.editDemand(t),e.preventDefault()}},{key:"handleInputChange",value:function(e){var t=e.target,a=t.value,n=t.name;this.setState(Object(F.a)({},n,a))}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.b,{className:"btn grey",to:"/"},"Back"),l.a.createElement(C.a,{className:"add-demand"},l.a.createElement("form",{onSubmit:this.onSubmit.bind(this)},l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{className:"form-input",type:"text",name:"title",ref:"title",placeholder:"Title",value:this.state.title,onChange:this.handleInputChange}),l.a.createElement("label",{htmlFor:"title"})),l.a.createElement("div",{className:"flex-spread"},l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{className:"form-input",type:"text",name:"city",ref:"city",placeholder:"City",value:this.state.city,onChange:this.handleInputChange}),l.a.createElement("label",{htmlFor:"city"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",name:"country",ref:"country",placeholder:"Country",value:this.state.country,onChange:this.handleInputChange}),l.a.createElement("label",{htmlFor:"country"}))),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",name:"summary",ref:"summary",placeholder:"Summary",value:this.state.summary,onChange:this.handleInputChange}),l.a.createElement("label",{htmlFor:"summary"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",name:"background",ref:"background",placeholder:"Background",value:this.state.background,onChange:this.handleInputChange}),l.a.createElement("label",{htmlFor:"background"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",name:"indicators",ref:"indicators",placeholder:"Indicators",value:this.state.indicators,onChange:this.handleInputChange}),l.a.createElement("label",{htmlFor:"indicators"})),l.a.createElement("br",null),l.a.createElement("div",{className:"flex-spread"},l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",name:"representative",ref:"representative",placeholder:"Rep name",value:this.state.representative,onChange:this.handleInputChange}),l.a.createElement("label",{htmlFor:"representative"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",name:"representativeEmail",ref:"representativeEmail",placeholder:"Email",value:this.state.representativeEmail,onChange:this.handleInputChange}),l.a.createElement("label",{htmlFor:"representativeEmail"}))),l.a.createElement("input",{className:"form-input tweak-background-color btn float-right",type:"submit",value:"Save"})),l.a.createElement("br",null),l.a.createElement("br",null)))}}]),t}(n.Component),A=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"centerContent"},l.a.createElement("div",{className:"selfCenter standardWidth"},l.a.createElement(N.b,{sourceType:"url",url:"https://twitter.com/xr102references",options:{height:400}})))}}]),t}(n.Component),R=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={open:!0,originalText:a.props.originalText,edit:a.props.edit},a.togglePanel=a.togglePanel.bind(Object(u.a)(a)),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"togglePanel",value:function(e){this.setState({open:!this.state.open})}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"separator"}),l.a.createElement("div",{key:this.state.edit.id,className:"collapsible-in-card main-border-color card-padding"},l.a.createElement(O,{votes:this.state.edit.votes,acceptedVoteNumber:100}),l.a.createElement("div",{onClick:function(t){return e.togglePanel(t)},className:"collapsible-trigger"},l.a.createElement("div",{className:"edit flex-spread"},l.a.createElement("div",{className:"tight-header"},l.a.createElement("p",{className:"grey-color"},this.state.edit.date?this.state.edit.date:"No date"),l.a.createElement("p",{className:"bold margin-bottom-10px"},'"',this.state.edit.title,'"'),l.a.createElement("p",null,this.state.edit.name?this.state.edit.name:"No name")))),this.state.open?l.a.createElement("div",{className:"collapsible-content"},l.a.createElement("div",{className:"separator"}),l.a.createElement("div",{className:"compare-commits"},l.a.createElement("div",{className:"edit-section"},l.a.createElement("p",{className:"bold"},"Original:"),l.a.createElement("p",null,this.state.originalText)),l.a.createElement("div",{className:"edit-section"},l.a.createElement("p",{className:"bold"},"Edit:"),l.a.createElement("p",{className:"changes"},this.state.edit.edit)))," "):null))}}]),t}(n.Component),I=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={open:!1,originalText:a.props.originalText,edits:a.props.edits,section:a.props.section},a.togglePanel=a.togglePanel.bind(Object(u.a)(a)),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"togglePanel",value:function(e){this.setState({open:!this.state.open})}},{key:"render",value:function(){var e=this,t=this.state.originalText;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"collapsible-in-card"},l.a.createElement("div",{onClick:function(t){return e.togglePanel(t)},className:"collapsible-trigger"},l.a.createElement("div",{className:"edit flex-spread"},l.a.createElement("h6",null," ",this.state.section),l.a.createElement("div",{className:"icon-section"},this.state.edits.length,l.a.createElement(p.a,{className:"btn-icon",icon:E.i})))),this.state.open?l.a.createElement("div",{className:"collapsible-content full-width"},this.state.edits.map((function(e){return l.a.createElement(R,{key:e.id,edit:e,originalText:t})}))):null))}}]),t}(n.Component),H=(n.Component,n.Component,function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={demand:"",isLoading:!0,actions:[],currentDemandId:e.match.params.id,isSuggested:e.isSuggested,isSent:e.isSent,showDemandSection:!1,showReferencesSection:!1,showRebelSection:!1},a.handleDemandClick=a.handleDemandClick.bind(Object(u.a)(a)),a.handleReferencesClick=a.handleReferencesClick.bind(Object(u.a)(a)),a.handleRebelClick=a.handleRebelClick.bind(Object(u.a)(a)),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"getData",value:function(){var e=this,t=this.props.match.params.id;b.a.all([b.a.get("http://localhost:3001/api/demands/".concat(t)),b.a.get("http://localhost:3001/api/actions")]).then(b.a.spread((function(t,a){var n=a.data,l=e.state.currentDemandId,r=n.filter((function(e){return e.demandId===l}));e.setState({demand:t.data,actions:r,isLoading:!1})}))).catch((function(e){return console.log("error in DemandDetails.js:getData()",e)}))}},{key:"onDelete",value:function(){var e=this,t=this.state.demand.id;b.a.delete("http://localhost:3001/api/demands/".concat(t)).then((function(t){e.props.history.push("/")})).catch((function(e){return console.log("Error from DemandDetails.js:onDelete",e)}))}},{key:"render",value:function(){var e=this.state,t=e.isSuggested,a=e.demand,n=a.isBeingDefined?"suggested":"sent";return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.b,{className:"btn grey",to:"/"},"Back"),l.a.createElement(i.b,{className:"btn",to:"/demands/edit/".concat(a.id)},"Edit"),l.a.createElement("button",{onClick:this.onDelete.bind(this),className:"btn red light"},"Delete"),l.a.createElement("div",{className:"card-wrapper ".concat(n),key:a.id},l.a.createElement(O,{votes:a.votes,isSent:a.isSent}),l.a.createElement(j.a,{defaultActiveKey:"0"},l.a.createElement(C.a,null,l.a.createElement("div",{className:"demand-header"},!t&&a.status?l.a.createElement("p",{className:"pill ".concat(a.isRebel?"red":"darkblue")},a.status):null,l.a.createElement("h6",null,a.city,", ",l.a.createElement("span",{className:"bold"},a.country)),l.a.createElement("h5",null,a.title)),l.a.createElement("div",{className:"separator"}),l.a.createElement("div",{className:"card-stats-section flex-spread"},l.a.createElement(j.a.Toggle,{as:C.a.Header,eventKey:"0",className:"icon-section",onClick:this.handleDemandClick},a.isSent?l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,{icon:E.a}),l.a.createElement(p.a,{icon:E.e,className:"green-color icon-margin-left"})):l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,{icon:E.b}),l.a.createElement(p.a,{icon:E.m,className:"icon-margin-left"}))),l.a.createElement(j.a.Toggle,{as:C.a.Header,eventKey:"1",className:"icon-section",onClick:this.handleReferencesClick},l.a.createElement(p.a,{icon:E.h})),l.a.createElement(j.a.Toggle,{as:C.a.Header,eventKey:"2",className:"icon-section",onClick:this.handleRebelClick},l.a.createElement("h6",null,this.state.actions?this.state.actions.length:0),l.a.createElement(p.a,{icon:E.f}))),this.state.showDemandSection?l.a.createElement(l.a.Fragment,null,l.a.createElement(j.a.Collapse,{eventKey:"0"},l.a.createElement(C.a.Body,null,l.a.createElement("div",null,t?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"tight-header"},l.a.createElement("h6",null,"Being defined. Edit and add below.")),l.a.createElement("div",{className:"separator"})):null),l.a.createElement("p",null,"Disabled for a sec while hooking up real data.")))):null,this.state.showReferencesSection&&a.id?l.a.createElement(l.a.Fragment,null,l.a.createElement(j.a.Collapse,{eventKey:"1"},l.a.createElement(C.a.Body,null,l.a.createElement("h6",null,"To add references that support this demand:",l.a.createElement(N.a,{tag:a.id,options:{size:"large",screenName:null,buttonHashtag:null}}),"Your tweet will automatically be pulled into the feed below."),l.a.createElement(A,{hashtag:a.id})))):null,this.state.showRebelSection?l.a.createElement(l.a.Fragment,null,l.a.createElement(j.a.Collapse,{eventKey:"2"},l.a.createElement(C.a.Body,null,this.state.actions?l.a.createElement(l.a.Fragment,null,l.a.createElement("h6",null,"Join by indicating so on the right, you'll get sent a telegram invitation with more info."),this.state.actions.map((function(e){return l.a.createElement("div",{className:"rebel-card",key:e.id},l.a.createElement(O,{showAsRebel:!0,votes:e.joined?e.joined:0}),l.a.createElement("div",{className:"rebel-content"},l.a.createElement("div",null,l.a.createElement("h6",{className:"bold"},e.date,", ",e.time),l.a.createElement("h6",null,e.details))))}))):null,this.state.actions?null:l.a.createElement(l.a.Fragment,null,l.a.createElement("br",null),l.a.createElement("h6",null,"There are no actions yet, start one below")),l.a.createElement("div",{className:"separator"}),l.a.createElement("br",null),l.a.createElement("h6",null,"Create new action. Handle all communication for this action via telegram, so start by"," ",l.a.createElement("a",{href:"https://blog.en.uptodown.com/how-to-create-groups-and-channels-telegram/"},"creating a group on telegram")," ","and adding the name of it below."),l.a.createElement("form",{action:"/",method:"post"},l.a.createElement("div",{className:"flex-spread"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"date"}),l.a.createElement("input",{type:"text",className:"form-control",id:"date",placeholder:"Date"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"time"}),l.a.createElement("input",{type:"text",className:"form-control",id:"time",placeholder:"Time"}))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"where"}),l.a.createElement("input",{type:"text",className:"form-control",id:"where",placeholder:"Where"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"description"}),l.a.createElement("input",{type:"text",className:"form-control",id:"notes",placeholder:"Notes"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"telegram"}),l.a.createElement("input",{type:"text",className:"form-control",id:"telegram",placeholder:"Telegram"}))),l.a.createElement("br",null),l.a.createElement("h5",null,"Add new action"),l.a.createElement("br",null)))):null))))}},{key:"handleDemandClick",value:function(){this.setState({showDemandSection:!0,showReferencesSection:!1,showRebelSection:!1})}},{key:"handleReferencesClick",value:function(){this.setState({showDemandSection:!1,showReferencesSection:!0,showRebelSection:!1})}},{key:"handleRebelClick",value:function(){this.setState({showDemandSection:!1,showReferencesSection:!1,showRebelSection:!0})}}]),t}(n.Component)),B=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("input",{className:"search-filter",type:"text",placeholder:"Choose Country",value:this.props.search,onChange:this.props.updateSearch})}}]),t}(n.Component),P=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(m.a)(this,Object(d.a)(t).call(this))).state={isLoading:!0,demands:[],stories:[],search:""},e.updateSearch=e.updateSearch.bind(Object(u.a)(e)),e}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"getData",value:function(){var e=this;b.a.all([b.a.get("http://localhost:3001/api/stories"),b.a.get("http://localhost:3001/api/demands")]).then(b.a.spread((function(t,a){e.setState({stories:t.data,demands:a.data,isLoading:!1})}))).catch((function(e){return console.log("error in Routes.js:getData()",e)}))}},{key:"updateSearch",value:function(e){this.setState({search:e.target.value.substr(0,20)})}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.demands,n=e.stories,r=e.search,c=a.filter((function(e){return-1!==e.country.indexOf(r)})),i=n.filter((function(e){return-1!==e.country.indexOf(r)})),s=c.filter((function(e){return e.isSent})),o=c.filter((function(e){return e.isBeingDefined}));return l.a.createElement("main",null,t?l.a.createElement("h3",null,"Loading..."):l.a.createElement(l.a.Fragment,null,l.a.createElement(B,{search:r,updateSearch:this.updateSearch}),l.a.createElement(f.c,null,l.a.createElement(f.a,{exact:!0,path:"/",component:k,stories:i,search:r}),l.a.createElement(f.a,{exact:!0,path:"/demands",render:function(e){return l.a.createElement(S,Object.assign({},e,{demands:s,search:r,header:"DEMANDS",subheader:"Active demands that have been sent to parliament. Sign the ones you support below and join actions to push them through ASAP.",backgroundColor:"action-background-color",eventKey:"0",isSent:!0}))}}),l.a.createElement(f.a,{exact:!0,path:"/add-story",component:x}),l.a.createElement(f.a,{exact:!0,path:"/add-demand",component:D}),l.a.createElement(f.a,{exact:!0,path:"/demands/edit/:id",component:T}),l.a.createElement(f.a,{exact:!0,path:"/demands/:id",component:H}),l.a.createElement(f.a,{exact:!0,path:"/suggested",render:function(e){return l.a.createElement(S,Object.assign({},e,{demands:o,search:r,header:"SUGGESTIONS",subheader:"Suggested demands. Collaboratively flesh them out here.",backgroundColor:"tweak-background-color",eventKey:"1",isSuggested:!0}))}}))))}}]),t}(n.Component),L=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"app"},l.a.createElement("div",{className:"app-container"},l.a.createElement("header",null,l.a.createElement(i.b,{to:"/"},l.a.createElement("img",{src:"/xr-logo.png",className:"logo",alt:"logo"}))),l.a.createElement(P,null))),l.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(i.a,null,l.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[50,1,2]]]);
//# sourceMappingURL=main.f8b98233.chunk.js.map