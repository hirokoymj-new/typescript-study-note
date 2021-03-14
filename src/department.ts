abstract class Department {
  static ficscalYear = 2020;
  private employees: string[] = [];

  constructor(protected readonly id: string, private name: string) {}

  abstract describe(this: Department): void;

  static createEmployee(name: string) {
    return { name, fiscalYear: Department.ficscalYear };
  }

  addEmployees(employee: string) {
    // this.id = 2; // ERROR - because id is readonly
    this.employees.push(employee);
  }

  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const employee1 = Department.createEmployee("Hiroko");
console.log(employee1);
console.log(Department.ficscalYear);

class ITDepartment extends Department {
  admins: string[];

  constructor(id: string, admins: string[]) {
    super(id, "d1");
    this.admins = admins;
  }
  describe() {
    console.log("IT Department - ID: " + this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  private constructor(id: string, private reports: string[]) {
    super(id, "d2");
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

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value!");
    }
    this.addReport(value);
  }

  addReport(text: string) {
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
// const it = new Department("2", "IT");
// console.log(it);
it.describe();
it.addEmployees("Hiroko");
it.addEmployees("David");
it.printEmployeeInfo();
console.log(it);

// Employee
// const accounting = new AccoutingDepartment("d2", []);
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
accounting.describe();
accounting.addEmployees("Lisa");
accounting.addEmployees("Mike");
accounting.printEmployeeInfo();
// console.log(accounting);

// Report
accounting.addReport("My report -1");
accounting.addReport("My report -2");
accounting.mostRecentReport = "The latest Report";
accounting.printReports();
