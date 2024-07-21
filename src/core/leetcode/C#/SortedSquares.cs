// 977 有序数组的平方
internal class SortedSquares
{
    public int[] Main(int[] nums)
    {
        int k = nums.Length - 1;
        int[] result = new int[k + 1];

        for (int i = 0, j = k; i <= j;)
        {
            if (nums[i] * nums[i] > nums[j] * nums[j])
            {
                result[k--] = nums[i] * nums[i];
                i++;
            }
            else
            {
                result[k--] = nums[j] * nums[j];
                j--;
            }
        }

        return result;

        //return nums.Select(x => x * x).OrderBy(x => x).ToArray();
    }
}
