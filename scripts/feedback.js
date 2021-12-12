window.addEventListener("load", function(){
    document.getElementById("submitButton").addEventListener("click", function(){
        if (!document.getElementById("submitButton").classList.contains("submitButton--loading"))
        {
            toggleButton();
            hideAlert();
            setTimeout(toggleButton, 2000);
            setTimeout(submit, 2000);
        }
    }); 
});

function toggleButton(){
    document.getElementById("submitButton").classList.toggle('submitButton--loading')
};

function submit() {
    // var usernameInput = g
    // var xhttp = new XMLHttpRequest();

    // xhttp.open("GET", "ajax_info.txt", true);
    // xhttp.send();

    var name = document.getElementById("usernameText");
    var content = document.getElementById("feedbackTextArea");

    if (content.value != "")
    {
        document.getElementById("feedbackTextArea").style.borderColor = "grey";

        $.ajax({
            type : "POST",  //type of method
            url  : "./php/feedback.php",  //your page
            data : { name : name.value, content : content.value },// passing the values
            success: function(res){  
                        console.log("success") ;
                    }
        });
        showAlert("Submission successful. Thank you :)", "info");
    }
    else
    {
        document.getElementById("feedbackTextArea").style.borderColor = "red";
        showAlert("You must write something in the feedback box", "error");
    }

    name.value = "";
    content.value = "";
}

function showAlert(value, type) {
    var errorBox = document.getElementById("alertBox");
    var imgSpace = document.getElementById("alertImg");
    var alertText = document.getElementById("alertText");
    alertText.appendChild(document.createTextNode(value));

    if (type=="info")
    {
        errorBox.style.borderColor="green";
        errorBox.style.color="green";

        imgSpace.setAttribute("src", "./imgs/infoImg.png");
    }
    else if (type=="error")
    {
        errorBox.style.borderColor="red";
        errorBox.style.color="red";

        imgSpace.setAttribute("src", "./imgs/errorImg.png");
    }

    errorBox.classList.add("--active");
}

function hideAlert() {
    var errorBox = document.getElementById("alertBox");
    document.getElementById("alertText").textContent = "";
    errorBox.classList.remove("--active");
}