const student = {
    name: "riya",
    age: 24,
    grade: [50, 40, 30, 70],
    subjectArr: ["english", "math", "science", "sst"],


};
function displayInfo(message) {
    console.log(this.name);
    console.log(this.age);
    console.log(this.grade);
    console.log(message);
}
let boundDisplayInfo = displayInfo.bind(student);
let message1 = displayInfo.call(student, "hello");
let message2 = displayInfo.apply(student, ["hi", "hiiii"]);
function processSubjects(Arr, func) {
    func(Arr);
}


function func2(subjectArr) {
    for (let subject of subjectArr) {
        console.log(subject);
    }

}



// let grade = [50, 40, 30, 70];
// let newGrade = grade.map((g) => {
//     return g * 2;
// })
// console.log(grade);
// console.log(newGrade);
function doubleGrade(grade) {
    return grade * 2;
}
let newGrade = student.grade.map(doubleGrade);
// console.log(grade);
// console.log(newGrade);
// let doubleGrades = doubleGrade.bind(student);

console.log(student.grade);
console.log(newGrade);
// function passingSubjects() {

// }
function processSubjects(student, mingrade) {
    let subjects = student.subjectArr.filter((subject, index) => {
        return student.grade[index] >= mingrade;
    });
    console.log(subjects);
}

processSubjects(student, 70);