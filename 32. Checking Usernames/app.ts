let current_users: string[] = ["user1", "user2", "user3", "user4", "user5"];
let new_users: string[] = ["userB", "userC", "User1", "User2", "userA"];
new_users.forEach((Newuser) => {
  if (
    current_users.some(
      (CurrentUser) => CurrentUser.toUpperCase() === Newuser.toUpperCase()
    )
  ) {
    console.log(`${Newuser} have to find a newuser name.`);
  } else {
    console.log("username is available.");
  }
});