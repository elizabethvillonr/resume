import { ADD_NFT } from './actionsList';

let currentNftID = 0; 

export const addNFT = (nftString) => ({
    type: ADD_NFT, 
    data: {
        id: ++currentNftID,
        nftString
    }
});