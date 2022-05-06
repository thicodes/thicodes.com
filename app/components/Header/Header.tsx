import type { NavLinkProps as NavLinkRemixProps } from "@remix-run/react";
import { Link, NavLink as NavLinkRemix } from "@remix-run/react";

interface NavLinkProps extends NavLinkRemixProps {
  children: React.ReactNode;
}

const NavLink = (props: NavLinkProps) => {
  const { children, ...rest } = props;
  const linkClass =
    "text-lg transition-opacity hover:opacity-70 border-b-2 border-transparent hover:border-blue-300";
  const activeLinkClass =
    "text-lg transition-opacity hover:opacity-70 border-b-2 border-blue-500";
  return (
    <NavLinkRemix
      prefetch="intent"
      {...rest}
      className={({ isActive }) => (isActive ? activeLinkClass : linkClass)}
    >
      {children}
    </NavLinkRemix>
  );
};

const Header = () => {
  return (
    <div className="mx-auto max-w-8xl">
      <header className="mx-4 flex items-center justify-between py-4 lg:mx-0 lg:px-8">
        <Link prefetch="intent" to="/">
          thicodes.
        </Link>
        <nav className="text-primary flex">
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/experiences">Experiences</NavLink>
        </nav>
        <div></div>
      </header>
    </div>
  );
};

export default Header;
