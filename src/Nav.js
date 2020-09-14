import React from 'react';
import { Link } from 'react-router-dom'

function Nav() {

  return (
    <nav>
        <div className="grid-container">
            <div className="grid-x grid-padding-x grid-margin-x align-middle">
                <div className="cell small-12 medium-3">
                    <Link  to='/'>
                        <h3>Logo ABC</h3>
                    </Link>
                </div>
                <div className="cell small-12 medium-9">
                    <ul className="nav-links">
                        <Link  to='/'>
                            <li>Strona główna</li>
                        </Link>
                        <Link  to='/terapie'>
                            <li>Terapie</li>
                        </Link>
                        <Link  to='/staff'>
                            <li>Załoga</li>
                        </Link>
                        <Link  to='/pricelist'>
                            <li>Cennik</li>
                        </Link>
                        <Link  to='/kontakt'>
                            <li>Kontakt</li>
                        </Link>
                        <Link  to='/regulamin'>
                            <li>Regulamin</li>
                        </Link>
                    </ul>
                </div>

        </div>
        </div>
    </nav>
  );
}

export default Nav;
