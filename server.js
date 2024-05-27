const express = require ('express'); 
const app = express() ;
const http = require ('http'); 
const server = http.createServer(app);
const logger = require ('morgan');
const cors = require ('cors'); 




const vault_dwellerRoutes = require("./routes/valutDwellerRoutes"); 



const port = process.env.PORT || 3000; 


app.use(logger("dev")); 
app.set(express.json()); 
app.use(express.urlencoded({
    extended: true
}));


app.use(cors()); 
app.disable("x-powered-by");


app.set('port', port); 

vault_dwellerRoutes(app); 

server.listen(3000,'172.100.5.135' || 'localhost', function()
{
    console.log('Estoy muerto'+ port + 'Acabo de iniciar...'); 
});

app.get('/', (req,res ) =>
{
res.send('siento que me morire de calor');
});


