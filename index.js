var myskills = document.getElementById("myskills")

var content =  `
                <div class="service-item">
                <div class="second-service-icon service-icon"></div>
                <h4>title</h4>
                <p>
                    paragraph
                </p>
                </div>`

var newcontent = content.replace("title","myname")
newcontent =  newcontent.replace("paragraph","myfamilly")

var mydiv = document.createElement("div")
mydiv.innerHTML = newcontent;
mydiv.className = "col-md-6";

myskills.appendChild(mydiv)

var newcontent = content.replace("title","yourname")
newcontent =  newcontent.replace("paragraph","yourfamilly")

var mydiv = document.createElement("div")
mydiv.innerHTML = newcontent;
mydiv.className = "col-md-6";

myskills.appendChild(mydiv)