const FormComponent = ({ data }) => {
    return (
        <>
            <h1>Entered information:</h1>
            <p>Your name: {data.firstName} {data.lastName}</p>
            <p>Your age: {data.age}</p>
            <p>Your gender: {data.gender}</p>
            <p>Your destination: {data.destination}</p>
            <div>
                <p>Your dietary restrictions:</p>
                <p>Nuts free: {data.nutsFree ? 'Yes' : 'No'}</p>
                <p>Lactose free: {data.lactoseFree ? 'Yes' : 'No'}</p>
                <p>Vegan meal: {data.vegan ? 'Yes' : 'No'}</p>
            </div>
        </>
    );
}

export default FormComponent