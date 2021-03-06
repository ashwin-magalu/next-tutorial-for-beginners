import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
    return () => {
      //
    };
  }, []);

  return (
    <div className="not-found">
      <h1>Oops...!</h1>
      <h2>That page was not found</h2>
      <p>
        Go back to the{" "}
        <Link href="/">
          <a>Home page</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
