// Створення інтерфейсу, що описує поведінку тварини
interface Animal {
    name: string;
    speed: number;
    
    // Опціональні властивості (позначаються знаком питання)
    sound?: string;   // Не всі тварини видають звуки (наприклад, риби)
    habitat?: string; // Середовище існування може бути необов'язковим для домашніх тварин (наприклад, кота)
    
    move(): void;     // Спосіб пересування
}

// Застосування інтерфейсу до класу Cat (Кіт)
class Cat implements Animal {
    constructor(
        public name: string, 
        public speed: number, 
        public sound?: string 
    ) {}

    public move(): void {
        console.log(`${this.name} бігає по землі на чотирьох лапах зі швидкістю ${this.speed} км/год.`);
        if (this.sound) {
            console.log(`Видає звук: ${this.sound}`);
        }
    }
}

// Застосування інтерфейсу до класу Bird (Птах)
class Bird implements Animal {
    constructor(
        public name: string, 
        public speed: number, 
        public habitat?: string
    ) {}

    public move(): void {
        console.log(`${this.name} літає у повітрі зі швидкістю ${this.speed} км/год.`);
        if (this.habitat) {
            console.log(`Середовище існування: ${this.habitat}`);
        }
    }
}

// Застосування інтерфейсу до класу Fish (Риба)
class Fish implements Animal {
    constructor(
        public name: string, 
        public speed: number,
        public habitat?: string
    ) {}

    public move(): void {
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

export {};