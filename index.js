const express = require("express")
const port = 3000

const app = express()

const users = [
	{ id: 1, name: "Patryk", email: "patryk@o2.pl" },
	{ id: 2, name: "Sara", email: "sara@o2.pl" },
	{ id: 3, name: "Adam", email: "adam@o2.pl" },
	{ id: 4, name: "Marcin", email: "marcin@o2.pl" },
]

app.get("/", (req, res) => {
	res.send(`Strona główna`)
})
app.get("/kontakt", (req, res) => {
	res.send(`Zapraszamy do kontaktu`)
})
app.get("/profile", (req, res) => {
	let html = `Znaleziono ${users.length} profile </br>`
	users.forEach(
		user =>
			(html += `<a href="/profile/${user.id}">${user.name} id:${user.id}</a></br>`)
	)
	res.send(html)
})
app.get("/profile/:id/:mode?", (req, res) => {
	const { id, mode } = req.params
	const user = users.find(x => x.id === parseInt(id))

	if (!user) {
		return res.send(`nie ma takiego uzytkownika`)
	}
	let html = `Dane użytkownika: imię:${user.name}`

	if (mode && mode === `szczegoly`) {
		html += `, id:${user.id}, email: ${user.email}`
	}
	res.send(html)
})

app.listen(port)
