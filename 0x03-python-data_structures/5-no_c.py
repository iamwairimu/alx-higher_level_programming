#!/usr/bin/python3

def no_c(my_string):
    i = my_string.translate({ord('c'): None})
    i = i.translate({ord('C'): None})
    return i
