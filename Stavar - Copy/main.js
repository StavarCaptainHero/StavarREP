
// Класс Работник
class Worker {
	constructor(name, surname, hourRate, hours, salary){
		this.name = name;
		this.surname = surname;
		this.hourRate = hourRate;
		this.hours = hours;
		this.salary = salary;
	}
	getName(){
		return `${this.name}`; // ${this.surname} ${this.hourRate} ${this.hours} ${this.salary}`
	}
	getSurname(){
		return `${this.surname}`;
	}
	getHourRate(){
		return `${this.hourRate}`;
	}
	getHours(){
		return `${this.hours}`;
	}
	getSalary(){
		return `${this.hourRate * this.hours}`;
	}
}
//worker 1
let worker1 = new Worker("Ion", "Vulcan", "55", "150");
console.log(worker1.getName());
console.log(worker1.getSurname());
console.log(worker1.getHourRate());
console.log(worker1.getHours());
console.log(worker1.getSalary());
//console.log(worker1.salary = worker1.hourRate * worker1.hours);

//worker 2
let worker2 = new Worker("Eugen", "Doga", "83", "170");
console.log(worker2.getName());
console.log(worker2.getSurname());
console.log(worker2.getHourRate());
console.log(worker2.getHours());
console.log(worker2.getSalary());

// Проверка на то, у кого из работников больше зарплата
if (worker2.getSalary() < worker1.getSalary()) {
	console.log("Eugen богаче");
}
else {
	console.log("Ion богаче");
}