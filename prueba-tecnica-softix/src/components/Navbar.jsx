import { AppBar,Box, Container, Toolbar, Typography} from '@mui/material'
import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static' color='transparent'>
            <Container>
                <Toolbar>
                    <Typography sx={{ flexGrow: 1 }}>
                        <Link to="/" style= {{textDecoration: "none", color:"#eee" }}>
                            Mi Aplicación React
                        </Link>
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    </Box>
    
  )
}
