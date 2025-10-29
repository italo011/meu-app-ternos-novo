// VM-TERNOS - Static institutional website
// No storage layer required for this project

export interface IStorage {}

export class MemStorage implements IStorage {
  constructor() {}
}

export const storage = new MemStorage();
