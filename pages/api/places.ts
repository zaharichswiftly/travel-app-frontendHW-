import { IPlace } from "./../../app/types/place"
import japanImg from "../../assets/images/japan.jpg"
import { NextApiRequest, NextApiResponse } from "next"


const places: IPlace[] = [
    {
        slug: 'tokyo',
        description: 'lorem ipsum',
        imagePath: japanImg.src,
        location: 'Japan',
        rating: 5,
        duration: '10 days',
        distance: 10453,
        googleMapLink: 'wefedf',
        mapImage: 'wgfw',
    },
]

export default function hadler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(places)
}