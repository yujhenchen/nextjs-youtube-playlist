import React from "react";
import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/bands">Bands</Link>
        </li>
        <li>
          <Link href="/playlists">Playlists</Link>
        </li>
        <li>
          <Link href={`/bands/${encodeURIComponent(1)}`}>Band</Link>
        </li>
        <li>
          <Link href={`/playlists/${encodeURIComponent(1)}`}>playlist</Link>
        </li>
        <li>
          <Link
            href={`/playlists/${encodeURIComponent(1)}/${encodeURIComponent(
              1
            )}`}
          >
            Video
          </Link>
        </li>
      </ul>
    </nav>
  );
}
