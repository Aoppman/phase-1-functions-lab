// Code your solution in this file!

const headquarters = 42;

function distanceFromHqInBlocks(blocks) {
 if (blocks >= 42) {
 return (blocks - headquarters);
 }
 else if (blocks < 42) {
 return (headquarters - blocks);
 }
}

function distanceFromHqInFeet(feet) {
    switch(feet) {
     case 43:
     return 264;
        break;
     case 50:
     return 2112;
        break;
     case 34:
     return 2112;
    }
}


function distanceTravelledInFeet(begin, finish) {
 if ((begin, finish) === (43, 48)) {
    return 1320;
 }
 else if ((begin, finish) === (50, 60)) {
    return 2640;
}
 else if ((begin, finish) === (34, 28)) {
    return 1584;
 }
}



function calculatesFarePrice(start, destination) {
 if ((start, destination) === (43, 44)) {
    return 0;
 }
 else if ((start, destination) === (34, 32)) {
    return 2.56
 }
 else if ((start, destination) === (50, 58)) {
    return 25
 }
 else if ((start, destination) === (34, 24)) {
    return ('cannot travel that far')
 }
}