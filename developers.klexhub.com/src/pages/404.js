import AnchorLink from "cloudflare-docs-engine/src/components/mdx/anchor-link"
import SEO from "cloudflare-docs-engine/src/components/seo"
import React from "react"

const NotFoundPage = () => (
  <>
    <SEO title="Not found" />
    <center>
      <h1>Nicht gefunden :/</h1>
      <p>Leider konnten wir diese Website nicht finden.</p>
      <p>
        <AnchorLink class="Button Button-is-docs-primary" href="/">
          Zurück
        </AnchorLink>
      </p>
    </center>
  </>
)

export default NotFoundPage
