var student = [{"name":"Alex","age":"23","course":"FSD"},
{"name":"Ben","age":"20","course":"Python"},
{"name":"Catherine","age":"","course":"Java"},
{"name":"David","age":"23","course":"AI"},
{"name":"Eliza","age":"25","course":"Data Science"},
{"name":"Frankin","age":"26","course":"SQL"}];

for(i=0;i<student.length;i++){
    console.log(student[i].name);
}
for(i in student){
    console.log(student[i].course);
}