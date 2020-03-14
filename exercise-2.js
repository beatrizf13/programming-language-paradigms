// Individualmente, escreva um script que tenha subprogramas (procedimentos) aninhados em três níveis de profundidade e nos quais cada subprograma (procedimentos) aninhado referencia variáveis definidas em todos os seus subprogramas que o envolvem no aninhamento.

const count = 3;

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  get area() {
    return this.calculateArea();
  }

  calculateArea() {
    let asterisks = "";

    for (let i = 0; i < count; i++) {
      asterisks = `${asterisks}*`;
    }

    return `${asterisks} ${this.height * this.width} ${asterisks}`;
  }
}

const square = new Retangulo(10, 10);

console.log(square.area);
