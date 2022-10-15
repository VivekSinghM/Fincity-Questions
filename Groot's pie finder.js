/*
While Groot is good at heart, he is not intelligent. He loves pies but cannot find the right amount of sweetness. Groot doesn't want to eat a too sweet or bland pie. If a pie is too sweet, he wants to eat it with a pie that is bland to get to the right amount of sweetness he desires.

Task:
You must write a function or method that returns which pies Groot has to consume to get the right amount of sweetness.

Input:
One of the inputs is the sweetness values of the available pies and the other is the desired sweetness.

Example:
findPies([1, 2, 3, 2, 1], 6)

returns [0, 1, 2] or [2, 1, 0]

findPies([8, 4, 3, 2, 6, 5], 6)

returns [1, 3] or [4]
*/



const findPies = (pies,sweetness)=>{
    ans=[];
    noOfPie=pies.length;
    for(let ind=0; ind<noOfPie;ind++) {
        pie=pies[ind];
        tempPieArray=[];
        tempSweetness=pie;
        if (tempSweetness > sweetness) return;
        else if (tempSweetness == sweetness) {
            ans.push([ind]);
            return ans;
            // break;
        }
        else if (tempSweetness<sweetness){
            tempPieArray.push(ind);
            for (let i=ind+1; i<noOfPie; i++){
                if (tempSweetness+pies[i]<=sweetness){
                    tempSweetness += pies[i];
                    tempPieArray.push(i);
                }
                if (tempSweetness==sweetness){
                    ans.push(tempPieArray);
                    return ans;
                    // break;
                }
            }
        }
    };
    return ans;
}
console.log(findPies([1, 2, 3, 2, 1], 6));
//issue raised in git