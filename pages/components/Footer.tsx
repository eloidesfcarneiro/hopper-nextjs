import Link from "next/link"

export default function Footer() {
  return (
    <footer className="footer">
        <p>Copyright &copy; Projects 2023</p>
        <p>
            <Link href='/about'>About</Link>
        </p>
        <style jsx> {
            `
            .footer {
                margin: 100px 0 40px;
                text-align: center;
              }
              
              .footer p {
                margin: 5px 0;
              }
            `
        }
        </style>
    </footer>
  )
}
