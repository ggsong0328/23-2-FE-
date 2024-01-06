// Dom 트리 여행하기
const myTag = document.querySelector("#content");

console.log(myTag);

//부모 요소 노드
console.log(myTag.parentElement);

// 형제 요소 노드
console.log(myTag.previousElementSibling);
console.log(myTag.nextElementSibling);

// 자식 요소 노드
console.log(myTag.children);
console.log(myTag.firstElementChild);
console.log(myTag.lastElementChild);

//inner HTML
console.log(myTag.innerHTML);

//outer HTML
console.log(myTag.outerHTML);

//text Content
console.log(myTag.textContent);
