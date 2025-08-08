function transposeMatrix(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const result = [];

  for (let i = 0; i < cols; i++) {
    const newRow = [];
    for (let j = 0; j < rows; j++) {
      newRow.push(matrix[j][i]);
    }
    result.push(newRow);
  }

  return result;
}

function transpose() {
  const input = document.getElementById("matrixInput").value.trim();
  const matrix = input
    .split("\n")
    .map((row) => row.split(",").map((num) => Number(num.trim())));

  const transposed = transposeMatrix(matrix);
  const formatted = transposed.map((row) => row.join(",")).join("\n");
  document.getElementById("output").textContent = formatted;
}
