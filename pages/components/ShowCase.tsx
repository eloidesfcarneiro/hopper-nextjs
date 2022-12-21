 export default function Showcase() {
    return (
      <div className="showcase">
        <h1>Welcome To The Projects!</h1>
        <h2>Localize os melhores Projetos</h2>
         <style jsx>
              { 
              `
              .showcase {
                  height: 300px;
                  width: 100%;
                  background: #000 url('/imagens/showcase.jpg') no-repeat center center;
                  color: #fff;
                  position: relative;
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                  text-align: center;
                }
                
                .showcase::after {
                  content: '';
                  position: absolute;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 100%;
                  background-color: rgba(0, 0, 0, 0.7);
                }
                
                .showcase * {
                  z-index: 20;
                }
                
                .showcase h1 {
                  font-size: 40px;
                  margin-bottom: 0;
                }
              `
              }
          </style>
      </div>
    )
  }
  