import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Image from "../components/image"
import { Container } from "../components/layoutComponents"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Container>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <IntroTextContainer>
        <p>Hi I'm Dan Pliego, I live in Mexico City and <span>I do design, and front-end development since 2005.</span></p>
        <p>You can picture myself as the link between your design and development team, pair me with an illustrator and a back-end developer and we can build almost anything, or hire me as a solo guy and I can help you research, plan, design, code and advertise your digital product and hopefully learn a lot from you and your team in the process.</p>
        <p>Apart from work I love music, my cats, the sea, to play drums and for the past 3 months I traveled across europe to find inspiration and now i'm looking for new opportunities.</p>
      </IntroTextContainer>
      {/* <Link to="/page-2/">Go to page 2</Link> */}
    </Container>
  </Layout>
)

export default IndexPage

const IntroTextContainer = styled.div`
  padding: 2rem;
`
