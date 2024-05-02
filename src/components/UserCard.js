import { Link } from "react-router-dom";

function UserCard({user}) {
  return (
    <article>
        <h2>{user.name}</h2>
        <p>
          <Link to="/profile">View profile</Link>
        </p>
    </article>
  );
};

export default UserCard;

// We've used string interpolation to update the to prop of our Link component to include the id of the user corresponding to the link that was clicked. Now, when we click on one of these links, it will take us to the URL /profile/<some-user-id>, which will correspond with the /profile/:id route we set up in our router.