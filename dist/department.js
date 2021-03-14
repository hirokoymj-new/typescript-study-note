"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    static createEmployee(name) {
        return { name, fiscalYear: Department.ficscalYear };
    }
    addEmployees(employee) {
        this.employees.push(employee);
    }
    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.ficscalYear = 2020;
const employee1 = Department.createEmployee("Hiroko");
console.log(employee1);
console.log(Department.ficscalYear);
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "d1");
        this.admins = admins;
    }
    describe() {
        console.log("IT Department - ID: " + this.id);
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, "d2");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    static getInstance() {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment("d2", []);
        return this.instance;
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw Error("No Report found");
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error("Please pass in a valid value!");
        }
        this.addReport(value);
    }
    addReport(text) {
        this.reports.push(text);
    }
    printReports() {
        console.log(this.reports);
    }
    describe() {
        console.log("Accounting Department - ID: " + this.id);
    }
}
const it = new ITDepartment("d1", ["Max"]);
it.describe();
it.addEmployees("Hiroko");
it.addEmployees("David");
it.printEmployeeInfo();
console.log(it);
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
accounting.describe();
accounting.addEmployees("Lisa");
accounting.addEmployees("Mike");
accounting.printEmployeeInfo();
accounting.addReport("My report -1");
accounting.addReport("My report -2");
accounting.mostRecentReport = "The latest Report";
accounting.printReports();
