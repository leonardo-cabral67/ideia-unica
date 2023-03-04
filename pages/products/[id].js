export async function getServerSideProps(context) {
    const {id} = context.query

    return {
        props: {
            id
        }
    }
}

function products(props) {    
    return (
        <h1>Product id: {props.id}</h1>
    )
}
export default products 