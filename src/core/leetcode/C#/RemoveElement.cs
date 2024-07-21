// https://leetcode.cn/problems/remove-element/ 移除元素
public class RemoveElement
{
    public int Main(int[] nums, int val)
    {
        int slow = 0;
        for (int fast = 0; fast < nums.Length; fast++)
        {
            if (val != nums[fast])
            {
                nums[slow++] = nums[fast];
            }
        }

        return slow;
    }
}

