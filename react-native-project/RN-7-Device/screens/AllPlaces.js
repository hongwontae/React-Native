import { useEffect, useState } from "react";
import PlacesList from "../components/places/PlacesList";
import { useIsFocused } from "@react-navigation/native";

function AllPlaces({route}){

    const isFocused = useIsFocused();

    const [selectedPlaces, setSelectedPlaces] = useState([]);


    useEffect(()=>{
        if(isFocused && route.params){
            setSelectedPlaces((prev)=>{
                return [...prev, route.params.place]
            })
        }
    }, [setSelectedPlaces, isFocused])

    return(
        <>
            <PlacesList places={selectedPlaces}></PlacesList>
        </>
    )
}

export default AllPlaces;