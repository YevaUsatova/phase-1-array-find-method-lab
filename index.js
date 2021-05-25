
function superbowlWin(records){
    let found = records.find(function(record){
       
        return record['result'] === "W";
    
    })
if (found){
    return found["year"]
}
}
   
;
