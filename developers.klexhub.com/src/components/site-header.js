import DocsNavLogoLockup from "cloudflare-docs-engine/src/components/docs-nav-logo-lockup"
import ThemeToggle from "cloudflare-docs-engine/src/components/theme-toggle"
import { Link } from "gatsby"
import React from "react"
import "../css/components/site-header.css"
import KlexLogo from "./KlexLogo"

const SiteHeader = () => (
  <>
    <div className="SiteHeader">
      <div className="SiteHeader--logo-section">
        <Link
          className="SiteHeader--cloudflare-logo-link Link Link-without-underline"
          to="/"
        >
          <DocsNavLogoLockup
            logo={<KlexLogo />}
            text={
              <>
                <span data-text="KlexHub">KlexHub</span>
                <span>&nbsp;</span>
                <span data-text="Docs">Docs</span>
              </>
            }
          />
        </Link>
      </div>

      <div className="SiteHeader--nav"></div>

      <div className="SiteHeader--theme-toggle">
        <ThemeToggle />
      </div>
    </div>
    <div className="SiteHeader---shadow"></div>
    <div className="SiteHeader---shadow-cover"></div>
  </>
)

export default SiteHeader
