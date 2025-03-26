import { Link } from "react-router-dom";

export default function NotFoundPage() {
    return (
        <div>
            Page not found
            <Link to={"/"}>
                <button>Go home</button>
            </Link>
        </div>
    )
}
