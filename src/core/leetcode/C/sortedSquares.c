#include <malloc.h>

/**
 * 977 有序数组的平方
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* sortedSquares(int* nums, int numsSize, int* returnSize) {
	*returnSize = numsSize;
	int right = numsSize - 1, left = 0;

	int* ans = (int*)malloc(sizeof(int) * numsSize);

	for (int index = numsSize - 1; index >= 0; index--)
	{
		int lSquare = nums[left] * nums[left];
		int rSquare = nums[right] * nums[right];

		if (lSquare > rSquare)
		{
			ans[index] = lSquare;
			left++;
		}
		else {
			ans[index] = rSquare;
			right--;
		}
	}

	return ans;
}
