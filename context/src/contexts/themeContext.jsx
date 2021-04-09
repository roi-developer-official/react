import React from 'react';
export const color = {
    dark: "red",
    light: "blue",
  };
export default React.createContext({
     theme: color.dark, 
     toggleTheme : ()=>{}
});
