function findPlanet(pera, range){
    peraLen=pera.length;
    for(let ind=0;ind<peraLen;ind++){
        ele = pera[ind];
        tempEnergy=0;
        eleLen=ele.length;
        for(let i=0; i<eleLen; i++){
            sys=ele[i];
            tempEnergy+= sys[0]*(1/sys[1]);
        }
        if (tempEnergy>range[0]&&tempEnergy<range[1]) return ind;
    };
    return;
}
console.log(findPlanet([[[0.433, 200]], [[0.89, 400], [0.6, 300]]], [0.003, 0.005]));
