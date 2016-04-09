"""
 Print elements of a linked list on console
 head input could be None as well for empty list
 Node is defined as
 
 class Node(object):
 
   def __init__(self, data=None, next_node=None):
       self.data = data
       self.next = next_node
 
 
"""
def print_list(head):
    temp = Node
    if(head.data == null):
      return
    while not (head.data == null):
        temp = head.data
        print temp
        temp = temp.next

