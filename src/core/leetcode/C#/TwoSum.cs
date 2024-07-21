// https://leetcode.cn/problems/binary-search/ 二分查找
public class TwoSum
{
  public int Main(int[] nums, int target)
  {
    int left = 0, right = nums.Length - 1;

    while (left <= right)
    {
      int mid = (left + right) >> 1;
      int num = nums[mid];
      if (num == target)
      {
        return mid;
      }
      else if (num < target)
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
}
