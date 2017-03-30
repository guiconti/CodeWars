def find_missing_letter(chars):
    alphabet = 'abcdefghijklmnopqrstuvwxyz';
    count = 0
    
    for x in range(alphabet.index(chars[0].lower()), alphabet.index(chars[0].lower()) + len(chars)):
        if (alphabet[x] != chars[count].lower()):
            return alphabet[x] if chars[0].islower() else alphabet[x].upper()
        count += 1
            
    return ''