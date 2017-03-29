def rgb(r, g, b):
    adjustValue = lambda n: min(255, max(n, 0))
    return '%02X%02X%02X' % (adjustValue(r), adjustValue(g), adjustValue(b))