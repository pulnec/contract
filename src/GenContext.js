import React , { createContext, useState, useEffect } from 'react';
import Axios from 'axios';


export const GenContext = createContext();

const GetProvider = (props) => {

  const [courses, setCourses] = useState([]);
  const [selected, setSelected] = useState(-1);
  return (
      <GenContext.Provider
        value={{
          courses,
          setSelected,
          selected,
        }}
      >
        {props.children}
      </GenContext.Provider>
  )
}

export default GetProvider;