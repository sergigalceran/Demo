!function(a,b){function c(b,d){var e,f;if("\x2e"!=b[0]&&"\x2f"!=b[0])return a(b);if(d=d||"\x72\x6f\x6f\x74",e=c.resolve(b),!e&&/\.json$/i.test(b))return a("\x2e\x2f"+c.basename(b));if(f=c.cache[e],!f)try{return a(b)}catch(g){throw Error("\x66\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x72\x65\x71\x75\x69\x72\x65\x20\x22"+b+"\x22\x20\x66\x72\x6f\x6d\x20"+d+"\n"+g.message+"\n"+g.stack)}return f.exports||(f.exports={},f.call(f.exports,f,f.exports,c.relative(e))),f.exports}c.cache={},c.basename=a("\x70\x61\x74\x68").basename,c.resolve=function(b){var d,e,f,g;if("\x2e"!=b[0])return a.resolve(b);for(d="\x2f"===b.slice(-1)?b:b+"\x2f",e=[b,b+"\x2e\x6a\x73",d+"\x69\x6e\x64\x65\x78\x2e\x6a\x73",b+"\x2e\x6a\x73\x6f\x6e",d+"\x69\x6e\x64\x65\x78\x2e\x6a\x73\x6f\x6e"],f=0;g=e[f];f++)if(c.cache[g])return g},c.register=function(a,b){c.cache[a]=b},c.relative=function(a){function b(b){var d,e,f,g,h;if("\x2e"!=b[0])return c(b);for(d=a.split("\x2f"),e=b.split("\x2f"),d.pop(),f=0,g=e.length;g>f;f+=1)h=e[f],"\x2e\x2e"==h?d.pop():"\x2e"!=h&&d.push(h);return c(d.join("\x2f"),a)}return b.resolve=c.resolve,b.cache=c.cache,b},c.register("\x2e\x2f\x61\x6e\x67\x75\x6c\x61\x72\x2f\x63\x6f\x72\x65\x2e\x6a\x73",function(){var d="\x68\x74\x74\x70\x3a\x2f\x2f\x6c\x6f\x63\x61\x6c\x68\x6f\x73\x74\x3a\x33\x30\x30\x31",e=angular.module("\x4d\x61\x69\x6e\x41\x70\x70",[]);e.controller("\x63\x6f\x72\x65",function(a,b){a.newPersona={},a.personas={},a.selected=!1,b.get(d+"\x2f\x61\x70\x69\x2f\x70\x65\x72\x73\x6f\x6e\x61").then(function(b){a.personas=b.data},function(a){console.log("\x45\x72\x72\x6f\x72\x3a\x20"+a.data)}),a.registrarPersona=function(){b.post(d+"\x2f\x61\x70\x69\x2f\x70\x65\x72\x73\x6f\x6e\x61",a.newPersona).then(function(b){a.newPersona={},a.personas=b.data},function(a){console.log("\x45\x72\x72\x6f\x72\x3a\x20"+a.data)})},a.modificarPersona=function(){b.put(d+"\x2f\x61\x70\x69\x2f\x70\x65\x72\x73\x6f\x6e\x61\x2f"+a.newPersona._id,a.newPersona).then(function(){a.newPersona={},a.personas=resposne.data,a.selected=!1},function(a){console.log("\x45\x72\x72\x6f\x72\x3a\x20"+a.data)})},a.borrarPersona=function(){b["\x64\x65\x6c\x65\x74\x65"](d+"\x2f\x61\x70\x69\x2f\x70\x65\x72\x73\x6f\x6e\x61\x2f"+a.newPersona._id).then(function(b){a.newPersona={},a.personas=b.data,a.selected=!1},function(a){console.log("\x45\x72\x72\x6f\x72\x3a\x20"+a.data)})},a.selectPerson=function(b){a.newPersona=b,a.selected=!0,console.log(a.newPersona,a.selected)}})}),c.register("\x2e\x2f\x61\x6e\x67\x75\x6c\x61\x72\x2f\x75\x74\x69\x6c\x73\x2e\x6a\x73",function(){}),b.exports=c("\x2e\x2f\x63\x6f\x72\x65\x2e\x6a\x73")}(require,module);