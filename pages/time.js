import { useState } from "react"

function Time(props) {    
    return (
        <div>
            <h2>{props.staticDateString} (getStaticProps)</h2>
        </div>
    )

}
export function getStaticProps() {
    const dynamicDate = new Date()
    const dynamicDateString = dynamicDate.toGMTString()

    return {
        props: {
            staticDateString: dynamicDateString
        }
    }
}

export default Time