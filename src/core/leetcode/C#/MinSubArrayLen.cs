namespace NEXT.LeetCode;

// 209 长度最小的子数组
internal class MinSubArrayLen
{
    public int Main(int target, int[] nums)
    {
        int n = nums.Length, ans = int.MaxValue, start = 0, end = 0, sum = 0;

        while (end < n)
        {
            sum += nums[end];
            while (sum >= target)
            {
                ans = Math.Min(ans, end - start + 1);
                sum -= nums[start];
                start++;
            }
            end++;
        }

        return ans == int.MaxValue ? 0 : ans;
    }
}

