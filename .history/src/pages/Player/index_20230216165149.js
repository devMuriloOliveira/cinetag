import Banner from 'components/Banner';
import Titulo from 'components/Titulo';
import styles from './Player.module.css'

function Player(){
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