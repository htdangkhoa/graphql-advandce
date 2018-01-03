import styledComponents from 'styled-components'
import { MainColor } from './Colors'
import { MontserratRegular } from './Fonts'

export default styledComponents.div`
    @import url('https://fonts.googleapis.com/css?family=Montserrat:300,300i,400,400i,600,600i');
    
    body {
        * {
            ${MontserratRegular}
        }
    }

    background-color: ${MainColor};

    .center {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
`