function setMask(){return null!=document.getElementsByClassName("rmMask")[0]?document.getElementsByClassName("rmMask")[0]:(mask=document.createElement("div"),mask.className="rmMask",mask.style.width=window.innerWidth+"px",mask.style.height=window.innerHeight+"px",mask.style.background="#fff",mask.style.opacity=".0",mask.style.position="fixed",mask.style.top="0",mask.style.left="0",mask.style.zIndex=998,document.body.appendChild(mask),document.getElementById("rightMenu").style.zIndex=19198,mask)}function insertAtCursor(e,t){if(document.selection)e.focus(),sel=document.selection.createRange(),sel.text=t,sel.select();else if(e.selectionStart||"0"==e.selectionStart){var n=e.selectionStart,o=e.selectionEnd,i=e.scrollTop;e.value=e.value.substring(0,n)+t+e.value.substring(o,e.value.length),i>0&&(e.scrollTop=i),e.focus(),e.selectionStart=n+t.length,e.selectionEnd=n+t.length}else e.value+=t,e.focus()}let rmf={};function popupMenu(){window.oncontextmenu=function(e){if(e.ctrlKey)return!0;$(".rightMenu-group.hide").hide(),document.getSelection().toString()&&$("#menu-text").show(),(document.getElementById("post")||document.getElementById("page"))&&$("#menu-post").show();var t=window.document.body;t=e.target;/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\*\+,;=.]+$/.test(window.getSelection().toString())&&"A"!=t.tagName&&$("#menu-too").show(),"A"==t.tagName&&($("#menu-to").show(),rmf.open=function(){-1==t.href.indexOf("http://")&&-1==t.href.indexOf("https://")||-1!=t.href.indexOf("yisous.xyz")?pjax.loadUrl(t.href):location.href=t.href},rmf.openWithNewTab=function(){window.open(t.href)},rmf.copyLink=function(){let e=t.href,n=document.createElement("textarea");n.value=e,document.body.appendChild(n),n.select(),document.execCommand("Copy"),document.body.removeChild(n)}),"IMG"==t.tagName?($("#menu-img").show(),rmf.openWithNewTab=function(){window.open(t.src)},rmf.click=function(){t.click()},rmf.copyLink=function(){let e=t.src,n=document.createElement("textarea");n.value=e,document.body.appendChild(n),n.select(),document.execCommand("Copy"),document.body.removeChild(n)},rmf.saveAs=function(){var e=document.createElement("a"),n=t.src,o=n.split("/")[-1];e.href=n,e.download=o,e.click(),window.URL.revokeObjectURL(n)}):"TEXTAREA"!=t.tagName&&"INPUT"!=t.tagName||($("#menu-paste").show(),rmf.paste=function(){navigator.permissions.query({name:"clipboard-read"}).then((e=>{"granted"==e.state||"prompt"==e.state?navigator.clipboard.readText().then((e=>{console.log(e),insertAtCursor(t,e)})):Snackbar.show({text:"请允许读取剪贴板！",pos:"top-center",showAction:!1})}))});let n=e.clientX+10,o=e.clientY,i=$("#rightMenu").width(),a=$("#rightMenu").height();return n+i>window.innerWidth&&(n-=i+10),o+a>window.innerHeight&&(o-=o+a-window.innerHeight),mask=setMask(),window.onscroll=()=>{rmf.showRightMenu(!1),window.onscroll=()=>{},document.body.removeChild(mask)},$(".rightMenu-item").click((()=>{document.body.removeChild(mask)})),$(window).resize((()=>{rmf.showRightMenu(!1),document.body.removeChild(mask)})),mask.onclick=()=>{document.body.removeChild(mask)},rmf.showRightMenu(!0,o,n),!1},window.addEventListener("click",(function(){rmf.showRightMenu(!1)}))}rmf.showRightMenu=function(e,t=0,n=0){let o=$("#rightMenu");o.css("top",t+"px").css("left",n+"px"),e?o.show():o.hide()},rmf.switchDarkMode=function(){"light"===("dark"===document.documentElement.getAttribute("data-theme")?"dark":"light")?(activateDarkMode(),saveToLocal.set("theme","dark",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)):(activateLightMode(),saveToLocal.set("theme","light",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)),"function"==typeof utterancesTheme&&utterancesTheme(),"object"==typeof FB&&window.loadFBComment(),window.DISQUS&&document.getElementById("disqus_thread").children.length&&setTimeout((()=>window.disqusReset()),200)},rmf.yinyong=function(){var e=document.getElementsByClassName("el-textarea__inner")[0],t=document.createEvent("HTMLEvents");t.initEvent("input",!0,!0),e.value=d.value="> "+getSelection().toString()+"\n\n",e.dispatchEvent(t),console.log(getSelection().toString()),document.getElementsByClassName("el-textarea__inner")[0].value="> "+getSelection().toString()+"\n\n",Snackbar.show({text:"为保证最佳评论阅读体验，建议不要删除空行",pos:"top-center",showAction:!1})},rmf.copyWordsLink=function(){let e=window.location.href,t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("Copy"),document.body.removeChild(t),Snackbar.show({text:"链接复制成功！快去分享吧！",pos:"top-right",showAction:!1})},rmf.switchReadMode=function(){const e=document.body;e.classList.add("read-mode");const t=document.createElement("button");t.type="button",t.className="fas fa-sign-out-alt exit-readmode",e.appendChild(t),t.addEventListener("click",(function n(){e.classList.remove("read-mode"),t.remove(),t.removeEventListener("click",n)}))},rmf.copySelect=function(){document.execCommand("Copy",!1,null)},rmf.scrollToTop=function(){document.getElementsByClassName("menus_items")[1].setAttribute("style",""),document.getElementById("name-container").setAttribute("style","display:none"),btf.scrollToDest(0,500)},rmf.translate=function(){document.getElementById("translateLink").click()},rmf.searchinThisPage=()=>{document.body.removeChild(mask),document.getElementsByClassName("local-search-box--input")[0].value=window.getSelection().toString(),document.getElementsByClassName("search")[0].click();var e=document.createEvent("HTMLEvents");e.initEvent("input",!1,!1),document.getElementsByClassName("local-search-box--input")[0].dispatchEvent(e)},document.body.addEventListener("touchmove",(function(e){}),{passive:!1}),navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)||popupMenu();const box=document.documentElement;function addLongtabListener(e,t){let n=0;e.ontouchstart=()=>{n=0,n=setTimeout((()=>{t(),n=0}),380)},e.ontouchmove=()=>{clearTimeout(n),n=0},e.ontouchend=()=>{n&&clearTimeout(n)}}addLongtabListener(box,popupMenu);