import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/slices/authSlice';

export default function Navbar() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="bg-white shadow mb-8">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link href="/">
            <a>Formique & Co.</a>
          </Link>
        </div>
        <ul className="flex space-x-4 items-center">
          <li><Link href="/"><a>Home</a></Link></li>
          <li><Link href="/wishlist"><a>Wishlist</a></Link></li>
          <li><Link href="/cart"><a>Cart</a></Link></li>
          {auth.user ? (
            <>
              <li><Link href="/profile"><a>Profile</a></Link></li>
              <li><Link href="/orders"><a>Orders</a></Link></li>
              <li><button onClick={handleLogout}>Logout</button></li>
            </>
          ) : (
            <li><Link href="/login"><a>Login</a></Link></li>
          )}
          {auth.user?.role === 'seller' && (
            <li><Link href="/seller"><a>Seller</a></Link></li>
          )}
          {auth.user?.role === 'admin' && (
            <li><Link href="/admin"><a>Admin</a></Link></li>
          )}
        </ul>
      </div>
    </nav>
  );
}

