import { Container, HomeBanner } from "./styles"

import OfferCarousel from "../../components/OfferCarousel"

import BannerImage from "../../assets/banner.png"

function Home() {
  return (
    <Container>
      <HomeBanner>
        <img src={BannerImage} alt="banner" />
      </HomeBanner>
      <h1>Imóveis em Destaque</h1>
      <OfferCarousel />
    </Container>
  )
}

export default Home
