#include <malloc.h>

/**
 * 59 螺旋矩阵 II
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
int** generateMatrix(int n, int* returnSize, int** returnColumnSizes) {
	*returnSize = n;
	*returnColumnSizes = (int*)malloc(sizeof(int) * n);

	int** ans = (int**)malloc(sizeof(int*) * n);
	for (int i = 0; i < n; i++) {
		ans[i] = (int*)malloc(sizeof(int) * n);
		(*returnColumnSizes)[i] = n;
	}

	int start = 0, end = n - 1, tmp = 1;
	while (tmp < n * n)
	{
		for (int i = start; i < end; i++) ans[start][i] = tmp++;
		for (int i = start; i < end; i++) ans[i][end] = tmp++;
		for (int i = end; i > start; i--) ans[end][i] = tmp++;
		for (int i = end; i > start; i--) ans[i][start] = tmp++;
		start++;
		end--;
	}
	if (start == end) ans[start][end] = tmp;

	return ans;
}
