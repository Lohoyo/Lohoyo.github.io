// 餐厅引用类型
function Restaurant(object) {
    this.cash = object.cash;
    this.seats = object.seats;
    this.staff = object.staff;
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

// 职员引用类型
function Employee(id, name, salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;
}
Employee.prototype.doSomeWork = function() {};

// 服务员引用类型
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

// 厨师引用类型
function Cook(id, name, salary) {
    Employee.call(this, id, name, salary);
}
Waiter.prototype = new Employee();
Waiter.prototype.constructor = Cook;
Waiter.prototype.doSomeWork = function() {

};

// 顾客引用类型
function Customer() {}
Customer.prototype.eat = function() {

};

// 菜品引用类型
function Dish(name, cost, price) {
    this.name = name;
    this.cost = cost;
    this.price = price;
}