import './styles.css'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {useState,useCallback} from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';

function Aside(){
    var [position, setPosition] = useState(0)
    var dados = [{
        name: "Millie Bobby Brown",
        image: "http://br.web.img2.acsta.net/pictures/19/07/05/23/57/3783349.jpg",
        bio:"Millie Bobby Brown é uma atriz e cantora britânica nascida na Espanha. A atriz ganhou reconhecimento mundial e aclamação da crítica por seu papel como Onze na série de televisão Stranger Things da Netflix."
    },{
        name:"Finn Wolfhard",
        image:"http://br.web.img2.acsta.net/pictures/19/07/08/15/32/3294145.jpg",
        bio: "Finn Wolfhard é um ator, músico, roteirista e diretor canadense. Entre seus papéis incluí-se Mike Wheeler na série Stranger Things, da Netflix, pelo qual recebeu três indicações ao Prêmio Screen Actors Guild para melhor elenco em série de drama"
    },{
        name:"Noah Schnapp",
        image: "http://t1.gstatic.com/images?q=tbn:ANd9GcSgIG2g8rviHFk_DHZIE427J9185AhxCK9UrljGyWE-PCU5PjTza1myU-JNC6KZ",
        bio: "Noah Cameron Schnapp é um ator norte-americano, mais conhecido por interpretar Will Byers na série de televisão Stranger Things da Netflix e dar voz a Charlie Brown no filme The Peanuts Movie."
    }]
    var handleImages = useCallback(()=>{
        return(
            <>
                <img id="0" src={dados[0].image} style={{opacity:"100%"}} onClick={()=>{
                    setPosition(0)
                    handleBio(position)
                    document.getElementById("0").style.opacity = "100%"
                    document.getElementById("1").style.opacity = "55%"
                    document.getElementById("2").style.opacity = "55%"
                }}></img>
                <img id="1" src={dados[1].image}onClick={()=>{
                    setPosition(1)
                    handleBio(position)
                    document.getElementById("1").style.opacity = "100%"
                    document.getElementById("0").style.opacity = "55%"
                    document.getElementById("2").style.opacity = "55%"
                }}></img>
                <img id="2" src={dados[2].image} onClick={()=>{
                    setPosition(2)
                    handleBio(position)
                    document.getElementById("2").style.opacity = "100%"
                    document.getElementById("1").style.opacity = "55%"
                    document.getElementById("0").style.opacity = "55%"
                }}></img>
            </>
        )
    },[])
    var handleBio = useCallback((props)=>{
            return(
                <p>{dados[props].bio}</p>
            )
    },[dados])
    var handleTrocaImage = useCallback((props)=>{
        switch(props){     
            case 0:
                document.getElementById("0").style.opacity = "100%"
                document.getElementById("1").style.opacity = "55%"
                document.getElementById("2").style.opacity = "55%"
                break;
            case 1:
                document.getElementById("1").style.opacity = "100%"
                document.getElementById("0").style.opacity = "55%"
                document.getElementById("2").style.opacity = "55%"
                break;
            case 2:
                document.getElementById("2").style.opacity = "100%"
                document.getElementById("1").style.opacity = "55%"
                document.getElementById("0").style.opacity = "55%"
            default:
                console.log("naofoi ")
        }
    },[position])
    return(
        <>
        <aside>
        <h1>Actors</h1>
       {handleImages()}
        <br></br>
        <  ArrowBackIcon onClick={()=>{
            {position!=0 ? setPosition(position-1) : setPosition(position)}
            handleTrocaImage(position)
        }} className='icon-arrow'/>
        <  ArrowForwardIcon id='arrow-right' onClick={()=>{
            {position!=2 ? setPosition(position+1) : setPosition(position)}
            handleTrocaImage(position)
        }} className='icon-arrow'/>

        <h2></h2>
        <p id='bio-actors'>{handleBio(position)}</p>
       
        </aside>
        <footer id="footer-aside">
        <a href="https://www.facebook.com/strangerthingsbr/">< FacebookIcon className='media-icons' /></a>
        <a href="https://www.instagram.com/strangerthingstv/">< InstagramIcon className='media-icons' /></a>
        <a href="https://github.com/Gust4voSiqueira">< GitHubIcon className='media-icons' /></a>
        </footer>
        </>
    )
}

export default Aside