// JavaScript source code

function validate() {
    var n = document.forms["form1"]["name"].value;
    if (n == "") {                            // for input using placedholder
        alert("Name must be filled out");
        return false;
    }
    else {
        if (!(/^[ ]*[A-Z]([a-z]|(([ ]+|-)[A-Z]))*[ ]*$/.test(n))) {
            alert("Invalid name");
            return false;
        }
        else {
            document.forms["form1"]["name"].value = n.replace(/[ ][ ]+/g, ' ').trim();                   
        }
    }
    var n = document.getElementById("email").value;
    if (!/^\w+([\.\-_]\w+)*@\w+([\.\-_]\w+)*\.\w{2,3}$/.test(n)) {
        alert("email NOT OK");
        return false;
    }

    return true;
}
