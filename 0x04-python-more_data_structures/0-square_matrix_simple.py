#!/usr/bin/python3
def square_matrix_simple(matrix=[]):

    squared_matrix = []

    for r in matrix:
        squared_r = []

        for element in r:
            squared_element = element ** 2
            squared_r.append(squared_element)
        squared_matrix.append(squared_r)
    return squared_matrix
