import math

def list_squared(m, n):
    answer = []
    
    for actual_number in range(m, n + 1):
        actual_divisors_sum = sum([x * x for x in find_divisors(actual_number)])
        if float(math.sqrt(actual_divisors_sum)).is_integer():
            answer.append([actual_number, int(actual_divisors_sum)])
        
    return (answer)
        
    
def find_divisors(number):
    divisors = [number]
    
    for actual_number in range(1, number/2 + 1):
        if number%actual_number == 0:
            divisors.append(actual_number)

    return divisors
    