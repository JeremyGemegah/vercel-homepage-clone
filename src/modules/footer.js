import { Box, Container, Typography } from "@mui/material";


function Footer(){
    return (
      <Container>
        <Box>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(4,1fr) 80px",
              width: "100%",
            }}
          >
            <Box>
              <h2>Products</h2>
              <ul class="geist-footer_list__xPmDi">
                <li class="geist-footer_item__Hte4A">
                  <a
                    style={{ "font-feature-settings": "ss05" }}
                    data-zone="same"
                    class="link_link__hbWKh link_secondary__F1rqx"
                    href="/ai"
                  >
                    AI
                  </a>
                </li>
                <li class="geist-footer_item__Hte4A">
                  <a
                    data-zone="same"
                    class="link_link__hbWKh link_secondary__F1rqx"
                    href="/enterprise"
                  >
                    Enterprise
                  </a>
                </li>
                <li class="geist-footer_item__Hte4A">
                  <a
                    data-zone="same"
                    class="link_link__hbWKh link_secondary__F1rqx"
                    href="/fluid"
                  >
                    Fluid Compute
                  </a>
                </li>
                <li class="geist-footer_item__Hte4A">
                  <a
                    href="/solutions/nextjs"
                    data-zone="vercel-site"
                    class="link_link__hbWKh link_secondary__F1rqx"
                    data-prefetch="true"
                  >
                    Next.js
                  </a>
                </li>
                <li class="geist-footer_item__Hte4A">
                  <a
                    data-zone="same"
                    class="link_link__hbWKh link_secondary__F1rqx"
                    href="/products/observability"
                  >
                    Observability
                  </a>
                </li>
                <li class="geist-footer_item__Hte4A">
                  <a
                    data-zone="same"
                    class="link_link__hbWKh link_secondary__F1rqx"
                    href="/products/previews"
                  >
                    Previews
                  </a>
                </li>
                <li class="geist-footer_item__Hte4A">
                  <a
                    data-zone="same"
                    class="link_link__hbWKh link_secondary__F1rqx"
                    href="/products/rendering"
                  >
                    Rendering
                  </a>
                </li>
                <li class="geist-footer_item__Hte4A">
                  <a
                    data-zone="same"
                    class="link_link__hbWKh link_secondary__F1rqx"
                    href="/security"
                  >
                    Security
                  </a>
                </li>
                <li class="geist-footer_item__Hte4A">
                  <a
                    data-zone="same"
                    class="link_link__hbWKh link_secondary__F1rqx"
                    href="/solutions/turborepo"
                  >
                    Turbo
                  </a>
                </li>
                <li class="geist-footer_item__Hte4A">
                  <a
                    href="https://v0.dev/"
                    rel="noopener"
                    target="_blank"
                    data-zone="null"
                    class="link_link__hbWKh link_external__0a5cc link_secondary__F1rqx"
                  >
                    v0
                    <svg
                      data-testid="geist-icon"
                      height="16"
                      stroke-linejoin="round"
                      style={{ color: "currentColor" }}
                      viewBox="0 0 16 16"
                      width="16"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.5 9.75V11.25C11.5 11.3881 11.3881 11.5 11.25 11.5H4.75C4.61193 11.5 4.5 11.3881 4.5 11.25L4.5 4.75C4.5 4.61193 4.61193 4.5 4.75 4.5H6.25H7V3H6.25H4.75C3.7835 3 3 3.7835 3 4.75V11.25C3 12.2165 3.7835 13 4.75 13H11.25C12.2165 13 13 12.2165 13 11.25V9.75V9H11.5V9.75ZM8.5 3H9.25H12.2495C12.6637 3 12.9995 3.33579 12.9995 3.75V6.75V7.5H11.4995V6.75V5.56066L8.53033 8.52978L8 9.06011L6.93934 7.99945L7.46967 7.46912L10.4388 4.5H9.25H8.5V3Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </Box>
            <Box>
              <h2>Resources</h2>
              <ul class="geist-footer_list__xPmDi">
                <li class="geist-footer_item__Hte4A">
                  <a
                    href="https://vercel.community/"
                    rel="noopener"
                    target="_blank"
                    data-zone="null"
                    class="link_link__hbWKh link_external__0a5cc link_secondary__F1rqx"
                  >
                    Community
                    <svg
                      data-testid="geist-icon"
                      height="16"
                      stroke-linejoin="round"
                      viewBox="0 0 16 16"
                      width="16"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.5 9.75V11.25C11.5 11.3881 11.3881 11.5 11.25 11.5H4.75C4.61193 11.5 4.5 11.3881 4.5 11.25L4.5 4.75C4.5 4.61193 4.61193 4.5 4.75 4.5H6.25H7V3H6.25H4.75C3.7835 3 3 3.7835 3 4.75V11.25C3 12.2165 3.7835 13 4.75 13H11.25C12.2165 13 13 12.2165 13 11.25V9.75V9H11.5V9.75ZM8.5 3H9.25H12.2495C12.6637 3 12.9995 3.33579 12.9995 3.75V6.75V7.5H11.4995V6.75V5.56066L8.53033 8.52978L8 9.06011L6.93934 7.99945L7.46967 7.46912L10.4388 4.5H9.25H8.5V3Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li class="geist-footer_item__Hte4A">
                  <a
                    href="/docs"
                    data-zone="vercel-docs"
                    class="link_link__hbWKh link_secondary__F1rqx"
                    data-prefetch="true"
                  >
                    Docs
                  </a>
                </li>
                <li class="geist-footer_item__Hte4A">
                  <a
                    href="/guides"
                    data-zone="vercel-docs"
                    class="link_link__hbWKh link_secondary__F1rqx"
                    data-prefetch="true"
                  >
                    Guides
                  </a>
                </li>
                <li class="geist-footer_item__Hte4A">
                  <a
                    href="/help"
                    data-zone="vercel-docs"
                    class="link_link__hbWKh link_secondary__F1rqx"
                    data-prefetch="true"
                  >
                    Help
                  </a>
                </li>
                <li class="geist-footer_item__Hte4A">
                  <a
                    href="/integrations"
                    data-zone="vercel-site"
                    class="link_link__hbWKh link_secondary__F1rqx"
                    data-prefetch="true"
                  >
                    Integrations
                  </a>
                </li>
                <li class="geist-footer_item__Hte4A">
                  <a
                    data-zone="same"
                    class="link_link__hbWKh link_secondary__F1rqx"
                    href="/pricing"
                  >
                    Pricing
                  </a>
                </li>
                <li class="geist-footer_item__Hte4A">
                  <a
                    data-zone="same"
                    class="link_link__hbWKh link_secondary__F1rqx"
                    href="/resources"
                  >
                    Resources
                  </a>
                </li>
                <li class="geist-footer_item__Hte4A">
                  <a
                    data-zone="same"
                    class="link_link__hbWKh link_secondary__F1rqx"
                    href="/partners/solution-partners"
                  >
                    Solution Partners
                  </a>
                </li>
                <li class="geist-footer_item__Hte4A">
                  <a
                    href="/templates"
                    data-zone="vercel-site"
                    class="link_link__hbWKh link_secondary__F1rqx"
                    data-prefetch="true"
                  >
                    Templates
                  </a>
                </li>
              </ul>
            </Box>
            <Box>
              <h2>Company</h2>

              <ul class="geist-footer_list__xPmDi">
                <li class="geist-footer_item__Hte4A">
                  <a
                    data-zone="same"
                    class="link_link__hbWKh link_secondary__F1rqx"
                    href="/about"
                  >
                    About
                  </a>
                </li>
                <li class="geist-footer_item__Hte4A">
                  <a
                    data-zone="same"
                    class="link_link__hbWKh link_secondary__F1rqx"
                    href="/blog"
                  >
                    Blog
                  </a>
                </li>
                <li class="geist-footer_item__Hte4A">
                  <a
                    data-zone="same"
                    class="link_link__hbWKh link_secondary__F1rqx"
                    href="/careers"
                  >
                    Careers
                  </a>
                </li>
                <li class="geist-footer_item__Hte4A">
                  <a
                    data-zone="same"
                    class="link_link__hbWKh link_secondary__F1rqx"
                    href="/changelog"
                  >
                    Changelog
                  </a>
                </li>
                <li class="geist-footer_item__Hte4A">
                  <a
                    data-zone="same"
                    class="link_link__hbWKh link_secondary__F1rqx"
                    href="/contact"
                  >
                    Contact Us
                  </a>
                </li>
                <li class="geist-footer_item__Hte4A">
                  <a
                    data-zone="same"
                    class="link_link__hbWKh link_secondary__F1rqx"
                    href="/customers"
                  >
                    Customers
                  </a>
                </li>
                <li class="geist-footer_item__Hte4A">
                  <a
                    data-zone="same"
                    class="link_link__hbWKh link_secondary__F1rqx"
                    href="/partners"
                  >
                    Partners
                  </a>
                </li>
                <li class="geist-footer_item__Hte4A">
                  <a
                    data-zone="same"
                    class="link_link__hbWKh link_secondary__F1rqx"
                    href="/legal/privacy-policy"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li class="footer_legalButton__eSfwa">
                  <button
                    type="submit"
                    aria-haspopup="true"
                    aria-expanded="false"
                    aria-controls="menu-:Radtlklb:"
                    aria-label="Legal"
                    data-testid="footer/legal-button"
                    data-geist-menu-button=""
                    data-is-open="false"
                    id="menu-button-:RadtlklbH1:"
                    class="button_base__BjwbK reset_reset__KRyvc footer_legalMenuButton__7D9MK"
                    data-geist-button=""
                    data-prefix="false"
                    data-suffix="false"
                    data-version="v1"
                  >
                    <span class="button_content__1aE1_ button_flex__fCY56 button_center__nyfP_">
                      <span
                        class="footer_link__8OH36 footer_secondary__2yfhO"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "2px",
                          width: "100%",
                        }}
                      >
                        Legal
                        <svg
                          data-testid="geist-icon"
                          height="16"
                          stroke-linejoin="round"
                          style={{ width: "16px", height: "16px" }}
                          viewBox="0 0 16 16"
                          width="16"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12.0607 6.74999L11.5303 7.28032L8.7071 10.1035C8.31657 10.4941 7.68341 10.4941 7.29288 10.1035L4.46966 7.28032L3.93933 6.74999L4.99999 5.68933L5.53032 6.21966L7.99999 8.68933L10.4697 6.21966L11 5.68933L12.0607 6.74999Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </button>
                </li>
              </ul>
            </Box>
            <Box>
              <h2>Social</h2>

              <ul class="geist-footer_list__xPmDi">
                <li class="geist-footer_item__Hte4A">
                  <a
                    href="https://github.com/vercel"
                    rel="noopener"
                    target="_blank"
                    data-zone="null"
                    class="link_link__hbWKh link_secondary__F1rqx footer_socialIcon__jQjkd"
                  >
                    <svg
                      data-testid="geist-icon"
                      height="16"
                      stroke-linejoin="round"
                      
                      viewBox="0 0 16 16"
                      width="16"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8 1.46252C4.40875 1.46252 1.5 4.37029 1.5 7.96032C1.5 10.8356 3.36062 13.2642 5.94438 14.1251C6.26937 14.182 6.39125 13.987 6.39125 13.8165C6.39125 13.6621 6.38313 13.1504 6.38313 12.6063C4.75 12.9068 4.3275 12.2083 4.1975 11.8428C4.12437 11.6559 3.8075 11.0793 3.53125 10.9249C3.30375 10.8031 2.97875 10.5026 3.52312 10.4945C4.035 10.4863 4.40062 10.9656 4.5225 11.1605C5.1075 12.1433 6.04188 11.8671 6.41563 11.6966C6.4725 11.2742 6.64313 10.9899 6.83 10.8275C5.38375 10.665 3.8725 10.1046 3.8725 7.61919C3.8725 6.91255 4.12438 6.32775 4.53875 5.87291C4.47375 5.71046 4.24625 5.04444 4.60375 4.15099C4.60375 4.15099 5.14812 3.98042 6.39125 4.81701C6.91125 4.67081 7.46375 4.59771 8.01625 4.59771C8.56875 4.59771 9.12125 4.67081 9.64125 4.81701C10.8844 3.9723 11.4288 4.15099 11.4288 4.15099C11.7863 5.04444 11.5588 5.71046 11.4938 5.87291C11.9081 6.32775 12.16 6.90443 12.16 7.61919C12.16 10.1127 10.6406 10.665 9.19438 10.8275C9.43 11.0305 9.63313 11.4204 9.63313 12.0296C9.63313 12.8987 9.625 13.5972 9.625 13.8165C9.625 13.987 9.74687 14.1901 10.0719 14.1251C11.3622 13.6896 12.4835 12.8606 13.2779 11.7547C14.0722 10.6488 14.4997 9.32178 14.5 7.96032C14.5 4.37029 11.5913 1.46252 8 1.46252Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    GitHub
                  </a>
                </li>
                <li class="geist-footer_item__Hte4A">
                  <a
                    href="https://linkedin.com/company/vercel"
                    rel="noopener"
                    target="_blank"
                    data-zone="null"
                    class="link_link__hbWKh link_secondary__F1rqx footer_socialIcon__jQjkd"
                  >
                    <svg
                      data-testid="geist-icon"
                      height="16"
                      stroke-linejoin="round"
                      
                      viewBox="0 0 16 16"
                      width="16"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.5 2C2.67157 2 2 2.67157 2 3.5V12.5C2 13.3284 2.67157 14 3.5 14H12.5C13.3284 14 14 13.3284 14 12.5V3.5C14 2.67157 13.3284 2 12.5 2H3.5ZM4.74556 5.5C5.21057 5.5 5.5 5.16665 5.5 4.75006C5.49133 4.3241 5.21057 4 4.75438 4C4.29824 4 4 4.3241 4 4.75006C4 5.16665 4.28937 5.5 4.73687 5.5H4.74556ZM5.5 6.5V12H4V6.5H5.5ZM7 12H8.5V8.89479C8.5 8.89479 8.60415 7.78962 9.55208 7.78962C10.5 7.78962 10.5 9.02275 10.5 9.02275V12H12V8.8133C12 7.13837 11.25 6.5025 10.125 6.5025C9 6.5025 8.5 7.27778 8.5 7.27778V6.5025H7.00005C7.02383 7.01418 7 12 7 12Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    LinkedIn
                  </a>
                </li>
                <li class="geist-footer_item__Hte4A">
                  <a
                    href="https://x.com/vercel"
                    rel="noopener"
                    target="_blank"
                    data-zone="null"
                    class="link_link__hbWKh link_secondary__F1rqx footer_socialIcon__jQjkd"
                  >
                    <svg
                      data-testid="geist-icon"
                      height="16"
                      stroke-linejoin="round"
                     
                      viewBox="0 0 16 16"
                      width="16"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1.60022 2H5.80022L8.78759 6.16842L12.4002 2H14.0002L9.5118 7.17895L14.4002 14H10.2002L7.21285 9.83158L3.60022 14H2.00022L6.48864 8.82105L1.60022 2ZM10.8166 12.8L3.93657 3.2H5.18387L12.0639 12.8H10.8166Z"
                        fill="currentColor"
                      ></path>
                    </svg>{" "}
                    Twitter
                  </a>
                </li>
                <li class="geist-footer_item__Hte4A">
                  <a
                    href="https://youtube.com/@VercelHQ"
                    rel="noopener"
                    target="_blank"
                    data-zone="null"
                    class="link_link__hbWKh link_secondary__F1rqx footer_socialIcon__jQjkd"
                  >
                    <svg
                      data-testid="geist-icon"
                      height="16"
                      stroke-linejoin="round"
                      
                      viewBox="0 0 16 16"
                      width="16"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13.4695 3.39273C14.0722 3.55407 14.5459 4.02773 14.7073 4.63046C14.9988 5.72183 15 8.00023 15 8.00023C15 8.00023 15 10.2786 14.7073 11.37C14.5459 11.9728 14.0722 12.4464 13.4695 12.6077C12.3782 12.9005 7.99998 12.9005 7.99998 12.9005C7.99998 12.9005 3.62183 12.9005 2.53045 12.6077C1.92773 12.4464 1.45407 11.9728 1.29272 11.37C1 10.2786 1 8.00023 1 8.00023C1 8.00023 1 5.72183 1.29272 4.63046C1.45407 4.02773 1.92773 3.55407 2.53045 3.39273C3.62183 3.10001 7.99998 3.10001 7.99998 3.10001C7.99998 3.10001 12.3782 3.10001 13.4695 3.39273ZM10.2362 8.00046L6.59906 10.1002V5.90068L10.2362 8.00046Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    YouTube
                  </a>
                </li>
              </ul>
            </Box>

            {/* logo */}

            <svg data-testid="geist-icon" height="16" stroke-linejoin="round" style={{width:'16px',height:'32px',color:'#ededed'}} viewBox="0 0 16 16" width="16" aria-label="Vercel logo"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 1L16 15H0L8 1Z" fill="currentColor"></path></svg>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "6px",
              alignItems: "center",
              ":hover": { bgcolor: "red" },
              padding: "8px",
              borderRadius: "6px",
            }}
          >
            <Box
              sx={{
                width: "8px",
                height: "8px",
                bgcolor: "#0070f3",
                borderRadius: "100%",
              }}
            ></Box>
            <Typography>All systems normal</Typography>
          </Box>
          <Box>
            <Typography>switch</Typography>
          </Box>
        </Box>
      </Container>
    );

}

export default Footer;