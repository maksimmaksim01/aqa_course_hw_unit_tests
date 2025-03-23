class Employee {
  #salary;

  constructor(firstName, lastName, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.#salary = salary;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    if (value.length >= 2 && value.length <= 50 && /^[a-z]+$/.test(value.toLowerCase())) {
      this._firstName = value;
    } else {
      throw new Error('First Name length must be between 2 and 50 Latin characters');
    }
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    if (value.length >= 2 && value.length <= 50 && /^[a-z]+$/.test(value.toLowerCase())) {
      this._lastName = value;
    } else {
      throw new Error('Last Name length must be between 2 and 50 Latin characters');
    }
  }

  get salary() {
    return this.#salary;
  }

  set salary(value) {
    if (typeof value === 'number' && value > 0 && value < 10000) {
      this.#salary = value;
    } else {
      throw new Error('Salary must be greater than zero and less than ten thousands');
    }
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Developer extends Employee {
  #programmingLanguages = [];

  constructor(firstName, lastName, salary, programmingLanguages = []) {
    super(firstName, lastName, salary);
    this.programmingLanguages = programmingLanguages;
  }

  get programmingLanguages() {
    return this.#programmingLanguages;
  }

  set programmingLanguages(value) {
    this.#programmingLanguages = value;
  }

  addProgrammingLanguage(language) {
    if (typeof(language) === "string" && language.length > 0) {
      this.programmingLanguages.push(language);
    } else {
      throw new Error('invalid programming language');
    }
  }
}

class Manager extends Employee {
  constructor(firstName, lastName, salary, teamSize) {
    super(firstName, lastName, salary);
    this.teamSize = teamSize;
  }

  increaseTeamSize() {
    this.teamSize++;
  }
}

class Designer extends Employee {
  constructor(firstName, lastName, salary, designTools = []) {
    super(firstName, lastName, salary);
    this.designTools = designTools;
  }

  addDesignTool(tool) {
    if (typeof tool === 'string' && tool.length > 0) {
      this.designTools.push(tool);
    } else {
      throw new Error('invalid design tool');
    }
  }
}

class Company {
  #employees = [];

  getEmployeesByProfession(profession = {}) {
    return this.#employees.filter((el) => el.constructor.name === profession);
  }

  addEmployee(employee) {
    if (
      employee instanceof Employee &&
      !this.#employees.map((emp) => emp.getFullName()).find((el) => el === employee.getFullName())
    ) {
      this.#employees.push(employee);
    } else {
      throw new Error('Parameter must be an instanse of the Employee class and unique');
    }
  }

  getEmployees() {
    return this.#employees;
  }
}

export { Employee, Company, Designer, Developer, Manager };
