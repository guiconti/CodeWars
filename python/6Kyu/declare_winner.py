import math

def declare_winner(fighter1, fighter2, first_attacker):
    return fighter1.name if math.ceil(fighter2.health/fighter1.damage_per_attack) < math.ceil(fighter1.health/fighter2.damage_per_attack) else fighter2.name if math.ceil(fighter1.health/fighter2.damage_per_attack) < math.ceil(fighter2.health/fighter1.damage_per_attack) else first_attacker