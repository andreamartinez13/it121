    // Your code here 
    // Data
    const grades = "jim|25, sue|32, mary|34, ann|22, ted|28, frank|15, lisa|19, mike|30, ahn|26, vishaya|27";
    // Split the each student and grades individually
    const studentPairs = grades.split(", ");

    // Split each pair into a name and a grade
const studentData = studentPairs.map(pair => {
    const [name, score] = pair.split("|"); // To separate name and score
    return {
        name: name.charAt(0).toUpperCase() + name.slice(1), // Capitalize first letter
        score: parseInt(score) // Convert the score to a number
    };
});

// Order students by scores (lowest to highest))
const sortedByScore = [...studentData].sort((a, b) => a.score - b.score);

// students by alphabetically by their names
const sortedAlphabetically = [...studentData].sort((a, b) => a.name.localeCompare(b.name));

// Total number of students and average score
const totalStudents = studentData.length;
const averageScore = (studentData.reduce((sum, student) => sum + student.score, 0) / totalStudents).toFixed(2);

// Console check
console.log("Student Grades (By Score):");
sortedByScore.forEach(student => {
    console.log(`${student.name} - ${student.score}`);
});

console.log("\nStudent Grades (Alphabetical Order):");
sortedAlphabetically.forEach(student => {
    console.log(`${student.name} - ${student.score}`);
});

console.log(`\n# Total Students: ${totalStudents}`);
console.log(`Average Score: ${averageScore}`);