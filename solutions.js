// const multiplyValue = (a: number, b?: number) => {
//     if (typeof b === 'undefined') {
//         return a * 2;
//     }else if (a === 0 || b === 0) {
//         return 0;
//     }else {
//         return a * b;
//     }
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Employee = /** @class */ (function () {
    function Employee(name, baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
    Employee.prototype.getDetails = function () {
        return "Employee: ".concat(this.name, ", Base Salary: ").concat(this.baseSalary);
    };
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, baseSalary, department) {
        var _this = _super.call(this, name, baseSalary) || this;
        _this.department = department;
        return _this;
    }
    Manager.prototype.getRoleInfo = function () {
        return "Manager of ".concat(this.department, ": ").concat(this.name);
    };
    return Manager;
}(Employee));
// Sample Input:
var manager = new Manager("Alice", 50000, "Engineering");
console.log(manager.getDetails());
console.log(manager.getRoleInfo());
// Sample Output:
"Employee: Alice, Base Salary: 50000";
"Manager of Engineering: Alice";
