// classes
/**
 * data modifiers
 * public
 * private
 * protected
 */

class Character {
    protected name: string;
    readonly strength: number;
    skill: number;

    constructor(name: string, strength: number, skill: number) {
        this.name = name;
        this.strength = strength;
        this.skill = skill;
    }

    attack(): void {
        console.log(`Attack with ${this.strength}`);
    }
}

//Character superclass
//Magician subclass
class Magician extends Character {
    magicPoints: number;
    constructor(name: string, strength: number, skill: number, magicPoints: number) {
        super(name, strength, skill);
        this.magicPoints = magicPoints;
    }
}
const p1 = new Character("Naruto", 10, 10);
const p2 = new Magician("Sasuke", 10, 10, 10);
p1.skill = 20;