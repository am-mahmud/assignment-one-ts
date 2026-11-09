const multiplyValue = (a, b) => {
    if (typeof b === 'undefined') {
        return a * 2;
    }
    else if (a === 0 || b === 0) {
        return 0;
    }
    else {
        return a * b;
    }
};
multiplyValue(10);
multiplyValue(10, 5);
multiplyValue(7, 0);
const processInput = (input) => {
    if (typeof input === 'string') {
        return input.trim().toLowerCase();
    }
    if (typeof input === 'number') {
        return input * 10;
    }
    return input === true ? 'Active' : 'Inactive';
};
processInput("  TypeScript  ");
processInput(7);
processInput(true);
processInput(false);
const formatCoordinate = (coordinate) => {
    return `Location: ${coordinate[2]} (${coordinate[0]}, ${coordinate[1]})`;
};
formatCoordinate([23.81, 90.41, "Dhaka"]);
formatCoordinate([22.35, 91.78, "Chittagong"]);
const concatenateArrays = (...arrays) => {
    return arrays.flat();
};
concatenateArrays(["a", "b"], ["c", "d"]);
concatenateArrays([1, 2], [3, 4], [5]);
const getPopularCourses = (courses, minStudents) => {
    return courses.filter(course => course.students >= minStudents && course.isPublished);
};
const courses = [
    { title: "TypeScript Mastery", students: 120, isPublished: true },
    { title: "Draft Course", students: 200, isPublished: false },
    { title: "Basic HTML", students: 45, isPublished: true },
    { title: "Next.js Pro", students: 85, isPublished: true }
];
getPopularCourses(courses, 80);
const pluckValues = (users, key) => {
    return users.map(item => item[key]);
};
const users = [
    { id: 1, name: "Rakib", role: "Admin" },
    { id: 2, name: "Sadia", role: "Editor" },
    { id: 3, name: "Tariq", role: "Subscriber" }
];
pluckValues(users, "name");
pluckValues(users, "id");
class Employee {
    name;
    baseSalary;
    constructor(name, baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
    getDetails() {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}
class Manager extends Employee {
    department;
    constructor(name, baseSalary, department) {
        super(name, baseSalary);
        this.department = department;
    }
    getRoleInfo() {
        return `Manager of ${this.department}: ${this.name}`;
    }
}
const manager = new Manager("Alice", 50000, "Engineering");
manager.getDetails();
manager.getRoleInfo();
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
await validateAgeAsync(20);
await validateAgeAsync(15);
