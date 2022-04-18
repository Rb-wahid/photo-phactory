import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to, ...props }: LinkProps) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  let unactiveStyle = {
    paddingBottom: "7px",
    marginRight: "10px",
  };

  let activeStyle = {
    color: "white",
    marginRight: "10px",
    fontWeight: "700",
    
  };

  return (
    <div>
      <Link
        className={
         ` ${match ? "border-b-4 pb-1 border-slate-300 font-semibold text-zinc-100 px-1" : "px-3"}`
        }
        
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
}

export default CustomLink;
