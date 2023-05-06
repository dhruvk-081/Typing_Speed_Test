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
    display: grid;
    min-height: 90vh;
    grid-auto-flow: row;
    grid-template-row: auto 1fr auto;
    gap: 0.5rem;
    padding: 2em;
    align-items: center;
    text-align:center;
}

.type-box{
    border: 2px solid;
    border-radius: 10px;
    padding: 30px;
    max-width: 75vw;
    margin: 20px auto;
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
    border: 1px solid red;
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
    width: 75vw;
    margin: 0 auto;
    font-size: 1.35rem;
    justify-content: space-between;
    padding: 0.5rem;
}

.modes{
    display: flex;
    gap: 0.6rem;
}

.time-mode:hover{
    color: #00ff00;
    cursor: pointer;
    transform: scale(1.3);
}
.restart:hover{
    cursor: pointer;
    transform: scale(1.1);
}

.footer{
    width: 75vw;
    display:flex;
    justify-content: space-between;
    margin: 0 auto;
}

.stats-box{
    display: flex;
    width: 75vw;
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
    width: 75vw;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
}

.user-profile{
    width: 80vw;
    margin: auto;
    display: flex;
    justify-content: center;
    align-text: center;
    background: ${({ theme }) => theme.typeBoxText};
    border-radius: 20px;
    padding: 1rem;

}

.user{
    width: 50%;
    display: flex;
    padding: 1rem;
    font-size: 1.5rem;
    border-right: 2px solid;
}

.info{
    width: 60%;
    padding: 1rem;
}

.picture{
    width: 40%;
}

.total-tests{
    width:50%;
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.table, .graph-user-page{
    margin: auto;
    width: 75vw;
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
    margin: 55px auto 5px;
    padding: 5px 0;
    border:2px solid;
    border-radius: 15px ;
    cursor: pointer;
 }

.link{
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.6rem;
    color: ${({ theme }) => theme.textColor}; 
    font-size: 3rem;
}


::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border: 1px solid grey;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: ${({ theme }) => theme.textColor};
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: ${({ theme }) => theme.textColor};
}
${"" /* ------------------------------------------------------------------------------- */}


@property --angle {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false;
}
.moving-border {
  position: relative;
  background: ${({ theme }) => theme.background};
}
.moving-border::before,
.moving-border::after {
  content: "";
  position: absolute;
  inset: -0.2rem;
  z-index: -1;
  border-radius: 10px;
  background: linear-gradient(var(--angle), #fb0094, #0000ff, #00ff00,#ffff00, #ff0000, #fb0094, #0000ff, #00ff00,#ffff00, #ff0000);
  animation: rotate 10s linear infinite;
}
.moving-border::after {
  filter: blur(10px);
}
@keyframes rotate {
  0%     { --angle: 0deg; }
  100%   { --angle: 360deg;
  }
}


`;
