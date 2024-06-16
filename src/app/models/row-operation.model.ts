import { MatrixRow } from "./matrix.model";

export interface RowOperation {
    apply(matrixRow: MatrixRow): MatrixRow;
}

export type ScaleFunction = (value: number, factor: number) => number;

export class ScaleRow implements RowOperation {
    constructor(public scaleFn: ScaleFunction, public factor: number) {}

    apply(matrixRow: MatrixRow): MatrixRow {
        const scaledElements = matrixRow.elements.map(element => ({
            ...element,
            value: this.scaleFn(element.value, this.factor)
        }));
        return { elements: scaledElements };
    }
}

export const multiply: ScaleFunction = (value, factor) => value * factor;
export const divide: ScaleFunction = (value, factor) => value / factor;
