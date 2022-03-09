export { };
type product = {
    id: number,
    name: string,
    price: number,
}
type product2 = {
    id: number,
    name: string,
    status: boolean
}

type MergeType = product | product2;
const a: number = 10;
const b: number = 20;

const myName: string = "Le Cong Dinh";
const myAge: number = 20;
const myStatus: boolean = true;
const myObj: product[] = [{ id: 1, name: "Dinh", price: 20 }]
const arrNumber: number[] = [1, 2, 3, 4];
const arrObj: MergeType[] = [{ id: 1, name: "San pham A", price: 20 }, { id: 2, name: "San pham B", status: true }]

function sum(numA: number, numB: number) {
    return numA + numB;
}
console.log(10, 20);

