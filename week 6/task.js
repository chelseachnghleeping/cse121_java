const data = [
    {
        id: 1
        name: 'Chelsea Chngh',
        age: 29,
        image: 'img/rooster.jpg'
    },
    {
        id: 2,
        name: 'Chester Chngh',
        age: 27,
        image: 'img/pig_image.png'
    },
    {
        id: 3,
        name: 'Darren Chngh',
        image: 'img/mouse.jpeg'
    },
]

function List({people}) {
    return (
        <>
        {people.map(person => {
            const {id, name, age, image} = person 
            return <artcicle key={id} className="person">
                <img src={image} alt={name} />
                <div>
                    <h4>{name}</h4>
                    <p>{age} years</p>
                </div>
                </artcicle>
            })}
        </>
    )
}

function App() {
    const [people, setPeople] = React.useState(data)

    return(
        <main>
            <section className="container">
                <h2 className="title">{people.length} birthday today</h2>
                <List people={people} />

                <button onClick={() => setPeople([])}>
                    Clear All
                </button>
            </section>
        </main>
    )
}

ReactDOM.render(<App/>, document,querySelector('#root'))