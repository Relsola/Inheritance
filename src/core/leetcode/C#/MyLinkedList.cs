namespace NEXT.LeetCode;

internal class MyLinkedList
{
    private ListNode dummy;
    private int size;

    public MyLinkedList()
    {
        dummy = new ListNode(0);
        size = 0;
    }

    public int Get(int index)
    {
        if (index < 0 || size <= index) return -1;

        var cur = dummy;
        while (index-- >= 0) cur = cur.next;
        return cur.val;
    }

    public void AddAtHead(int val)
    {
        AddAtIndex(0, val);
    }

    public void AddAtTail(int val)
    {
        AddAtIndex(size, val);
    }

    public void AddAtIndex(int index, int val)
    {
        if (index > size) return;

        index = Math.Max(0, index);
        var cur = dummy;
        while (index-- > 0) cur = cur.next;

        var node = new ListNode(val);
        node.next = cur.next;
        cur.next = node;
        size++;
    }

    public void DeleteAtIndex(int index)
    {
        if (index >= size || index < 0) return;

        var cur = dummy;
        while (index-- > 0) cur = cur.next;

        cur.next = cur.next.next;
        size--;
    }
}
