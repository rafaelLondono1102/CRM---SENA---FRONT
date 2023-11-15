import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Link from 'next/link';

const ExampleNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="dark" dark expand="md">
                <NavbarBrand href="/">Herramienta CRM</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Organizaciones
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Ver
                                </DropdownItem>
                                <DropdownItem>
                                    Crear
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Oportunidades
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Ver
                                </DropdownItem>
                                <DropdownItem>
                                    Crear
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Talentos
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem href='../VerTalentos'>
                                    Ver
                                </DropdownItem>
                                <DropdownItem href='../CrearTalentos'>
                                    Crear
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Gráficas
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Ver
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default ExampleNavbar;
