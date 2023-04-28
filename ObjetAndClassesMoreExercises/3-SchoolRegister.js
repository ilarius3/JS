function schoolRegister(input) {
    let arrStudents = [];
    let result = [];
    for (let element of input) {
      let [elementName, elementGrade, elementScore] = element.split(",");
      let [studentName, personalName] = elementName.split(": ");
      let [grade, gradeNum] = elementGrade.split(": ");
      let [avScore, score] = elementScore.split(": ");
      gradeNum = Number(gradeNum) + 1;
      score = Number(score);
      let student = {
        personalName,
        gradeNum,
        score,
      }
      score >= 3 ? arrStudents.push(student) : null;
    }
    arrStudents.sort((a, b) => a.gradeNum - b.gradeNum);
    let scoreCounter = 0;
    let averageScore = 0;
    let sumScore = 0;
    let names = '';
    let currentGrade = null;
    for (let i = 0; i < arrStudents.length; i++) {
      let currentStudent = arrStudents[i];
      let currentScore = currentStudent.score;
      let currentGradeNum = currentStudent.gradeNum;
      if (currentGradeNum !== currentGrade) {
        if (currentGrade !== null) {
          averageScore = sumScore / scoreCounter;
          let students = names.slice(0, -2);
          result.push(`${currentGrade} Grade\nList of students: ${students}\nAverage annual score from last year: ${averageScore.toFixed(2)}\n`);
        }
        currentGrade = currentGradeNum;
        names = '';
        sumScore = 0;
        scoreCounter = 0;
      }
      names += currentStudent.personalName + ', ';
      sumScore += currentScore;
      scoreCounter += 1;
    }
    // handle last grade
    averageScore = sumScore / scoreCounter;
    let students = names.slice(0, -2);
    result.push(`${currentGrade} Grade\nList of students: ${students}\nAverage annual score from last year: ${averageScore.toFixed(2)}\n`);
    console.log(result.join('\n'));
  }
  schoolRegister([
    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
])
