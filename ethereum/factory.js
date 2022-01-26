import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json'

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xB98D425b3d4400EC4eB11c0C2C2FEaC26AEb0057'
);

export default instance;