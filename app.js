"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1. Знаходимо контейнер у HTML-документі
const container = document.getElementById('app-container');
// 3. Застосування інтерфейсу до класу Cat (Кіт)[cite: 1]
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
        let result = `🐱 Кіт "${this.name}" бігає по землі зі швидкістю ${this.speed} км/год.`;
        if (this.sound) {
            result += ` Звук: ${this.sound}.`;
        }
        // Виводимо в консоль 
        console.log(result);
        // Повертаємо рядок для виведення на екран 
        return result;
    }
}
// 4. Застосування інтерфейсу до класу Bird (Птах)[cite: 1]
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
        let result = `🐦 Птах "${this.name}" літає у повітрі зі швидкістю ${this.speed} км/год.`;
        if (this.habitat) {
            result += ` Середовище: ${this.habitat}.`;
        }
        // Виводимо в консоль 
        console.log(result);
        // Повертаємо рядок для виведення на екран 
        return result;
    }
}
// 5. Застосування інтерфейсу до класу Fish (Риба)[cite: 1]
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
        let result = `🐟 Риба "${this.name}" плаває під водою зі швидкістю ${this.speed} км/год.`;
        if (this.habitat) {
            result += ` Середовище: ${this.habitat}.`;
        }
        // Виводимо в консоль 
        console.log(result);
        // Повертаємо рядок для виведення на екран 
        return result;
    }
}
// 6. Створення масиву екземплярів (об'єктів) тварин 
const animalsList = [
    new Cat("Барсік", 15, "Мяу"),
    new Bird("Кеша", 40, "Тропіки"),
    new Fish("Немо", 5, "Океан"),
    new Fish("Карась", 2) // Опціональна властивість habitat не передається
];
// 7. Виведення списку тварин безпосередньо на екран у браузері
if (container) {
    animalsList.forEach(animal => {
        const paragraph = document.createElement('p');
        paragraph.className = 'animal-card';
        paragraph.textContent = animal.move(); // Отримуємо опис через метод і виводимо
        container.appendChild(paragraph);
    });
}
//# sourceMappingURL=app.js.map