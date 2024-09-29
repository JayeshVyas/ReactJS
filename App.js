const parent = React.createElement("div", {id:"parent"},
    [React.createElement("div", {id:"child1"},
        [React.createElement("h1", {},"I am inside h1 tag for child 1" ),
            React.createElement("h2", {},"I am inside h2 tag for child 1" )
        ],
        
    ),
    React.createElement("div", {id:"child2"},
        [React.createElement("h1", {},"I am inside h1 tag for child 2" ),
            React.createElement("h2", {},"I am inside h2 tag for child 2" )
        ],
        
    ) ]
);

// const heading = React.createElement(
//     "h1", 
//     {id: "heading"}, 
//     "Hello World from React JS!"
// );

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//console.log(heading);