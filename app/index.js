const app = require('./app')
const { port } = require('./config')



app.listen(port, () =>{
	console.log(`serwer uruchamia się na porcie ${port}`);
})
