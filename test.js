let hashMap={};
let inputIdType=["L-id","L-pw","S-id","S-pw","S-cf","S-email"];

inputIdType.map(function(currType){
    hashMap[currType] = function(val){
        console.log(currType,val);
    };
});

hashMap["L-id"]("this is val");