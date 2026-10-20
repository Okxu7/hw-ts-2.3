"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Застосування інтерфейсу до класу Cat (Кіт)
class Cat {
    name;
    speed;
    sound;
    constructor(name, speed, sound) {
        this.name = name;
        this.speed = speed;
        this.sound = sound;
    }
    move() {
        console.log(`${this.name} бігає по землі на чотирьох лапах зі швидкістю ${this.speed} км/год.`);
        if (this.sound) {
            console.log(`Видає звук: ${this.sound}`);
        }
    }
}
// Застосування інтерфейсу до класу Bird (Птах)
class Bird {
    name;
    speed;
    habitat;
    constructor(name, speed, habitat) {
        this.name = name;
        this.speed = speed;
        this.habitat = habitat;
    }
    move() {
        console.log(`${this.name} літає у повітрі зі швидкістю ${this.speed} км/год.`);
        if (this.habitat) {
            console.log(`Середовище існування: ${this.habitat}`);
        }
    }
}
// Застосування інтерфейсу до класу Fish (Риба)
class Fish {
    name;
    speed;
    habitat;
    constructor(name, speed, habitat) {
        this.name = name;
        this.speed = speed;
        this.habitat = habitat;
    }
    move() {
        console.log(`${this.name} плаває під водою за допомогою плавників зі швидкістю ${this.speed} км/год.`);
    }
}
// ==========================================
// Створення екземплярів та виклик методів
// ==========================================
const myCat = new Cat("Барсік", 15, "Мяу");
const myBird = new Bird("Папуга Кеша", 40, "Тропіки");
const myFish = new Fish("Немо", 5, "Океан");
const silentFish = new Fish("Карась", 2); // Опціональна властивість habitat не передається
myCat.move();
console.log("-------------------");
myBird.move();
console.log("-------------------");
myFish.move();
console.log("-------------------");
silentFish.move();
//# sourceMappingURL=app.js.map