function newYaer(input) {
    let inputline = (input[0]); 
    let index = 1;
    let seats_count = 0;
    let tickets_count = 0;
    let student_count = 0;
    let standard_count = 0;
    let kid_count = 0;
    while (inputline !== "Finish") {
        let title = inputline;
        let av_seats = Number(input[index]); index++;
        inputline = (input[index]); index++;
        while (inputline !== "End") {
            if (av_seats == seats_count) {
                index--; break;
            }
            if (inputline === "standard") {
                standard_count += 1;
                seats_count += 1;
                tickets_count += 1;
            } else if (inputline === "student") {
                student_count += 1;
                seats_count += 1;
                tickets_count += 1;
            } else if (inputline === "kid") {
                kid_count += 1;
                seats_count += 1;
                tickets_count += 1;
            }
            inputline = (input[index]); index++;
            if (inputline === "Finish") {
                index--; break;
            }
        }
        let full_grad = seats_count/av_seats*100;
        console.log(`${title} - ${full_grad.toFixed(2)}% full.`);
        seats_count = 0;
        inputline = (input[index]); index++;
    }
    let standard_perc = standard_count/tickets_count*100;
    let students_perc = student_count/tickets_count*100;
    let kid_perc = kid_count/tickets_count*100;
    console.log(`Total tickets: ${tickets_count}`)
    console.log(students_perc.toFixed(2)+"% student tickets.")
    console.log(standard_perc.toFixed(2)+"% standard tickets.")
    console.log(kid_perc.toFixed(2)+"% kids tickets.")
} newYaer(["The Matrix",
"20",
"student",
"standard",
"kid",
"kid",
"student",
"student",
"standard",
"student",
"End",
"The Green Mile",
"17",
"student",
"standard",
"standard",
"student",
"standard",
"student",
"End",
"Amadeus",
"3",
"standard",
"standard",
"standard",
"Finish"])
