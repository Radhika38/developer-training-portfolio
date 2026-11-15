const studentName = "Radhika";
const marks = 85;

console.log("===== STUDENT RESULT =====");
console.log("Student:", studentName);
console.log("Marks:", marks);

if (marks >= 90) {
    console.log("Grade: A");
} else if (marks >= 75) {
    console.log("Grade: B");
} else if (marks >= 60) {
    console.log("Grade: C");
} else if (marks >= 35) {
    console.log("Grade: D");
} else {
    console.log("Result: Fail");
}
