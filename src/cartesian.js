function setElt(s, n, denom, card){
    return s[Math.floor(n/denom) % card];
}

function cartesianN(sets, n){  
    // note that n indexes at 0 ie the first elt is elt 0
    // get the nth element of the cartesian product of sets sets
    var nSets = sets.length;
    var cards = sets.map(function(s){return s.length;});
    var cartesianN = [];
    var denom = 1;
    for(var iSet=nSets-1; iSet>-1; iSet--){
        var s = sets[iSet];
        var card = cards[iSet];
        var elt = setElt(s, n, denom, card);
        cartesianN.unshift(elt);  // add elt to beginning of list
        // get denom for next elt
        denom *= card;
    }
    return cartesianN;
}

function cartesianN_repeatSameSet(s, nRep, n){
    // get the nth element of the cartesian product of sets [s,s,...,s],
    // where s is repeated nRep times
    var card = s.length;
    var cartesianN = [];
    var denom = 1;
    for (var iSet=nRep; iSet>0; iSet--){
        var elt = setElt(s, n, denom, card);
        cartesianN.unshift(elt);
        // get denom for next elt
        denom *= card;
    }
    return cartesianN;
}

module.exports = {
    cartesianN: cartesianN,
    cartesianN_repeatSameSet: cartesianN_repeatSameSet,
}
