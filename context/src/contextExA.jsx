import React, {useState} from "react";
import ThemeContext, {color} from 'Contexts/themeContext';
class ThemedButton extends React.Component {
  static contextType = ThemeContext;
  render() {
    return <button onClick={this.props.changeTheme} style={{ color: this.context.theme }}>example A | change Theme</button>;
  }
}

function Toolbar({}) {
  return (
    <div>
      <ThemeContext.Consumer>
        {({theme, toggleTheme}) => {
          //do something according to value
          return <ThemedButton changeTheme={toggleTheme}/>;
        }}
      </ThemeContext.Consumer>
    </div>
  );
}

export default function ContextExA() {
  const [theme, setTheme] = useState(color.dark);
  function changeTheme() {
    setTheme((theme) => {
      return theme === color.dark ? color.light : color.dark;
    });
  }
  return (
    <ThemeContext.Provider value={{theme : theme, toggleTheme: changeTheme}}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}
