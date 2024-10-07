import PlaceForm from "../components/places/PlaceForm";
import { insertPlace } from "../util/database";

function AddPlaces({navigation}) {

  async function createPlaceHandler(place){
    console.log(place)
    await insertPlace(place);
    navigation.navigate('All-Places', {
      place : place
    })
  }

  return (
    <>
      <PlaceForm createPlaceHandler={createPlaceHandler}></PlaceForm>
    </>
  );
}

export default AddPlaces;
