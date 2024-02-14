"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

export function Control() {
  const params = useParams();
  const router = useRouter();
  const id = params.id;
  console.log("params : ", params);
  return (
    <ul>
      <li>
        <Link href="/create">create</Link>
      </li>
      {id ? (
        <>
          <li>
            <Link href={"/update/" + id}>update</Link>
          </li>
          <li>
            <input
              type="button"
              value="delete"
              onClick={() => {
                const options = { method: "DELETE" };
                fetch(process.env.NEXT_PUBLIC_API_URL + 'topics/' + id, options)
                  .then((res) => res.json())
                  .then((data) => {
                    router.push("/");
                    router.refresh();
                  });
              }}
            ></input>
          </li>
        </>
      ) : null}
    </ul>
  );
}
