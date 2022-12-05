const navPage = document.querySelector('.nav-page')
const navItem = document.querySelectorAll('.nav-item')
// console.log("nav-item:", navItem)
// console.log("nav-page:", navPage)
// console.log("nav-item[0]:", navItem[0])
// console.log("nav-item[1]:", navItem[1])
// navItem[0].classList.toggle('checked')
// console.log("nav-item[2]:", navItem[2])
// console.log("nav-item[3]:", navItem[3])


// *solution 1: check if target.id = navItem.id use classList add/remove to add className('checked')
// the issue: need to use event.preventDefault which stop a tag and make href content invalid.

// for (let i = 0; i < navItem.length; i++) {
//   navPage.addEventListener('click', function (event) {
//     event.preventDefault()
//     const target = event.target
//     if (target.id === navItem[i].id) {
//       navItem[i].classList.add('checked')
//     } else {
//       navItem[i].classList.remove('checked')
//     }
//     // console.log("navItem:", navItem[i])
//   })
// }

// *solution 2: use toggle instead of add/remove
// same issue from preventdDefaulf(), need to find out how to keep the css class 'checked' in new routing
// for (let i = 0; i < navItem.length; i++) {
//   navPage.addEventListener('click', function (event) {
//     event.preventDefault()
//     const target = event.target
//     navItem[i].classList.toggle('checked', target.id.toString() === navItem[i].id.toString())
//   })
// }


//*solution 3: use handlebars customed helper