import Link  from 'next/link';

export default function Navigation(){
    return (
        <div>
            <div className="sticky-nav">
                <div className="nav-container">
                    <nav className="navbar menu-wrapper">
                        <div>Logo</div>
                        <div class="menu-wrapper nav-menu-wrapper">
                            <ul className="nav nav-left">
                                <li className="nav-item"><Link href= "/">Home</Link></li>
                                <li className="nav-item"><Link href= "/">What do you do?</Link></li>
                                <li className="nav-item"><Link href= "/">Fare estimate</Link></li>
                                <li className="nav-item"><Link href= "/">Features</Link></li>
                                <li className="nav-item"><Link href= "/">News</Link></li>
                            </ul>            
                            <ul className="nav nav-right">
                                <li className="nav-item"><Link href= "/">Login</Link></li>
                                <li className="nav-item"><Link href= "/">Sign Up</Link></li>
                            </ul>  
                        </div>  
                    </nav>
                </div>            
            </div> 

            <section id="banner-section" class="banner-wrapper">
                <h1 style={{
                    padding: '100px 0px 0px',
                    lineHeight: '65px',
                    fontSize: '72px'
                    
                }}>
                    Welcome to <a href="">produktonijuan!</a>
                </h1>
            </section>
        </div>
         
    )
}

