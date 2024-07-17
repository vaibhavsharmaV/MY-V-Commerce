

// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../App.css';

// function Header({ count }) {
//     return (
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//             <div className="container-fluid">
//                 <Link className="navbar-brand" to="/">V-Commerce</Link>
//                 <div className="collapse navbar-collapse" id="navbarNav">
//                     <ul className="navbar-nav ms-auto">
//                         <li className="nav-item">
//                             <Link className="nav-link" to="/cart">Cart <span className="badge bg-secondary">{count}</span></Link>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </nav>
//     );
// }

// export default Header;






import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Header({ count }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">V-Commerce</Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/cart">Cart <span className="badge bg-secondary">{count}</span></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
