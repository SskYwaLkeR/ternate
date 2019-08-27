# What is this?

ternate is simple function which can be used to write better readable conditional statement with react jsx

#Installation

`npm install ternate --save`

Example...

```

 import ternate from 'ternate';
 
 ternate(this.state.loading === true, <Loader>, ()=> {return <App/>;})

```