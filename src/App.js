import useField from "./useField"

const App = () => {
    const name = useField("type")
    const born = useField("date")
    const height = useField("height")
  
    return (
      <div>
        <form>
          name: 
          <input
            type={name.type}
            value={name.value}
            onChange={name.onChange} 
          /> 
          <br/> 
          birthdate:
          <input
            type={born.type}
            value={born.value}
            onChange={born.onChange}
          />
          <br /> 
          height:
          <input
            type={height.type}
            value={height.value}
            onChange={height.onChange}
          />
        </form>
        <div>
          {name.value} {born.value} {height.value} 
        </div>
      </div>
    )
  }

  export default App