(this.webpackJsonpclient_src=this.webpackJsonpclient_src||[]).push([[0],{114:function(e,t,a){e.exports=a(227)},227:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(45),c=a.n(l),i=a(13),o=(a(72),a(5)),s=a(6),m=a(8),u=a(7),d=a(18),h=a(9),p=a(11),E=a(12),v=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={actionsActive:"",homeActive:"currently-active",demandsActive:""},a.handleActionsClick=a.handleActionsClick.bind(Object(d.a)(a)),a.handleHomeClick=a.handleHomeClick.bind(Object(d.a)(a)),a.handleDemandsClick=a.handleDemandsClick.bind(Object(d.a)(a)),a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"footer-nav"},r.a.createElement("div",{className:"icon-nav ".concat(this.state.demandsActive),onClick:this.handleDemandsClick},r.a.createElement(i.b,{to:"/suggested"},r.a.createElement(p.a,{icon:E.f})),r.a.createElement("h6",null,"Suggestions")),r.a.createElement("div",{className:"icon-nav ".concat(this.state.homeActive),onClick:this.handleHomeClick},r.a.createElement(i.b,{to:"/"},r.a.createElement(p.a,{icon:E.k})),r.a.createElement("h6",null,"What's up")),r.a.createElement("div",{className:"icon-nav ".concat(this.state.actionsActive),onClick:this.handleActionsClick},r.a.createElement(i.b,{to:"/demands"},r.a.createElement(p.a,{icon:E.e})),r.a.createElement("h6",null,"Demands"))),r.a.createElement("div",{className:"add-nav"},r.a.createElement(i.b,{to:"/add-demand"},r.a.createElement(p.a,{icon:E.j}))))}},{key:"handleActionsClick",value:function(){this.setState({actionsActive:"currently-active",homeActive:"",demandsActive:""})}},{key:"handleHomeClick",value:function(){this.setState({actionsActive:"",homeActive:"currently-active",demandsActive:""})}},{key:"handleDemandsClick",value:function(){this.setState({actionsActive:"",homeActive:"",demandsActive:"currently-active"})}}]),t}(n.Component),f=a(4),b=a.n(f),g=a(25),y=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={isLoading:!0,img:""},a.getImage=a.getImage.bind(Object(d.a)(a)),a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getImage(this.props.city)}},{key:"getImage",value:function(e){var t=this;b.a.get("https://api.unsplash.com/search/photos",{params:{query:e},page:1,per_page:1,headers:{Authorization:"Client-ID cb32c91579c47c9f70fd331095157ba5134b18d039ce6980b4403f3d8a9b6000"}}).then((function(e){t.setState({img:e.data.results[0].urls.small,isLoading:!1})}))}},{key:"updateTwitter",value:function(e){this.props.handleStateChange(e)}},{key:"render",value:function(){var e=this;return r.a.createElement("button",{className:"story",onClick:function(t){return e.props.onClick(e.props.twitterHandle)}},r.a.createElement("div",{className:"mask"},r.a.createElement("img",{src:this.state.img?this.state.img:"https://images.unsplash.com/photo-1571238052771-c6e35627d337?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=190&q=80",alt:"img"})),r.a.createElement("h5",null,this.props.city),r.a.createElement("h5",null,this.props.country))}}]),t}(n.Component),k=a(69),N=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(m.a)(this,Object(u.a)(t).call(this))).state={twitterHandle:"",isLoading:!0,stories:[]},e.updateTwitter=e.updateTwitter.bind(Object(d.a)(e)),e}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getStories()}},{key:"getStories",value:function(){var e=this;b.a.get("https://extinction-rebellion.herokuapp.com/api/stories").then((function(t){var a=t.data.sort((function(e,t){return t.city.localeCompare(e.city)}));e.setState({stories:a,isLoading:!1})})).catch((function(e){return console.log("error in Stories.js:getStories()",e)}))}},{key:"updateTwitter",value:function(e){this.setState({twitterHandle:e})}},{key:"render",value:function(){var e,t=this,a=this.state.twitterHandle;return e=a?r.a.createElement(k.Timeline,{dataSource:{sourceType:"profile",screenName:a},options:{username:a,height:"400"}}):r.a.createElement(k.Timeline,{dataSource:{sourceType:"profile",screenName:"ExtinctionR"},options:{username:"ExtinctionR",height:"400"}}),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"story-section stories-background-color"},r.a.createElement("h2",null,"FACTIONS"),r.a.createElement("div",{className:"stories"},r.a.createElement(i.b,{to:"/add-story"},r.a.createElement("div",{className:"add-button"},r.a.createElement(p.a,{icon:E.j}))),this.state.stories.map((function(e){return r.a.createElement(y,{key:e.id,twitterHandle:e.twitterHandle,onClick:t.updateTwitter,city:e.city,country:e.country})})))),r.a.createElement("div",{className:"centerContent"},r.a.createElement("div",{className:"selfCenter standardWidth"},e)))}}]),t}(n.Component),w=a(52),j=a(14),O=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).upvote=function(){var e;e=a.props.voteLimit===a.state.votes-1?{isSent:!0,isBeingDefined:!1,votes:a.state.votes+1}:{votes:a.state.votes+1},a.editDemand(e)},a.downvote=function(){var e={votes:a.state.votes-1};a.editDemand(e)},a.state={votes:a.props.votes},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"editDemand",value:function(e){var t=this;b.a.request({method:"patch",url:"https://extinction-rebellion.herokuapp.com/api/demands/".concat(this.props.cardId),data:e}).then((function(e){window.location.reload(),t.props.history.push("/")})).catch((function(e){return console.log("Error from Voting.js:editDemand",e)}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"voting-section"},this.props.showAsRebel?r.a.createElement("div",{className:"icon-section"},r.a.createElement("button",{className:"fa-icons",onClick:this.upvote},r.a.createElement("h6",null,this.state.votes),r.a.createElement(p.a,{className:"btn-icon",icon:E.h}))):this.props.isSent?r.a.createElement("div",{className:"icon-section"},r.a.createElement("h6",null,this.state.votes),r.a.createElement(p.a,{className:"btn-icon",icon:E.i,onClick:this.upvote})):r.a.createElement("div",{className:"icon-section"},r.a.createElement(p.a,{className:"btn-icon",icon:E.c,onClick:this.upvote}),r.a.createElement("h6",null,this.state.votes),r.a.createElement(p.a,{className:"btn-icon",icon:E.b,onClick:this.downvote})))}}]),t}(r.a.Component),S=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={card:e.card,demand:"",isLoading:!0,showEdit:!1,edits:[],references:[],actions:[],isSent:e.isSent},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"getData",value:function(){var e=this,t=this.state.card.id;b.a.all([b.a.get("https://extinction-rebellion.herokuapp.com/api/demands/".concat(t)),b.a.get("https://extinction-rebellion.herokuapp.com/api/edits"),b.a.get("https://extinction-rebellion.herokuapp.com/api/references"),b.a.get("https://extinction-rebellion.herokuapp.com/api/actions")]).then(b.a.spread((function(a,n,r,l){var c=n.data,i=r.data,o=l.data,s=t,m=c.filter((function(e){return e.demandId===s})),u=i.filter((function(e){return e.demandId===s})),d=o.filter((function(e){return e.demandId===s}));e.setState({demand:a.data,edits:m,references:u,actions:d,isLoading:!1})}))).catch((function(e){return console.log("error in DemandItem.js:getData()",e)}))}},{key:"render",value:function(){var e=this.state,t=e.card,a=e.edits,n=e.references,l=e.actions,c=t.isBeingDefined,o=c?"suggested":"sent";return r.a.createElement("div",{className:"card-wrapper ".concat(o),key:t.id},r.a.createElement("div",{className:"flex-spread"},r.a.createElement("div",{className:"card-indicators"},r.a.createElement("div",{as:j.a.Header,className:"icon-section"},t.isSent?r.a.createElement(r.a.Fragment,null,r.a.createElement("h6",null,a?a.length:0),r.a.createElement(p.a,{icon:E.a})):r.a.createElement(r.a.Fragment,null,r.a.createElement("h6",null,a?a.length:0),r.a.createElement(p.a,{icon:E.l}))),r.a.createElement("div",{as:j.a.Header,className:"icon-section"},r.a.createElement("h6",null,n?n.length:0),r.a.createElement(p.a,{icon:E.g})),r.a.createElement("div",{as:j.a.Header,className:"icon-section"},r.a.createElement("h6",null,l?l.length:0),r.a.createElement(p.a,{icon:E.e}))),r.a.createElement(O,{votes:t.votes,isSent:t.isSent,cardId:t.id,voteLimit:10})),r.a.createElement(j.a,null,r.a.createElement(i.b,{to:"/demands/".concat(t.id)},r.a.createElement("div",{className:"demand-header"},!c&&t.status?r.a.createElement("p",{className:"pill ".concat(t.isRebel?"red":"darkblue")},t.status):null,r.a.createElement("h6",null,t.city,", ",r.a.createElement("span",{className:"bold"},t.country)),r.a.createElement("h5",null,t.title),r.a.createElement("h6",null,t.summary)),r.a.createElement("div",{className:"separator"}))))}}]),t}(n.Component),C=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.header,a=e.subheader,n=e.backgroundColor,l=e.demands,c=e.isSent,i=e.isSuggested;return r.a.createElement("div",{className:"demand-section"},r.a.createElement(j.a,null,r.a.createElement("div",{className:"demand-section-header ".concat(n)},r.a.createElement("h2",null,t," (",l.length||0,")"),r.a.createElement("div",{className:"tight-header no-margin"},r.a.createElement("p",null,a))),r.a.createElement(j.a.Body,null,r.a.createElement(w.a,null,l.length?null:r.a.createElement("div",{className:"tight-header"},r.a.createElement("p",{className:"text-center"},"(Nothing here yet.)")),l.map((function(e){return r.a.createElement(S,{key:e.id,card:e,isSent:c,isSuggested:i})}))))))}}]),t}(n.Component),x=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"addAction",value:function(e){b.a.request({method:"post",url:"https://extinction-rebellion.herokuapp.com/api/actions",data:e}).then((function(e){alert("Saved!"),window.location.reload()})).catch((function(e){return console.log("Error from AddAction.js:addAction",e)}))}},{key:"onSubmit",value:function(e){var t={demandId:this.props.demandId,date:this.refs.date.value,time:this.refs.time.value,name:this.refs.name.value,telegram:this.refs.telegram.value};console.log("newAction",t),this.addAction(t),e.preventDefault()}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h6",null,"Create new action. Handle all communication for this action via telegram, so start by"," ",r.a.createElement("a",{href:"https://blog.en.uptodown.com/how-to-create-groups-and-channels-telegram/"},"creating a group on telegram")," ","and adding the name of it below."),r.a.createElement("form",{onSubmit:this.onSubmit.bind(this)},r.a.createElement("div",{className:"flex-spread"},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-input",type:"text",name:"date",ref:"date",placeholder:"Date of action"}),r.a.createElement("label",{htmlFor:"date"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",name:"time",ref:"time",placeholder:"time"}),r.a.createElement("label",{htmlFor:"time"}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",name:"name",ref:"name",placeholder:"Name of action"}),r.a.createElement("label",{htmlFor:"name"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",name:"telegram",ref:"telegram",placeholder:"Telegram group name"}),r.a.createElement("label",{htmlFor:"telegram"})),r.a.createElement("input",{className:"form-input tweak-background-color btn",type:"submit",value:"Add new action"})))}}]),t}(n.Component),D=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"addStory",value:function(e){var t=this;b.a.request({method:"post",url:"https://extinction-rebellion.herokuapp.com/api/stories",data:e}).then((function(e){t.props.history.push("/"),console.log(e)})).catch((function(e){return console.log("Error from StoriesAdd.js:addStory",e)}))}},{key:"onSubmit",value:function(e){var t={city:this.refs.city.value,country:this.refs.country.value,twitterHandle:this.refs.twitter.value};this.addStory(t),e.preventDefault()}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.b,{className:"btn grey",to:"/"},"Back"),r.a.createElement(j.a,{className:"add-story"},r.a.createElement("h6",null,"Add a new XR faction."),r.a.createElement("form",{onSubmit:this.onSubmit.bind(this)},r.a.createElement("div",{className:"flex-spread"},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-input",type:"text",name:"city",ref:"city",placeholder:"City"}),r.a.createElement("label",{htmlFor:"city"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",name:"country",ref:"country",placeholder:"Country"}),r.a.createElement("label",{htmlFor:"country"}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",name:"twitter",ref:"twitter",placeholder:"Twitter Handle"}),r.a.createElement("label",{htmlFor:"twitter"})),r.a.createElement("input",{className:"form-input tweak-background-color btn float-right",type:"submit",value:"Add new XR faction"})),r.a.createElement("br",null)))}}]),t}(n.Component),F=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"addDemand",value:function(e){var t=this;b.a.request({method:"post",url:"https://extinction-rebellion.herokuapp.com/api/demands",data:e}).then((function(e){window.location.reload(),t.props.history.push("/"),console.log(e)})).catch((function(e){return console.log("Error from AddDemand.js:addDemand",e)}))}},{key:"onSubmit",value:function(e){var t={isBeingDefined:!0,title:this.refs.title.value||"No title yet",city:this.refs.city.value||"No city yet",country:this.refs.country.value||"No country yet",summary:this.refs.summary.value||"No summary yet",background:this.refs.background.value||"No background yet",indicators:this.refs.indicators.value||"No indicators yet",representative:this.refs.representative.value||"No representative yet",representativeEmail:this.refs.representativeEmail.value||"No email for the representative yet"};this.addDemand(t),e.preventDefault()}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.b,{className:"btn grey",to:"/"},"Back"),r.a.createElement(j.a,{className:"add-demand"},r.a.createElement("h6",null,"Start a new demand. It does not have to be perfect, we can make it great together afterwards."),r.a.createElement("form",{onSubmit:this.onSubmit.bind(this)},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-input",type:"text",name:"title",ref:"title",placeholder:"Title"}),r.a.createElement("label",{htmlFor:"title"})),r.a.createElement("div",{className:"flex-spread"},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-input",type:"text",name:"city",ref:"city",placeholder:"City"}),r.a.createElement("label",{htmlFor:"city"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",name:"country",ref:"country",placeholder:"Country"}),r.a.createElement("label",{htmlFor:"country"}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",name:"summary",ref:"summary",placeholder:"Summary"}),r.a.createElement("label",{htmlFor:"summary"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",name:"background",ref:"background",placeholder:"Background"}),r.a.createElement("label",{htmlFor:"background"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",name:"indicators",ref:"indicators",placeholder:"Indicators"}),r.a.createElement("label",{htmlFor:"indicators"})),r.a.createElement("br",null),r.a.createElement("h6",null,r.a.createElement("span",{className:"bold"},"Representative")," to send the demand to once it has been defined and accepted by the group. This should be the person who has the authority to raise this issue in parliament. If you don't know who, leave it blank for now."),r.a.createElement("div",{className:"flex-spread"},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",name:"representative",ref:"representative",placeholder:"Rep name"}),r.a.createElement("label",{htmlFor:"representative"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",name:"representativeEmail",ref:"representativeEmail",placeholder:"Email"}),r.a.createElement("label",{htmlFor:"representativeEmail"}))),r.a.createElement("br",null),r.a.createElement("h6",null,"One time linking setup:"),r.a.createElement("div",{className:"list-group-item"},r.a.createElement("input",{type:"checkbox",ref:"createdTwitter",style:{height:16,width:16}}),r.a.createElement("span",null,"Create a new account on Twitter called"," ",r.a.createElement("span",{className:"bold"},"@xr110references"),", after this initial setup you will not need to touch it again.")),r.a.createElement("div",{className:"list-group-item"},r.a.createElement("input",{type:"checkbox",ref:"createdIFTTT",style:{height:16,width:16}}),r.a.createElement("span",null,"Create an account at"," ",r.a.createElement("a",{className:"bold",href:"https://iftt.com"},"IFTTT"))),r.a.createElement("div",{className:"list-group-item"},r.a.createElement("input",{type:"checkbox",ref:"createdScript",style:{height:16,width:16}}),r.a.createElement("span",null,"Setup autotweeting all Tweets with #xr110 through this"," ",r.a.createElement("a",{className:"bold",href:"https://ifttt.com/applets/SMvaxczG-if-hashtag-then-retweet-it"},"IFTTT recipe."))),r.a.createElement("p",null,"Hurray! Now all Tweets anyone does with #xr110 gets automatically pulled into the # section of your new petition. You won't have to do anything."),r.a.createElement("input",{className:"form-input tweak-background-color btn float-right",type:"submit",value:"Add new demand"})),r.a.createElement("br",null),r.a.createElement("br",null)))}}]),t}(n.Component),A=a(109),I=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={isBeingDefined:!0,title:"",city:"",country:"",summary:"",background:"",indicators:"",representative:"",representativeEmail:""},a.handleInputChange=a.handleInputChange.bind(Object(d.a)(a)),a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getDemandDetails()}},{key:"getDemandDetails",value:function(){var e=this,t=this.props.demandId;b.a.get("https://extinction-rebellion.herokuapp.com/api/demands/".concat(t)).then((function(t){e.setState({id:t.data.id,title:t.data.title,city:t.data.city,country:t.data.country,summary:t.data.summary,background:t.data.background,indicators:t.data.indicators,representative:t.data.representative,representativeEmail:t.data.representativeEmail})})).catch((function(e){return console.log("Error from EditDemand.js:getDemandDetails",e)}))}},{key:"editDemand",value:function(e){var t=this;b.a.request({method:"put",url:"https://extinction-rebellion.herokuapp.com/api/demands/".concat(this.state.id),data:e}).then((function(e){alert("Saved"),window.location.reload(),t.props.history.push("/"),console.log(e)})).catch((function(e){return console.log("Error from EditDemand.js:editDemand",e)}))}},{key:"onSubmit",value:function(e){var t={isBeingDefined:!0,title:this.refs.title.value,city:this.refs.city.value,country:this.refs.country.value,summary:this.refs.summary.value,background:this.refs.background.value,indicators:this.refs.indicators.value,representative:this.refs.representative.value,representativeEmail:this.refs.representativeEmail.value};this.editDemand(t),e.preventDefault()}},{key:"handleInputChange",value:function(e){var t=e.target,a=t.value,n=t.name;this.setState(Object(A.a)({},n,a))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{className:"add-demand"},r.a.createElement("form",{onSubmit:this.onSubmit.bind(this)},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-input",type:"text",name:"title",ref:"title",placeholder:"Title",value:this.state.title,onChange:this.handleInputChange}),r.a.createElement("label",{htmlFor:"title"})),r.a.createElement("div",{className:"flex-spread"},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-input",type:"text",name:"city",ref:"city",placeholder:"City",value:this.state.city,onChange:this.handleInputChange}),r.a.createElement("label",{htmlFor:"city"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",name:"country",ref:"country",placeholder:"Country",value:this.state.country,onChange:this.handleInputChange}),r.a.createElement("label",{htmlFor:"country"}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",name:"summary",ref:"summary",placeholder:"Summary",value:this.state.summary,onChange:this.handleInputChange}),r.a.createElement("label",{htmlFor:"summary"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",name:"background",ref:"background",placeholder:"Background",value:this.state.background,onChange:this.handleInputChange}),r.a.createElement("label",{htmlFor:"background"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",name:"indicators",ref:"indicators",placeholder:"Indicators",value:this.state.indicators,onChange:this.handleInputChange}),r.a.createElement("label",{htmlFor:"indicators"})),r.a.createElement("br",null),r.a.createElement("div",{className:"flex-spread"},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",name:"representative",ref:"representative",placeholder:"Rep name",value:this.state.representative,onChange:this.handleInputChange}),r.a.createElement("label",{htmlFor:"representative"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",name:"representativeEmail",ref:"representativeEmail",placeholder:"Email",value:this.state.representativeEmail,onChange:this.handleInputChange}),r.a.createElement("label",{htmlFor:"representativeEmail"}))),r.a.createElement("input",{className:"form-input tweak-background-color btn float-right",type:"submit",value:"Save"})),r.a.createElement("br",null),r.a.createElement("br",null)))}}]),t}(n.Component),T=a(231),B=a(230),R=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"addEdit",value:function(e){b.a.request({method:"post",url:"https://extinction-rebellion.herokuapp.com/api/edits",data:e}).then((function(e){alert("Saved!"),window.location.reload()})).catch((function(e){return console.log("Error from AddEdit.js:addEdit",e)}))}},{key:"onSubmit",value:function(e){var t=this.props.demand,a={demandId:t.id,editSummary:this.refs.editSummary.value,by:this.refs.by.value,country:this.refs.country.value?this.refs.country.value:t.country,city:this.refs.city.value?this.refs.city.value:t.city,title:this.refs.title.value?this.refs.title.value:t.title,summary:this.refs.summary.value?this.refs.summary.value:t.summary,background:this.refs.background.value?this.refs.background.value:t.background,indicators:this.refs.indicators.value?this.refs.indicators.value:t.indicators,representative:this.refs.representative.value?this.refs.representative.value:t.repesentative,representativeEmail:this.refs.representativeEmail.value?this.refs.representativeEmail.value:t.representativeEmail};console.log("newEdit",a),this.addEdit(a),e.preventDefault()}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h6",null,"Add a new edit here. Once it reaches 10 upvotes it will be automatically inserted in the demand."),r.a.createElement("form",{onSubmit:this.onSubmit.bind(this)},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",name:"editSummary",ref:"editSummary",placeholder:"Edit Summary*"}),r.a.createElement("label",{htmlFor:"editSummary"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-input",type:"text",name:"by",ref:"by",placeholder:"By whom*"}),r.a.createElement("label",{htmlFor:"by"})),r.a.createElement("div",{className:"flex-spread"},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",name:"country",ref:"country",placeholder:"Country"}),r.a.createElement("label",{htmlFor:"country"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",name:"city",ref:"city",placeholder:"City"}),r.a.createElement("label",{htmlFor:"city"}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",name:"title",ref:"title",placeholder:"Title"}),r.a.createElement("label",{htmlFor:"title"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",name:"summary",ref:"summary",placeholder:"Summary"}),r.a.createElement("label",{htmlFor:"summary"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",name:"background",ref:"background",placeholder:"Background"}),r.a.createElement("label",{htmlFor:"background"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",name:"indicators",ref:"indicators",placeholder:"Indicators"}),r.a.createElement("label",{htmlFor:"indicators"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",name:"representative",ref:"representative",placeholder:"Representative"}),r.a.createElement("label",{htmlFor:"representative"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",name:"representativeEmail",ref:"representativeEmail",placeholder:"Representative Email"}),r.a.createElement("label",{htmlFor:"representativeEmail"})),r.a.createElement("input",{className:"form-input tweak-background-color btn",type:"submit",value:"Add new Edit"})))}}]),t}(n.Component),H=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.demand;return r.a.createElement(r.a.Fragment,null,e.isSent?r.a.createElement(r.a.Fragment,null,r.a.createElement("h6",null,"This demand was made collaboratively. Once it reached 100 votes it got sent to the representative."),r.a.createElement("div",{className:"separator"})):r.a.createElement("h6",null,"Being defined. Edit and add below."),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"small-card-header"},r.a.createElement("div",{className:"tight-header"},r.a.createElement("p",{className:"grey"},"By: ",e.postedBy)),r.a.createElement("div",null,r.a.createElement("div",{className:"tight-header"},r.a.createElement("p",null,"Responsible representative"),r.a.createElement("p",{className:"bold"},e.representative)))),r.a.createElement("h6",{className:"bold"},"Country"),r.a.createElement("p",null,e.country),r.a.createElement("h6",{className:"bold"},"City"),r.a.createElement("p",null,e.city),r.a.createElement("h6",{className:"bold"},"Summary"),r.a.createElement("p",null,e.summary),r.a.createElement("h6",{className:"bold"},"Background"),r.a.createElement("p",null,e.background),r.a.createElement("h6",{className:"bold"},"Indicators"),r.a.createElement("p",null,e.indicators)))}}]),t}(n.Component),L=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={demand:"",isLoading:!0,showEdit:!1,edits:[],references:[],actions:[],currentDemandId:e.match.params.id},a.toggleEdit=a.toggleEdit.bind(Object(d.a)(a)),a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"getData",value:function(){var e=this,t=this.props.match.params.id;b.a.all([b.a.get("https://extinction-rebellion.herokuapp.com/api/demands/".concat(t)),b.a.get("https://extinction-rebellion.herokuapp.com/api/edits"),b.a.get("https://extinction-rebellion.herokuapp.com/api/references"),b.a.get("https://extinction-rebellion.herokuapp.com/api/actions")]).then(b.a.spread((function(t,a,n,r){var l=a.data,c=n.data,i=r.data,o=e.state.currentDemandId,s=l.filter((function(e){return e.demandId===o})),m=c.filter((function(e){return e.demandId===o})),u=i.filter((function(e){return e.demandId===o}));e.setState({demand:t.data,edits:s,references:m,actions:u,isLoading:!1})}))).catch((function(e){return console.log("error in DemandDetails.js:getData()",e)}))}},{key:"onDelete",value:function(){var e=this,t=this.state.demand.id;b.a.delete("https://extinction-rebellion.herokuapp.com/api/demands/".concat(t)).then((function(t){e.props.history.push("/")})).catch((function(e){return console.log("Error from DemandDetails.js:onDelete",e)}))}},{key:"toggleEdit",value:function(e){this.setState({showEdit:!this.state.showEdit})}},{key:"render",value:function(){var e=this,t=this.state,a=t.demand,n=t.edits,l=t.references,c=t.actions,o=t.showEdit,s=a.isBeingDefined?"suggested":"sent";return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.b,{className:"btn grey",to:"/"},"Back"),r.a.createElement("button",{onClick:this.onDelete.bind(this),className:"btn red light"},"Delete"),r.a.createElement("div",{className:"card-wrapper ".concat(s),key:a.id},r.a.createElement(O,{votes:a.votes,isSent:a.isSent,cardId:a.id,voteLimit:10}),r.a.createElement(w.a,{defaultActiveKey:"0"},r.a.createElement(j.a,null,r.a.createElement("div",{className:"demand-header"},r.a.createElement("h6",null,a.city,", ",r.a.createElement("span",{className:"bold"},a.country)),r.a.createElement("h5",null,a.title)),r.a.createElement("div",{className:"separator"}),r.a.createElement(T.a,{defaultActiveKey:1},r.a.createElement(B.a,{eventKey:1,title:r.a.createElement("span",{className:"icon-section card-header"},a.isSent?r.a.createElement(r.a.Fragment,null,r.a.createElement("h6",null,n?n.length:0),r.a.createElement(p.a,{icon:E.a})):r.a.createElement(r.a.Fragment,null,r.a.createElement("h6",null,n?n.length:0),r.a.createElement(p.a,{icon:E.l}))," ")},r.a.createElement(j.a.Body,{className:s},r.a.createElement("div",null,a.isSent?r.a.createElement(H,{demand:a}):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"edit-btn",onClick:function(t){return e.toggleEdit(t)}},r.a.createElement(p.a,{icon:E.d})),o?r.a.createElement(I,{demandId:a.id}):null)),n?r.a.createElement(r.a.Fragment,null,r.a.createElement("h6",null,"Add your proposed edit below. Once it reaches 10 upvotes it will automatically update the demand."),n.map((function(e){return r.a.createElement("div",{className:"rebel-card",key:e.id},r.a.createElement(O,{voteLimit:10,votes:e.editVotes?e.editVotes:0}),r.a.createElement("div",{className:"rebel-content"},r.a.createElement("div",null,r.a.createElement(r.a.Fragment,null,r.a.createElement("h6",null,e.editSummary),r.a.createElement("div",{className:"tight-header"},r.a.createElement("p",{className:"grey"},"By: ",e.by),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("p",{className:"bold"},"Responsible representative"),r.a.createElement("p",null," ",e.representative)),r.a.createElement("div",null,r.a.createElement("p",{className:"bold"},"Representative email"),r.a.createElement("p",null," ",e.representativeEmail)),r.a.createElement("div",null,r.a.createElement("p",{className:"bold"},"Country"),r.a.createElement("p",null,e.country)),r.a.createElement("div",null,r.a.createElement("p",{className:"bold"},"City"),r.a.createElement("p",null,e.city)),r.a.createElement("div",null,r.a.createElement("p",{className:"bold"},"Summary"),r.a.createElement("p",null,e.summary)),r.a.createElement("div",null,r.a.createElement("p",{className:"bold"},"Background"),r.a.createElement("p",null,e.background)),r.a.createElement("div",null,r.a.createElement("p",{className:"bold"},"Indicators"),r.a.createElement("p",null,e.indicators)))))))}))):null,n?null:r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),r.a.createElement("h6",null,"There are no edits yet, start one below")),r.a.createElement("div",{className:"separator"}),r.a.createElement("br",null),r.a.createElement(R,{demand:a}),r.a.createElement("br",null))),r.a.createElement(B.a,{eventKey:2,title:r.a.createElement("span",{className:"icon-section card-header"}," ",r.a.createElement("h6",null,l?l.length:0),r.a.createElement(p.a,{icon:E.g}))},r.a.createElement(j.a.Body,{className:s},r.a.createElement("h6",null,"To add references that support this demand: Your tweet will automatically be pulled into the feed below."))," "),r.a.createElement(B.a,{eventKey:3,title:r.a.createElement("span",{className:"icon-section card-header"}," ",r.a.createElement("h6",null,c?c.length:0),r.a.createElement(p.a,{icon:E.e}))},r.a.createElement(j.a.Body,{className:s},c?r.a.createElement(r.a.Fragment,null,r.a.createElement("h6",null,"Join by clicking the join button on the right of the action, you'll get sent a telegram invitation with more info."),c.map((function(e){return r.a.createElement("div",{className:"rebel-card",key:e.id},r.a.createElement(O,{showAsRebel:!0,votes:e.joined?e.joined:0}),r.a.createElement("div",{className:"rebel-content"},r.a.createElement("div",null,r.a.createElement("h6",{className:"bold"},e.date,", ",e.time),r.a.createElement("h6",null,e.name))))}))):null,c?null:r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),r.a.createElement("h6",null,"There are no actions yet, start one below")),r.a.createElement("div",{className:"separator"}),r.a.createElement("br",null),r.a.createElement(x,{demandId:a.id}),r.a.createElement("br",null))," "))))))}}]),t}(n.Component),W=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("input",{className:"search-filter",type:"text",placeholder:"Choose Country",value:this.props.search,onChange:this.props.updateSearch})}}]),t}(n.Component),M=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(m.a)(this,Object(u.a)(t).call(this))).state={isLoading:!0,demands:[],stories:[],search:""},e.updateSearch=e.updateSearch.bind(Object(d.a)(e)),e}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"getData",value:function(){var e=this,t={headers:{"Content-Type":"application/json;charset=UTF-8","Access-Control-Allow-Origin":"*"}};b.a.all([b.a.get("https://extinction-rebellion.herokuapp.com/api/stories",{},t),b.a.get("https://extinction-rebellion.herokuapp.com/api/demands",{},t)]).then(b.a.spread((function(t,a){e.setState({stories:t.data,demands:a.data,isLoading:!1})}))).catch((function(e){return console.log("error in Routes.js:getData()",e)}))}},{key:"updateSearch",value:function(e){this.setState({search:e.target.value.substr(0,20)})}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.demands,n=e.stories,l=e.search,c=a.filter((function(e){return-1!==e.country.indexOf(l)})),i=n.filter((function(e){return-1!==e.country.indexOf(l)})),o=c.filter((function(e){return e.isSent})),s=c.filter((function(e){return e.isBeingDefined}));return r.a.createElement("main",null,t?r.a.createElement("h3",null,"Loading..."):r.a.createElement(r.a.Fragment,null,r.a.createElement(W,{search:l,updateSearch:this.updateSearch}),r.a.createElement(g.c,null,r.a.createElement(g.a,{exact:!0,path:"/",render:function(e){return r.a.createElement(N,Object.assign({},e,{stories:i,search:l}))}}),r.a.createElement(g.a,{exact:!0,path:"/demands",render:function(e){return r.a.createElement(C,Object.assign({},e,{demands:o,search:l,header:"DEMANDS",subheader:"Active demands that have been sent to parliament. Sign the ones you support below and join actions to push them through ASAP.",backgroundColor:"action-background-color",eventKey:"0",isSent:!0}))}}),r.a.createElement(g.a,{exact:!0,path:"/:id/add-action",component:x}),r.a.createElement(g.a,{exact:!0,path:"/add-story",component:D}),r.a.createElement(g.a,{exact:!0,path:"/add-demand",component:F}),r.a.createElement(g.a,{exact:!0,path:"/demands/edit/:id",component:I}),r.a.createElement(g.a,{exact:!0,path:"/demands/:id",component:L}),r.a.createElement(g.a,{exact:!0,path:"/suggested",render:function(e){return r.a.createElement(C,Object.assign({},e,{demands:s,search:l,header:"SUGGESTIONS",subheader:"Suggested demands. Collaboratively flesh them out here.",backgroundColor:"tweak-background-color",eventKey:"1",isSuggested:!0}))}}))))}}]),t}(n.Component),q=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"app-container"},r.a.createElement("header",null,r.a.createElement(i.b,{to:"/"},r.a.createElement("img",{src:"/xr-logo.png",className:"logo",alt:"logo"}))),r.a.createElement(M,null))),r.a.createElement(v,null))},K=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function U(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(i.a,null,r.a.createElement(q,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");K?(!function(e,t){fetch(e).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):U(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):U(t,e)}))}}()},72:function(e,t,a){}},[[114,1,2]]]);
//# sourceMappingURL=main.9b8244a9.chunk.js.map