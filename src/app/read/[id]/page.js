'use client';


export default function Read(props) {
    console.log(props);
    return (
        <>
            <h2>Read!! hahaha</h2>
            paramter : {props.params.id}
        </>
    )
}
