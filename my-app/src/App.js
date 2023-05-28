import './App.css';
import {React,useState} from 'react';
import Header from './Components/Header/Header';
import Container from '@mui/material/Container';
import { Grid,Box,TextField,Button,Typography } from '@mui/material';
import {PDFViewer} from "@react-pdf/renderer";
import TicketPDF from './Components/TicketPDF/TicketPDF';
function App() {

  const [precioFinal,setPrecioFinal] = useState(0);

  const [fechaActua,setFechaActua] = useState(new Date());
  const [producto1,setProducto1] = useState({
    cantidad: 0,
    producto: '',
    precioParcial: 0,
    descuento: 0,
    precioFinal: 0,
  });

  const [producto2,setProducto2] = useState({
    cantidad: 0,
    producto: '',
    precioParcial: 0,
    descuento: 0,
    precioFinal: 0,
  });

  const [producto3,setProducto3] = useState({
    cantidad: 0,
    producto: '',
    precioParcial: 0,
    descuento: 0,
    precioFinal: 0,
  });

  const [producto4,setProducto4] = useState({
    cantidad: 0,
    producto: '',
    precioParcial: 0,
    descuento: 0,
    precioFinal: 0,
  });

  const [producto5,setProducto5] = useState({
    cantidad: 0,
    producto: '',
    precioParcial: 0,
    descuento: 0,
    precioFinal: 0,
  });

  const [producto6,setProducto6] = useState({
    cantidad: 0,
    producto: '',
    precioParcial: 0,
    descuento: 0,
    precioFinal: 0,
  });

  const [producto7,setProducto7] = useState({
    cantidad: 0,
    producto: '',
    precioParcial: 0,
    descuento: 0,
    precioFinal: 0,
  });

  const [verRecibo,setVerRecibo] = useState(false); 
  const [productosEnCola,setProductosEnCola] = useState([]);
  
  const calcularPrecioFinal = (producto) => {  
    let precioFinal = 0;
    precioFinal = producto.precioParcial - producto.precioParcial * (producto.descuento/100);
    producto.precioFinal = precioFinal;
  };
  
  const calcularFinal = () =>{
    let total = 0;
    total = producto1.precioFinal + producto2.precioFinal + producto3.precioFinal + producto4.precioFinal + producto5.precioFinal + producto6.precioFinal + producto7.precioFinal;
    console.log("TOTAL",total)
    return total;
  } 

  const fechaActual = () => {
    let fecha = new Date();
    let dia = fecha.getDate();
    let mes = fecha.getMonth() + 1;
    let anio = fecha.getFullYear();
    let fechaActual = dia + "/" + mes + "/" + anio;
    setFechaActua(fechaActual);
  }

  const handleCalcular1 = () => {
    calcularPrecioFinal(producto1)
  }

  const handleCalcular2 = () => {
    calcularPrecioFinal(producto2)
  }

  const handleCalcular3 = () => {
    calcularPrecioFinal(producto3)
  }

  const handleCalcular4 = () => {
    calcularPrecioFinal(producto4)
  }

  const handleCalcular5 = () => {
    calcularPrecioFinal(producto5)
  }

  const handleCalcular6 = () => {
    calcularPrecioFinal(producto6)
  }

  const handleCalcular7 = () => {
    calcularPrecioFinal(producto7)
  }
  
   const handlePrecioFinal = () => {
    setPrecioFinal(calcularFinal())
    setProductosEnCola([...productosEnCola,producto1,producto2,producto3,producto4,producto5,producto6,producto7])
    
    fechaActual()
  }
   //esta funcion es la que se encarga de mostrar el objeto/ventana pdf
   const mostrarRecibo = () => {
    console.log("MOSTRAR RECIBO")
    setVerRecibo(true);
    //aca va el pdf
   }
   const reciboOn = () => {
    return(
      <div className='contenedorPdf'>
        <button
          onClick={() => setVerRecibo(false)}
          style={{
            color: 'white',
            backgroundColor: 'red',
            padding: '5px',
            fontSize: '15px',
            fontweight: 'bold',
          }}
        >
          Cerrar recibo
        </button>
        <PDFViewer style={{ width:"100%",height:"100vh"}}>
          <TicketPDF productos={productosEnCola} fecha={fechaActua} precioFinal={precioFinal}  />
        </PDFViewer>
      </div>
    )
   }

  return (
 
      <Container maxWidth="xl" className='App-header background-image'  >
        <Container className="padding colorTitle">
            <Header variant="h2" prop="Gestión de Venta" />
        </Container>
        {verRecibo ? reciboOn() : null}
        <Container className='form sombra'>
            <Box
              component="form"
              className='paddingTop paddingBottom '
              noValidate
              autoComplete="off">
                <Container>
                  <Grid container spacing={1}>  
                    <Grid item xs={1} className='paddingTopInput paddingBottomInput' key={1}>
                      <TextField
                          required
                          key={"cant1"}
                          id="outlined-required"
                          label="Cant"
                          type="number"
                          onChange={(e) => setProducto1({...producto1, cantidad: e.target.value})}
                        />
                    </Grid>
                    <Grid item xs={5}>
                      <TextField
                          required
                          key={"prod1"}
                          id="outlined-required"
                          label="Producto"
                          fullWidth
                          onChange={(e) => setProducto1({...producto1, producto: e.target.value})}
                        />
                    </Grid>
                    <Grid item xs={2}>
                      <TextField
                          key={"parcial1"}
                          required
                          label="Precio Parcial"
                          id="outlined-required"
                          type="number"
                          onChange={(e) => setProducto1({...producto1, precioParcial: e.target.value})}
                        />
                    </Grid>
                    <Grid item xs={2}>
                      <TextField
                          key={"descuento1"}
                          label="Descuento"
                          
                          id="outlined-required"
                          type="number"
                          onChange={(e) =>{
                            setProducto1({...producto1, descuento: e.target.value})
                          }}
                        />
                    </Grid>
                    <Grid item xs={2} key={"algo"}>
                      <Container className='precioFinalContenedor' key={'final'}>
                        <Typography className='precioFinal' onChange={handleCalcular1()}>${producto1.precioFinal}</Typography>
                      </Container>
                    </Grid>
                  </Grid>
                  <Grid container key={"prod2"} spacing={1}>  
                    <Grid item xs={1} className='paddingTopInput paddingBottomInput' key={1}>
                      <TextField
                          required
                          key={"cant2"}
                          id="outlined-required"
                          label="Cant"
                          type="number"
                          onChange={(e) => setProducto2({...producto2, cantidad: e.target.value})}
                        />
                    </Grid>
                    <Grid item xs={5}>
                      <TextField
                          required
                          key={"prod2"}
                          id="outlined-required"
                          label="Producto"
                          fullWidth
                          onChange={(e) => setProducto2({...producto2, producto: e.target.value})}
                        />
                    </Grid>
                    <Grid item xs={2}>
                      <TextField
                          key={"parcial2"}
                          required
                          id="outlined-required"
                          label="Precio Parcial"
                          type="number"
                          onChange={(e) => setProducto2({...producto2, precioParcial: e.target.value})}
                        />
                    </Grid>
                    <Grid item xs={2}>
                      <TextField
                          key={"descuento2"}
                          id="outlined-required"
                          label="Descuento"
                          type="number"
                          onChange={(e) =>{
                            setProducto2({...producto2, descuento: e.target.value})
                          }}
                        />
                    </Grid>
                    <Grid item xs={2} key={"algo2"}>
                      <Container className='precioFinalContenedor' key={'final'}>
                        <Typography className='precioFinal' onChange={ handleCalcular2()}>${producto2.precioFinal}</Typography>
                      </Container>
                    </Grid>
                  </Grid>    
                  <Grid container spacing={1}>  
                    <Grid item xs={1} className='paddingTopInput paddingBottomInput' key={1}>
                      <TextField
                          required
                          key={"cant3"}
                          id="outlined-required"
                          label="Cant"
                          type="number"
                          onChange={(e) => setProducto3({...producto3, cantidad: e.target.value})}
                        />
                    </Grid>
                    <Grid item xs={5}>
                      <TextField
                          required
                          key={"prod3"}
                          id="outlined-required"
                          label="Producto"
                          fullWidth
                          onChange={(e) => setProducto3({...producto3, producto: e.target.value})}
                        />
                    </Grid>
                    <Grid item xs={2}>
                      <TextField
                          key={"parcial3"}
                          required
                          id="outlined-required"
                          label="Precio Parcial"
                          type="number"
                          onChange={(e) => setProducto3({...producto3, precioParcial: e.target.value})}
                        />
                    </Grid>
                    <Grid item xs={2}>
                      <TextField
                          key={"descuento3"}
                          id="outlined-required"
                          label="Descuento"
                          type="number"
                          onChange={(e) =>{
                            setProducto3({...producto3, descuento: e.target.value})
                          }}
                        />
                    </Grid>
                    <Grid item xs={2} key={"algo"}>
                      <Container className='precioFinalContenedor' key={'final'}>
                        <Typography className='precioFinal' onChange={ handleCalcular3()}>${producto3.precioFinal}</Typography>
                      </Container>
                    </Grid>
                  </Grid>    
                  <Grid container spacing={1}>  
                    <Grid item xs={1} className='paddingTopInput paddingBottomInput' key={1}>
                      <TextField
                          required
                          key={"cant4"}
                          id="outlined-required"
                          label="Cant"
                          type="number"
                          onChange={(e) => setProducto4({...producto4, cantidad: e.target.value})}
                        />
                    </Grid>
                    <Grid item xs={5}>
                      <TextField
                          required
                          key={"prod4"}
                          id="outlined-required"
                          label="Producto"
                          fullWidth
                          onChange={(e) => setProducto4({...producto4, producto: e.target.value})}
                        />
                    </Grid>
                    <Grid item xs={2}>
                      <TextField
                          key={"parcial4"}
                          required
                          id="outlined-required"
                          label="Precio Parcial"
                          type="number"
                          onChange={(e) => setProducto4({...producto4, precioParcial: e.target.value})}
                        />
                    </Grid>
                    <Grid item xs={2}>
                      <TextField
                          key={"descuento4"}
                          id="outlined-required"
                          label="Descuento"
                          type="number"
                          onChange={(e) =>{
                            setProducto4({...producto4, descuento: e.target.value})
                          }}
                        />
                    </Grid>
                    <Grid item xs={2} key={"algo"}>
                      <Container className='precioFinalContenedor' key={'final'}>
                        <Typography className='precioFinal' onChange={ handleCalcular4()}>${producto4.precioFinal}</Typography>
                      </Container>
                    </Grid>
                  </Grid>    
                  <Grid container spacing={1}>  
                    <Grid item xs={1} className='paddingTopInput paddingBottomInput' key={1}>
                      <TextField
                          required
                          key={"cant5"}
                          id="outlined-required"
                          label="Cant"
                          type="number"
                          onChange={(e) => setProducto5({...producto5, cantidad: e.target.value})}
                        />
                    </Grid>
                    <Grid item xs={5}>
                      <TextField
                          required
                          key={"prod5"}
                          id="outlined-required"
                          label="Producto"
                          fullWidth
                          onChange={(e) => setProducto5({...producto5, producto: e.target.value})}
                        />
                    </Grid>
                    <Grid item xs={2}>
                      <TextField
                          key={"parcial5"}
                          required
                          id="outlined-required"
                          label="Precio Parcial"
                          type="number"
                          onChange={(e) => setProducto5({...producto5, precioParcial: e.target.value})}
                        />
                    </Grid>
                    <Grid item xs={2}>
                      <TextField
                          key={"descuento5"}
                          id="outlined-required"
                          label="Descuento"
                          type="number"
                          onChange={(e) =>{
                            setProducto5({...producto5, descuento: e.target.value})
                          }}
                        />
                    </Grid>
                    <Grid item xs={2} key={"algo"}>
                      <Container className='precioFinalContenedor' key={'final'}>
                        <Typography className='precioFinal' onChange={ handleCalcular5()}>${producto5.precioFinal}</Typography>
                      </Container>
                    </Grid>
                  </Grid>    
                  <Grid container spacing={1}>  
                    <Grid item xs={1} className='paddingTopInput paddingBottomInput' key={1}>
                      <TextField
                          required
                          key={"cant6"}
                          id="outlined-required"
                          label="Cant"
                          type="number"
                          onChange={(e) => setProducto6({...producto6, cantidad: e.target.value})}
                        />
                    </Grid>
                    <Grid item xs={5}>
                      <TextField
                          required
                          key={"prod6"}
                          id="outlined-required"
                          label="Producto"
                          fullWidth
                          onChange={(e) => setProducto6({...producto6, producto: e.target.value})}
                        />
                    </Grid>
                    <Grid item xs={2}>
                      <TextField
                          key={"parcial6"}
                          required
                          id="outlined-required"
                          label="Precio Parcial"
                          type="number"
                          onChange={(e) => setProducto6({...producto6, precioParcial: e.target.value})}
                        />
                    </Grid>
                    <Grid item xs={2}>
                      <TextField
                          key={"descuento6"}
                          id="outlined-required"
                          label="Descuento"
                          type="number"
                          onChange={(e) =>{
                            setProducto6({...producto6, descuento: e.target.value})
                          }}
                        />
                    </Grid>
                    <Grid item xs={2} key={"algo"}>
                      <Container className='precioFinalContenedor' key={'final'}>
                        <Typography className='precioFinal' onChange={ handleCalcular6()}>${producto6.precioFinal}</Typography>
                      </Container>
                    </Grid>
                  </Grid>    
                  <Grid container spacing={1}>  
                    <Grid item xs={1} className='paddingTopInput paddingBottomInput' key={1}>
                      <TextField
                          required
                          key={"cant7"}
                          id="outlined-required"
                          label="Cant"
                          type="number"
                          onChange={(e) => setProducto7({...producto7, cantidad: e.target.value})}
                        />
                    </Grid>
                    <Grid item xs={5}>
                      <TextField
                          required
                          key={"prod7"}
                          id="outlined-required"
                          label="Producto"
                          fullWidth
                          onChange={(e) => setProducto7({...producto7, producto: e.target.value})}
                        />
                    </Grid>
                    <Grid item xs={2}>
                      <TextField
                          key={"parcial7"}
                          required
                          id="outlined-required"
                          label="Precio Parcial"
                          type="number"
                          onChange={(e) => setProducto7({...producto7, precioParcial: e.target.value})}
                        />
                    </Grid>
                    <Grid item xs={2}>
                      <TextField
                          key={"descuento7"}
                          id="outlined-required"
                          label="Descuento"
                          type="number"
                          onChange={(e) =>{
                            setProducto7({...producto7, descuento: e.target.value})
                          }}
                        />
                    </Grid>
                    <Grid item xs={2} key={"algo"}>
                      <Container className='precioFinalContenedor' key={'final'}>
                        <Typography className='precioFinal' onChange={ handleCalcular7()}>${producto7.precioFinal}</Typography>
                      </Container>
                    </Grid>
                  </Grid>
                  <Grid container spacing={1}  justifyContent="center">

                  <Grid item xs={3} key={"precioTotal"} display="flex" alignContent={'center'} alignItems={'center'} justifyContent={'center'}>
                        <Box   
                          display="flex"
                          justifyContent="center"
                          alignItems="center" >
                          <Button disableElevation variant="contained" className='sombra centrar'onClick={handlePrecioFinal} >
                            Calcular Precio Final
                            </Button>                        
                        </Box>
                      </Grid>

                      <Grid item xs={3} key={"precioTotal"}>
                        <Container className='precioFinalSumaTotal'>
                          <Typography color={'black'} className='precioFinalSumaTotalLetra'>PRECIO A PAGAR</Typography>
                        </Container>
                      </Grid>
                      
                      <Grid item xs={6} key={"precioTotal"}>
                        <Container className='contenedorPrecioFinalSumatoria'>
                          <Typography color={'black'} className='precioFinalSumaTotalLetra'>${precioFinal}</Typography>
                        </Container>
                      </Grid>
                  </Grid>                                
            </Container>
          </Box>
        </Container>
        <Container className='paddingTop paddingBottom'>
          <Button variant="contained" className='sombra' onClick={mostrarRecibo} >Imprimir Ticket</Button>
        </Container>
      </Container>
  );
}

export default App;
