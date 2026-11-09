// const multiplyValue = (a: number, b?: number) => {
//     if (typeof b === 'undefined') {
//         return a * 2;
//     }else if (a === 0 || b === 0) {
//         return 0;
//     }else {
//         return a * b;
//     }
// }
// const processInput = (input: string | number | boolean) => {
//     if (typeof input === 'string') {
//         return input.trim().toUpperCase();
//     }else if (typeof input === 'number') {
//         return (input * 10);
//     }else if (typeof input === 'boolean') {
//         if (input === true) {
//             return 'Active';
//         }else {
//             return 'Inactive';
//         }
//     }
// }
// const formatCoordinate = (coordinate: readonly [latitude: number, longitude: number, locationName: string])=> {
//     return `Location: ${coordinate[2]} (${coordinate[0]} - ${coordinate[1]})`;
// }
// const concatenateArrays = <T>(arr1: T[], arr2: T[], arr3?: T[] ) : T[] => {
//     return [...arr1, ...arr2, ...arr3 || []];
// }
// interface Course {
//     title: string;
//     students: number;
//     isPublished: boolean;
// }
// type MinStudents = number;
// const getPopularCourses = (courses: Course[], minStudents:MinStudents ) : Course [] => {
//    return courses.filter(course => course.students >= minStudents && course.isPublished);
// }
var pluckValues = function (users, key) {
    return users.map(function (item) { return item[key]; });
};
var users = [
    { id: 1, name: "Rakib", role: "Admin" },
    { id: 2, name: "Sadia", role: "Editor" },
    { id: 3, name: "Tariq", role: "Subscriber" }
];
console.log(pluckValues(users, "name"));
console.log(pluckValues(users, "id"));
