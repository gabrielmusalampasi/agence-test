import React from "react";
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, MDBFormInline,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem,MDBIcon
} from "mdbreact";

import Link from "next/link"


const Header = () => {
    return (
        <MDBNavbar color='default-color-dark' expand="md" dark>
            <MDBNavbarToggler/>
            <MDBCollapse id="navbarCollapse" navbar>
                <MDBNavbarNav left>
                    <MDBNavItem>
                        <div className="nav-link">
                            <MDBIcon icon="home" className="mr-1" />Home
                        </div>
                    </MDBNavItem>
                    <MDBNavItem>
                        <Link href="/properties">
                            <a className="nav-link">
                                Listes de nos biens
                            </a>
                        </Link>
                    </MDBNavItem>
                </MDBNavbarNav>
            </MDBCollapse>

        </MDBNavbar>
    )
}

export default Header;
