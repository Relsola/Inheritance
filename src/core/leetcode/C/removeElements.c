#include <malloc.h>

/* Definition for singly-linked list. */
struct ListNode
{
	int val;
	struct ListNode* next;
};

struct ListNode* removeElements(struct ListNode* head, int val) {
	typedef struct ListNode ListNode;
	ListNode* temp = (ListNode*)malloc(sizeof(ListNode));
	temp->next = head;
	ListNode* p = temp;

	while (p->next != ((void*)0))
	{
		if (p->next->val == val) {
			ListNode* temp = p->next;
			p->next = p->next->next;
			free(temp);
		}
		else
		{
			p = p->next;
		}
	}

	head = temp->next;
	free(temp);
	return head;
}