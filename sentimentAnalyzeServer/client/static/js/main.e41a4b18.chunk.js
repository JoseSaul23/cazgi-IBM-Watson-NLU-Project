(this.webpackJsonpsentimentanalyzer=this.webpackJsonpsentimentanalyzer||[]).push([[0],{24:function(t,e,n){},25:function(t,e,n){},43:function(t,e,n){"use strict";n.r(e);var s=n(0),i=n(2),c=n.n(i),r=n(18),a=n.n(r),o=(n(24),n(3)),d=n(4),l=n(6),j=n(5),u=(n(9),n(25),function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(s.jsx)("div",{children:Object(s.jsx)("table",{className:"table table-bordered",children:Object(s.jsx)("tbody",{children:[this.props.emotions].map((function(t,e){return Object(s.jsxs)(i.Fragment,{children:[Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:"sadness"}),Object(s.jsx)("td",{children:t.sadness})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:"joy"}),Object(s.jsx)("td",{children:t.joy})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:"fear"}),Object(s.jsx)("td",{children:t.fear})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:"disgust"}),Object(s.jsx)("td",{children:t.disgust})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:"anger"}),Object(s.jsx)("td",{children:t.anger})]})]})}))})})})}}]),n}(c.a.Component)),b=n(8),m=n.n(b),x=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(o.a)(this,n);for(var i=arguments.length,c=new Array(i),r=0;r<i;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={innercomp:Object(s.jsx)("textarea",{rows:"4",cols:"50",id:"textinput"}),mode:"text",sentimentOutput:[],sentiment:!0},t.renderTextArea=function(){document.getElementById("textinput").value="","url"===t.state.mode&&t.setState({innercomp:Object(s.jsx)("textarea",{rows:"4",cols:"50",id:"textinput"}),mode:"text",sentimentOutput:[],sentiment:!0})},t.renderTextBox=function(){document.getElementById("textinput").value="","text"===t.state.mode&&t.setState({innercomp:Object(s.jsx)("textarea",{rows:"1",cols:"50",id:"textinput"}),mode:"url",sentimentOutput:[],sentiment:!0})},t.sendForSentimentAnalysis=function(){t.setState({sentiment:!0});var e=".";e="url"===t.state.mode?e+"/url/sentiment?url="+document.getElementById("textinput").value:e+"/text/sentiment?text="+document.getElementById("textinput").value,m.a.get(e).then((function(e){t.setState({sentimentOutput:e.data});var n=e.data;n="positive"===e.data?Object(s.jsx)("div",{style:{color:"green",fontSize:20},children:e.data}):"negative"===e.data?Object(s.jsx)("div",{style:{color:"red",fontSize:20},children:e.data}):Object(s.jsx)("div",{style:{color:"orange",fontSize:20},children:e.data}),t.setState({sentimentOutput:n})}))},t.sendForEmotionAnalysis=function(){t.setState({sentiment:!1});var e=".";e="url"===t.state.mode?e+"/url/emotion?url="+document.getElementById("textinput").value:e+"/text/emotion/?text="+document.getElementById("textinput").value,m.a.get(e).then((function(e){t.setState({sentimentOutput:Object(s.jsx)(u,{emotions:e.data})})}))},t}return Object(d.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("button",{className:"btn btn-info",onClick:this.renderTextArea,children:"Text"}),Object(s.jsx)("button",{className:"btn btn-dark",onClick:this.renderTextBox,children:"URL"}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),this.state.innercomp,Object(s.jsx)("br",{}),Object(s.jsx)("button",{className:"btn-primary",onClick:this.sendForSentimentAnalysis,children:"Analyze Sentiment"}),Object(s.jsx)("button",{className:"btn-primary",onClick:this.sendForEmotionAnalysis,children:"Analyze Emotion"}),Object(s.jsx)("br",{}),this.state.sentimentOutput]})}}]),n}(c.a.Component),O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(e){var n=e.getCLS,s=e.getFID,i=e.getFCP,c=e.getLCP,r=e.getTTFB;n(t),s(t),i(t),c(t),r(t)}))};a.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(x,{})}),document.getElementById("root")),O()},9:function(t,e,n){}},[[43,1,2]]]);
//# sourceMappingURL=main.e41a4b18.chunk.js.map