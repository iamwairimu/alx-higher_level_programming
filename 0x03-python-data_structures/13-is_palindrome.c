#include "lists.h"
#include "stddef.h"
/**
 * is_palindrome - checks if a singly linked list is a palindrome
 * @head: pointer
 * Return: 1 if palindrome, 0 if not
 */
int is_palindrome(listint_t **head)
{
	return (is_palindrome(head));
}
/**
 * checkpalindrome - recursive function to check if signly linked list
 * is a palindrome
 * @headptr: pointer
 * @tptr: pointer
 * Return: 1 or 0
 */
int checkpalindrome(listint_t **headptr, listint_t *tptr)
{
	int res;

	if (tptr == NULL)
		return (1);
	res = checkpalindrome(headptr, tptr->next) && ((*headptr)->n == tptr->n);
	return (res);
}
