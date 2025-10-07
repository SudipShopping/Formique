import { useSelector } from 'react-redux';

export default function Profile() {
  const user = useSelector((state) => state.auth.user);

  if (!user) {
    return <div>Please login to view your profile.</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <p><span className="font-semibold">Phone:</span> {user.phone}</p>
      {/* You can add more profile fields and a form to update profile */}
    </div>
  );
}

