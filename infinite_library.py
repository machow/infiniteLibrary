import string
from math import log, ceil
from numpy import array as npa
from cartesian import cartesianN_repeatSameSet

#  all candidate book characters
pool = list(''.join([string.ascii_letters, string.punctuation, string.digits]))
cardPool = len(pool)

def bookLength(n):
    if n in [0,1]: return n
    else: return int(ceil(log(n, cardPool)))

def generateBook(n):
    lenBook = bookLength(n)
    if lenBook == 0: return ''  # the zero'th book is the empty book :)
    # determine how many books with len < lenBook exist
    nShorter = npa([cardPool**l for l in xrange(lenBook)]).sum()
    # we're looking for the nThisLength'th book of this length.
    iThisLength = n - nShorter
    book = cartesianN_repeatSameSet(pool, lenBook, iThisLength)
    book = ''.join(book)
    return book

