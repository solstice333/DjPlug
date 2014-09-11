// ==UserScript==
// @name       Hack ChillBot
// @include    https://plug.dj/*
// @namespace  https://plug.dj/*
// @version    1.00
// @description  Plug.dj Automation
// @grant
// @copyright  2014, Kevin Navero
// ==/UserScript==

var ready = function() {
   var check = {
      poll: function() {
          if (typeof API !== 'undefined' && API.enabled)
              this.main();
          else
              setTimeout(function() { check.poll(); }, 100);
      },

      main: function() {
         console.log('hacking ChillBot now...');
         $.getScript('https://raw.githubusercontent.com/solstice333/DjPlug/hack_chill_bot/hack_chill_bot_core.js');
      }
   };
   check.poll();
};


var script = document.createElement('script');
script.textContent = '(' + ready.toString() + ')();';
document.head.appendChild(script);

