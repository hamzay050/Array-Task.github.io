let arr=["tag1" , "tag2" , "tag3", "tag 4"];
function arrayFunc()
{
    if(arr.length==0){
        document.getElementById("isEmpty").innerHTML="There is no Tag";
    }
    else
    {
       
        
        arr.map(function(a){
            {
            var list=document.createElement('li');
            list.innerHTML=a;
            ul.appendChild(list);
        }
        });
        
    }
}
arrayFunc();