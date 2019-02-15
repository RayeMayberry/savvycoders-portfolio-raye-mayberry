 var name = prompt("new website who this");

    var nameChecker = function() {
        if (name === ""){
            name = prompt("pls giv naem");
        } else {
            document.querySelector('#header span').textContent = `, ${name}`;
        }
    }

    nameChecker();
    