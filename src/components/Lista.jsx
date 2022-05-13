import React, {useState} from 'react';

const Lista = () => {
    
    const [tarea, setTarea] = useState("");
    

//    const crearTarea = (ra) => {
//        ra.preventDefault();        
//        setTarea("");
    const [total, setTotal] = useState([]);

    

    function nuevo(q) {
        q.preventDefault();
        if(tarea === "")
        return;
        setTotal([...total, {elemento: tarea, listo: false}]);
        setTarea("");        
    }

    function completado(contenido) {
        const x = {...total[contenido]};    
        x.listo = !x.listo;    
        setTotal([...total.slice(0, contenido), x].concat(total.slice(contenido + 1)));
      }

    function eliminar(contenido) {
        setTotal(total.filter((_item, x) => x !== contenido));
      }

    

    
return ( 
    <div>
    <form className='form-group' onSubmit={nuevo} >
        <div >
            <h3>Tarea: </h3>
            <input id="tarea" className='form-control'  value={tarea} onChange={q => setTarea(q.target.value)}/>
        </div>
        <input type="submit" className='btn btn-success' value="Añadir tarea" />
    </form>
    {total.map((objeto, contenido) => (
        <div className="input-group">
            <div className="input-group-prepend">
                <h4 style={{ textDecoration: objeto.listo && 'line-through' }}>{objeto.elemento}</h4>
                <input type="checkbox"  checked={objeto.listo} onClick={() => completado(contenido)} readOnly/>
                <button className="btn btn-primary" onClick={() => eliminar(contenido)}>Borrar</button>
            </div>
        </div>
    ))}

        
        
        
    </div>
)
}

export default Lista;