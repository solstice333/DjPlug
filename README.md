#Plugged#

##Description##
Small Javascript extension used for plug.dj to automate some features such as wooting, giving everyone bouncer permissions, notifications on when a user joins or leaves the room followed by a user status list, notifications on change of user's status (everytime a song advances in play), and joining the dj waitlist when executed. Also enables a few extra chat commands (see below):


**List of chat commands (starting with a forward slash '/' in the chat. Some commands inherited by default):**

/skip - skips the current dj and song

/vol # - sets the volume to a specified value (replace # with 0 - 100)

/showst - shows the status list for everyone in the room (Available, AFK, etc.)

/stmsg <status message string without quotes> - sets a status message, associated to the logged-in user, to display when the status list is shown (when someone enters or leaves the room, or if /showst is called manually as a chat command)

/add <username> - adds user with username to the waitlist

/rm <username> - removes user with username from the booth or the waitlist

/ban <username> - bans the user from the room permanently (or until his name is removed from the ban list through the GUI)

/rmst <username> - removes user with username from staff

/clear - clears the chat history

/cap # - limits the number of avatars to be rendered (replace # with 1 - 200) 



**Description on what bouncers can do:**

http://support.plug.dj/entries/21708648-What-are-Ambassadors-Hosts-Co-Hosts-Bouncers-Managers-

##How to use##
Inject (Copy/Paste) the code in plug.js into your web browser's console (Ctrl + Shift + K on Firefox, Ctrl + Shift + J on Chrome) to enable special features.  
