// 사용자와 상호작용하지 않는다. SSR
// 'use client';

export default async function Read(props) {
    const res = await fetch(`http://localhost:9999/topics/${props.params.id}`);
    const topic = await res.json();
    console.log(props);
    return (
        <>
            <h2>{topic.title}</h2>
            {topic.body}
        </>
    )
}
