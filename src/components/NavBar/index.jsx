import React from "react";
import {
  CContainer,
  CNavbar,
  CNavbarBrand,
  CNavbarNav,
  CNavbarToggler,
  CNavItem,
  CNavLink,
  CCollapse,
} from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import "./NavBar.css";
import { LuUser } from "react-icons/lu";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <CNavbar expand="lg" className="navbar-bg p-2">
      <CContainer fluid>
        <CNavbarBrand>
          <img className="logoSit" src="/logo_cpem.png" alt="Logo del Sitio" />
        </CNavbarBrand>

        <CNavbarToggler aria-label="Abrir menú de navegación">
          <HiMenuAlt3 fontSize={25} />
        </CNavbarToggler>

        <CCollapse className="navbar-collapse">
          <CNavbarNav className="custom-nav">
            <CNavItem>
              <CNavLink as={Link} to="/" className="nav-link-custom">
                Inicio
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink as={Link} to="/Catalogo" className="nav-link-custom">
                Catálogo
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink
                as={Link}
                to="/Preguntas-Frecuentes"
                className="nav-link-custom"
              >
                Preguntas Frecuentes
              </CNavLink>
            </CNavItem>
          </CNavbarNav>

          <div className="profile">
            <CNavItem>
              <CNavLink
                as={Link}
                to="/Carrito"
                className="nav-link-custom cart-link"
                title="Ver carrito"
              >
                <div className="cart-container">
                  <IoCartOutline className="icon" />
                  <span className="cart-counter">0</span>
                </div>
                <span>Carrito</span>
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink
                className="nav-link-custom account-link"
                title="Mi cuenta"
              >
                <LuUser className="icon" />
                <span>Mi cuenta</span>
              </CNavLink>
            </CNavItem>
          </div>
        </CCollapse>
      </CContainer>
    </CNavbar>
  );
};

export default NavBar;
