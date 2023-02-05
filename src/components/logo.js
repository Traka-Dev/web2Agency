/** @jsx jsx */
import { jsx, Image } from "theme-ui"
import { Link } from "components/link"
import logo from "assets/logo.jpg"

export default function Logo() {
  return (
    <Link
      path="/"
      sx={{
        variant: "links.logo",
      }}
    >
      <h1
        style={{
          fontFamily: "fantasy"          
        }}
      >
        H Y P E . L a t
      </h1>
    </Link>
  )
}

//<Image src={logo} sx={{ display: "flex" }} alt="hype logo" />
