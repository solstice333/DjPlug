
responses = ["I'm liking this song", "Sup ChillBot", "This is pretty chill", 
 "How's it going ChillBot?", "Hmmmm", "Cool track", "Sweet track", "Hey ChillBot",
 "Chill vibe", ":)", "Nice song", "Good song", "Nice track", "Good track",
 "Cool song", "Chill song", "Yeeeah", ":D", ":>", "So relaxing", "Very nice music",
 "Nice music", "Good music", "Cool music", "Chill music", "Very good music", 
 "Very chill music", "Very cool music", "Really nice song", "Really good song",
 "Really nice track", "Really good track", "Really chill song", 
 "Really chill track", "Sweet track", "Sweet song", "Really sweet track", 
 "Really sweet song", "Pretty sweet track", "Pretty sweet song", 
 "Pretty cool track", "Pretty cool song", "Pretty good track", 
 "Pretty good song", "@ChillBot I'm here", "@ChillBot here", 
 "@ChillBot I'm still here dammit", "@ChillBot, still here", 
 "@ChillBot, I'm still here"];

function chat_arrival(data) {
   if (data.un == "ChillBot") {
      if (data.message.search(/@solstice333, You have been AFK for .* please .* within .* minutes or .*\./i) != -1) { 
         var index = Math.floor(Math.random() * responses.length);
         API.sendChat(responses[index]);
      }
   }
}

function chat_every_hour() {
   setInterval(function() { 
      var index = Math.floor(Math.random() * responses.length);
      API.sendChat(responses[index]);
   }, 60 * 60 * 1000);
}

function join_waitlist() {
   API.djJoin();
}

API.on(API.CHAT, chat_arrival);
// API.on(API.ADVANCE, join_waitlist);
// chat_every_hour();
