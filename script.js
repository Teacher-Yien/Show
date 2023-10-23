const access = "xBs1vZOs1ePT2Wb74teW_ayM4YaClNR6yFgH3eq8mkU";
const formE1 = document.querySelector("form");
const inputE1 = document.querySelector("input");
const searchResults = document.querySelector(".search_results");
const show_more = document.querySelector(".btn-show");

let inputData = "";
let page = 1;
async function search_img(){
	inputData = inputE1.value;
	const url = `https://api.unsplash.com/search/photos?page${page}&query=
	${inputData}&client_id=${access}`;

	const response = await fetch(url);
	const data = await response.json();

	const results = data.results;
	if(page===1){
		search_resultsE1.innerHTML = "";
	}

	results.map((result)=>{
		const imageWrapper = document.createElement("div")
		imageWrapper.classList.add("search-result")
		const image = document.createElement("img");
		image.src = result.urls.small
		image.alt = result.alt_description
		const imageLink = document.createElement("a")
		imageLink.href = result.links.html
		imageLink.target = "_blank"
		imageLink.textContent = result.alt_description

		imageWrapper.appendChild(image)
		imageWrapper.appendChild(imageLink)
	  search_resultsE1.appendChild(imageWrapper)
	});
	page++;
	if(page> 1){
		show_more.style.display = "block";
	}
}

formE1.addEventListener("submit", (event)=>{
	event.preventDefault();
	page = 1;
	search_img();

})
show_more.addEventListener("click", ()=>{
	search_img();

})