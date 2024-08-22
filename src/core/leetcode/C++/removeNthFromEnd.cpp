class Solution
{
public:
    ListNode *removeNthFromEnd(ListNode *head, int n)
    {
        ListNode *dummy = new ListNode;
        dummy->next = head;

        ListNode *fast = dummy, *slow = dummy;
        while (n-- && fast != nullptr)
        {
            fast = fast->next;
        }

        while (fast->next)
        {
            fast = fast->next;
            slow = slow->next;
        }

        ListNode *tmp = slow->next;
        slow->next = tmp->next;
        delete tmp;

        return dummy->next;
    }
};
