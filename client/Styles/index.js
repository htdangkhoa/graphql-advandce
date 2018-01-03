import styledComponents from 'styled-components'
import { MainGray } from './Colors'
import { MontserratRegular } from './Fonts'

export default styledComponents.div`
    @import url('https://fonts.googleapis.com/css?family=Montserrat:300,300i,400,400i,600,600i');

    textarea:hover, 
    input:hover, 
    textarea:active, 
    input:active, 
    textarea:focus, 
    input:focus,
    button:focus,
    button:active,
    button:hover,
    label:focus,
    .btn:active,
    .btn.active
    {
        outline:0px !important;
        -webkit-appearance: none;
        box-shadow: none;
        -moz-box-shadow: none;
        -webkit-box-shadow: none;
    }
    
    body {
        * {
            ${MontserratRegular}
        }
    }

    .center {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
`