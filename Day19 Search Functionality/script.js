const searchInput = document.getElementById("search-input");
const itemList = document.querySelectorAll("#item-list li");
const clearBtn = document.getElementById("clear-btn");
const resultCount = document.getElementById("result-count");
const noResult = document.getElementById("no-result");

function searchItems(){

    const searchText = searchInput.value.toLowerCase().trim();

    let visible = 0;

    itemList.forEach(item=>{

        const text = item.textContent.toLowerCase();

        if(text.includes(searchText)){

            item.style.display="block";

            visible++;

        }
        else{

            item.style.display="none";

        }

    });

    resultCount.innerHTML=`Results Found : ${visible}`;

    if(visible===0){

        noResult.style.display="block";

    }
    else{

        noResult.style.display="none";

    }

}

searchInput.addEventListener("input",searchItems);

clearBtn.addEventListener("click",()=>{

    searchInput.value="";

    searchItems();

    searchInput.focus();

});

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        searchInput.value="";

        searchItems();

    }

});

searchItems();