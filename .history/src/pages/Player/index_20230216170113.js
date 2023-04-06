import Banner from 'components/Banner';
import Titulo from 'components/Titulo';
import { useParams } from 'react-router-dom';
import videos from 'json/db.json';
import styles from './Player.module.css'

function Player(){
    const parametros = useParams();
    const video = videos.find((video) => {
        return video.id === Number(parametros.id);
    })
    console.log(video)
  return(
      <>
        <Banner imagem="player" />

        <Titulo>
            <h1>Player</h1>
        </Titulo>
      </>
  )
}

export default Player;