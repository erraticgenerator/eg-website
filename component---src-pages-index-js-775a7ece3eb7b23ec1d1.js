(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"9eSz":function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),o=r(a("VbXa")),s=r(a("8OQS")),l=r(a("pVnL")),d=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=x([].concat(t.fluid))),t.fixed&&(t.fixed=x([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,a=e.fixed,r=m(t||a||[]);return r&&r.src},m=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},g=Object.create({}),h=function(e){var t=u(e),a=p(t);return g[a]||!1},y="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,v=b&&window.IntersectionObserver,S=new WeakMap;function w(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),a&&d.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function x(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function k(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function O(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function R(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var L=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),S.set(e,t)),function(){a.unobserve(e),S.delete(e)}},E=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?R(e,!0):"")+R(e)})).join("")+"<img "+d+o+s+a+r+t+n+i+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},I=d.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,o=e.ariaHidden,s=d.default.createElement(j,(0,l.default)({ref:t,src:a},n,{ariaHidden:o}));return r.length>1?d.default.createElement("picture",null,i(r),s):s})),j=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,o=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,p=e.ariaHidden,m=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,l.default)({"aria-hidden":p,sizes:a,srcSet:r,src:i},m,{onLoad:o,onError:c,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));j.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var C=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=b&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!y&&v&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||b&&(y||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=d.default.createRef(),a.placeholderRef=t.placeholderRef||d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:b}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=L(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),(a=p(t))&&(g[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,o=e.imgStyle,s=void 0===o?{}:o,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,g=e.fluid,h=e.fixed,y=e.backgroundColor,b=e.durationFadeIn,v=e.Tag,S=e.itemProp,x=e.loading,R=e.draggable,L=g||h;if(!L)return null;var C=!1===this.state.fadeIn||this.state.imgLoaded,P=!0===this.state.fadeIn&&!this.state.imgCached,T=(0,l.default)({opacity:C?1:0,transition:P?"opacity "+b+"ms":"none"},s),z="boolean"==typeof y?"lightgray":y,_={transitionDelay:b+"ms"},V=(0,l.default)({opacity:this.state.imgLoaded?0:1},P&&_,s,f),H={title:t,alt:this.state.isVisible?"":a,style:V,className:p,itemProp:S},A=this.state.isHydrated?m(L):L[0];if(g)return d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden",maxWidth:A.maxWidth?A.maxWidth+"px":null,maxHeight:A.maxHeight?A.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(A.srcSet)},d.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/A.aspectRatio+"%"}}),z&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:z,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},P&&_)}),A.base64&&d.default.createElement(I,{ariaHidden:!0,ref:this.placeholderRef,src:A.base64,spreadProps:H,imageVariants:L,generateSources:O}),A.tracedSVG&&d.default.createElement(I,{ariaHidden:!0,ref:this.placeholderRef,src:A.tracedSVG,spreadProps:H,imageVariants:L,generateSources:k}),this.state.isVisible&&d.default.createElement("picture",null,w(L),d.default.createElement(j,{alt:a,title:t,sizes:A.sizes,src:A.src,crossOrigin:this.props.crossOrigin,srcSet:A.srcSet,style:T,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:x,draggable:R})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:E((0,l.default)({alt:a,title:t,loading:x},A,{imageVariants:L}))}}));if(h){var M=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:A.width,height:A.height},n);return"inherit"===n.display&&delete M.display,d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:M,ref:this.handleRef,key:"fixed-"+JSON.stringify(A.srcSet)},z&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:z,width:A.width,opacity:this.state.imgLoaded?0:1,height:A.height},P&&_)}),A.base64&&d.default.createElement(I,{ariaHidden:!0,ref:this.placeholderRef,src:A.base64,spreadProps:H,imageVariants:L,generateSources:O}),A.tracedSVG&&d.default.createElement(I,{ariaHidden:!0,ref:this.placeholderRef,src:A.tracedSVG,spreadProps:H,imageVariants:L,generateSources:k}),this.state.isVisible&&d.default.createElement("picture",null,w(L),d.default.createElement(j,{alt:a,title:t,width:A.width,height:A.height,sizes:A.sizes,src:A.src,crossOrigin:this.props.crossOrigin,srcSet:A.srcSet,style:T,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:x,draggable:R})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:E((0,l.default)({alt:a,title:t,loading:x},A,{imageVariants:L}))}}))}return null},t}(d.default.Component);C.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var P=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),T=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function z(e){return function(t,a,r){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");c.default.checkPropTypes(((i={})[a]=e,i),t,"prop",r)}}C.propTypes={resolutions:P,sizes:T,fixed:z(c.default.oneOfType([P,c.default.arrayOf(P)])),fluid:z(c.default.oneOfType([T,c.default.arrayOf(T)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var _=C;t.default=_},RXBc:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return C}));var r=a("wx14"),i=a("q1tI"),n=a("SVgp"),o=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,s=Object(n.a)((function(e){return o.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91})),l=a("cSFU"),d=a("eVQB"),c=a("Exhd"),u=s,f=function(e){return"theme"!==e},p=function(e){return"string"==typeof e&&e.charCodeAt(0)>96?u:f},m=function(e,t,a){var r;if(t){var i=t.shouldForwardProp;r=e.__emotion_forwardProp&&i?function(t){return e.__emotion_forwardProp(t)&&i(t)}:i}return"function"!=typeof r&&a&&(r=e.__emotion_forwardProp),r},g=function e(t,a){var n,o,s=t.__emotion_real===t,u=s&&t.__emotion_base||t;void 0!==a&&(n=a.label,o=a.target);var f=m(t,a,s),g=f||p(u),h=!g("as");return function(){var y=arguments,b=s&&void 0!==t.__emotion_styles?t.__emotion_styles.slice(0):[];if(void 0!==n&&b.push("label:"+n+";"),null==y[0]||void 0===y[0].raw)b.push.apply(b,y);else{0,b.push(y[0][0]);for(var v=y.length,S=1;S<v;S++)b.push(y[S],y[0][S])}var w=Object(l.e)((function(e,t,a){var r=h&&e.as||u,n="",s=[],m=e;if(null==e.theme){for(var y in m={},e)m[y]=e[y];m.theme=Object(i.useContext)(l.b)}"string"==typeof e.className?n=Object(d.a)(t.registered,s,e.className):null!=e.className&&(n=e.className+" ");var v=Object(c.a)(b.concat(s),t.registered,m);Object(d.b)(t,v,"string"==typeof r);n+=t.key+"-"+v.name,void 0!==o&&(n+=" "+o);var S=h&&void 0===f?p(r):g,w={};for(var x in e)h&&"as"===x||S(x)&&(w[x]=e[x]);return w.className=n,w.ref=a,Object(i.createElement)(r,w)}));return w.displayName=void 0!==n?n:"Styled("+("string"==typeof u?u:u.displayName||u.name||"Component")+")",w.defaultProps=t.defaultProps,w.__emotion_real=w,w.__emotion_base=u,w.__emotion_styles=b,w.__emotion_forwardProp=f,Object.defineProperty(w,"toString",{value:function(){return"."+o}}),w.withComponent=function(t,i){return e(t,Object(r.a)({},a,{},i,{shouldForwardProp:m(w,i,!0)})).apply(void 0,b)},w}},h=a("Wbzz"),y=a("9eSz"),b=a.n(y),v=a("AeFk"),S=a("Bl7J"),w=a("vrFN");var x=g("article",{target:"e13wsbj02",label:"Article"})({name:"m03l9c",styles:'font-family:"Open Sans",sans-serif;margin:7rem 0;display:flex;flex-direction:row;@media (max-width: 600px){flex-direction:column;}'}),k=g("div",{target:"e13wsbj01",label:"FeaturedImage"})({name:"q05j76",styles:"margin-bottom:12px;width:100%;flex:1"}),O=g("div",{target:"e13wsbj00",label:"HeaderGroup"})({name:"1m811f1",styles:"margin-left:20px;flex:3;@media (max-width: 600px){margin-left:0;}"}),R={name:"w76rkm",styles:"margin-bottom:0.4rem;font-size:2.6rem;line-height:1.3"},L={name:"xd2og6",styles:'margin-bottom:0.8rem;font-family:"Andika New Basic",sans-serif;font-size:1.8rem;font-weight:400;color:#666'},E={name:"7hggs",styles:"margin-bottom:0.8rem;font-size:1.4rem;color:#666"},I=Object(v.b)("",""),j={name:"7ojh96",styles:"display:inline-block;margin:2px;padding:0 8px;border-radius:4px;font-size:1rem;text-transform:uppercase;text-align:center;line-height:2;background-color:#fee"},C=(t.default=function(e){var t=e.data,a=t.allMarkdownRemark.edges,r=t.site.siteMetadata;return Object(v.c)(S.a,null,Object(v.c)(w.a,{title:r.title,description:r.tagline}),a.map((function(e){var t=e.node,a=t.frontmatter.featuredImage,r=a?a.childImageSharp:null;return Object(v.c)(x,{key:t.id},Object(v.c)(k,null,Object(v.c)(h.Link,{to:t.frontmatter.slug},r&&Object(v.c)(b.a,{fluid:Object.assign({},r.fluid,{aspectRatio:1.5})}))),Object(v.c)(O,null,Object(v.c)("div",{css:E},t.frontmatter.date," • ",t.timeToRead," min read"),Object(v.c)(h.Link,{to:t.frontmatter.slug},Object(v.c)("h1",{css:R},t.frontmatter.title),Object(v.c)("h2",{css:L},t.frontmatter.subtitle)),Object(v.c)("div",{css:I},t.frontmatter.tags.map((function(e){return Object(v.c)("span",{key:e,css:j},e)})))))})))},"1960179982")}}]);
//# sourceMappingURL=component---src-pages-index-js-775a7ece3eb7b23ec1d1.js.map