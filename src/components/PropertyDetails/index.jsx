import React from "react"
import { FaShower, FaCar, FaBed } from "react-icons/fa"
import { TbDimensions } from "react-icons/tb"
import PropertyDetailItem from "../PropertyDetailItem"

import { Container } from "./styles"

const PropertyDetails = ({ dimensions, bathrooms, parkingSpace, rooms }) => (
  <Container>
    <PropertyDetailItem Icon={TbDimensions} value={dimensions} />
    <PropertyDetailItem Icon={FaShower} value={bathrooms} />
    <PropertyDetailItem Icon={FaCar} value={parkingSpace} />
    <PropertyDetailItem Icon={FaBed} value={rooms} />
  </Container>
)

export default PropertyDetails
