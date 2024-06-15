export interface MatrixElement {
    id: number;
    value: any;
}

export interface MatrixRow {
    elements: MatrixElement[];
}

export interface Matrix {
    rows: MatrixRow[];
}