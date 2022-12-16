import { useCarSearchForm } from "../../hooks/useCarSearchForm";
import styles from "./Form.module.css";

export const Form = () => {
  const { state, handleChange } = useCarSearchForm();

  return <form
    className={styles.root}
  >
    
    <div>
      <p>
        Search
      </p>
      <label>By Make & Model
        <input 
          type="radio"
          name="searchBy"
          value={"car"}
          checked={state.searchBy === "car"}
          onChange={handleChange}
        />
      </label>
      <label>By Car Type
        <input 
          type="radio"
          name="searchBy"
          value={"type"}
          checked={state.searchBy === "type"}
          onChange={handleChange}
        />
      </label>
    </div>

    {state.searchBy === 'car' && (
      <div>
        <label>Make
          <select
            name="make"
            value={state.make}
            onChange={handleChange}
          >
            <option
              value=""
            >--select--</option>
            {state.makes.map(make => {
              return <option 
                key={make.car_make_id} 
                value={make.car_make_name}
              >{make.car_make_name}</option>
            })}
          </select>
        </label>

        <label>Model
          <select
            name="model"
            value={state.model}
            onChange={handleChange}
          >
            <option
              value=""
            >--select--</option>
            {state.models.map(model => {
              return <option 
                key={model.car_model_id} 
                value={model.car_model_name}
              >{model.car_model_name}</option>
            })}
          </select>
        </label>
      </div>
    )}

    {state.searchBy === 'type' && (
      <div>
        <label>Type
          <select
            name="type"
            value={state.type}
            onChange={handleChange}
          >
            <option
              value=""
            >--select--</option>
            {state.types.map(type => {
              return <option 
                key={type.car_type_id} 
                value={type.car_type_name}
              >{type.car_type_name}</option>
            })}
          </select>
        </label>
      </div>
    )}
    
    
    <button>Search</button>

  </form>
}