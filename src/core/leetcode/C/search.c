// https://leetcode.cn/problems/binary-search/
int search(int *nums, int numsSize, int target)
{
  int left = 0, right = numsSize - 1;

  while (left <= right)
  {
    int mid = (left + right) >> 1;
    int num = nums[mid];

    if (nums[mid] == target)
    {
      return mid;
    }
    else if (nums[mid] < target)
    {
      left = mid + 1;
    }
    else
    {
      right = mid - 1;
    }
  }

  return -1;
}
