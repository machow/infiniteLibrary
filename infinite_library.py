import string
from math import log, ceil
from numpy import array as npa
from cartesian import cartesianN_repeatSameSet

#  all candidate book characters
pool = list(string.printable)
cardPool = len(pool)

def bookLength(i):
    """gives you the length of book n"""
    if i in [0,1]: return i  # 0 and 1 do not play nice with log
    else: return int(ceil(log(i, cardPool)))


def firstBookLengthN(n):
    """returns the index of the first book of length n"""
    # determine how many books with len < lenBook exist
    nShorter = npa([cardPool**l for l in xrange(n)]).sum()
    return nShorter  # no need for +1 bc of the empty book


def generateBook(i):
    """generate the i'th book in the infinite library!"""
    lenBook = bookLength(i)
    if lenBook == 0: return ''  # the zero'th book is the empty book :)
    # we're looking for the nThisLength'th book of this length.
    iThisLength = i - firstBookLengthN(lenBook)
    book = cartesianN_repeatSameSet(pool, lenBook, iThisLength)
    book = ''.join(book)
    return book


def getIndex(book):
    """get the index of the book (fine; string if you wanna be a bummer like that)
    in the infinite library"""
    bookLen = len(book)
    letters = list(book)
    index = 0
    # how far we need to move before current letter changes
    blockSize = cardPool**(bookLen-1)  
    for l in letters:
        il = pool.index(l) + 1 # which elt in our alphabet is this letter?
        index += blockSize*il
        blockSize /= cardPool
    return index
