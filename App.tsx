import { useState } from "react";
import { useForm } from "./Hooks/useForm"


function App() {

  const [lista, setLista] = useState<any[]>([])

  const [input, handlerInputChange, setInput] = useForm({
    nombre: '',
    edad: ''
  })

  function addPersona(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault()
    setLista([...lista, input])
    setInput({ nombre: '', edad: '' })

  }

  return (
    <div>
      <form onSubmit={(e: any) => addPersona(e)}>

        <input
          name="nombre"
          placeholder="nombre"
          onChange={handlerInputChange}
          value={input.nombre}
        >

        </input>

        <input
          name="edad"
          placeholder="edad"
          onChange={handlerInputChange}
          value={input.edad}
        >

        </input>
        <button>
          add
        </button>
      </form>

      <ul>


        {lista?.map((item, i) => (
          <li key={i+1}>
            <p>
              {item.nombre} {item.edad}
            </p>
          </li>
        )
        )}
      </ul>
    </div>
  );
}

export default App;