/*
* Description: temp.js is intended to be a temporary solution while plug.dj fixes
* it's pathetic bugs with their web application
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

function usrJoin(user) {
    if (API.hasPermission(API.getUser(null).id, API.ROLE.HOST)) {
        API.moderateSetRole(user.id, API.ROLE.BOUNCER);
        API.sendChat("Automated message: " + user.username + " joined the room! :)");
        displayStatusList();
    }
}

function usrLeave(user) {
    if (API.hasPermission(API.getUser(null).id, API.ROLE.HOST)) {
        API.sendChat("Automated message: " + user.username + " left the room! :(");
        displayStatusList();
    }
}

function autowoot(obj) {
    $("#woot").click();
}

function setEveryoneRole() {
    users = API.getUsers();

    for (var i = 0; i < users.length; i++) {
        API.moderateSetRole(users[i].id, API.ROLE.BOUNCER);
    } 
}

function displayStatusList() {
    users = API.getUsers();

    API.sendChat(" ");
    API.sendChat("Automated message: Status list for current people in the room: ");

    for (var i = 0; i < users.length; i++) {
        API.sendChat("Automated message: " + users[i].username + " is " + 
            parseStatus(users[i].status));
    }
    
    API.sendChat(" ");
}

API.chatLog("Setting up temp.js...");

autowoot(null);
setEveryoneRole();
API.djJoin();

API.on(API.CHAT_COMMAND, command);
API.on(API.DJ_ADVANCE, autowoot);
API.on(API.USER_JOIN, usrJoin);
API.on(API.USER_LEAVE, usrLeave);

API.chatLog("temp.js script setup finished!");
