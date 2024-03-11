//your code here!
let list = document.getElementById('infi-list');
// add 10 items in list
list.innerHTML += `
<li>Item 1</li>
<li>Item 2</li>
<li>Item 3</li>
<li>Item 5</li>
<li>Item 6</li>
<li>Item 7</li>
<li>Item 8</li>
<li>Item 9</li>
<li>Item 10</li>
`
let count = 11;
document.getElementById('infi-list').addEventListener('scroll', function() {
  list.innerHTML += `<li>Item ${count}</li>`
  count++;
})
