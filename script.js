const accessKey ="78mhoPmRK_ovwoe-x01KuR-tInxgs89lM25Sj1r95uc";
const inp=document.querySelector("#search_input")
const butn=document.querySelector("#search_button")
const formEl=document.querySelector("form")
const search_results=document.querySelector(".search_results")
const show_more=document.querySelector(".show_more")

let inputData=""
let page =1;
async function searchImages(){
    inputData=inp.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`
    const response =await fetch(url)
    const data =await response.json()
   const results=data.results
   if(page===1 ){
    search_results.innerHTML=""
   }
   results.map((result)=>{
const imageWapear =document.createElement('div')
imageWapear.classList.add(".search_result")
const image =document.createElement('img')
image.src=result.urls.small
image.sizes=result.sizes="256x256"
image.alt=result.alt_discreaption
const imageLink=document.createElement('a')
imageLink.href=result.links.html
imageLink.target="_blank"
imageLink.textContent=result.alt_discreaption


imageWapear.appendChild(image)
imageWapear.appendChild(imageLink)
search_results.appendChild(imageWapear)
                    })
                    page++
                    if(page>1){
                        show_more.style.display="block"
                    }
}
formEl.addEventListener("submit",(event)=>{
    event.preventDefault();
    page=1
    searchImages()
})
show_more.addEventListener("click",()=>{
  
    searchImages()
})