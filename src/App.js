import React,{useState} from "react"
import Icon from "./Icon"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button,Container,Card,CardBody,Row,Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"

const tictacarray=new Array(9).fill("")

const App=()=>{

let [isCross,setIsCross]=useState(true)
let [winMessage,setWinMessage]=useState("")
const playAgain=()=>{
    setIsCross(true)
    setWinMessage("")
    tictacarray.fill("")
    console.log("hello")
}

const findWinner=()=>{
    if(tictacarray[0]==tictacarray[1]&&tictacarray[0]==tictacarray[2]&&tictacarray[0]!=""){
        setWinMessage(tictacarray[0]+"won")
    }else if(tictacarray[3]==tictacarray[4]&&tictacarray[3]==tictacarray[5]&&tictacarray[3]!=""){
        setWinMessage(tictacarray[0]+"won")
    }else if(tictacarray[6]==tictacarray[7]&&tictacarray[7]==tictacarray[8]&&tictacarray[7]!=""){
        setWinMessage(tictacarray[0]+"won")
    }else if(tictacarray[0]==tictacarray[3]&&tictacarray[3]==tictacarray[6]&&tictacarray[6]!=""){
        setWinMessage(tictacarray[0]+"won")
    }else if(tictacarray[1]==tictacarray[4]&&tictacarray[7]==tictacarray[4]&&tictacarray[7]!=""){
        setWinMessage(tictacarray[0]+"won")
    }else if(tictacarray[2]==tictacarray[5]&&tictacarray[5]==tictacarray[8]&&tictacarray[8]!=""){
        setWinMessage(tictacarray[0]+"won")
    }else if(tictacarray[0]==tictacarray[4]&&tictacarray[4]==tictacarray[8]&&tictacarray[8]!=""){
        setWinMessage(tictacarray[0]+"won")
    }else if(tictacarray[2]==tictacarray[4]&&tictacarray[4]==tictacarray[6]&&tictacarray[6]!=""){
        setWinMessage(tictacarray[0]+"won")
    }
}

const changeItem=(index)=>{
    if(winMessage){
        return toast("game over dude",{type:"success"})
    }
    if(tictacarray[index]==""){
        tictacarray[index]=isCross?"cross":"circle"
        setIsCross(!isCross)
    }else{
        return toast("game over dude",{type:"error"})
        
    }findWinner()
}

    return(
                               
            <Container className="p-5">
                <ToastContainer position="button-center" ></ToastContainer>
                <Row>
                    <Col md={6} className="offset-md-3">
                    {
                    winMessage?(
                        <div>
                        <h1 className="text-center">{winMessage}</h1>
                        <button onClick={playAgain}>
                        Play Again
                        </button>
                        </div>
                    ):(
                        <div>
                            <h1>
                                {isCross?"cross's turn":"circle turn"}
                            </h1>
                        </div>
                    )

                    }
                        <div className="grid">
                            {tictacarray.map((value,index)=>(
                                <Card onClick={()=>changeItem(index)}>
                                    <CardBody className="box">
                                        <Icon choice={tictacarray[index]}/>
                                    </CardBody>
                                </Card>
                            ))}
                            </div>            
                    </Col>
                </Row>
                </Container>
        
    )
}
export default App