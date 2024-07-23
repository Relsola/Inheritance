namespace NEXT.LeetCode;

internal class RemoveElements
{
    public ListNode? Main(ListNode head, int val)
    {
        ListNode dummy = new ListNode(0, head);
        ListNode cur = dummy;

        while (cur.next != null)
        {
            if (cur.next.val == val)
            {
                cur.next = cur.next.next;
            }
            else
            {
                cur = cur.next;
            }
        }

        return dummy.next;
    }
}

