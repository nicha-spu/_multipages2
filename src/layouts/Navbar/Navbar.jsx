import { Link } from "react-router-dom";
import "./Navbar.css";
import { useState, useEffect } from "react";

const intTab = "home";
function Navbar({ products, carts, setToken, role }) {
  const [tab, setTab] = useState(" ");

  useEffect(() => {
    setTab(intTab);
  }, []);

  return (
    <div className="navbar-container">
      {role === "user" && ( 
        <Link to={"/home"}>
          <button
            className={
              "btn " +
              (tab === "home" ? "btn btn-primary" : "btn btn-outline-primary")
            }
            onClick={() => setTab("home")}
          >
            Home
          </button>
        </Link>
      )}

      {role === "admin" && (
        <Link to={"/calculater"}>
          <button
            className={
              "btn " +
              (tab === "calculater"
                ? "btn btn-primary"
                : "btn btn-outline-primary")
            }
            onClick={() => setTab("calculater")}
          >
            Calculater
          </button>
        </Link>
      )}

      <Link to={"/components"}>
        <button
          className={
            "btn " +
            (tab === "components"
              ? "btn btn-primary"
              : "btn btn-outline-primary")
          }
          onClick={() => setTab("components")}
        >
          Components
        </button>
      </Link>

      <Link to={"/animation"}>
        <button
          className={
            "btn " +
            (tab === "animation"
              ? "btn btn-primary"
              : "btn btn-outline-primary")
          }
          onClick={() => setTab("animation")}
        >
          Animation
        </button>
      </Link>

      <Link to={"/todo"}>
        <button
          className={
            "btn " +
            (tab === "todo" ? "btn btn-primary" : "btn btn-outline-primary")
          }
          onClick={() => setTab("todo")}
        >
          Todo
        </button>
      </Link>

      <Link to={"/products"}>
        <button
          className={
            "btn " +
            (tab === "products" ? "btn btn-primary" : "btn btn-outline-primary")
          }
          onClick={() => setTab("products")}
        >
          Products ({products.length})
        </button>
      </Link>

      <Link to={"/carts"}>
        <button
          className={
            "position-relative btn " +
            (tab === "carts" ? "btn btn-primary" : "btn btn-outline-primary")
          }
          onClick={() => setTab("carts")}
        >
          Carts
          {carts.length > 0 && (
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {carts.length < 10 ? carts.length : "9+"}
            </span>
          )}
        </button>
      </Link>

      <button
        className={
          "btn " +
          (tab === "logout" ? "btn btn-danger" : "btn btn-outline-danger")
        }
        onClick={() => {
          setToken("");
          setRole(""); 
          window.location.href = "/"; 
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Navbar;
