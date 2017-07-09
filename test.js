var kg_rep = '[{"kg": "2", "rep": "1"}, {"kg": "20", "rep": "20"}, {"kg": "30", "rep": "30"}]' ;
var parsed = JSON.parse(kg_rep);
console.log(parsed[1].kg*parsed[1].rep);