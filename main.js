//Using async function with try catch block
async function loadHeader () {
  try {
    const res = await fetch('partials/_header.html')
    const text = await res.text()
    document.querySelector('.page-header').innerHTML = text
  } catch (err) {
    console.log(err)
  }
}
async function loadFooter () {
  try {
    const res = await fetch('partials/_footer.html')
    const text = await res.text()
    document.querySelector('.page-footer').innerHTML = text
  } catch (err) {
    console.log(err)
  }
}

loadHeader()
loadFooter()

/*
// Using Fetch method and inserting the header from separate HTML File
fetch('partials/_header.html')
  .then(res => res.text())
  .then(text => document.querySelector('.page-header').innerHTML = text)
  .catch(err => console.log(err))

fetch('partials/_footer.html')
  .then(res => res.text())
  .then(text => document.querySelector('.page-footer').innerHTML = text)
  .catch(err => console.log(err))
*/

/*
// Adding the HTML content directly from JS
const pageHeader = document.querySelector('.page-header')
pageHeader.innerHTML = `
<nav>
<ul>
  <li><a class="one" href="#">One</a></li>
  <li><a class="two" href="#">Two</a></li>
  <li><a class="three" href="#">Three</a></li>
  <li><a class="four" href="#">Four</a></li>
</ul>
</nav>
`

const pageFooter = document.querySelector('.page-footer')
pageFooter.innerHTML = `
<nav>
<ul>
  <li><a class="one" href="#">Five</a></li>
  <li><a class="two" href="#">Six</a></li>
  <li><a class="three" href="#">Seven</a></li>
  <li><a class="four" href="#">Eight</a></li>
</ul>
</nav>`
*/