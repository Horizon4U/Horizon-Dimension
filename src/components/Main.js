import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/picCloud.jpg'
import pic02 from '../images/picDawn.jpg'
import pic03 from '../images/picNight.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>&emsp;&emsp;
            'She said that she would dance with me if I brought her red roses,' cried the young Student; 'but in all my garden there is no red rose.'
          </p>
          <p>
            From her nest in the holm-oak tree the Nightingale heard him, and she looked out through the leaves, and wondered.
          </p>
          <p>
            'No red rose in all my garden!' he cried, and his beautiful eyes filled with tears. 'Ah, on what little things does happiness depend! I have read all that the wise men have written, and all the secrets of philosophy are mine, yet for want of a red rose is my life made wretched.'
          </p>
          <p>
            'Here at last is a true lover,' said the Nightingale. 'Night after night have I sung of him, though I knew him not: night after night have I told his story to the stars, and now I see him. His hair is dark as the hyacinth-blossom, and his lips are red as the rose of his desire; but passion has made his lace like pale Ivory, and sorrow has set her seal upon his brow.'
          </p>
          <p>
            'The Prince gives a ball to-morrow night,' murmured the young Student, 'and my love will be of the company. If I bring her a red rose she will dance with me till dawn. If I bring her a red rose, I shall hold her in my arms, and she will lean her head upon my shoulder, and her hand will be clasped in mine. But there is no red rose in my garden, so I shall sit lonely, and she will pass me by. She will have no heed of me, and my heart will break.'
          </p>
          <p>
            'Here indeed is the true lover,' said the Nightingale. 'What I sing of he suffers: what is joy to me, to him is pain. Surely Love is a wonderful thing. It is more precious than emeralds, and dearer than fine opals. Pearls and pomegranates cannot buy it, nor is it set forth in the market-place. it may not be purchased of the merchants, 'or can it be weighed out in the balance for gold.'
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            'The musicians will sit in their gallery,' said the young Student, 'and play upon their stringed instruments, and my love will dance to the sound of the harp and the violin. She will dance so lightly that her feet will not touch the floor, and the courtiers in their gay dresses will throng round her. But with me she will not dance, for I have no red rose to give her;' and he flung himself down on the grass, and buried his face in his hands, and wept.
            <br></br><br></br>
            'Why is he weeping?' asked a little Green Lizard, as he ran past him with his tail in the air.
            <br></br><br></br>
            'Why, indeed?' said a Butterfly, who was fluttering about after a sunbeam.
            <br></br><br></br>
            'Why, indeed?' whispered a Daisy to his neighbour, in a soft, low voice.
            <br></br><br></br>
            'He is weeping for a red rose,' said the Nightingale.
            <br></br><br></br>
            'For a red rose!' they cried; 'how very ridiculous!' and the little Lizard, who was something of a cynic, laughed outright.
            <br></br><br></br>
            But the Nightingale understood the secret of the Student's sorrow, and she sat silent in the oak-tree, and thought about the mystery of Love.
            <br></br><br></br>
            Suddenly she spread her brown wings for flight, and soared into the air. She passed through the grove like a shadow, and like a shadow she sailed across the garden.
            <br></br><br></br>
            In the centre of the grass-plot was standing a beautiful Rose-tree, and when she saw it, she flew over to it, and lit upon a spray.
            <br></br><br></br>
            'Give me a red rose,' she cried, 'and I will sing you my sweetest song.'
            <br></br><br></br>
            But the Tree shook its head.
          </p>
          <p>
            'My roses are white,' it answered; 'as white as the foam of the sea, and whiter than the snow upon the mountain. But go to my brother who grows round the old sun-dial, and perhaps he will give you what you want.'
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            So the Nightingale flew over to the Rose-tree that was growing round the old sun-dial.
          </p>
          <p>
            'Give me a red rose,' she cried, 'and I will sing you my sweetest song.'
          </p>
          <p>
            But the Tree shook its head.
          </p>
          <p>
            'My roses are yellow,' it answered; 'as yellow as the hair of the mermaiden who sits upon an amber throne, and yellower than the daffodil that blooms in the meadow before the mower comes with his scythe. But go to my brother who grows beneath the Student's window, and perhaps he will give you what you want.'
          </p>
          <p>
            So the Nightingale flew over to the Rose-tree that was growing beneath the Student's window.
          </p>
          <p>
            'Give me a red rose,' she cried, 'and I will sing you my sweetest song.'
          </p>
          <p>
            But the Tree shook its head.
          </p>
          <p>
            'My roses are red,' it answered, 'as red as the feet of the dove, and redder than the great fans of coral that wave and wave in the ocean-cavern. But the winter has chilled my veins, and the frost has nipped my buds, and the storm has broken my branches, and I shall have no roses at all this year.'
          </p>
          <p>
            'One red rose is all I want,' cried the Nightingale, 'only one red rose! Is there no way by which I can get it?'
          </p>
          <p>
            'There is a way,' answered the Tree; 'but it is so terrible that I dare not tell it to you.'
          </p>
          <p>
            'Tell it to me,' said the Nightingale, 'I am not afraid.'
          </p>
          <p>
            'If you want a red rose,' said the Tree, 'you must build it out of music by moonlight, and stain it with your own heart's-blood. You must sing to me with your breast against a thorn. All night long you must sing to me, and the thorn must pierce your heart, and your life-blood must flow into my veins, and become mine.'
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <ul className="icons">
            <li>
              <a
                href="https://github.com/Horizon4U"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
