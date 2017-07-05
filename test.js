


function haha(){
    var hello = () => {
        var test = () => {console.log(this)};
        test();
    };
    hello();
}



haha();