// 사용자와 상호작용하지 않는다. SSR
// 'use client';

export default async function Read(props) {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + `topics/${props.params.id}`,
    {
      cache: "no-store",
    }
  );
  const topic = await res.json();
  return (
    <>
      <h2>{topic.title}</h2>
      {topic.body}
    </>
  );
}
