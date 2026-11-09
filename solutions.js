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
// const pluckValues = <T, K extends keyof T>(users: T[], key: K) : T[K][] => {
//     return users.map(item => item[key]);
// }
// class Employee {
//    protected name: string;
//    private baseSalary: number;
//     constructor(name: string, baseSalary: number) {
//         this.name = name;
//         this.baseSalary = baseSalary;
//     }
//      getDetails() {
//        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
//     }
// }
// class Manager extends Employee {
//    private department: string;
//     constructor(name: string, baseSalary: number, department: string) {
//         super(name, baseSalary);
//         this.department = department;
//     }
//    getRoleInfo() {
//         return `Manager of ${this.department}: ${this.name}`;
//     }
// }
const validateAgeAsync = (age) => {
    return new Promise((resolve, reject) => {
        if (age < 18) {
            reject(new Error("Access Denied: Must be 18 or older"));
            return;
        }
        setTimeout(() => {
            resolve("Access Granted");
        }, 1000);
    });
};
export { validateAgeAsync };
// Sample Input 1:
console.log(await validateAgeAsync(15));
// Sample Input 2:
// await validateAgeAsync(15);
