const chalk = require("chalk")
const express = require("express")
const port = 3000
const path = require("path")
const ejsLayouts = require("express-ejs-layouts")
const app = express()
// view engine
app.set("view engine", "ejs")
app.set("views", path.join(__dirname + "/views"))
// set layout
app.use(ejsLayouts)
app.set("layout", "layouts/main")
//public folder
app.use(express.static("public"))

app.get("/", (req, res) => {
	console.log(req.url)
	res.render("pages/home", {
		title: "Strona główna",
		url: req.url,
	})
})

app.get("/firmy/:name", (req, res) => {
	console.log(req.url)
	const { name } = req.params
	const companies = [
		{ slug: "abcd", name: "A B C D" },
		{ slug: "efgh", name: "E F G H" },
	]

	const company = companies.find(x => x.slug === name)

	res.render("pages/company", {
		name: company?.name,
		companies,
		title: company?.name ?? "Brak wyników",
	})
})

app.get("*", (req, res) => {
	res.render("errors/404", {
		title: "Nie znaleziono",
		layout: "layouts/minimalistic",
	})
})

app.listen(port)
