//get Tag
const first_page_tag = document.querySelector(".firstPart");
const second_page_tag = document.querySelector(".secondPart");

//FUNCTIONS

const go_another_page = () => {
      window.location.href = "index.html";
}

//add Event Listener
first_page_tag.addEventListener("click",go_another_page);
second_page_tag.addEventListener("click",go_another_page);

