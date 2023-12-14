const exprees = require(`express`)
const app = exprees()

app.get(`/`, (req, res) => {
    res.send("Olá mundo!")
}

app.listen(8989, () => {"servidor iniciado no ponto 8989"})