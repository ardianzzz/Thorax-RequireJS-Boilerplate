define(["jquery","underscore","uihelper/spin"],function(e,t,n){var r={setupSpinner:function(t){if(!n)throw"Spinner is not load. Please load Spinner module.";t=t||{};var r={lines:8,length:8,width:6,radius:8,corners:1,rotate:0,direction:1,color:"#000",speed:1,trail:60,shadow:!1,hwaccel:!1,className:"spinner",zIndex:2e9,top:"auto",left:"auto"};return r=e.extend(r,t),(new n(r)).spin()}};return{Spinner:r}});