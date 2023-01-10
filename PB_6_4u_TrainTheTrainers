function read(input) {
    let index = 0;
    let num_notes = Number(input[index]); index++;
    let title = (input[index]);
    let note_counter = 0;
    let all_note_counter = 0;
    let title_counter = 0;
    let average_note = 0;
    let all_note_av = 0;
    while (title !== "Finish") {
        index++; title_counter++;
        for (i = 1; i <= num_notes; i++) {
            let note = Number(input[index]); index++;
            note_counter += note;
            average_note = note_counter/num_notes;
        }
        console.log(title + " - " + average_note.toFixed(2) + ".");
        note_counter = 0;
        all_note_counter += average_note;
        all_note_av = all_note_counter/title_counter;
        title = (input[index]);
        if (title === "Finish") {
            console.log(`Student's final assessment is ${all_note_av.toFixed(2)}.`);
            break;
        }
    }
} read(["3", "Arrays", "4.53", "5.23", "5.00", "Lists", "5.83", "6.00", "5.42", "Finish"])
