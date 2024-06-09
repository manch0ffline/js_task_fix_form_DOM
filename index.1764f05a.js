document.querySelectorAll("form input").forEach(function(e){var t=e.name.replace(/([a-z])([A-Z])/g,"$1 $2").replace(/\b\w/g,function(e){return e.toUpperCase()}),r=document.createElement("label");r.setAttribute("for",e.id),r.setAttribute("class","field-label"),r.textContent=t,e.parentNode.insertBefore(r,e),e.setAttribute("placeholder",t)});
//# sourceMappingURL=index.1764f05a.js.map
