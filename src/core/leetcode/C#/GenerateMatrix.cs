namespace NEXT.LeetCode;

// 59 螺旋矩阵 II
internal class GenerateMatrix
{
    public int[][] Main(int n)
    {
        int[][] result = new int[n][];
        for (int i = 0; i < n; i++) result[i] = new int[n];
        int start = 0, end = n - 1, tmp = 1;


        while (tmp < n * n)
        {
            for (int i = start; i < end; i++) result[start][i] = tmp++;
            for (int i = start; i < end; i++) result[i][end] = tmp++;
            for (int i = end; i > start; i--) result[end][i] = tmp++;
            for (int i = end; i > start; i--) result[i][start] = tmp++;
            start++;
            end--;
        }
        if (start == end) result[start][end] = tmp;

        return result;
    }
}

