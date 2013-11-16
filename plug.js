/*
* Description: This script 
* (1) automates wooting, 
* (2) gives everyone bouncer permissions, 
* (3) enables some extra chat commands (see below)
* (4) joins the dj waitlist 
*
* List of chat commands (starting with a forward slash '/' in the chat. 
*  Some commands inherited by default):
*    /skip - skips the current dj and song
*    /vol # - sets the volume to a specified value (replace # with 0 - 100)
*    /showst - shows the status list for everyone in the room (Available, AFK, etc.)
*    /clear - clears the chat history
*    /cap # - limits the number of avatars to be rendered (replace # with 1 - 200)    
*/

/*
* Description: This function creates a <username>, <value> hashmap with a given 
* list of users and a value describing the type of value associating to the key.
* Parameter: users is the user Object list usually retrieved from API.getUsers()
* Parameter: value is the data associated or mapped to the username keys
* Return: returns either a <username>,<id> hashmap or a <username>,<status> hashmap
*/
function createHashMap(users, value) {
    var usersHashMap = new Object();

    if (value == "id") {
        for (var i in users) {
            usersHashMap[users[i].username] = users[i].id;
        }
    }

    else if (value == "status") {
        for (var i in users) {
            usersHashMap[users[i].username] = users[i].status;
        } 
    }

    else {
        alert("Error: value does not exist");
        usersHashMap = null;
    }

    return usersHashMap;
}

/*
* Description: parseStatus parses the input status number and returns the status referenced to
* as a string
* Parameter: status is the integer value mapped to the status
* Return: returns the status as the string value that the integer value maps to
*/
function parseStatus(status) {
    var s; 

    switch (status) {
    case 0:
        s = "Available";
        break;
    case 1:
        s = "AFK";
        break;
    case 2:
        s = "Working";
        break;
    case 3:
        s = "Gaming";
        break;
    default:
        s = 0;
        alert("Error: Status does not exist\n");
        break;
    }

    return s;
}

/*
* Description: displays the status list mapped to all the users in the room
*/
function displayStatusList() {
    users = API.getUsers();

    API.sendChat(" ");
    API.sendChat("Automated message: Status list for current people in the room: ");

    for (var i = 0; i < users.length; i++) {
        status = parseStatus(users[i].status);
        API.sendChat("Automated message: " + users[i].username + " is " + status);
    }
    
    API.sendChat(" ");
}

/*
* Description: performs a specific set of actions based on the chat command passed in as an 
* argument. Use as a callback.
* Parameter: value contains the string containing the chat command to be parsed
*/
function command(value) {
    cmd = value.split(" ");

    if (cmd[0] == "/skip") 
        API.moderateForceSkip();      
    else if (cmd[0] == "/vol")
        API.setVolume(parseInt(cmd[1])); 
    else if (cmd[0] == "/showst")
        displayStatusList();
    else
        alert(value + " is an invalid chat command.");
}

/*
* Description: checks for status changes
* Parameter: oldUsersHashMap contains a <username>,<status> hashmap snapshot of the previously
* most recent user list
*/
function pollStatusChange(oldUsersHashMap) {
    var newUsers = API.getUsers();

    for (var i in newUsers) {
        if (oldUsersHashMap.hasOwnProperty(newUsers[i].username) && 
            newUsers[i].status != oldUsersHashMap[newUsers[i].username]) {
            API.sendChat("Automated message: " + newUsers[i].username + " changed status to " +
                newUsers[i].status);
        }
    }
}

/*
* Description: autowoots on the advancement of a track. Use as a callback.
* Parameter: obj is an array of user objects and the current media object
*/
function autowoot(obj) {
    $("#woot").click();

    pollStatusChange(statusMap);
}

/*
* Description: sets everyone in the room to bouncer permissions
*/
function setEveryoneToBouncer() {
    users = API.getUsers();

    for (var i = 0; i < users.length; i++) {
        API.moderateSetRole(users[i].id, API.ROLE.BOUNCER);
    } 
}

/*
* Description: callback function when a new user joins the room
* Parameter: user is the user who just entered the room
*/
function usrJoin(user) {
    if (API.hasPermission(API.getUser(null).id, API.ROLE.HOST)) {
        API.moderateSetRole(user.id, API.ROLE.BOUNCER);
        API.sendChat("Automated message: " + user.username + " joined the room! :)");
        displayStatusList();
    }
}

/*
* Description: callback function when a user leaves the room
* Parameter: user is the user who just left the room
*/
function usrLeave(user) {
    if (API.hasPermission(API.getUser(null).id, API.ROLE.HOST)) {
        API.sendChat("Automated message: " + user.username + " left the room! :(");
        displayStatusList();
    }
}

/*
* Description: automatically adds the logged in user to the wait list
*/
function joinWaitList() {
    $("#dj-button").click(); 
}

var users = API.getUsers();
var idMap = createHashMap(users, "id");
var statusMap = createHashMap(users, "status");

autowoot(null);
setEveryoneToBouncer();
joinWaitList();

API.on(API.CHAT_COMMAND, command);
API.on(API.DJ_ADVANCE, autowoot);
API.on(API.USER_JOIN, usrJoin);
API.on(API.USER_LEAVE, usrLeave);

