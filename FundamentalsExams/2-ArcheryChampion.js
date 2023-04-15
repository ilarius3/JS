function archeryChampion(input) {
    let targetsField = input.shift().split('|').map(x => Number(x));
    let points = 0;
    for (let i = 0; i < input.length; i++) {
        let commandline = input[i].split(' ');
        let command = commandline[0];
        //if (commandline.length > 1) {
        switch (command) {
            case 'Shoot': {
                let target = commandline[1].split('@');
                let direction = target[0];
                let startIndex = Number(target[1]);
                let length = Number(target[2]);
                let restPoints = 0;
                if (direction === 'Right' && (startIndex >= 0 && startIndex < targetsField.length)) {
                    let index = ((startIndex + length) % targetsField.length);
                    if (targetsField[index] < 5){
                        restPoints = targetsField[index];
                        points += restPoints;
                        targetsField[index] = 0;
                    } else {
                    targetsField[index] -= 5; 
                    points += 5;
                    }
                }
                else if (direction === 'Left' && (startIndex >= 0 && startIndex < targetsField.length)) {
                    let index = ((startIndex - length) % targetsField.length);
                    let index2 = targetsField.length + index;
                    if (targetsField[index2] < 5){
                        restPoints = targetsField[index2];
                        points += restPoints;
                        targetsField[index2] = 0;
                    } else {
                    targetsField[index2] -= 5; 
                    points += 5;
                    }
                }
            } break;
            case 'Reverse': {
                targetsField.reverse();
            }
        }
        if (input[i] === "Game over") {
            console.log(`${targetsField[0]} - ${targetsField[1]} - ${targetsField[2]} - ${targetsField[3]} - ${targetsField[4]}`);
            console.log(`John finished the archery tournament with ${points} points!`)
            return;
        }   //джъдж ми даде 50/100 въпреки двата работещи теста
    }
}
archeryChampion(["20|30|40|50|60", "Shoot Left@0@12", "Shoot Right@4@15", "Shoot Left@6@5", 
"Reverse", "Game over"])
