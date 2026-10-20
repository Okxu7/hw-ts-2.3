// 1. Знаходимо контейнер у HTML-документі
const container = document.getElementById('app-container');

// 2. Створення інтерфейсу, що описує поведінку тварини[cite: 1]
interface Animal {
    name: string;
    speed: number;
    sound?: string;   // Опціональна властивість (не всі тварини видають звуки)[cite: 1]
    habitat?: string; // Опціональна властивість (середовище існування)[cite: 1]
    
    move(): string;   // Метод тепер повертає рядок для виведення на екран
}

// 3. Застосування інтерфейсу до класу Cat (Кіт)[cite: 1]
class Cat implements Animal {
    constructor(
        public name: string, 
        public speed: number, 
        public sound?: string
    ) {}

    public move(): string {
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
class Bird implements Animal {
    constructor(
        public name: string, 
        public speed: number, 
        public habitat?: string
    ) {}

    public move(): string {
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
class Fish implements Animal {
    constructor(
        public name: string, 
        public speed: number,
        public habitat?: string
    ) {}

    public move(): string {
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
const animalsList: Animal[] = [
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