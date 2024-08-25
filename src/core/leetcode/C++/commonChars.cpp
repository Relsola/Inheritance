class Solution
{
public:
    vector<string> commonChars(vector<string> &words)
    {
        vector<string> result;
        if (words.size() == 0)
        {
            return result;
        }

        int hash[26] = {0};
        for (int i = 0; i < words[0].size(); i++)
        {
            hash[words[0][i] - 'a']++;
        }

        int hashOtherStr[26] = {0};
        for (int i = 1; i < words.size(); i++)
        {
            for (int k = 0; k < words[i].size(); k++)
            {
                hashOtherStr[words[i][k] - 'a']++;
            }

            for (int j = 0; j < 26; j++)
            {
                hash[j] = min(hash[j], hashOtherStr[j]);
            }

            memset(hashOtherStr, 0, 26 * sizeof(int));
        }

        for (int i = 0; i < 26; i++)
        {
            while (hash[i] != 0)
            {
                string s(1, 'a' + i);
                result.push_back(s);
                hash[i]--;
            }
        }

        return result;
    }
};
