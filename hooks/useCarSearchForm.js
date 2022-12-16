import { useEffect, useReducer } from "react"
import { axiosInstance as axios } from "../utils/axiosInstance";

const initialState = {
  models: [],
  makes: [],
  types: [],
  searchBy: "car",
  model: "",
  make: "",
  type: "",
  loading: false
}

const reducer = (state, {type, payload}) => {
  switch(type){
    case 'find/makes/all/success':
      return {
        ...state,
        makes: payload.makes,
        loading: false
      }
    case 'find/models/by/make_id/success':
      return {
        ...state,
        models: payload.models,
        loading: false
      }
    case 'find/types/all/success':
      return {
        ...state,
        types: payload.types,
        loading: false
      }
    case `handleChange/${payload.name}`:
      return {
        ...state,
        [payload.name]: payload.value
      }
    default: throw Error(`unkown action.type: ${type}`);
  }
}

export const useCarSearchForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const handleChange = e => {
    const { name, type, value, checked } = e.target;

    const valueToUse = type === 'checkbox' ? checked : value;

    dispatch({
      type: `handleChange/${name}`,
      payload: {
        name,
        value: valueToUse
      }
    })
  }

  useEffect(() => {
    const fetchMakes = async () => {
      try {
        const res = await axios().get('/car_makes');
        dispatch({
          type: "find/makes/all/success",
          payload: {
            makes: res.data
          }
        })
      } catch (err) {
        console.log(err);
      }
    }

    const fetchTypes = async () => {
      try {
        const res = await axios().get('/car_types');
        dispatch({
          type: "find/types/all/success",
          payload: {
            types: res.data
          }
        })
      } catch (err) {
        console.log(err);
      }
    }

    if(state.searchBy === 'car'){
      fetchMakes();
    }
    
    if(state.searchBy === 'type') {
      fetchTypes();
    }
  }, [state.searchBy]);

  useEffect(() => {
    const fetchModels = async () => {
      try {
        const res = await axios().get('/car_models');
        
        dispatch({
          type: "find/models/by/make_name/success",
          payload: {
            // models: res.data.filter((model) => )
          }
        })
      } catch (err) {
        console.log(err);
      }
    }

    if(state.makes !== ''){
      fetchModels();
    }
  }, [state.make])

  return {
    state,
    handleChange   
  }
}