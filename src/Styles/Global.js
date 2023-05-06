import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: boder-box;
}
body{
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.textColor};
    transition: all 0.25s linear;
}
.canvas{
    border: 1px solid blue;
    display: grid;
    min-height: 100vh;
    grid-auto-flow: row;
    grid-template-row: auto 1fr auto;
    gap: 0.5rem;
    padding: 2em;
    ${"" /* width: 100vw; */}
    align-items: center;
    text-align:center;
}

.type-box{
    max-width: 75vw;
    height: 300px;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
}
.words{
    font-size: 32px;
    display: flex;
    flex-wrap: wrap;
    color: ${({ theme }) => theme.typeBoxText};
}
.word{
    margin: 5px;
    padding-right: 2px; 

}
.hidden-input{
    border: 1px solid tomato;
    opacity: 0;
}


.current{
    border-left: 1px solid;
    animation: blinking 2s infinite;
    animation-timing-function: ease;
    @keyframes blinking{
        0% {border-left-color: ${({ theme }) => theme.textColor};}
        25%{border-left-color: ${({ theme }) => theme.background};}
        50%{border-left-color: ${({ theme }) => theme.textColor};}
        75%{border-left-color: ${({ theme }) => theme.background};}
        100%{border-left-color: ${({ theme }) => theme.textColor};}
    }
}

.current-right{
    border-right: 1px solid;
    animation: blinkingRight 2s infinite;
    animation-timing-function: ease;
    @keyframes blinkingRight{
        0% {border-right-color: ${({ theme }) => theme.textColor};}
        25%{border-right-color: ${({ theme }) => theme.background};}
        50%{border-right-color: ${({ theme }) => theme.textColor};}
        75%{border-right-color: ${({ theme }) => theme.background};}
        100%{border-right-color: ${({ theme }) => theme.textColor};}
    }
}

.correct{
    color: ${({ theme }) => theme.textColor};
}

.incorrect{
    color: red;
}

.upper-menu{
    display: flex;
    width: 1000px;
    margin-left: auto;
    margin-right: auto;
    font-size: 1.35rem;
    justify-content: space-between;
    padding: 0.5rem;
}

.modes{
    display: flex;
    gap: 0.4rem;
}

.time-mode:hover{
    color: green;
    cursor: pointer;
}

.footer{
    width: 1000px;
    display:flex;
    justify-content: space-between;
    margin: 0 auto;
}

.stats-box{
    display: flex;
    width: 1000px;
    height: auto;
    margin-left: auto;
    margin-right: auto;
}

.left-stats{
    width: 30%;
    padding: 30px;
}

.right-stats{
    width: 70%;
}

.title{
    font-size: 20px;
    color: ${({ theme }) => theme.typeBoxText};
}

.subtitle{
    font-size: 30px;
}

.header{
    width: 1000px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
}

.user-profile{
    width: 1000px;
    margin: auto;
    display: flex;
    height: 15rem;
    background: ${({ theme }) => theme.typeBoxText};
    border-radius: 20px;
    padding: 1rem;
    justify-content: center;
    align-text: center;

}
.user{
    width: 50%;
    display: flex;
    margin: 30px 0;
    padding: 1rem;
    font-size: 1.5rem;
    border-right: 2px solid;
}

.info{
    width: 60%;
    padding: 1rem;
    margin-top: 1rem;
}

.picture{
    width: 40%;
}

.total-tests{
    width:50%;
    font-size: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.table, .graph-user-page{
    margin: auto;
    width: 1000px;
}
.center-of-screen{
    display: flex;
    min-height:100vh;
    justify-content: center;
    align-items: center;
}

.outer-border{
border: 1px solid;
border-radius: 5px;
padding: 0 5px;
}

.restart{
    font-size: 40px;
    border:2px solid;
    margin:5px auto;
    margin-top:50px;
    cursor: pointer;
    border-radius: 20px ;
 }

.skipped{
     color: grey;
   }

`;
