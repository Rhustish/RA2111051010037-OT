import axios from "axios"

const mapperObject = {
    "p":process.env.APIPRIME,
    "f":process.env.APIFIBO,
    "e":process.env.APIEVEN,
    "r":process.env.APIRAND
}

function calculateavg(numbers) {
    if (numbers.length === 0) {
      return 0;
    }
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = sum / numbers.length;
    return average;
  }

export default async function numbersController(req,res){
    const {id} = req.params

    const windowSize= process.env.WS

    const windowPrevState=[]
    const numbersarr = axios.get(mapperObject[id],{
        headers:{
            Authorization : process.env.BT
        }
    }).numbers;
    const window = numbersarr.slice(windowSize * -1);

    const responseObj={
        "numbers":numbersarr,
        windowPrevState,
        "windowCurrState" : window,
        "avg":calculateavg(window)
    }

    windowPrevState = window;

    res.status(200).json(responseObj)
}