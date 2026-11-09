// const multiplyValue = (a: number, b?: number) => {
//     if (typeof b === 'undefined') {
//         return a * 2;
//     }else if (a === 0 || b === 0) {
//         return 0;
//     }else {
//         return a * b;
//     }
// }
var getPopularCourses = function (courses, minStudents) {
    return courses.filter(function (course) { return course.students >= minStudents && course.isPublished; });
};
var courses = [
    { title: "TypeScript Mastery", students: 120, isPublished: true },
    { title: "Draft Course", students: 200, isPublished: false },
    { title: "Basic HTML", students: 45, isPublished: true },
    { title: "Next.js Pro", students: 85, isPublished: true }
];
console.log(getPopularCourses(courses, 80));
