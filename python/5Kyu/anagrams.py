def anagrams(word, words):
    return [actualWord for actualWord in words if sorted(actualWord)==sorted(word)]