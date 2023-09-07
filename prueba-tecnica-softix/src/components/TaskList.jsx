import {Card, Grid, Typography, CardContent, Button} from '@mui/material'
//import {UseFetchCrear} from "../useFetchCrear"
import { useState, useEffect } from 'react'


export default function TaskList() {
    const [token, setToken] = useState(null);
    const [mal, setMal] = useState(null)

    //useEffect(() => {
        
        async function login() {
            try {
                const response = await fetch('http://localhost:3000/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email: 'PRUEBADESARROLLADORFRONT',
                        password: 'MTExMTE=Ss1*',
                    }),
                });
                const data = await response.json();
                setToken(data.token);
                
            } catch (error) {
                console.error('Error:', error);
            }
        }
        

        async function getData(token) {
            if (token) {
                try {
                    const response = await fetch('http://localhost:3000/crear', {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                        body: JSON.stringify({
                            Cedula:"1203945",
                            Tipodocumento:"CC",
                            Nombre1:"Sebastian",
                            Nombre2:"Fernando",
                            Apellido1:"Pineda",
                            Apellido2:"Lopez",
                            Dv:"12345678",
                            Celular:"3014565767",
                            Telefono:"",
                            Empresa:"dd",
                            Ocupacion:"",
                            EstadoCivil:"",
                            Correo:"sebastianpruebaaa@gmail.com",
                            Direccion:"",
                            Observaciones:"",
                            Autoriza:1,
                            FechaNacimiento:"2000-01-01T00:00:00",
                            Afiliacion:"4",
                            EpsArs:"",
                            Ciudad:"11",
                            Localidad:"001",
                            Genero:"No especificado",
                            Rural:0,
                            ValorConsulta:0,
                            Tipopersona:"Natural",
                            Responsabilidadfiscal:"ZZ",
                            Tributos:"ZZ",
                            Codpostal:"",
                            Observacionfidelizacion:"",
                            Regimen:"49",
                            Pais:"CO",
                            Listaprecios:"1",
                            Ventasbloqueadas:false,
                            Maxcupo:0,
                            Diascupo:0,
                            Sedecreacion:"1",
                            Creadopor:"999",
                            RH:"o+"
                        }),
                    });
    
                const data = await response.json();
                console.log(data);
                setMal(data)
                
            } catch (error) {
                console.error('Error:', error);
                }
            }
        }
        useEffect(()=>{
            login()
            
        }, [])
        
        useEffect(()=>{
            getData(token)
        }, [token])
            

        

        
        console.log(token)
        console.log(mal)

        /**async () => {
            if (token) {
                try {
                    const response = await fetch('http://localhost:3000/crear', {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                        body: JSON.stringify({
                            Cedula:"1203945",
                            Tipodocumento:"CC",
                            Nombre1:"Sebastian",
                            Nombre2:"Fernando",
                            Apellido1:"Pineda",
                            Apellido2:"Lopez",
                            Dv:"",
                            Celular:"3014565767",
                            Telefono:"",
                            Empresa:"dd",
                            Ocupacion:"",
                            EstadoCivil:"",
                            Correo:"sebastianprueba@gmail.com",
                            Direccion:"",
                            Observaciones:"",
                            Autoriza:"1",
                            FechaNacimiento:"2000-01-01T00:00:00",
                            Afiliacion:"4",
                            EpsArs:"",
                            Ciudad:"11",
                            Localidad:"001",
                            Genero:"No especificado",
                            Rural:"0",
                            ValorConsulta:"0",
                            Tipopersona:"Natural",
                            Responsabilidadfiscal:"ZZ",
                            Tributos:"ZZ",
                            Codpostal:"",
                            Observacionfidelizacion:"",
                            Regimen:"49",
                            Pais:"CO",
                            Listaprecios:"1",
                            Ventasbloqueadas:"false",
                            Maxcupo:"0",
                            Diascupo:"0",
                            Sedecreacion:"1",
                            Creadopor:"999",
                            RH:"o+",
                        }),
                    });
    
                const data = await response.json();
                console.log(data);
                console.log(token)
            } catch (error) {
                console.error('Error:', error);
                }
            }
        };
            
        **/
        
    //}, [token])
    
     
    



    //const {clientes}= UseFetchCrear();
  return (
    <Grid container direction= "column" alignItems='center' justifyContent='center'>
        <Grid item xs={3}>
            <Card sx={{mt: 5}} style={{backgroundColor: '#1e272e', padding: "1rem"}}>
                <Typography variant='h5' textAlign='center' color='white'>Oprime un botón</Typography>
                <CardContent>
                    <div>
                        <Button variant='contained' color='primary' fullWidth="true" onClick={() => console.log("boton crear")} sx={{display: 'block', margin: "1rem 0"}}>
                            Crear Cliente
                        </Button>
                        <Button variant='contained' color='secondary' fullWidth="true" onClick={() => console.log("boton actualziar")} sx={{display: 'block', margin: "1rem 0"}}>
                            Actualizar Cliente
                        </Button>
                        <Button variant='contained' color='inherit' fullWidth="true" onClick={() => console.log("boton consultar")} sx={{display: 'block', margin: "1rem 0"}}>
                            Consultar Cliente
                        </Button>
                    </div>
                    <div>
                        
                    </div>
                    
                </CardContent>
            </Card>
        </Grid>
    </Grid>
  )
}
