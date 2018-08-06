var isHome = Math.floor(Math.random() * 1);
function timeout() {
    setTimeout(function () {
        if(isHome == 0){
      	console.log("enviando click en inicio ");
        document.getElementsByClassName('fa-home')[0].click();
        }else{
        console.log("enviando click en llamadas ");
        document.getElementsByClassName('fa-phone')[0].click();
        }
        timeout();
    }, 6000);
}
timeout();