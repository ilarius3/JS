function schoolGrades(input) {
    for (let student of input) {
        let gradesCounter = 0;
        let averageGrade = 0;
        let notes = 0; 
        let firstSpaceIndex = student.indexOf(" ");
        let personName = student.substring(0, firstSpaceIndex);
        let grades = student.substring(firstSpaceIndex + 1);
        for (const grade in grades) {
            let note = Number(ParseInt(grades));
            notes += Number(note);
            gradesCounter++
            averageGrade = notes / gradesCounter;
        }
        let gradesList = {
            personName,
            averageGrade,
            gradesCounter
        };
        console.log(personName);
        console.log(gradesList);

    }
}
schoolGrades(['Lilly 4 6 6 5',

    'Tim 5 6',

    'Tammy 2 4 3',

    'Tim 6 6'])
