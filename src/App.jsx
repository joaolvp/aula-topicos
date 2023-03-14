import { useEffect, useState } from 'react'
import HelloWorld from './HelloWorld.jsx'
import './App.css'
import Parent from './Parent.jsx'
import FrutaItem from './Frutaitem.jsx'
import api from './Api.jsx'
import { Card, CardContent, CardHeader, CardMedia, Typography, Button, Link } from '@mui/material'


function App() {
  const [nomeDesejado, setNomeDesejado] = useState("");
  const [data, setData]=useState(null);
  const cesto_frutas = [{
    nome: 'banana',
    quantidade: 12,
  },
  {
    nome: 'maça',
    quantidade: 3,
  },
  {
    nome: 'melancia',
    quantidade: 1,
  }
]

  //useEffect( ()=>{
    //const loadData = async()=>{
      //const response = await api.getUser(nomeDesejado);
      //setData(response)
    //}
    //loadData();
  //} ,[nomeDesejado]);

  const loadData = async()=>{
    const response = await api.getUser(nomeDesejado);
    setData(response)
  }

  function buscar(event){
    event.preventDefault();
    loadData();
  }

  return (
    <div>
      <HelloWorld nome='Carlo' idade='25' />
      <HelloWorld nome='Mia' idade='35'/>

      <Parent>
        <HelloWorld nome='Filho' idade='16' />
        <h4>Titulo filho</h4>
      </Parent>
      {
        cesto_frutas.map((fruta)=>{
          return(
            <FrutaItem nome={fruta.nome} quantidade={fruta.quantidade} className='fruta'/>
          )
        })
      }
      <input onChange={(e) => {setNomeDesejado(e.target.value)}}></input>
      <Button onClick={buscar} variant='contained'>Carregar</Button>
      <p>{nomeDesejado}</p>
      <br/>
      { data ? (<Card sx={{maxWidth: 345}}>
        <CardHeader title={data.name} subheader={data.login}></CardHeader>
        <CardMedia component='img' height='194' image={data.avatar_url} alt='User image'></CardMedia>
        <CardContent><Typography>Repositórios Públicos: {data.public_repos}</Typography>
        <Typography><Link href={data.html_url}>@{data.login}</Link></Typography>
        </CardContent>
        {console.log(data.login)}
      </Card>): null }
      
    </div>
  )
}

export default App

