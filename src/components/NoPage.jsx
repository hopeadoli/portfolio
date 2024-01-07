import { Link } from "react-router-dom";

export default function NoPage() {
  return (
    <div>
      <h1>Haha error page wai</h1>
      <p>
        Go back <Link to="/">Home</Link> before someone thinks you've been
        kidnapped.
      </p>
    </div>
  );
}
