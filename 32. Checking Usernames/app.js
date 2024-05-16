var current_users = ["user1", "user2", "user3", "user4", "user5"];
var new_users = ["userB", "userC", "User1", "User2", "userA"];
new_users.forEach(function (Newuser) {
    if (current_users.some(function (CurrentUser) { return CurrentUser.toUpperCase() === Newuser.toUpperCase(); })) {
        console.log("".concat(Newuser, " have to find a newuser name."));
    }
    else {
        console.log("username is available.");
    }
});
