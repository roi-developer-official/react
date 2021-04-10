import React from 'react';
import logProps from './logProps';
//without the HOC this code is all you need.
const FancyButton = React.forwardRef((props, ref) =>(
    <button onClick={props.onClick} ref={ref}>{props.children}</button>
))
export default logProps(FancyButton);

