import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../../store/users/users.actions";

const NavBar = () => {
  const dispatch = useDispatch();
  const { userLogged, employee } = useSelector((state) => ({
    userLogged: state.user.user.data,
    employee: state.employee.employee.data,
  }));

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const renderLogginButton = () => {
    if (userLogged) {
      return (
        <li className="nav-item">
          <Link className="nav-link" to="/area-logada">
            {userLogged.nome}
          </Link>
        </li>
      );
    } else if (employee) {
      return (
        <li className="nav-item">
          <Link className="nav-link" to="/area-do-funcionario">
            {employee.nome}
          </Link>
        </li>
      );
    } else {
      return (
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Entrar
          </Link>
        </li>
      );
    }
  };

  const renderExitButton = () => {
    if (userLogged || employee) {
      return (
        <li className="nav-item">
          <span onClick={() => handleLogout()}>
            <Link className="nav-link" to="/">
              Sair
            </Link>
          </span>
        </li>
      );
    } else {
      return <li className="nav-item"></li>;
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link className="navbar-brand" to="/">
        BookStore
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home" "
            </Link>
          </li>

          <li className="nav-item dropdown">
            <button
              type="button"
              style={{
                background: "transparent",
                border: "none",
                outline: "none",
              }}
              className="nav-link dropdown-toggle"
              href=""
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Categorias
            </button>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <Link className="dropdown-item" to="#">
                Action
              </Link>
              <Link className="dropdown-item" to="#">
                Another action
              </Link>
              <Link className="dropdown-item" to="#">
                Something else here
              </Link>
            </div>
          </li>

          {renderLogginButton()}
          {renderExitButton()}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
