(function() {
    var goBackBtn    = document.querySelector('.back-btn');
    var goDetailsBtn = document.querySelector('.go-details-btn');

    goBackBtn.onclick = function() {
        goRootPage();
    }
    goDetailsBtn.onclick = function() { 
        goDetails();
    }
  

})();