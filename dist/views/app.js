define(["jquery","underscore","backbone","thorax","collections/collection","text!templates/app.handlebars","common","uihelpers"],function(e,t,n,r,i,s,o,u){return r.View.extend({name:"app",template:Handlebars.compile(s),events:{"click #click-btn":function(){this.count++,this.$("#click-view").text(this.count)},"click #spin-btn":function(){var e=parseInt(this.$("#spin-sec").val(),10),t=null,n=this;if(!e||this.loadSpinner)return;this.loadSpinner=!0,this.$("#spin-sec-ui").text(e),this.spinner?this.spinner.spin():this.spinner=u.Spinner.setupSpinner(),this.$("#spin-area").html(this.spinner.el),t=window.setInterval(function(){if(e<0)return;e--,n.$("#spin-sec-ui").text(e)},1e3),window.setTimeout(function(){n.loadSpinner=!1,n.spinner.stop(),n.$("#spin-sec-ui").text(this.$("#spin-sec").val()),window.clearInterval(t)},e*1e3)}},initialize:function(){this.count=0,this.render()}})});