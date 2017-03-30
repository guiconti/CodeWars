from string import punctuation
def pig_it(text):
    latin = lambda word: (word[1:] + word [:1] + 'ay') if word not in punctuation else word
    return ' '.join([latin(word) for word in text.split()])