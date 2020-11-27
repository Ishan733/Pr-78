var names = ["Family","Rahul","Sundar","Raji","Rathi","Senthil","Vali and selvraj"]
var move = [
"family.png","brother.jpg","father.jpg","mom.jpg","Aunt.png","uncle.jpg","grandparent.png"]

var i = 0;
            function nextslide()
            {
                i++;
                var numbers_of_family_members = 7
                if(i > numbers_of_family_members )
                {
                    i = 0;
                }
                var updatedImage = move[i];
                var updatedName  = names[i];
                document.getElementById("album").src = updatedImage;
                document.getElementById("family_number").innerHTML = updatedName;
            }
