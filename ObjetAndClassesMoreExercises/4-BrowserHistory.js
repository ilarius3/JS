function browserHistory(obj, inputArray) {
    let result = [];
    for (const line of inputArray) {
        let [command, site] = line.split(" ");
        switch (command) {
            case 'Close': {
                if (obj['Open Tabs'].includes(site)) {
                    obj['Recently Closed'].push(site);
                    let indexOfSite = obj['Open Tabs'].findIndex(el => el === site)
                    obj['Open Tabs'].splice(indexOfSite, 1);
                    obj['Browser Logs'].push(line);
                } break;
            }
            case 'Open': {
                obj['Open Tabs'].push(site);
                obj['Browser Logs'].push(line);
            } break;
        }
        if (line === 'Clear History and Cache') {
            obj['Open Tabs'] = [];
            obj['Recently Closed'] = [];
            obj['Browser Logs'] = [];
        }
    }
    for (const key in obj) {
        result.push(obj[key])
    }
    console.log(result[0])
    console.log(`Open Tabs: ${result[1].join(", ")}`)
    console.log(`Recently Closed: ${result[2].join(", ")}`)
    console.log(`Browser Logs: ${result[3].join(", ")}`)
}

browserHistory({
    "Browser Name": "Google Chrome",
    "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
    "Recently Closed": ["Yahoo", "Gmail"],
    "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]
},
    ["Close Facebook", "Open StackOverFlow", "Open Google"]);
/* browserHistory({
    "Browser Name": "Mozilla Firefox",
    "Open Tabs": ["YouTube"],
    "Recently Closed": ["Gmail", "Dropbox"],
    "Browser Logs": ["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]
},
    ["Open Wikipedia", "Clear History and Cache", "Open Twitter"])
 */
