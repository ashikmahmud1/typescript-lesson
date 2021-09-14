// interfaces -> creates a new type, dscribing the property
// names and value types of an object

interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}

interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};

// really long type annotations which is annoying
const printVehicle = (vehicle: Vehicle): void => {
  console.log(vehicle.summary());
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printVehicle(oldCivic);
printSummary(drink);
