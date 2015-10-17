
def setElt(s, n, denom, card):
    """get the elt for set s where s is one of the sets used to make a cartesian product"""
    return s[int(n/denom) % card]  # int serves as the floor function here

def cartesianN(sets, n):  # note that n indexes at 0 ie the first elt is elt 0
    """get the nth element of the cartesian product of sets sets"""
    nSets = len(sets)
    cards = [len(s) for s in sets]
    cartesianN = []
    denom = 1
    for iSet in xrange(nSets-1,-1,-1):
        s = sets[iSet]
        card = cards[iSet]
        elt = setElt(s, n, denom, card)
        cartesianN.insert(0, elt)
        # get denom for next elt
        denom *= card
    return cartesianN

def cartesianN_repeatSameSet(s, nRep, n):
    """get the nth element of the cartesian product of sets [s,s,...,s], where s is repeated nRep times"""
    card = len(s)
    cartesianN = []
    denom = 1
    for iSet in xrange(nRep-1,-1,-1):  # loop starting w last set
        elt = setElt(s, n, denom, card)
        cartesianN.insert(0, elt)
        # get denom for next elt
        denom *= card
    return cartesianN
