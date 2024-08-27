class Solution
{
public:
    bool canConstruct(string ransomNote, string magazine)
    {
        int record[26] = {0};

        if (ransomNote.size() > magazine.size())
        {
            return false;
        }

        for (char c : magazine)
        {

            record[c - 'a']++;
        }

        for (char c : ransomNote)
        {
            if (--record[c - 'a'] < 0)
            {
                return false;
            }
        }

        return true;
    }
};
