function read (input) {
    let index = 0;
    let name = input[index]; index++;
    let class_count = 0;
    let count = 0;
    let count2 = 0;
    let av_grade = 0;
    //sum = input[index];
    while (true) {
        let grade = Number(input[index]); index++;
        class_count += 1;
        if (grade < 4) {
            count2 += 1;
            if (count2 == 2) {
                class_count -= 1;
                console.log(`${name} has been excluded at ${class_count} grade`); break;
            }
        }
        //if (grade = 2) {
        //    console.log("Invalid operation!"); break;
        //}
        //console.log(`Increase: + ${count.toFixed(2)}`);
        count += grade;
        av_grade = count/(class_count);
        if (class_count == 12) {
            console.log(`${name} graduated. Average grade: ${av_grade.toFixed(2)}`); break;
        }
    } 
} read (["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])
