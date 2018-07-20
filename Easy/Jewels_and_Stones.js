var numJewelsInStones = function(J, S) {
    const obj={}
    let count=0;
    for(let i=0;i<S.length;i++){
        if(!(S[i] in obj)) {
            obj[S[i]]=1;
        } else {
            obj[S[i]]++;
        }
    }
    for(let i=0;i<J.length;i++){
        if(J[i] in obj){
            count+=obj[J[i]];
        }
    }
    return count;
};