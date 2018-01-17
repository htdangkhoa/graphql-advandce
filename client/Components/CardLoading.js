import {
    h,
    render,
    Component
} from 'preact'
import styledComponents from 'styled-components'

const Wrapper = styledComponents.div`
    width: 100%;
    height: 393px;
    border-radius: 8px;
    border: 1px solid;
    border-color: #e5e6e9 #dfe0e4 #d0d1d5;

    @keyframes anim {
        0% {
          background-position: -468px 0;
        }
        100% {
          background-position: 468px 0;
        }
      }
      @-o-keyframes anim {
        0% {
          background-position: -468px 0;
        }
        100% {
          background-position: 468px 0;
        }
      }
      @-ms-keyframes anim {
        0% {
          background-position: -468px 0;
        }
        100% {
          background-position: 468px 0;
        }
      }
      @-moz-keyframes anim {
        0% {
          background-position: -468px 0;
        }
        100% {
          background-position: 468px 0;
        }
      }
      @-webkit-keyframes anim {
        0% {
          background-position: -468px 0;
        }
        100% {
          background-position: 468px 0;
        }
      }

    .panel-effect {
        height: 100%;
        position: relative;
        border-radius: 7px;
        background: #f6f7f8 no-repeat;
        background-size: 100%;
        background-image: -webkit-gradient(linear, 0% 50%, 100% 50%, color-stop(0%, #f6f7f8), color-stop(20%, #edeef1), color-stop(40%, #f6f7f8), color-stop(100%, #f6f7f8));
        background-image: -moz-linear-gradient(left, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%);
        background-image: -webkit-linear-gradient(left, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%);
        background-image: linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%);
        -moz-animation: anim 1s forwards infinite linear;
        -webkit-animation: anim 1s forwards infinite linear;
        animation: anim 1s forwards infinite linear;
    }
    .fake-effect {
        position: absolute;
        background: #fff;
        right: 0px;
        left: 0px;
        height: 0px;
    }

    .fe-1 {
        bottom: 140px;
        height: 30px;
        width: 100%;
    }
    .fe-2 {
        bottom: 120px;
        height: 20px;
        width: 20px;
        right: unset;
        left: 0px;
    }
    .fe-3 {
        bottom: 120px;
        height: 20px;
        width: 70px;
        right: 0px;
        left: unset;
    }

    .fe-4 {
        bottom: 100px;
        height: 20px;
        width: 100%;
    }
    .fe-5 {
        bottom: 80px;
        height: 20px;
        width: 20px;
        right: unset;
        left: 0px;
    }
    .fe-6 {
        bottom: 80px;
        height: 20px;
        width: 20px;
        right: 0px;
        left: unset;
    }

    .fe-7 {
        bottom: 70px;
        height: 10px;
        width: 100%;
    }
    .fe-8 {
        bottom: 50px;
        height: 20px;
        width: 20px;
        right: unset;
        left: 0px;
    }
    .fe-9 {
        bottom: 50px;
        height: 20px;
        width: 20px;
        right: 0px;
        left: unset;
    }

    .fe-10 {
        bottom: 40px;
        height: 10px;
        width: 100%;
    }
    .fe-11 {
        bottom: 20px;
        height: 20px;
        width: 20px;
        right: unset;
        left: 0px;
    }
    .fe-12 {
        bottom: 20px;
        height: 20px;
        width: 50px;
        right: 0px;
        left: unset;
    }
    .fe-13 {
        height: 20px;
        width: 100%;
        bottom: 0px;
        border-bottom-left-radius: 7px;
        border-bottom-right-radius: 7px;
    }
`

class CardLoading extends Component {
    render() {
        return(
            <Wrapper>
                <div className='panel-effect'>
                    <div class='fake-effect fe-0'></div>
                    <div class='fake-effect fe-1'></div>
                    <div class='fake-effect fe-2'></div>

                    <div class='fake-effect fe-3'></div>
                    <div class='fake-effect fe-4'></div>
                    <div class='fake-effect fe-5'></div>

                    <div class='fake-effect fe-6'></div>
                    <div class='fake-effect fe-7'></div>
                    <div class='fake-effect fe-8'></div>

                    <div class='fake-effect fe-9'></div>
                    <div class='fake-effect fe-10'></div>
                    <div class='fake-effect fe-11'></div>
                    <div class='fake-effect fe-12'></div>
                    <div class='fake-effect fe-13'></div>
                </div>
            </Wrapper>
        )
    }
}

export default CardLoading