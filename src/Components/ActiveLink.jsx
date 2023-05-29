import React from 'react'
import { Link, useMatch } from 'react-router-dom';

export default function ActiveLink({to,children}) {
    const isActive = useMatch(to);

    return (
      <Link
        className="NavLink"
        to={to}
        style={{
          color: isActive ? "black" : "#7c7c7c",
        }}
      >
        {children}
      </Link>
    );
}
