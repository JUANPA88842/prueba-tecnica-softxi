import {useState, useEffect} from "react";

export function UseFetchCrear(){
    const apiUrl = 'https://www.softix.site/API/';
    
    const [clientes, setClientes] = useState(null);
    
    useEffect(() => {
        const credentials = {
            email: 'PRUEBADESARROLLADORFRONT',
            password: 'MTExMTE=Ss1*',
        };
        // Realiza una solicitud POST para iniciar sesión y obtener un token de autenticación
        fetch(`${apiUrl}login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                
            },
            body: JSON.stringify(credentials),
        })
            .then(data => {
                // Aquí obtienes el token de autenticación desde la respuesta
                const token = data.token;
                
                // Realiza una solicitud GET para obtener la lista de clientes utilizando el token
                fetch(`${apiUrl}/posts`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                })
                    .then((response) => response.json())
                    .then((clientesData) => setClientes(clientesData))
                    .catch(error => {
                        // Maneja errores de solicitud de clientes aquí
                        console.error('Error en la solicitud de clientes:', error);
                    })
            })
                .catch(error => {
                    // Maneja errores de inicio de sesión aquí
                    console.error('Error de inicio de sesión:', error);
                })
    }, [])

    return {clientes}
}