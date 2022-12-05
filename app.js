const express = require('express')
const app = express()
// define related variables
const port = 3000;
//require express handlebars here
const exphbs = require('express-handlebars')

const hbs = exphbs.create({
  defaultLayout: 'main',
  helpers: {
    switchChecked: function (navItem, navPage) {
      for (let i = 0; i < navItem.length; i++) {
        navPage.addEventListener('click', function (event) {
          const target = event.target
          if (target.id.toString() === navItem[i].id.toString()) {
            target.classList.toggle('checked')
          }
        })
      }
    }
  }
})
//setting template engine
app.engine('handlebars', hbs.engine)
//let express know the view engine setting is handlebars
app.set('view engine', 'handlebars')

//setting static files
app.use(express.static('public'))
//route setting

app.get('/', (req, res) => {
  const page = {
    title: '首頁'
  }
  const navPage = document.querySelector('.nav-page')
  const navItem = document.querySelectorAll('.nav-item')
  res.render('index', { page: page })
})

app.get('/:page_title', (req, res) => {
  const page = {
    title: `${req.params.page_title}`,
  }
  res.render('index', { page: page })
})

app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})