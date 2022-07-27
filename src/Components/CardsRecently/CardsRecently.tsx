import React from "react"
// import { Card } from "@mui/material"
import Images from "../../Assets/Index"
import MediaControlCard from "../CardResently/CardResently"
import { CustomCard } from "./CardsRecently.style"

const CardsRecently:React.FC=()=>{
    console.log(typeof Images)
    return (
        <CustomCard  sx={{ display: 'flex' }}>
            <MediaControlCard link={Images.mask} />
            <MediaControlCard link={Images.mask1}/>
            <MediaControlCard link={Images.mask2}/>
            <MediaControlCard link={Images.mask3}/>
        </CustomCard>
    )
}
export default CardsRecently