
responses = ["I'm sorry ChillBot. Just don't hurt me", "hello", "I'm here", 
 "Sup", "How's it going?", "Hmmmm", "Cool track", "hi"];

function chat_arrival(data) {
   if (data.un == "ChillBot") {
      if (data.message.search(/@solstice333, you have been AFK for .* please respond within .* minutes or you will be removed./i) != -1) { 
         var index = Math.floor(Math.random() * responses.length);
         API.sendChat(responses[index]);
      }
   }
}

function join_waitlist() {
   API.djJoin();
}

API.on(API.CHAT, chat_arrival);
API.on(API.ADVANCE, join_waitlist);