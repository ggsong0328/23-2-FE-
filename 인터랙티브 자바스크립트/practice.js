/*const today = document.querySelector("#today");

today.innerHTML = "<li>처음</li>" + today.innerHTML;
today.innerHTML = today.innerHTML + "<li>마지막</li>";

today.outerHTML = "<p>이전</p>" + today.outerHTML;

const newToday = document.querySelector("#today");
newToday.outerHTML = newToday.outerHTML + "<p>다음</p>";

const tomorrow = document.querySelector("#tomorrow");

// 1. 요소 노드 만들기: document.createElement('태그이름')
const first = document.createElement("li");

// 2. 요소 노드 꾸미기: textContent, innerHTML, ...
first.textContent = "처음";

// 3. 요소 노드 추가하기: NODE.prepend, append, after, before
tomorrow.prepend(first);
*/

// 노드 삭제와 이동
const today = document.querySelector("#today");
const tomorrow = document.querySelector("#tomorrow");

// 노드 삭제하기
tomorrow.remove();
today.children[2].remove();

// 노드 이동하기: prepend, append, before, after
today.append(tomorrow.children[1]);

const item = tomorrow.firstElementChild;
const link = item.firstElementChild;

// elem.getAttribute('속성'): 속성에 접근하기
console.log(tomorrow.getAttribute("href"));
console.log(item.getAttribute("class"));

//elem.setAttribute('속성', '값'): 속성 추가(수정)하기
tomorrow.setAttribute("class", "list"); //추가
link.setAttribute("href", "https://www.codeit.kr"); //수정

// elem.removeAttribute('속성'): 속성 제거하기
tomorrow.removeAttribute("href");
tomorrow.removeAttribute("class");

// 스타일 다루기
// style 프로퍼티
today.children[0].style.textDecoration = "line-through";
today.children[0].style.backgroundColor = "#DDDDDD";

// elem.classList: add, remove, toggle
item.classList.add("done", "other");
item.classList.remove("done");
item.classList.toggle("done", true); //true(추가) false(삭제)
console.log(today.classList);
console.log(today.children[1].classList);

// elem.className
today.children[1].className = "done"; //done : css 코드에 있는 done class의 스타일 -> class name도 같이 바뀜
