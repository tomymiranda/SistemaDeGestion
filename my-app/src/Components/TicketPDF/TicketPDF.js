import React from "react";
import {useState} from "react";
import {Document,Page,View,Image,Text,StyleSheet} from "@react-pdf/renderer";
import {Cuadro} from "../Cuadro";
const colAncho1=10;
const colAncho2=20;
const styles = StyleSheet.create({
    table: {display: "table", width: "100%", borderStyle: "solid", borderWidth: 1, borderColor: "#000", borderRightWidth: 0, borderBottomWidth: 0, marginTop:20},
    tableRow: {margin: "auto", flexDirection: "row"},
    tableCol: {width: "auto", borderStyle: "solid", borderWidth: 1, borderColor: "#bfbfbf", borderLeftWidth: 0, borderTopWidth: 0},
    tableCell: {margin: "auto", marginTop: 5, fontSize: 10},
    tableCellHeader: {margin: 5, fontSize: 10, fontWeight: 500},
    tableCol1: {width: colAncho1+"%",borderStyle: "solid", borderColor: "#000", borderBottomColor:"#000",borderWidth: 1, borderLeftWidth: 0, borderTopWidth: 0},
    tableCol2: {width: colAncho2+"%",borderStyle: "solid", borderColor: "#000", borderBottomColor:"#000",borderWidth: 1, borderLeftWidth: 0, borderTopWidth: 0},
    anchoCol1: {width: colAncho1+"%",borderStyle:"solid",borderColor: "#000", borderBottomColor:"#000",borderWidth: 1, borderLeftWidth: 0, borderTopWidth: 0},
    anchoCol2: {width: colAncho2+"%",borderStyle:"solid",borderColor: "#000", borderBottomColor:"#000",borderWidth: 1, borderLeftWidth: 0, borderTopWidth: 0},

});

const TicketPDF = ({productos,fecha,precioFinal}) => {
    console.log("productos",productos);

    const [productosRecortado] = useState(productos.slice(0,8));
    return(
        <Document>
            <Page size="A4">
                <View style={{padding:"15px"}}>
                    <View style={{display:"flex", flexDirection:"row"}}>
                        <View style={{flex:1}}>
                            <Image
                                style={{width: "100px"}}
                                src="https://res.cloudinary.com/dfwvsjwjr/image/upload/v1679669931/slide_1_1_kv3ksd.jpg"
                            />
                        </View>
                        <View style={{flex:1,alignItems:"center",flexDirection:"column"}} >
                            <Text style={{fontSize:"12px",fontWeight:"bold"}}>X</Text>
                            <Text style={{fontSize:"12px",fontWeight:"bold"}}>PINTURAS</Text>
                            <Text style={{fontSize:"12px",fontWeight:"bold"}}>LA REPÚBLICA</Text>
                        </View>
                        <View style={{flex:1}}>
                        <Text style={{fontSize:"12px",fontWeight:"bold",alignItems:"center"}}>COMPROBANTE DE PAGO</Text>
                            <Text style={{fontSize:"12px",fontWeight:"bold",alignItems:"center"}}>Fecha de Emisión:{fecha}</Text>
                        </View>
                    </View>
                    <View style={{display:"flex", flexDirection:"row"}}>
                        <Cuadro objetos={productosRecortado} />
                    </View>
                    <View>
                        <Text style={{fontSize:"12px",fontWeight:"bold"}}>Total: {precioFinal}</Text>
                    </View>
                </View> 
            </Page>
        </Document>
    )
}
export default TicketPDF;