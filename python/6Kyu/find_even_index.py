def find_even_index(arr):
    for x in range(0, len(arr)):
        if sum(arr[:x]) == sum(arr[x+1:]):
            return x
    return -1