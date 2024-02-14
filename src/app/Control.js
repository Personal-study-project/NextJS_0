"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

export function Control() {
  const params = useParams();
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
            <input type="button" value="delete"></input>
          </li>
        </>
      ) : null}
    </ul>
  );
}
