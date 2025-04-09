import { Global, css } from '@emotion/react';

const GlobalStyle = () => <Global styles={css`
body,button,dd,dl,dt,fieldset,form,h1,h2,h3,h4,h5,h6,input,legend,li,ol,p,select,table,td,textarea,th,ul {
    margin: 0;
    padding: 0
}

body,button,h1,h2,h3,h4,h5,input,select,table,textarea {
    font-family: -apple-system,BlinkMacSystemFont,"Helvetica Neue","Apple SD Gothic Neo",Arial,sans-serif;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px
}

body {
    position: relative;
    background-color: #fff;
    color: #000;
    word-break: break-all;
    -webkit-text-size-adjust: none
}

html {
    font-size: 10px;
    line-height: 15px
}

table {
    border-collapse: collapse
}

fieldset,img {
    border: 0
}

ol,ul {
    list-style: none
}

address,em {
    font-style: normal
}

a {
    color: inherit;
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
}

img {
    vertical-align: top
}

mark {
    color: inherit;
    font-weight: 700;
    background: 0 0
}

button,input {
    -webkit-border-radius: 0;
    border-radius: 0;
    background: 0 0
}

.blind{
    position: absolute;
    clip: rect(0 0 0 0);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden
}
`} />

export default GlobalStyle;