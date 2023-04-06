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
    console.log(videos)
  return(
      <>
        <Banner imagem="player" />

        <Titulo>
            <h1>Player</h1>
        </Titulo>
        <section>
          <iframe 
          width="560" 
          height="315" 
          src={video.link} 
          title={video.titulo} 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen></iframe>

        </section>
      </>
  )
}

export default Player;