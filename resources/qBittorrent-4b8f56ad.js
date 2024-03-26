import{s as f}from"./service-56521882.js";import{_ as m,G as y,r as v,o as s,c as I,w as d,a as o,t as a,b as n,F as c,d as r,e as B,p as w,f as b}from"./index-4e6e76f5.js";const u=["B","KB","MB","GB"],p=t=>{let e=0;for(;t>1e3&&e<u.length;)t/=1e3,e++;return Intl.NumberFormat(void 0,{maximumFractionDigits:2}).format(t||0)+` ${u[e]}/s`},g={name:"qBittorrent",mixins:[f],props:{item:Object},components:{Generic:y},data:()=>({dl:null,ul:null,count:null,error:null}),computed:{downRate:function(){return p(this.dl)},upRate:function(){return p(this.ul)}},created(){const t=parseInt(this.item.rateInterval,10)||0,e=parseInt(this.item.torrentInterval,10)||0;t>0&&setInterval(()=>this.getRate(),t),e>0&&setInterval(()=>this.fetchCount(),e),this.getRate(),this.fetchCount()},methods:{fetchCount:async function(){try{const t=await this.fetch("/api/v2/torrents/info");this.error=!1,this.count=t.length}catch(t){this.error=!0,console.error(t)}},getRate:async function(){try{const t=await this.fetch("/api/v2/transfer/info");this.error=!1,this.dl=t.dl_info_speed,this.ul=t.up_info_speed}catch(t){this.error=!0,console.error(t)}}}},h=t=>(w("data-v-9eb60179"),t=t(),b(),t),k={class:"title is-4"},R={class:"subtitle is-6"},C={key:0,class:"error"},G={class:"down monospace"},x=h(()=>o("p",{class:"fas fa-download"},null,-1)),F={class:"up monospace"},N=h(()=>o("p",{class:"fas fa-upload"},null,-1)),S={key:0,class:"count"};function q(t,e,i,V,D,l){const _=v("Generic");return s(),I(_,{item:i.item},{content:d(()=>[o("p",k,a(i.item.name),1),o("p",R,[t.error?(s(),n("span",C,"An error has occurred.")):(s(),n(c,{key:1},[o("span",G,[x,r(" "+a(l.downRate),1)]),o("span",F,[N,r(" "+a(l.upRate),1)])],64))])]),indicator:d(()=>[t.error?B("",!0):(s(),n("span",S,[r(a(t.count)+" ",1),t.count===1?(s(),n(c,{key:0},[r("torrent")],64)):(s(),n(c,{key:1},[r("torrents")],64))]))]),_:1},8,["item"])}const E=m(g,[["render",q],["__scopeId","data-v-9eb60179"]]);export{E as default};
