#include <malloc.h>

typedef struct Node {
	int val;
	struct Node* next;
} Node;


typedef struct {
	int size;
	Node* data;
} MyLinkedList;


MyLinkedList* myLinkedListCreate() {
	MyLinkedList* obj = (MyLinkedList*)malloc(sizeof(MyLinkedList));
	obj->size = 0;
	Node* head = (Node*)malloc(sizeof(Node));
	head->next = (void*)0;
	obj->data = head;
	return obj;
}

int myLinkedListGet(MyLinkedList* obj, int index) {
	if (index < 0 || index >= obj->size) return -1;

	Node* cur = obj->data;
	while (index-- >= 0) cur = cur->next;

	return cur->val;
}

void myLinkedListAddAtHead(MyLinkedList* obj, int val) {
	Node* node = (Node*)malloc(sizeof(Node));
	node->val = val;

	node->next = obj->data->next;
	obj->data->next = node;
	obj->size++;
}

void myLinkedListAddAtTail(MyLinkedList* obj, int val) {
	Node* cur = obj->data;
	while (cur->next != ((void*)0)) cur = cur->next;

	Node* node = (Node*)malloc(sizeof(Node));
	node->val = val;
	node->next = (void*)0;
	cur->next = node;
	obj->size++;
}

void myLinkedListAddAtIndex(MyLinkedList* obj, int index, int val) {
	if (index > obj->size) return;

	Node* cur = obj->data;
	while (index-- > 0) cur = cur->next;

	Node* node = (Node*)malloc(sizeof(Node));
	node->val = val;
	node->next = cur->next;
	cur->next = node;
	obj->size++;
}

void myLinkedListDeleteAtIndex(MyLinkedList* obj, int index) {
	if (index < 0 || index >= obj->size) return;

	Node* cur = obj->data;
	while (index-- > 0) cur = cur->next;

	Node* temp = cur->next;
	cur->next = temp->next;
	free(temp);
	obj->size--;
}

void myLinkedListFree(MyLinkedList* obj) {
	Node* tmp = obj->data;
	while (tmp != NULL) {
		Node* n = tmp;
		tmp = tmp->next;
		free(n);
	}
	free(obj);
}