{/* 
<div class="projectDiv">
    <div class="projectDivImage">
        <img src="./imgs/linkedInLogo.png">
    </div>
    <div class="projectDivContent">
        <div class="projectDivTitle">
            <p>This is a project title</p>
        </div>
        <div class="projectDivBody">
            <p>This is content for the project ... Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
        </div>
    </div>
</div> */}

var jsonFile = fetch("/projects.json")
                .then(response => response.json())
                .then(json => jsonLoaded(json));


function jsonLoaded(json) {
    console.log();
    var contentElement = document.getElementsByClassName("content");

    for (var i = 0; i < json.length; i++)
    {
        console.log(json[i]);
        var projectContainer = document.createElement("div");
        projectContainer.className = "projectDiv";
        
        var projectImgDiv = document.createElement("div");
        projectImgDiv.className = "projectDivImage";
        
        projectContainer.appendChild(projectImgDiv);
        
        var projectImg = document.createElement("img");
        projectImg.setAttribute("src", json[i].imgUrl);
        projectImgDiv.appendChild(projectImg);

        var projectDivContent = document.createElement("div");
        projectDivContent.className = "projectDivContent";

        var projectDivTitle = document.createElement("div");
        projectDivTitle.className = "projectDivTitle";

        var projectDivBody = document.createElement("div");
        projectDivBody.className = "projectDivBody";

        var bodyText = document.createElement("p");
        var bodyTextJSON = document.createTextNode(json[i].body)
        bodyText.appendChild(bodyTextJSON);

        projectDivBody.appendChild(bodyText);

        var titleText = document.createElement("p");
        var titleTextJSON = document.createTextNode(json[i].title)
        titleText.appendChild(titleTextJSON);

        projectDivTitle.appendChild(titleText);

        projectDivContent.appendChild(projectDivTitle);
        projectDivContent.appendChild(projectDivBody);

        projectDivContent.appendChild(projectDivBody);

        projectContainer.appendChild(projectImgDiv);
        projectContainer.appendChild(projectDivContent);

        var expandedContent = document.createElement("div");
        expandedContent.classList = "projectDivExpandedContent";

        expandedContent.insertAdjacentHTML( 'beforeend', json[i].contentHTML );

        projectContainer.addEventListener("click", function() {
            if (this.children[2].classList[1] == "expanded")
            {
                this.children[2].classList = "projectDivExpandedContent";
            }
            else
            {
                this.children[2].classList = this.children[2].classList + " expanded";
            }
        });

        projectContainer.appendChild(expandedContent);

        contentElement[0].appendChild(projectContainer);
    }
}           
