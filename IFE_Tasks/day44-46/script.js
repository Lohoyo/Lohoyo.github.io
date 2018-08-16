// 餐厅引用类型
function Restaurant(object) {
    this.cash = object.cash;
    this.seats = object.seats;
    this.staff = object.staff;
    this.instance = null;
}
Restaurant.prototype = {
    constructor: Restaurant,
    hire: function(employee) {
        this.staff.push(employee);
    },
    fire: function(employee) {
        this.staff.splice(this.staff.indexOf(employee), 1);
    }
};
Restaurant.getInstance = function(object) {
    if (!this.instance) {
        this.instance = new Restaurant(object);
    }
    return this.instance;
}

// 职员引用类型
function Employee(id, name, salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;
    this.instance = null;
}
Employee.prototype.doSomeWork = function() {};
Employee.getInstance = function(id, name, salary) {
    if (!this.instance) {
        this.instance = new Employee(id, name, salary);
    }
    return this.instance;
}

// 服务员引用类型（继承自职员）
function Waiter(id, name, salary) {
    Employee.call(this, id, name, salary);
}
Waiter.prototype = new Employee();
Waiter.prototype.constructor = Waiter;
Waiter.prototype.doSomeWork = function(order) {
    if (!arguments.length) {

    } else {

    }
};
Waiter.getInstance = function(id, name, salary) {
    if (!this.instance) {
        this.instance = new Waiter(id, name, salary);
    }
    return this.instance;
}

// 厨师引用类型（继承自职员）
function Cook(id, name, salary) {
    Employee.call(this, id, name, salary);
}
Waiter.prototype = new Employee();
Waiter.prototype.constructor = Cook;
Waiter.prototype.doSomeWork = function() {

};
Cook.getInstance = function(id, name, salary) {
    if (!this.instance) {
        this.instance = new Cook(id, name, salary);
    }
    return this.instance;
}

// 顾客引用类型
function Customer() {}
Customer.prototype = {
    constructor: Customer,
    order: function() {

    },
    eat: function() {

    }
}
Customer.getInstance = function(id, name, salary) {
    if (!this.instance) {
        this.instance = new Customer(id, name, salary);
    }
    return this.instance;
}

// 菜品引用类型
function Dish(name, cost, price) {
    this.name = name;
    this.cost = cost;
    this.price = price;
}
Dish.getInstance = function(id, name, salary) {
    if (!this.instance) {
        this.instance = new Dish(id, name, salary);
    }
    return this.instance;
}
