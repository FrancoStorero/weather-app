import styled from "styled-components";

  export const ContainerStyled = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${props =>   props.hora === 0 ? "#00000c" :
                             props.hora === 1 ? "linear-gradient(to bottom, #020111 85%, #191621 100%)" : 
                             props.hora === 2 ? "linear-gradient(to bottom, #020111 60%, #20202c 100%)" :
                             props.hora === 3 ? "linear-gradient(to bottom, #020111 10%, #3a3a52 100%)" :
                             props.hora === 4 ? "linear-gradient(to bottom, #20202c 0%, #515175 100%)" :
                             props.hora === 5 ? "linear-gradient(to bottom, #40405c 0%, #6f71aa 80%, #8a76ab 100%)" :
                             props.hora === 6 ? "linear-gradient(to bottom, #4a4969 0%, #7072ab 50%, #cd82a0 100%)" :
                             props.hora === 7 ? "linear-gradient(to bottom, #757abf 0%, #8583be 60%, #eab0d1 100%)" :
                             props.hora === 8 ? "linear-gradient(to bottom, #82addb 0%, #ebb2b1 100%)" :
                             props.hora === 9 ? "linear-gradient(to bottom, #94c5f8 1%, #a6e6ff 70%, #b1b5ea 100%)" :
                             props.hora === 10 ? "linear-gradient(to bottom, #b7eaff 0%, #94dfff 100%)" :
                             props.hora === 11 ? "linear-gradient(to bottom, #9be2fe 0%, #67d1fb 100%)" :
                             props.hora === 12 ? "linear-gradient(to bottom, #90dffe 0%, #38a3d1 100%)" :
                             props.hora === 13 ? "linear-gradient(to bottom, #57c1eb 0%, #246fa8 100%)" :
                             props.hora === 14 ? "linear-gradient(to bottom, #2d91c2 0%, #1e528e 100%)" :
                             props.hora === 15 ? "linear-gradient(to bottom, #2473ab 0%, #1e528e 70%, #5b7983 100%)" :
                             props.hora === 16 ? "linear-gradient(to bottom, #1e528e 0%, #265889 50%, #9da671 100%)" :
                             props.hora === 17 ? "linear-gradient(to bottom, #1e528e 0%, #728a7c 50%, #e9ce5d 100%)" :
                             props.hora === 18 ? "linear-gradient(to bottom, #154277 0%, #576e71 30%, #e1c45e 70%, #b26339 100%)" :
                             props.hora === 19 ? "linear-gradient(to bottom, #163c52 0%, #4f4f47 30%, #c5752d 60%, #b7490f 80%, #2f1107 100%)" :
                             props.hora === 20 ? "linear-gradient(to bottom, #071b26 0%, #071b26 30%, #8a3b12 80%, #240e03 100%)" :
                             props.hora === 21 ? "linear-gradient(to bottom, #010a10 30%, #59230b 80%, #2f1107 100%)" :
                             props.hora === 22 ? "linear-gradient(to bottom, #090401 50%, #4b1d06 100%)" :
                             "linear-gradient(to bottom, #00000c 80%, #150800 100%)"
    };
  `;


  

