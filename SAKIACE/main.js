
        
        
        <!-- snippet location htmlhead -->
        <script type='text/javascript'>
            console.log(location.pathname);
            var location_page = location.pathname;
            if(location_page == "/sitemap/categories/" || location_page == "/sitemap/categories"){
              var link = !!document.querySelector("link[rel='canonical']") ? document.querySelector("link[rel='canonical']") : document.createElement('link');
              link.setAttribute('rel', 'canonical');
              link.setAttribute('href', location.protocol + '//' + location.host + location.pathname);
              console.log(link);
              document.head.appendChild(link);
            }
      
            (function(b){function k(c,a){var b=d.querySelector(c);if(b)return a(b);var f=new (e.MutationObserver||e.WebKitMutationObserver)(function(){if(b=d.querySelector(c))f.disconnect(),a(b)});f.observe(d,{childList:!0,subtree:!0})}function g(){c.contentWindow.postMessage("enableUsableNetAssistive","https://"+b)}var e=window,d=document,l=location,m=l.search||"",c,h=0;k("body",function(){c=d.createElement("iframe");c.setAttribute("style","display:none;");c.onload=function(){function f(a){"UsableNetAssistiveEnabled"===
    a.data&&a.origin==="https://"+b&&0==h?(a=d.body.appendChild(d.createElement("div")),a.id="usablenetAssistiveLoader",a.setAttribute("style","position:fixed;top:0;width:100vw;line-height:100vh;text-align:center;z-index:10000;background:rgba(0,0,0,.5)"),a.innerHTML='<span role="alert" style="background:#fff;padding:20px 40px;font-size:20px;color:#000;border-radius:5px">Loading page</span>',a=location.href,a=a.split("#")[0],a=a.split("?")[0],d.head.appendChild(d.createElement("script")).src="//"+b+"/pt/loader?u="+
    encodeURIComponent(a)):"UsableNetAssistiveEnabled"===a.data&&a.origin==="https://"+b&&setTimeout(function(){l.reload()},100)}e.addEventListener?e.addEventListener("message",f,!1):e.attachEvent&&e.attachEvent("onmessage",f);0<=m.indexOf("UsableNetAssistive=true")?g():c.contentWindow.postMessage("checkUsableNetAssistive","https://"+b)};c.src="https://"+b+"/pt/switch";d.body.appendChild(c)});e.enableUsableNetAssistive=function(){h=1;g();return!1};k(".UsableNetAssistive",function(b){b.addEventListener("click",
    function(){h=1;g();return!1})})})("bliss.usablenet.com");
           

    </head>