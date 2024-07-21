#include <limits.h>

// 209 长度最小的子数组
int minSubArrayLen(int target, int* nums, int numsSize) {
	int minLength = INT_MAX, sum = 0, left = 0, right = 0;

	for (; right < numsSize; ++right)
	{
		sum += nums[right];
		while (sum >= target)
		{
			int subLength = right - left + 1;
			if (minLength > subLength) minLength = subLength;
			sum -= nums[left++];
		}
	}

	return minLength == INT_MAX ? 0 : minLength;
}
