function messageManager(input) {
    let capacity = Number(input.shift());
    let users = {};
    for (let line of input) {
        if (line === "Statistics") {
            break;
        }
        let [command, username, sent, received] = line.split("=");
        if (command === "Add") {
            sent = Number(sent);
            received = Number(received);
            if (!users.hasOwnProperty(username)) {
                users[username] = { sent, received };
            }
        } else if (command === "Message") {
            let sender = username;
            let receiver = sent;

            if (users.hasOwnProperty(sender) && users.hasOwnProperty(receiver)) {
                users[sender].sent++;
                users[receiver].received++;

                if (users[sender].sent + users[sender].received >= capacity) {
                    console.log(`${sender} reached the capacity!`);
                    delete users[sender];
                }
                if (users[receiver].sent + users[receiver].received >= capacity) {
                    console.log(`${receiver} reached the capacity!`);
                    delete users[receiver];
                }
            }
        } else if (command === "Empty") {
            if (username === "All") {
                users = {};
            } else if (users.hasOwnProperty(username)) {
                delete users[username];
            }
        }
    }
    let sortedUsers = Object.entries(users).sort(
        (a, b) => b[1].received + b[1].sent - (a[1].received + a[1].sent)
    );
    console.log(`Users count: ${sortedUsers.length}`);
    for (let [user, messages] of sortedUsers) {
        console.log(`${user} - ${messages.sent + messages.received}`);
    }
}  
messageManager([
    "10",
    "Add=Berg=9=0",
    "Add=Kevin=0=0",
    "Message=Berg=Kevin",
    "Add=Mark=5=4",
    "Statistics",
]);
