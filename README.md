#RSquashScript#

##Description##
Small Javascript extension used for plug.dj to automate some features such as wooting, giving everyone bouncer permissions, notifications on when a user joins or leaves the room followed by a user status list, notifications on change of user's status (everytime a song advances in play), and joining the dj waitlist when executed. 

See below for a list of chat commands and how they are used.


**List of chat commands for plug.js (starting with a forward slash '/' in the chat. Some commands inherited by default):**

    /skip - skips the current dj and song

    /vol [#] - sets the volume to a specified value (replace # with 0 - 100)

    /dance - toggle the settings option for dancing avatars

    /roll - toggle the settings option for avatar rollovers

    /bg - toggle the settings option for background animation

    /av - toggle the settings option for audio/video streaming

    /notif - toggle the settings options for notifications

    /cap [#] - limits the number of avatars to be rendered (replace # with 1 - 200)

    /tall - toggle all of the options in settings that don't require the page to refresh. Use
    when entering browser incognito mode and want to switch to a conservative state to 
    reduce CPU load and memory usage

    /showst - shows the status list for everyone in the room (Available, AFK, etc.)

    /setst [status as a string without quotes] - sets the status of the logged-in user with the 
    given string. Strings input options are "Available", "AFK", "Working", or "Gaming" which
    are all case sensitive. For example, "/setst Available" would set the status to Available.

    /getst - returns the status of the logged-in user

    /setstmsg [status message string without quotes] - sets a status message, associated to the 
    logged-in user, to display when the status list is shown (when someone enters or leaves the 
    room only). If user isn't the host, calling /showst will show a simplified version of the 
    status list with only the status of the users as opposed to the mapped status messages. 
    For example, "/setstmsg Hello" would set the status message to "Hello"

    /getstmsg - gets the current status message of the logged-in user

    /getwl - gets the waitlist including the DJ

    /add [@username] - adds user with username to the waitlist

    /rm [@username] - removes user with username from the booth or the waitlist

    /ban [@username] - bans the user from the room permanently (or until his name is removed 
    from the ban list through the GUI)

    /rmst [@username] - removes user with username from staff

    /clear - clears the chat history


**Description on what bouncers can do:**

http://blog.plug.dj/2012/11/plug-dj-new-server-and-moderation-tools/

##How to use##
Use with browser extensions/add-ons Tampermonkey (if on Google Chrome) or Greasemonkey (if on Mozilla Firefox). After installing 
either Tampermonkey or Greasemonkey, visit http://userscripts.org/scripts/show/392427 to install the userscript.

Images for guidance:

Step 1: https://www.dropbox.com/s/x04pbjrtyvgpw9f/step1.JPG

Step 2: https://www.dropbox.com/s/esa2bopvihg0slg/step2.JPG
