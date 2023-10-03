import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'salmon',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: '200px',
        height: '200px',
        marginBottom: '20px'
    },
    input:{
        width: '75%',
        height: '50px',
        backgroundColor: 'orange',
        padding: '10px',
        fontSize: '20px',
        opacity: '0.9',
        border: '1px solid red',
        borderRadius: '5px',
        marginBottom: '5px'
    },
    btn: {
        "display": "inline-flex",
        "height": "36px",
        "width": "25%",
        "padding": "12px 31px",
        "justifyContent": "center",
        "alignItems": "center",
        "gap": "10px",
        "flexShrink": "0",
        "backgroundColor": "#176B87",
        "borderRadius": "11px"
    },
    btnTxt: {
            "color": "#FFF",
            "textAlign": "center",
            "fontFamily": "Poppins",
            "fontSize": "12px",
            "fontStyle": "normal",
            "fontWeight": "400",
            "lineHeight": "normal"
    },
    viewLinks:{
        flexDirection: 'row',
        width: '75%',
        justifyContent: 'space-between',
        marginTop: '15px'
    },
    textoHeader:{"color":"#000","textAlign":"center","fontFamily":"Arial","fontSize":"27.023px","fontStyle":"normal","fontWeight":"700","lineHeight":"normal"},
    textoCorrido:{"color":"#000","textAlign":"center","fontFamily":"Arial","fontSize":"12px","fontStyle":"normal","fontWeight":"400","lineHeight":"normal"},
    campoComTexto:{
        "display": "flex",
        "width": "215px",
        "flexDirection": "column",
        "justifyContent": "center",
        "alignItems": "center",
        "gap": "18px"
      },
    viewCartão:{
        "width": "345px",
        "height": "520px",
        "borderRadius": "30px",
        "background": "#FFF",
        "boxShadow": "0px 4px 4px 0px rgba(0, 0, 0, 0.30), 0px 8px 12px 6px rgba(0, 0, 0, 0.15)",
        "display": "flex",
        "alignItems": "center",
        "paddingTop": "30px",

      },
});

export default styles;