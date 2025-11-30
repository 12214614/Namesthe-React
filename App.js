// This IS A JAVASCRIPT DOM:
        let heading = document.getElementById('root');
        heading.innerHTML="<h1>Hello world using <b>JavaScript.</b></h1>";
        const heading1 = document.createElement('h1');
        const rootreact = document.getElementById('root1');
        heading1.innerHTML="Hello world using <b>Creating Element in js.</b>";
        rootreact.appendChild(heading1);
        console.log(typeof heading1);
// This IS A REACT DOM:
        const heading1React = React.createElement('h1', {id : "renroot"}, `Hello Using React!.`);
        const rootreact1 = ReactDOM.createRoot(document.getElementById('root2'));
        rootreact1.render(heading1React);
// This IS A REACT NESTED ELEMENTS:
        const Nested = React.createElement('div', {id:'parent'},
            React.createElement('div',{id : 'child'},
                [React.createElement('h1', {}, 'I am h1 tag inside nested div'),
                    React.createElement('h2' , {}, "I am h2 tag inside nested div")
                ]
            )
        )
        const ReactNested = ReactDOM.createRoot(document.getElementById('nested'));
        ReactNested.render(Nested);
