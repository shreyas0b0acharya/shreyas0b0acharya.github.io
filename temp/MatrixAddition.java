import java.util.Scanner;

public class MatrixAddition {

    public static void main(String[] args) {
        if (args.length != 1) {
            System.out.println("Usage: java MatrixAddition <order_N>");
            System.exit(1);
        }

        int N = Integer.parseInt(args[0]);

        if (N <= 0) {
            System.out.println("Please provide a positive integer for the order N.");
            System.exit(1);
        }

        Scanner scanner = new Scanner(System.in);
        int[][] matrix1 = new int[N][N];
        int[][] matrix2 = new int[N][N];
        int[][] resultMatrix = new int[N][N];

        System.out.println("Enter elements for Matrix 1:");
        inputMatrix(scanner, matrix1);

        System.out.println("Enter elements for Matrix 2:");
        inputMatrix(scanner, matrix2);

        addMatrices(matrix1, matrix2, resultMatrix);

        System.out.println("Resultant Matrix after addition:");
        displayMatrix(resultMatrix);

        scanner.close();
    }

    private static void inputMatrix(Scanner scanner, int[][] matrix) {
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[i].length; j++) {
                System.out.print("Enter element at position (" + (i + 1) + "," + (j + 1) + "): ");
                matrix[i][j] = scanner.nextInt();
            }
        }
    }

    private static void addMatrices(int[][] matrix1, int[][] matrix2, int[][] resultMatrix) {
        for (int i = 0; i < matrix1.length; i++) {
            for (int j = 0; j < matrix1[i].length; j++) {
                resultMatrix[i][j] = matrix1[i][j] + matrix2[i][j];
            }
        }
    }

    private static void displayMatrix(int[][] matrix) {
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[i].length; j++) {
                System.out.print(matrix[i][j] + " ");
            }
            System.out.println();
        }
    }
}
