class Solution
{
public:
    vector<int> intersection(vector<int> &nums1, vector<int> &nums2)
    {
        unordered_set<int> result;

        int hash[1001] = {0};

        for (int num : nums1)
            hash[num] = 1;

        for (int num : nums2)
            if (hash[num] == 1)
                result.insert(num);

        return vector<int>(result.begin(), result.end());
    }
};
