const HOST = "adresse du raspberry pi";
const PORT = 2001;
const USER = "user" + Math.floor(Math.random() * 1000);

const MQTT = new Paho.MQTT.Client(HOST, PORT, USER);

MQTT.connect({
    timeout: 3,
    onSuccess: onSuccess,
    onFailure: onFailure,
    onMessageArrived: onMessageArrived
});





function onSuccess(e)
{
    console.log("connexion établie");
    console.dir(e);
}

function onFailure(e)
{
    console.log("connexion échouée");
    console.dir(e);
}

function onMessageArrived(e)
{
    console.log("un message est arrivé");
    console.dir(e);
}




