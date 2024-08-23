class Solution
{
public:
    ListNode *getIntersectionNode(ListNode *headA, ListNode *headB)
    {
        ListNode *curA = headA;
        ListNode *curB = headB;
        int lenA = 0, lenB = 0;

        while (curA != NULL)
        {
            lenA++;
            curA = curA->next;
        }
        while (curB != NULL)
        {
            lenB++;
            curB = curB->next;
        }

        curA = headA;
        curB = headB;
        if (lenB > lenA)
        {
            swap(lenA, lenB);
            swap(curA, curB);
        }

        int gap = lenA - lenB;
        while (gap--)
        {
            curA = curA->next;
        }

        while (curA != NULL)
        {
            if (curA == curB)
            {
                return curA;
            }
            curA = curA->next;
            curB = curB->next;
        }
        return NULL;
    }
};
