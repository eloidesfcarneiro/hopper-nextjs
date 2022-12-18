import Link from 'next/link'

export default function Header() {
  return (
    <header className='header'>
        <div className='logo'>
            <Link href='/'>
                Home
            </Link>
        </div>
        <nav>
            <ul>
                <li>
                    <Link href="/projects">
                        Projects
                    </Link>
                </li>
            </ul>
        </nav>
        <style jsx> {
            `
            .header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                background: #fff;
                color: #333;
                height: 60px;
                padding: 0 30px;
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
              }
              
              .header a {
                color: #333;
                margin-right: 20px;
              }
              
              .header a:hover {
                color: #000;
              }
              .header ul {
                display: flex;
                align-items: center;
                justify-content: center;
                list-style: none;
              }
              
              .logo {
                color: red;
                font-size: 20px;
                text-transform: uppercase;
              }
              
              .logo a {
                color: red;
              }
              
              @media (max-width: 768px) {
                .header {
                  flex-direction: column;
                  height: auto;
                }
              
                .header ul {
                  margin: 20px 0;
                  flex-direction: column;
                  text-align: center;
                }
              
                .header a {
                  margin-right: 0;
                }
              
                .logo {
                  margin: 20px 0;
                }
              }
            `
        }

        </style>

    </header>
  )
}
