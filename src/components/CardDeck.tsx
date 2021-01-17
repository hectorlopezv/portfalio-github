import React from 'react'
import Card from './Card';
import Nexter from '../assets/pictures/Nexter.png';
import Netflix from '../assets/pictures/netflix.png';
import netflixV1 from '../assets/pictures/netflixv1.png';
import Outdoor from '../assets/pictures/Outdoor.png';
import Agencia from '../assets/pictures/Agencia.png';
import Tribe from '../assets/pictures/Tribe.png';
import Cripto from '../assets/pictures/Cripto.png';
import Torre from '../assets/pictures/Torre.png';
import Carousel from 'react-multi-carousel';
import Covid from '../assets/pictures/covid.png';
import Burger from '../assets/pictures/burger.png';
import Discord from '../assets/pictures/discord.png';
import 'react-multi-carousel/lib/styles.css';
import Amazon from '../assets/pictures/amazon.png';
import Facebook from '../assets/pictures/Facebook.png';
import Spotify from '../assets/pictures/Spotify.png';
import Google from '../assets/pictures/Google.png';
export interface CardDeckProps {
    
}
 
const CardDeck: React.FunctionComponent<CardDeckProps> = () => {
    return ( 
     

        <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024
            },
            items: 1,
            partialVisibilityGutter: 30
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0
            },
            items: 1,
            partialVisibilityGutter: 30
          },
          tablet: {
            breakpoint: {
              max: 1023,
              min: 464
            },
            items: 1,
            partialVisibilityGutter: 30
          },
        }}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
          >

    <div className="container container-card">
            <div className="card-deck card-deck__1">
                    <Card
                        src={Netflix}
                        title={"Netflix UI clone V2."}
                        info={"Netflix UI clone using the following React,Ts, Context-API, Redux, firebase, StyleComponents, Auth, Login, Logout"}
                        git={"https://github.com/hectorlopezv/netflixv2-clone-ts"}
                        demo={"https://netflix-clone-ts.web.app/"}
                    />
                    <Card
                        src={netflixV1}
                        title={"Netflix Clone V1"}
                        info={"Netflix UI cloneV1 using the following React,Ts, React-youtube, movie-trailer, axios IMDb API"}
                        git={"https://github.com/robpalacios1/netflix-ts"}
                        demo={"https://netflix-clone-seven-kappa.vercel.app/"}
                    />
                    <Card
                        src={Covid}
                        title={"Covid Tracker"}
                        info={"Covid Tracker using disease.sh React, API, chartJs2, leaflet for visualizaction"}
                        git={"https://github.com/hectorlopezv/Covid-Tracker-Ts"}
                        demo={"https://covid-tracker-ts-redux.web.app/"}
                    />
                    
                </div>
    
            <div className="card-deck card-deck__2">
                    <Card
                        src={Discord}
                        title={"Discord UI Clone"}
                        info={"Simple UI discord chat UI clone using the following React, firebase, ts, pusher, mongodb, redux, auth with firebase"}
                        git={"https://github.com/hectorlopezv/Discord-UIClone-Redux-Ts"}
                        demo={"https://discordclone-34505.web.app/"}
                    />
                    <Card
                        src={Burger}
                        title={"Burger Project"}
                        info={"Burger Builder Project using the folowing auth with firebase-redux-contextAPI-saga, React"}
                        git={"https://github.com/hectorlopezv/burgerproject"}
                        demo={"https://burgerbuilder-80b74.web.app/"}
                    />
                    <Card
                        src={Amazon}
                        title={"Amazon UI clone"}
                        info={"Amazon UI clone with Payment using stripe.js, redux/sagas, ts, React......(In Progress)"}
                        git={"https://github.com/hectorlopezv/Amazon-ts-clone-lite"}
                        demo={"https://clone-ts.web.app/"}
                    />
    
                </div>
                
    </div>

        <div className="container container-card">
            <div className="card-deck card-deck__1">
                <Card
                    src={Nexter}
                    title={"Nexter Inc."}
                    info={"Realtors Website Using Grid Layout Only with Sass and pure js"}
                    git={"https://github.com/hectorlopezv/css-Grid-project"}
                    demo={"https://css-grid-project.vercel.app/"}
                />
                <Card
                    src={Torre}
                    title={"Torre Demo Day."}
                    info={"Using torre API Endpoints to fetch data about jobs or persons,React.js"}
                    git={"https://github.com/hectorlopezv/torreDemo"}
                    demo={"https://torre-demo.vercel.app/"}
                />
                <Card
                    src={Outdoor}
                    title={"OutDoor Inc."}
                    info={"Website focused on outdoor tourism using cool css animations and purejs"}
                    git={"https://github.com/hectorlopezv/Advanced-CSS-Sass-Flexbox-Grid-Animations-More-"}
                    demo={"https://advanced-css-sass-flexbox-grid-animations-more.vercel.app/"}
                />
                
            </div>

            <div className="card-deck card-deck__2">
                <Card
                    src={Agencia}
                    title={"Agency Inc."}
                    info={"Travel agency Website monolith using Node.js, Express.js, Pug, Javascript"}
                    git={"https://github.com/hectorlopezv/javascript-from-zero-to-hero/tree/master/intro-nodejs"}
                    demo={"https://quiet-temple-27244.herokuapp.com/"}
                />
                <Card
                    src={Tribe}
                    title={"Tribe Labs Inc."}
                    info={"npm Package developed with typeScript using Bodypix as a Backone for the tribeTeam."}
                    git={"https://github.com/hectorlopezv/tribe_lib_package"}
                    demo={"https://tribedemo.vercel.app/"}
                />
                <Card
                    src={Cripto}
                    title={"Cripto Inc."}
                    info={"Website that shows the users the latest prices on the most popular virtual currencies, Using the CryptoCompare API and pure js"}
                    git={"https://github.com/hectorlopezv/javascript-from-zero-to-hero/tree/master/PROYECTO-COTIZADOR-CRIPTOMONEDA-FETCH"}
                    demo={"https://criptomondeas.vercel.app/"}
                />

            </div>

        </div>
        
        <div className="container container-card">

        <div className="card-deck card-deck__1">
            <Card
                    src={Facebook}
                    title={"Facebook UI clone."}
                    info={"facebook UI clone using firebase and mongodb with pusher for real time"}
                    git={"https://github.com/hectorlopezv/facebook-ui-clone-ts"}
                    demo={"https://facebook-ui-clone.web.app"}
                />
                    <Card
                    src={Spotify}
                    title={"Spotify UI Clone - Controller."}
                    info={"Spotify UI Clone using Spotify Web api to control the main App"}
                    git={"https://github.com/hectorlopezv/spotifiy-ui-clone"}
                    demo={"https://spotifi-ui-clone.web.app/"}
                />

                <Card
                    src={Google}
                    title={"Google Search Engine UI clone"}
                    info={"Google Search Engine UI clone using programable search Engine"}
                    git={"https://github.com/hectorlopezv/google-UI-Clone-search"}
                    demo={"https://ui-clone-142e1.web.app/"}
                />
        </div>
        <div className="card-deck card-deck__2">

        </div>

        </div>
    
         </Carousel>
        
     );
}
 
export default CardDeck;