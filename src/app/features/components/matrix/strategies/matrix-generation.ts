import { Matrix } from "src/app/models/matrix.model";

export interface MatrixGenerationStrategy {
  generateMatrix(): Matrix;
}
