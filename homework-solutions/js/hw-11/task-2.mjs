class Employee {
  #salary;

  constructor(firstName, lastName, profession, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.profession = profession;
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

  get profession() {
    return this._profession;
  }

  set profession(value) {
    if (value && /^[a-z ]+$/.test(value.toLowerCase()) && value.trim().length > 0) {
      this._profession = value;
    } else {
      throw new Error('Profession value allows only Latin characters and spaces');
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
class Company {
  #employees = [];

  constructor(title, phone, address) {
    this._title = title;
    this._phone = phone;
    this._address = address;
  }

  get title() {
    return this._title;
  }

  set title(value) {
    this._title = value;
  }

  get phone() {
    return this._phone;
  }

  set phone(value) {
    this._phone = value;
  }

  get address() {
    return this._address;
  }

  set address(value) {
    this._address = value;
  }

  addEmployee(employee) {
    if (employee instanceof Employee) {
      this.#employees.push(employee);
    } else {
      throw new Error('Parameter must be an instanse of the Employee class');
    }
  }

  getEmployees() {
    return this.#employees;
  }

  getInfo() {
    return `Компания: ${this._title}\nАдрес: ${this._address}\nКоличество сотрудников: ${this.#employees.length}`;
  }

  findEmployeeByName(firstName) {
    const emp = this.#employees.find((emp) => emp.firstName === firstName);

    if (emp) {
      return emp;
    } else {
      throw new Error('Employee not found');
    }
  }

  #getEmployeeIndex(firstName) {
    return this.#employees.findIndex((emp) => emp.firstName === firstName);
  }

  removeEmployee(firstName) {
    const empIndex = this.#getEmployeeIndex(firstName);

    if (empIndex >= 0) {
      this.#employees.splice(empIndex, 1);
    } else {
      throw new Error('Employee not found');
    }
  }

  getTotalSalary() {
    return this.#employees.reduce((total, emp) => total + emp.salary, 0);
  }
}

export { Employee, Company };
