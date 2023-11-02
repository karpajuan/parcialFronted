//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

function Card({ input1, input2 }) {
  return (
    <div className="card">
      <h2>Información del Formulario</h2>
      <p>Primer Input: {input1}</p>
      <p>Segundo Input: {input2}</p>
    </div>
  );
}



export default Card;
